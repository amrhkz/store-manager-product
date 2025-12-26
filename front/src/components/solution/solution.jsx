import React from "react";
import "./solution.css";

function Solution() {
  return (
    <section className="solution">
      <div className="solution-container">
        <div className="solution-content">
          <h2 className="solution-title">
            یک نرم‌افزار، برای تمام مدیریت فروشگاه
          </h2>
          <p className="solution-desc">
            با این سیستم، فروش، انبار و مشتریان را یکپارچه و بدون خطا مدیریت
            کنید — سریع، دقیق و ساده.
          </p>
          <ul className="solution-list">
            <li>مدیریت موجودی انبار به‌صورت لحظه‌ای</li>
            <li>صدور و پرینت فاکتور حرفه‌ای</li>
            <li>ثبت و مدیریت مشتریان (CRM)</li>
            <li>اسکن بارکد و جستجوی سریع کالا</li>
          </ul>
          <button className="solution-btn">مشاهده دمو نرم‌افزار</button>
        </div>
        <div className="solution-image">
          <img src="/img/warehouse.png" alt="Dashboard Software" />
        </div>
      </div>
    </section>
  );
}

export default Solution;
