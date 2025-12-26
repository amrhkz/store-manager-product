"use client";
import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    q: "آیا برای استفاده از نرم‌افزار نیاز به آموزش دارم؟",
    a: "خیر. محیط نرم‌افزار بسیار ساده طراحی شده و اغلب کاربران بدون آموزش خاصی شروع به استفاده می‌کنند.",
  },
  {
    q: "آیا می‌توانم بارکد محصولات را اسکن کنم؟",
    a: "بله، نرم‌افزار با اکثر بارکدخوان‌های رایج بازار سازگار است.",
  },
  {
    q: "اطلاعات فروشگاه من امن است؟",
    a: "بله، تمام داده‌ها با استانداردهای امنیتی محافظت شده و به‌صورت منظم بکاپ‌گیری می‌شوند.",
  },
  {
    q: "امکان پرینت فاکتور وجود دارد؟",
    a: "بله، می‌توانید فاکتور را به‌صورت استاندارد و قابل پرینت برای مشتری صادر کنید.",
  },
  {
    q: "اگر سوال یا مشکلی داشته باشم چطور پشتیبانی می‌گیرم؟",
    a: "پشتیبانی از طریق تماس، پیام‌رسان و تیکت در اختیار شماست.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">سوالات متداول</h2>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                {item.q}
                <span className="icon">{openIndex === index ? "−" : "+"}</span>
              </div>

              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
