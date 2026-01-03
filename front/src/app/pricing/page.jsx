"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import "./pricing.css";

export default function PricingPage() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    apiFetch("/plans")
      .then(res => res.json())
      .then(setPlans);
  }, []);

  const buyPlan = async (planId) => {
    const res = await apiFetch("/subscriptions", {
      method: "POST",
      body: JSON.stringify({ planId })
    });

    const data = await res.json();

    window.location.href = `/checkout?subscription=${data.subscriptionId}`;
  };

  return (
    <div className="pricing">
      <h1>انتخاب پلن</h1>

      <div className="plans">
        {plans.map(plan => (
          <div key={plan._id} className="plan-card">
            <h2>{plan.title}</h2>
            <p className="price">
              {plan.price.toLocaleString()} تومان
            </p>
            <p className="duration">
              {plan.duration} روزه
            </p>
            <button onClick={() => buyPlan(plan._id)}>
              خرید اشتراک
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
