import React from "react";
import "./why-us.css";

const advantages = [
  {
    title: "طراحی شده برای بازار ایران",
    desc: "کاملاً فارسی، مطابق با نیاز فروشگاه‌های ایرانی و بدون پیچیدگی‌های اضافی."
  },
  {
    title: "سریع حتی روی سیستم ضعیف",
    desc: "بهینه‌سازی شده برای اجرا با سرعت بالا روی سیستم‌های قدیمی فروشگاهی."
  },
  {
    title: "بدون نیاز به آموزش",
    desc: "محیط ساده و قابل فهم، حتی برای صندوق‌دار بدون تجربه نرم‌افزاری."
  },
  {
    title: "پشتیبانی واقعی",
    desc: "پشتیبانی انسانی، پاسخ‌گو و همراه شما در تمام مراحل."
  },
  {
    title: "امنیت اطلاعات",
    desc: "داده‌های فروش و مشتریان با استانداردهای امنیتی محافظت می‌شوند."
  },
  {
    title: "آپدیت و توسعه مداوم",
    desc: "ویژگی‌های جدید بر اساس نیاز واقعی مشتریان اضافه می‌شود."
  }
];

function WhyUs() {
  return (
    <section className="why">
      <div className="why-container">

        <h2 className="why-title">
          چرا این نرم‌افزار انتخاب بهتری است؟
        </h2>

        <p className="why-desc">
          ما فقط نرم‌افزار نساختیم، یک ابزار کاربردی برای فروشگاه واقعی طراحی کردیم
        </p>

        <div className="why-grid">
          {advantages.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-card-title">{item.title}</div>
              <div className="why-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
