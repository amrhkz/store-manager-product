import React from "react";
import "./problems.css";

const problems = [
  {
    title: "فاکتور دستی",
    desc: "ثبت فاکتور به‌صورت دستی باعث خطا، اتلاف وقت و نارضایتی مشتری می‌شود.",
  },
  {
    title: "کندی صندوق",
    desc: "صف‌های طولانی و سرعت پایین فروش، تجربه بدی برای مشتری ایجاد می‌کند.",
  },
  {
    title: "اتلاف زمان",
    desc: "ثبت دستی کالا و جستجوی طولانی، زمان ارزشمند فروشنده را هدر می‌دهد.",
  },
  {
    title: "خطای انبار",
    desc: "عدم موجودی دقیق باعث فروش اشتباه و ضرر مالی می‌شود.",
  },
];

function Problems() {
  return (
    <section className="problems">
      <h2 className="title">مشکلات رایج فروشگاه‌ها</h2>
      <div className="problem-list">
        {problems.map((item, index) => (
          <div className="problem-item" key={index}>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problems;
