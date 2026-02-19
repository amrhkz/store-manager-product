"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import styles from "./subscription.module.css";

export default function SubscriptionPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePlanId, setActivePlanId] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // ✅ گرفتن یوزر از /me (نه useAuth)
        const meRes = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });

        if (!meRes.ok) {
          router.replace("/login");
          return;
        }

        const meData = await meRes.json();
        setUser(meData.user);

        // ✅ گرفتن پلن‌ها
        const plansRes = await apiFetch("/plans");
        const plansData = await plansRes.json();
        setPlans(plansData);

        // ✅ اگر subscription دارد، جزئیاتش را بگیر
        if (meData.user?.subscription) {
          const subRes = await apiFetch(
            `/subscriptions/${meData.user.subscription}`
          );
          const subData = await subRes.json();

          if (["active", "pending"].includes(subData.status)) {
            setSubscriptionData(subData);
            setActivePlanId(subData.plan?._id || subData.plan);
          }
        }
      } catch (err) {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [router]);

  const buyPlan = async (planId) => {
    if (planId === activePlanId) return;

    const res = await apiFetch("/subscriptions", {
      method: "POST",
      body: JSON.stringify({ planId }),
    });

    if (!res.ok) return;

    router.push(`/dashboard/checkout?plan=${planId}`);
  };

  if (loading) return null;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>اشتراک</h1>

      {subscriptionData && (
        <div className={styles.activeBanner}>
          ✅ اشتراک شما فعال است
        </div>
      )}

      <div className={styles.plans}>
        {plans.map((plan) => {
          const isActive = plan._id === activePlanId;
          const isDisabled = subscriptionData && !isActive;

          return (
            <div
              key={plan._id}
              className={`${styles.planCard} ${isActive ? styles.activePlan : ""
                } ${isDisabled ? styles.disabledPlan : ""}`}
            >
              {isActive && (
                <div className={styles.currentBadge}>
                  {subscriptionData?.status === "pending"
                    ? "در انتظار تایید"
                    : "پلن فعال شما"}
                </div>
              )}


              <h2>{plan.title}</h2>
              <div className={styles.price}>
                {plan.price.toLocaleString()} تومان
              </div>
              <div className={styles.duration}>{plan.duration} روزه</div>

              <button
                disabled={isActive || isDisabled}
                onClick={() => buyPlan(plan._id)}
              >
                {isActive
                  ? "در حال استفاده"
                  : isDisabled
                    ? "اشتراک دیگری فعال است"
                    : "خرید اشتراک"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
