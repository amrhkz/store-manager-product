import mongoose from "mongoose";
import dotenv from "dotenv";
import Plan from "../models/Plan.model.js";

dotenv.config();

const plans = [
  {
    title: "ماهانه",
    price: 199000,
    duration: 30
  },
  {
    title: "سه ماهه",
    price: 499000,
    duration: 90
  },
  {
    title: "سالانه",
    price: 1499000,
    duration: 365
  }
];

const seedPlans = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Plan.deleteMany();
  await Plan.insertMany(plans);

  console.log("Plans seeded ✅");
  process.exit();
};

seedPlans();
