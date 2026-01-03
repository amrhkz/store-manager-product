"use client";

import styles from "./home.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardHome() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        خوش آمدی 👋
      </h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.label}>وضعیت اشتراک</span>
          <strong className={styles.value}>
            {user?.subscription ? "فعال" : "غیرفعال"}
          </strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>نوع حساب</span>
          <strong className={styles.value}>
            {user?.role === "owner" ? "مالک" : "کارمند"}
          </strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>وضعیت سیستم</span>
          <strong className={styles.value}>آماده استفاده</strong>
        </div>
      </div>

      {!user?.subscription && (
        <div className={styles.ctaBox}>
          <h2>اشتراک فعال نداری</h2>
          <p>
            برای استفاده از امکانات برنامه باید اشتراک تهیه کنی
          </p>
          <button onClick={() => router.push("/pricing")}>
            خرید اشتراک
          </button>
        </div>
      )}
    </div>
  );
}
