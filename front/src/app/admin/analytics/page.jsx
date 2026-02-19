"use client";

import styles from "./analytics.module.css";

export default function AdminAnalyticsPage() {
  // 🔴 دیتای موقت
  const kpis = [
    { label: "درآمد امروز", value: "12,400,000", sub: "تومان" },
    { label: "درآمد این ماه", value: "189,200,000", sub: "تومان" },
    { label: "پرداخت‌های موفق", value: "124" },
    { label: "پرداخت‌های ناموفق", value: "9" },
  ];

  const chartData = [
    { day: "ش", value: 20 },
    { day: "ی", value: 40 },
    { day: "د", value: 35 },
    { day: "س", value: 60 },
    { day: "چ", value: 50 },
    { day: "پ", value: 75 },
    { day: "ج", value: 90 },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>گزارشات مالی</h1>

      {/* KPI */}
      <div className={styles.kpis}>
        {kpis.map((kpi, i) => (
          <div key={i} className={styles.kpiCard}>
            <span className={styles.kpiLabel}>{kpi.label}</span>
            <strong className={styles.kpiValue}>
              {kpi.value}
              {kpi.sub && <small>{kpi.sub}</small>}
            </strong>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <h2>درآمد هفتگی</h2>
          <span>آخرین ۷ روز</span>
        </div>

        <div className={styles.chart}>
          {chartData.map((item, i) => (
            <div key={i} className={styles.barWrapper}>
              <div
                className={styles.bar}
                style={{ height: `${item.value}%` }}
              />
              <span>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
