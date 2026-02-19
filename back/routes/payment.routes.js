import express from "express";
import Plan from "../models/Plan.model.js";
import Payment from "../models/payment.model.js";
import Subscription from "../models/Subscription.model.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();
const PAYMENT_MODE = (process.env.PAYMENT_MODE || "mock").toLowerCase();


// فقط اگر REAL بود
let zarinpal = null;
if (PAYMENT_MODE === "real") {
  const { default: ZarinpalCheckout } = await import("zarinpal-checkout");

  zarinpal = ZarinpalCheckout.create(
    process.env.ZARINPAL_MERCHANT_ID,
    process.env.ZARINPAL_SANDBOX === "true"
  );
}

// ================= PAY =================
router.post("/pay", authMiddleware, async (req, res) => {
  const { planId } = req.body;

  if (!planId) {
    return res.status(400).json({ message: "Plan ID is required" });
  }

  const plan = await Plan.findById(planId);
  if (!plan) {
    return res.status(404).json({ message: "Plan not found" });
  }

  // 🔹 MOCK MODE
  if (PAYMENT_MODE === "mock") {
    await Payment.create({
      user: req.user.id,
      plan: plan._id,
      amount: plan.price,
      status: "success",
    });

    await Subscription.create({
      user: req.user.id,
      plan: plan._id,
      expiresAt: new Date(Date.now() + plan.duration * 86400000),
    });

    return res.json({ url: "/payment-success" });
  }

  // 🔹 REAL MODE
if (!zarinpal) {
  return res.status(500).json({ message: "Payment gateway not configured" });
}

const payment = await Payment.create({
  user: req.user.id,
  plan: plan._id,
  amount: plan.price,
  status: "pending",
});

const response = await zarinpal.PaymentRequest({
  Amount: plan.price,
  CallbackURL: process.env.ZARINPAL_CALLBACK_URL,
  Description: `Subscription - ${plan.title}`,
  Email: req.user.email,
});

payment.authority = response.authority;
await payment.save();

res.json({
  url: `https://www.zarinpal.com/pg/StartPay/${response.authority}`,
});

});

// ================= CALLBACK =================
router.get("/callback", async (req, res) => {
  if (PAYMENT_MODE === "mock") {
    return res.redirect("/payment-success");
  }

  const { Authority, Status } = req.query;

  const payment = await Payment.findOne({ authority: Authority }).populate(
    "plan"
  );

  if (!payment) return res.redirect("/payment-failed");

  if (Status !== "OK") {
    payment.status = "failed";
    await payment.save();
    return res.redirect("/payment-failed");
  }

  const verify = await zarinpal.PaymentVerification({
    Amount: payment.amount,
    Authority,
  });

  if (verify.status === 100) {
    payment.status = "success";
    await payment.save();

    await Subscription.create({
      user: payment.user,
      plan: payment.plan._id,
      expiresAt: new Date(
        Date.now() + payment.plan.duration * 86400000
      ),
    });

    return res.redirect("/payment-success");
  }

  payment.status = "failed";
  await payment.save();
  res.redirect("/payment-failed");
});

export default router;
