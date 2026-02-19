"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { apiFetch } from "@/lib/api";
import useSubscription from "@/hooks/useSubscription";
import { useEffect, useState } from "react";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const params = useSearchParams();
  const planId = params.get("plan");
  const subscription = useSubscription();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // اضافه شد

  // ✅ چک کردن وجود planId
  useEffect(() => {
    if (!planId) {
      setError("پلن انتخاب نشده است");
      // می‌تونی ریدایرکت کنی: router.replace("/pricing");
    }
  }, [planId]);

  useEffect(() => {
    if (subscription?.active) {
      router.replace("/dashboard");
    }
  }, [subscription]);

  const pay = async () => {
    if (!planId) {
      alert("پلن نامعتبر است");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await apiFetch("/payments/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // اضافه شد
        body: JSON.stringify({ planId }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === "SUBSCRIPTION_ALREADY_ACTIVE") {
          router.replace("/dashboard");
          return;
        }
        throw new Error(data.message || "خطا در پرداخت");
      }

      // ✅ چک کردن دقیق‌تر url
      if (data?.url) {
        if (data.url.startsWith("/")) {
          router.push(data.url);
        } else if (data.url.startsWith("http")) {
          window.location.href = data.url;
        } else {
          throw new Error("آدرس پرداخت نامعتبر است");
        }
      } else {
        throw new Error("لینک پرداخت دریافت نشد");
      }

    } catch (err) {
      console.error("Payment error:", err);
      setError(err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("PLAN ID =>", planId);

  // ✅ نمایش خطا اگر planId وجود نداره
  if (!planId) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>خطا</h1>
          <p>پلن انتخاب نشده است. لطفاً ابتدا یک پلن انتخاب کنید.</p>
          <button onClick={() => router.push("/pricing")}>
            بازگشت به صفحه پلن‌ها
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>تکمیل خرید اشتراک</h1>
        <p>پلن انتخاب شده: {planId}</p> {/* نمایش planId برای دیباگ */}
        <p>با تکمیل پرداخت، اشتراک شما بلافاصله فعال خواهد شد.</p>

        <button onClick={pay} disabled={loading}>
          {loading ? "در حال انتقال..." : "پرداخت"}
        </button>
      </div>
    </div>
  );
}