import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getSubscription,
  getSubscriptionById,
} from "../controllers/subscription.controller.js";
import Subscription from "../models/Subscription.model.js";

const router = express.Router();

router.post("/", authMiddleware, createSubscription);

router.get("/status", authMiddleware, async (req, res) => {
  const subscription = await Subscription.findOne({
    user: req.user.id,
    expiresAt: { $gt: new Date() }
  });

  res.json({
    active: !!subscription,
    expiresAt: subscription?.expiresAt || null
  });
});

router.get("/:id", authMiddleware, getSubscriptionById);


export default router;
