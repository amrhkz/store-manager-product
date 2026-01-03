"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) throw new Error();

      router.push("/login");
    } catch {
      alert("خطا در ثبت‌نام");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={submit} className={styles.card}>
        <h1>ساخت حساب کاربری</h1>

        <input
          placeholder="ایمیل"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "در حال ساخت..." : "ثبت‌نام"}
        </button>

        <p className={styles.loginLink}>
          حساب داری؟
          <span onClick={() => router.push("/login")}>
            ورود
          </span>
        </p>
      </form>
    </div>
  );
}
