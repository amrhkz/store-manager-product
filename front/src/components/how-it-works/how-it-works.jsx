import React from "react";
import "./how-it-works.css";

const steps = [
  {
    step: "1",
    title: "ثبت محصولات",
    desc: "محصولات را به‌صورت دستی یا با بارکد در سیستم ثبت کنید."
  },
  {
    step: "2",
    title: "فروش سریع",
    desc: "با اسکن بارکد یا جستجو، فروش را در چند ثانیه انجام دهید."
  },
  {
    step: "3",
    title: "چاپ فاکتور و گزارش",
    desc: "فاکتور را چاپ کنید و گزارش فروش را به‌صورت لحظه‌ای ببینید."
  }
];

function HowItWorks() {
  return (
    <section className="how">
      <div className="how-container">

        <h2 className="how-title">نرم‌افزار چگونه کار می‌کند؟</h2>
        <p className="how-desc">
          تنها در سه مرحله ساده، فروشگاه خود را مدیریت کنید
        </p>

        <div className="how-steps">
          {steps.map((item, index) => (
            <div className="how-step" key={index}>
              <div className="step-number">{item.step}</div>
              <div className="step-title">{item.title}</div>
              <div className="step-desc">{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
