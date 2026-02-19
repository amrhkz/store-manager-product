"use client";

import { useEffect, useState } from "react";
import styles from "./users.module.css";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 🔴 دیتای موقت
    setUsers([
      {
        id: "1",
        email: "test@gmail.com",
        role: "owner",
        subscription: "ماهانه",
        status: "active",
        createdAt: "1402/11/20",
      },
      {
        id: "2",
        email: "staff@gmail.com",
        role: "staff",
        subscription: null,
        status: "inactive",
        createdAt: "1402/11/22",
      },
    ]);
  }, []);

  const toggleUserStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "inactive" : "active" }
          : u
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>مدیریت کاربران</h1>
        <span>{users.length} کاربر</span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>اشتراک</th>
              <th>وضعیت</th>
              <th>تاریخ ثبت‌نام</th>
              <th>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>

                <td>
                  <span className={styles.role}>
                    {user.role === "owner" ? "مالک" : "کارمند"}
                  </span>
                </td>

                <td>
                  {user.subscription || (
                    <span className={styles.noSub}>ندارد</span>
                  )}
                </td>

                <td>
                  <span
                    className={`${styles.status} ${
                      user.status === "active"
                        ? styles.active
                        : styles.inactive
                    }`}
                  >
                    {user.status === "active" ? "فعال" : "غیرفعال"}
                  </span>
                </td>

                <td>{user.createdAt}</td>

                <td>
                  <button
                    className={styles.toggleBtn}
                    onClick={() => toggleUserStatus(user.id)}
                  >
                    {user.status === "active" ? "غیرفعال‌سازی" : "فعال‌سازی"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
