import Subscription from "../models/Subscription.model.js";
import Plan from "../models/Plan.model.js";
import User from "../models/User.model.js";

export const createSubscription = async (req, res) => {
  const { planId } = req.body;

  const plan = await Plan.findById(planId);
  if (!plan) {
    return res.status(404).json({ message: "پلن پیدا نشد" });
  }

  const subscription = await Subscription.create({
    user: req.user._id,
    plan: plan._id,
    status: "pending"
  });

  await User.findByIdAndUpdate(req.user._id, {
    subscription: subscription._id
  });

  res.json({
    subscriptionId: subscription._id
  });
};

export const getSubscription = async (req, res) => {
  const subscription = await Subscription.findById(req.params.id)
    .populate("plan");

  if (!subscription) {
    return res.status(404).json({ message: "اشتراک پیدا نشد" });
  }

  res.json(subscription);
};
// controllers/subscription.controller.js
export const getSubscriptionById = async (req, res) => {
  const subscription = await Subscription.findById(req.params.id)
    .populate("plan");

  if (!subscription) {
    return res.status(404).json({ message: "Subscription not found" });
  }

  res.json(subscription);
};
