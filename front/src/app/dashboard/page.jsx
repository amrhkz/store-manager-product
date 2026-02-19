"use client";

import styles from "./home.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardHome() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 MOCK DATA (بعداً داینامیک میشه)
  const stats = [
    { label: "پرداخت‌های موفق", value: "12" },
    { label: "روزهای باقی‌مانده اشتراک", value: "18" },
    { label: "درخواست‌های API", value: "2,430" },
    { label: "وضعیت سیستم", value: "Stable" },
  ];

  const activities = [
    { title: "پرداخت با موفقیت انجام شد", time: "2 ساعت پیش" },
    { title: "ورود به سیستم", time: "دیروز" },
    { title: "تغییر پلن اشتراک", time: "3 روز پیش" },
    { title: "ثبت‌نام حساب کاربری", time: "1 هفته پیش" },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <div className={styles.wrapper}>
      {/* ================= HEADER ================= */}
      <section className={styles.topBar}>
        <div>
          <h1 className={styles.title}>
            داشبورد <span>{user?.email}</span>
          </h1>
          <p className={styles.subtitle}>
            مدیریت کامل حساب، اشتراک و فعالیت‌ها
          </p>
        </div>

        <div className={styles.topActions}>
          <button onClick={() => router.push("/dashboard/settings")}>
            تنظیمات
          </button>
          <button
            className={styles.primary}
            onClick={() => router.push("/dashboard/subscription")}
          >
            مدیریت اشتراک
          </button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className={styles.statsGrid}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>

      {/* ================= MAIN GRID ================= */}
      <section className={styles.mainGrid}>
        {/* ----- Subscription ----- */}
        <div className={styles.panel}>
          <h3>وضعیت اشتراک</h3>

          {user?.subscription ? (
            <>
              <p className={styles.active}>اشتراک فعال ✔</p>
              <button
                onClick={() => router.push("/dashboard/subscription")}
              >
                مشاهده جزئیات
              </button>
            </>
          ) : (
            <>
              <p className={styles.inactive}>اشتراک غیرفعال ✖</p>
              <button
                className={styles.primary}
                onClick={() => router.push("/pricing")}
              >
                خرید اشتراک
              </button>
            </>
          )}
        </div>

        {/* ----- Quick Actions ----- */}
        <div className={styles.panel}>
          <h3>دسترسی سریع</h3>

          <div className={styles.quickGrid}>
            <button onClick={() => router.push("/dashboard/billing")}>
              پرداخت‌ها
            </button>
            <button onClick={() => router.push("/dashboard/settings")}>
              تنظیمات حساب
            </button>
            <button onClick={() => router.push("/dashboard/security")}>
              امنیت
            </button>
            <button disabled>گزارش‌ها (به‌زودی)</button>
          </div>
        </div>

        {/* ----- Activity ----- */}
        <div className={`${styles.panel} ${styles.activity}`}>
          <h3>آخرین فعالیت‌ها</h3>

          <ul>
            {activities.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
                <small>{item.time}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
