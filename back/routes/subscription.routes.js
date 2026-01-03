import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getSubscription,
} from "../controllers/subscription.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createSubscription);
router.get("/:id", authMiddleware, getSubscription);

export default router;
