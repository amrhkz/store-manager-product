"use client";

import styles from "./dashboard.module.css";

export default function AdminDashboardPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>داشبورد ادمین</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <span>کاربران</span>
          <strong>128</strong>
        </div>

        <div className={styles.card}>
          <span>اشتراک‌های فعال</span>
          <strong>42</strong>
        </div>

        <div className={styles.card}>
          <span>در انتظار تأیید</span>
          <strong>7</strong>
        </div>

        <div className={styles.card}>
          <span>درآمد ماه جاری</span>
          <strong>12,500,000 تومان</strong>
        </div>
      </div>
    </div>
  );
}
