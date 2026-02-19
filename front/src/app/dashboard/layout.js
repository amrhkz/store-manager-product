"use client";

import styles from "./dashboard.module.css";
import SubscriptionGuard from "@/components/subscription-guard/subscription-guard";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav>
          <Link href="/dashboard">داشبورد</Link>
          <Link href="/dashboard/subscription">اشتراک</Link>
          <Link href="/dashboard/billing">پرداخت ها</Link>
          <Link href="/dashboard/settings">تنظیمات</Link>
        </nav>
      </aside>

      <main className={styles.main}>
        <section className={styles.content}>
          <SubscriptionGuard>{children}</SubscriptionGuard>
        </section>
      </main>
    </div>
  );
}
