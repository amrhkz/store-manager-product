"use client";

import { useEffect, useState } from "react";
import styles from "./payments.module.css";

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // 🔴 دیتای موقت
    setPayments([
      {
        id: "1",
        email: "test@gmail.com",
        plan: "ماهانه",
        amount: 199000,
        status: "success",
        method: "زرین‌پال",
        date: "1402/11/25",
      },
      {
        id: "2",
        email: "user2@gmail.com",
        plan: "سالانه",
        amount: 1999000,
        status: "pending",
        method: "زرین‌پال",
        date: "1402/11/26",
      },
      {
        id: "3",
        email: "user3@gmail.com",
        plan: "ماهانه",
        amount: 199000,
        status: "failed",
        method: "زرین‌پال",
        date: "1402/11/27",
      },
    ]);
  }, []);

  const statusLabel = (status) => {
    if (status === "success") return "موفق";
    if (status === "pending") return "در انتظار";
    return "ناموفق";
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>پرداخت‌ها</h1>
        <span>{payments.length} تراکنش</span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>کاربر</th>
              <th>پلن</th>
              <th>مبلغ</th>
              <th>روش پرداخت</th>
              <th>وضعیت</th>
              <th>تاریخ</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.email}</td>
                <td>{p.plan}</td>
                <td>{p.amount.toLocaleString()} تومان</td>
                <td>{p.method}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      p.status === "success"
                        ? styles.success
                        : p.status === "pending"
                        ? styles.pending
                        : styles.failed
                    }`}
                  >
                    {statusLabel(p.status)}
                  </span>
                </td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
