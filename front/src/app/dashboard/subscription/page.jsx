"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./subscription.module.css";

export default function SubscriptionPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/plans")
      .then(res => res.json())
      .then(data => {
        setPlans(data);
        setLoading(false);
      });
  }, []);

  const buyPlan = async (planId) => {
    const res = await apiFetch("/subscriptions", {
      method: "POST",
      body: JSON.stringify({ planId })
    });

    const data = await res.json();
    router.push(`/checkout?subscription=${data.subscriptionId}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>اشتراک</h1>

      <div className={styles.statusBox}>
        <span>وضعیت فعلی:</span>
        <strong>
          {user?.subscription ? "فعال" : "غیرفعال"}
        </strong>
      </div>

      <div className={styles.plans}>
        {loading && <p>در حال بارگذاری...</p>}

        {!loading && plans.map(plan => (
          <div key={plan._id} className={styles.planCard}>
            <h2>{plan.title}</h2>

            <div className={styles.price}>
              {plan.price.toLocaleString()} تومان
            </div>

            <div className={styles.duration}>
              {plan.duration} روزه
            </div>

            <button onClick={() => buyPlan(plan._id)}>
              خرید اشتراک
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
