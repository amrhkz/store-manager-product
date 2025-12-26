import React from "react";
import "./features.css";

const features = [
  {
    title: "مدیریت انبار",
    desc: "کنترل موجودی به‌صورت لحظه‌ای، هشدار کمبود کالا و جستجوی سریع محصولات.",
  },
  {
    title: "صدور و چاپ فاکتور",
    desc: "ایجاد فاکتور حرفه‌ای، محاسبه تخفیف و پرینت مستقیم برای مشتری.",
  },
  {
    title: "CRM مشتریان",
    desc: "ثبت اطلاعات مشتری، مشاهده تاریخچه خرید و مدیریت مشتریان وفادار.",
  },
  {
    title: "اسکن بارکد",
    desc: "فروش سریع با اسکن بارکد، کاهش خطای انسانی و افزایش سرعت صندوق.",
  },
  {
    title: "جستجوی هوشمند",
    desc: "جستجوی سریع کالا بر اساس نام، کد یا بارکد حتی در لیست‌های بزرگ.",
  },
  {
    title: "گزارش فروش",
    desc: "گزارش‌های دقیق روزانه، ماهانه و بررسی عملکرد فروشگاه.",
  },
  {
    title: "مدیریت کاربران",
    desc: "تعریف سطح دسترسی برای صندوق‌دار، مدیر و انباردار.",
  },
  {
    title: "سرعت و سادگی",
    desc: "طراحی شده برای کار سریع حتی روی سیستم‌های ضعیف.",
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">امکانات اصلی نرم‌افزار</h2>

        <p className="features-desc">
          تمام ابزارهای موردنیاز برای مدیریت حرفه‌ای فروشگاه، در یک سیستم ساده
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-title">{item.title}</div>
              <div className="feature-text">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
