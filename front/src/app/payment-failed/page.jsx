"use client";

import Link from "next/link";
import styles from "./payment-failed.module.css";

export default function PaymentFailedPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>✕</div>

        <h1>پرداخت ناموفق</h1>

        <p>
          پرداخت انجام نشد یا توسط شما لغو شد.
          در صورت کسر وجه، مبلغ حداکثر تا ۷۲ ساعت بازگشت داده می‌شود.
        </p>

        <div className={styles.actions}>
          <Link href="/dashboard/subscription" className={styles.retry}>
            تلاش مجدد
          </Link>

          <Link href="/dashboard" className={styles.secondary}>
            بازگشت به داشبورد
          </Link>
        </div>
      </div>
    </div>
  );
}
