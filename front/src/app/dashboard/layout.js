"use client";

import { useAuth } from "@/context/AuthContext";
import styles from "./dashboard.module.css";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2>ShopCRM</h2>
        <nav>
          <a>داشبورد</a>
          <a>اشتراک</a>
          <a>تنظیمات</a>
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <span>{user?.email}</span>
          <button onClick={logout}>خروج</button>
        </header>

        <section className={styles.content}>
          {children}
        </section>
      </main>
    </div>
  );
}
