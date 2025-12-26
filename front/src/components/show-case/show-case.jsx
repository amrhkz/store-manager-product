"use client";
import React, { useState } from "react";
import "./show-case.css";

const tabs = [
  {
    id: "dashboard",
    title: "داشبورد",
    image: "/img/dashboard.png",
  },
  {
    id: "sales",
    title: "فروش",
    image: "/img/sales.png",
  },
  {
    id: "inventory",
    title: "انبار",
    image: "/img/warehouse.png",
  },
  {
    id: "customers",
    title: "مشتریان",
    image: "/img/customers.png",
  },
];

function Showcase() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="showcase">
      <div className="showcase-container">
        <h2 className="showcase-title">محیط نرم‌افزار را ببینید</h2>
        <p className="showcase-desc">ساده، سریع و مناسب فروشگاه‌های واقعی</p>

        <div className="showcase-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="showcase-image">
          <img src={current.image} alt={current.title} />
        </div>

        <button className="showcase-cta">مشاهده دمو کامل</button>
      </div>
    </section>
  );
}

export default Showcase;
