import Subscription from "../models/Subscription.model.js";

export default async function subscriptionGuard(req, res, next) {
  const subscription = await Subscription.findOne({
    user: req.user.id,
    expiresAt: { $gt: new Date() }
  });

  if (!subscription) {
    return res.status(403).json({
      code: "NO_SUBSCRIPTION",
      message: "Subscription required"
    });
  }

  req.subscription = subscription;
  next();
}
