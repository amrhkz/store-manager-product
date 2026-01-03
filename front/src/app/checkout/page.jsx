"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const subscriptionId = searchParams.get("subscription");

  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!subscriptionId) {
      router.replace("/dashboard");
      return;
    }

    apiFetch(`/subscriptions/${subscriptionId}`)
      .then(res => res.json())
      .then(data => {
        setSubscription(data);
        setLoading(false);
      });
  }, []);

  const goToPayment = () => {
    router.push(`/payment?subscription=${subscriptionId}`);
  };

  if (loading) {
    return <div className={styles.loading}>در حال آماده‌سازی...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>تأیید نهایی خرید</h1>

        <div className={styles.row}>
          <span>پلن انتخابی</span>
          <strong>{subscription.plan.title}</strong>
        </div>

        <div className={styles.row}>
          <span>مدت اعتبار</span>
          <strong>{subscription.plan.duration} روز</strong>
        </div>

        <div className={styles.row}>
          <span>مبلغ قابل پرداخت</span>
          <strong className={styles.price}>
            {subscription.plan.price.toLocaleString()} تومان
          </strong>
        </div>

        <button onClick={goToPayment}>
          پرداخت و فعال‌سازی
        </button>
      </div>
    </div>
  );
}
