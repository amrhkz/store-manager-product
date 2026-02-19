import express from "express";
import auth from "../middlewares/auth.middleware.js";
import subscriptionGuard from "../middlewares/subscription.middleware.js";

const router = express.Router();

router.get("/stats", auth, subscriptionGuard, async (req, res) => {
  res.json({
    sales: 0,
    customers: 0
  });
});

export default router;
