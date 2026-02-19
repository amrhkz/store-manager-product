"use client";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import "./pricing.css";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    apiFetch("/plans")
      .then(res => res.json())
      .then(setPlans);
  }, []);

  const buyPlan = async (planId) => {
    setLoading(true);
    
    try {
      const res = await apiFetch("/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });

      const data = await res.json();

      if (!res.ok) {
        // ❌ ناموفق → صفحه ناموفق
        router.push(`/payment-failed?reason=${encodeURIComponent(data.message || "خطای نامشخص")}`);
        return;
      }

      // ✅ موفق → صفحه موفق (نیازی به checkout نیست چون قبلاً خریده!)
      router.push(`/payment-success?plan=${planId}`);
      
    } catch (error) {
      router.push(`/payment-failed?reason=${encodeURIComponent("خطا در ارتباط با سرور")}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pricing">
      <h1>انتخاب پلن</h1>
      <div className="plans">
        {plans.map(plan => (
          <div key={plan._id} className="plan-card">
            <h2>{plan.title}</h2>
            <p className="price">{plan.price?.toLocaleString()} تومان</p>
            <p className="duration">{plan.duration} روزه</p>
            <button onClick={() => buyPlan(plan._id)} disabled={loading}>
              {loading ? "در حال پردازش..." : "خرید اشتراک"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}