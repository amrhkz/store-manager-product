"use client";

import { useEffect, useState } from "react";
import styles from "./subscriptions.module.css";

export default function AdminSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // 🔴 دیتای موقت (بعداً از API میاد)
    setSubscriptions([
      {
        id: "1",
        userEmail: "test@gmail.com",
        plan: "ماهانه",
        price: 199000,
        status: "pending",
        createdAt: "1402/11/25",
      },
      {
        id: "2",
        userEmail: "admin@gmail.com",
        plan: "سالانه",
        price: 1990000,
        status: "active",
        createdAt: "1402/11/20",
      },
    ]);
  }, []);

  const approveSubscription = (id) => {
    setSubscriptions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "active" } : s
      )
    );
  };

  const rejectSubscription = (id) => {
    setSubscriptions((prev) =>
      prev.filter((s) => s.id !== id)
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>مدیریت اشتراک‌ها</h1>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>کاربر</th>
              <th>پلن</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>تاریخ</th>
              <th>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub.id}>
                <td>{sub.userEmail}</td>
                <td>{sub.plan}</td>
                <td>{sub.price.toLocaleString()} تومان</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[sub.status]
                    }`}
                  >
                    {sub.status}
                  </span>
                </td>
                <td>{sub.createdAt}</td>
                <td className={styles.actions}>
                  {sub.status === "pending" && (
                    <>
                      <button
                        className={styles.approve}
                        onClick={() => approveSubscription(sub.id)}
                      >
                        تأیید
                      </button>
                      <button
                        className={styles.reject}
                        onClick={() => rejectSubscription(sub.id)}
                      >
                        رد
                      </button>
                    </>
                  )}
                  {sub.status === "active" && (
                    <span className={styles.activeLabel}>
                      فعال
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
