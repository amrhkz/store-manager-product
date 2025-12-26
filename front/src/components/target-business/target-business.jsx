import React from "react";
import "./target-business.css";

const businesses = [
  {
    title: "سوپرمارکت و مواد غذایی",
    desc: "مدیریت سریع فروش، بارکدخوانی و کنترل موجودی کالاهای پرتعداد."
  },
  {
    title: "پوشاک و بوتیک",
    desc: "مدیریت سایزبندی، رنگ‌ها و گزارش فروش دقیق."
  },
  {
    title: "فروشگاه موبایل",
    desc: "ثبت سریال، مدیریت لوازم جانبی و فاکتور حرفه‌ای."
  },
  {
    title: "لوازم یدکی",
    desc: "جستجوی سریع قطعات و کنترل دقیق انبار."
  },
  {
    title: "انبارهای کوچک و متوسط",
    desc: "کنترل ورود و خروج کالا و گزارش‌گیری لحظه‌ای."
  },
  {
    title: "کسب‌وکارهای چند شعبه",
    desc: "مدیریت متمرکز فروش و موجودی تمام شعب."
  }
];

function TargetBusinesses() {
  return (
    <section className="target">
      <div className="target-container">

        <h2 className="target-title">
          این نرم‌افزار مناسب چه کسب‌وکارهایی است؟
        </h2>

        <p className="target-desc">
          طراحی شده برای فروشگاه‌هایی که سرعت، دقت و کنترل برایشان مهم است
        </p>

        <div className="target-grid">
          {businesses.map((item, index) => (
            <div className="target-card" key={index}>
              <div className="target-card-title">{item.title}</div>
              <div className="target-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TargetBusinesses;
