"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

const API_URL = "http://localhost:5000/api/auth";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState("login"); // login | register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/${mode}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "خطا در عملیات");
      }

      // اگر ثبت‌نام بود → برو لاگین
      if (mode === "register") {
        setMode("login");
        setError("ثبت‌نام انجام شد، حالا وارد شوید");
      } else {
        // login موفق
        router.replace("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>{mode === "login" ? "ورود به پنل" : "ثبت‌نام"}</h1>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "در حال پردازش..."
            : mode === "login"
            ? "ورود"
            : "ثبت‌نام"}
        </button>

        <div className="switch-mode">
          {mode === "login" ? (
            <span>
              حساب ندارید؟{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
              >
                ثبت‌نام
              </button>
            </span>
          ) : (
            <span>
              قبلاً ثبت‌نام کرده‌اید؟{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setError("");
                }}
              >
                ورود
              </button>
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
