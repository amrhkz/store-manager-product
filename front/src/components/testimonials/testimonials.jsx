import React from "react";
import "./testimonials.css";

const stats = [
  { value: "+500", label: "فروشگاه فعال" },
  { value: "+2M", label: "فاکتور صادر شده" },
  { value: "99%", label: "رضایت کاربران" }
];

const testimonials = [
  {
    name: "علی رضایی",
    job: "صاحب سوپرمارکت",
    text: "سرعت صندوق خیلی بالا رفته و خطای انبار تقریباً صفر شده. واقعاً کارمون راحت‌تر شده."
  },
  {
    name: "مریم احمدی",
    job: "فروشگاه پوشاک",
    text: "محیط نرم‌افزار ساده‌ست و کارمندام بدون آموزش خاصی باهاش کار می‌کنن."
  },
  {
    name: "حسین محمدی",
    job: "لوازم یدکی",
    text: "گزارش فروش و مدیریت انبار دقیقاً همون چیزیه که دنبالش بودم."
  }
];

function Testimonials() {
  return (
    <section className="trust" id="testimonials">
      <div className="trust-container">

        <h2 className="trust-title">
          فروشگاه‌هایی که به ما اعتماد کرده‌اند
        </h2>

        {/* Stats */}
        <div className="trust-stats">
          {stats.map((item, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{item.text}”</p>
              <div className="testimonial-user">
                <strong>{item.name}</strong>
                <span>{item.job}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
