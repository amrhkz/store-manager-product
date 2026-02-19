import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
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
  amount: {
    type: Number,
    required: true
  },
  authority: String,
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
