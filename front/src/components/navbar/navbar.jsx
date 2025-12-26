"use client";
import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>ShopCRM</span>
        </div>
        <nav className={`navbar-menu ${open ? "open" : ""}`}>
          <a href="#features">امکانات</a>
          <a href="#pricing">قیمت‌ها</a>
          <a href="#testimonials">نظرات مشتریان</a>
          <a href="#faq">سوالات متداول</a>
        </nav>
        <div className="navbar-actions">
          <a href="/login" className="login-btn">
            ورود
          </a>
          <a href="/register" className="cta-btn">
            شروع رایگان
          </a>
          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
