"use client";

import Link from "next/link";
import styles from "./payment-success.module.css";

export default function PaymentSuccessPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>✓</div>

        <h1>پرداخت موفق</h1>

        <p>
          پرداخت شما با موفقیت انجام شد و اشتراک شما فعال گردید.
        </p>

        <Link href="/dashboard" className={styles.button}>
          ورود به داشبورد
        </Link>
      </div>
    </div>
  );
}
