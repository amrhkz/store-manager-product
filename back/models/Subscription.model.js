import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "active", "expired"],
      default: "pending"
    },
    startDate: Date,
    endDate: Date
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", subscriptionSchema);
