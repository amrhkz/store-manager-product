"use client";

import React, { useEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      });
  }, []);

  const logout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/login";
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <Link href="/">ShopCRM</Link>
        </div>

        {!user && (
          <nav className={`navbar-menu ${open ? "open" : ""}`}>
            <a href="#features">امکانات</a>
            <a href="#pricing">قیمت‌ها</a>
            <a href="#faq">سوالات متداول</a>
          </nav>
        )}

        <div className="navbar-actions">
          {!user && (
            <>
              <Link href="/login" className="login-btn">
                ورود
              </Link>
              <Link href="/register" className="cta-btn">
                شروع رایگان
              </Link>
            </>
          )}

          {user && (
            <>
              <Link href="/dashboard" className="dashboard-btn">
                داشبورد
              </Link>
              <Link href="/dashboard/subscription" className="cta-btn">
                ارتقای اشتراک
              </Link>
              <button onClick={logout} className="logout-btn">
                خروج
              </button>
            </>
          )}

          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
