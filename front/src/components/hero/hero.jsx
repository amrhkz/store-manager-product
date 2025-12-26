"use client";
import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            مدیریت فروشگاه و انبار
            <br />
            <span>سریع، دقیق و بدون دردسر</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            فروش، انبار، مشتریان و فاکتور را در یک نرم‌افزار ساده و قدرتمند
            مدیریت کنید
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/register" className="btn-primary">
              شروع رایگان
            </a>
            <a href="/demo" className="btn-secondary">
              مشاهده دمو
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src="/img/dashboard.png" alt="Dashboard Preview" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
