import Subscription from "../models/Subscription.model.js";

const subscriptionMiddleware = async (req, res, next) => {
  const subscription = await Subscription.findOne({
    user: req.user._id,
    status: "active",
    endDate: { $gt: new Date() }
  });

  if (!subscription) {
    return res.status(402).json({
      message: "اشتراک فعال ندارید"
    });
  }

  next();
};

export default subscriptionMiddleware;
