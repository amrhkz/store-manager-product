"use client";

import styles from "./billing.module.css";
import { useEffect, useState } from "react";

export default function BillingPage() {
  const [subscription] = useState({
    plan: "ماهانه",
    price: 199000,
    status: "active",
    expiresAt: "1404/01/20",
  });

  const invoices = [
    { id: 1, date: "1403/12/01", amount: 199000, status: "پرداخت شده" },
    { id: 2, date: "1403/11/01", amount: 199000, status: "پرداخت شده" },
    { id: 3, date: "1403/10/01", amount: 199000, status: "پرداخت شده" },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1>Billing & Subscription</h1>
          <p>مدیریت اشتراک، پرداخت‌ها و فاکتورها</p>
        </div>

        <button className={styles.primaryBtn}>
          ارتقاء پلن
        </button>
      </header>

      {/* Current Plan */}
      <section className={styles.card}>
        <h3>اشتراک فعلی</h3>

        <div className={styles.planGrid}>
          <div>
            <span>پلن</span>
            <strong>{subscription.plan}</strong>
          </div>

          <div>
            <span>مبلغ</span>
            <strong>{subscription.price.toLocaleString()} تومان</strong>
          </div>

          <div>
            <span>وضعیت</span>
            <strong className={styles.active}>فعال</strong>
          </div>

          <div>
            <span>تاریخ انقضا</span>
            <strong>{subscription.expiresAt}</strong>
          </div>
        </div>
      </section>

      {/* Billing History */}
      <section className={styles.card}>
        <h3>سوابق پرداخت</h3>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>تاریخ</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.amount.toLocaleString()} تومان</td>
                <td>
                  <span className={styles.success}>{item.status}</span>
                </td>
                <td>
                  <button className={styles.linkBtn}>
                    دانلود فاکتور
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Payment Method */}
      <section className={styles.card}>
        <h3>روش پرداخت</h3>

        <div className={styles.paymentBox}>
          <div>
            <strong>درگاه زرین‌پال</strong>
            <span>پرداخت امن آنلاین</span>
          </div>

          <button>تغییر روش پرداخت</button>
        </div>
      </section>
    </div>
  );
}
