"use client"
import React from "react";
import "./final-cta.css";
import ScrollAnimation from "../scroll-animation/scroll-animation";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-container">

        <ScrollAnimation>
          <h2 className="final-cta-title">
            مدیریت فروشگاه را ساده‌تر از همیشه شروع کنید
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <p className="final-cta-desc">
            همین امروز نرم‌افزار را فعال کنید و فروش، انبار و مشتریان را یکجا مدیریت کنید
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="cta-buttons">
            <a href="/register" className="cta-primary">شروع رایگان</a>
            <a href="/demo" className="cta-secondary">درخواست دمو</a>
          </div>
        </ScrollAnimation>

        <div className="cta-note">
          بدون نیاز به کارت بانکی • پشتیبانی کامل • راه‌اندازی سریع
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;
