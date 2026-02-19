"use client";

import AdminGuard from "@/components/admin-guard/AdminGuard";
import styles from "./admin.module.css";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <AdminGuard>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h2>Admin Panel</h2>

          <nav>
            <Link href="/admin/dashboard">داشبورد</Link>
            <Link href="/admin/subscriptions">اشتراک‌ها</Link>
            <Link href="/admin/payments">پرداخت‌ها</Link>
            <Link href="/admin/users">کاربران</Link>
            <Link href="/admin/analytics">گزارشات مالی</Link>
          </nav>
        </aside>

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </AdminGuard>
  );
}
