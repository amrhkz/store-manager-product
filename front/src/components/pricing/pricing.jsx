import React from "react";
import "./pricing.css";

const plans = [
  {
    name: "پایه",
    price: "۹۹۰٬۰۰۰",
    period: "ماهانه",
    features: [
      "مدیریت فروش و انبار",
      "صدور و چاپ فاکتور",
      "اسکن بارکد",
      "پشتیبانی پایه"
    ],
    popular: false
  },
  {
    name: "حرفه‌ای",
    price: "۱٬۹۹۰٬۰۰۰",
    period: "ماهانه",
    features: [
      "تمام امکانات پلن پایه",
      "CRM مشتریان",
      "گزارش‌های پیشرفته",
      "مدیریت کاربران",
      "پشتیبانی سریع"
    ],
    popular: true
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    period: "",
    features: [
      "چند شعبه",
      "شخصی‌سازی",
      "سطوح دسترسی پیشرفته",
      "پشتیبانی اختصاصی"
    ],
    popular: false
  }
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">

        <h2 className="pricing-title">
          قیمت‌گذاری شفاف و ساده
        </h2>

        <p className="pricing-desc">
          بدون هزینه پنهان، متناسب با اندازه کسب‌وکار شما
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={index}
            >
              {plan.popular && (
                <div className="badge">پیشنهادی</div>
              )}

              <div className="plan-name">{plan.name}</div>

              <div className="plan-price">
                {plan.price}
                {plan.period && <span> / {plan.period}</span>}
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="plan-btn">
                {plan.name === "سازمانی" ? "تماس با ما" : "شروع تست رایگان"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;
