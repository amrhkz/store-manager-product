"use client";

import styles from "./settings.module.css";
import { useState } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    email: "test@gmail.com",
    name: "مالک سیستم",
  });

  const [security, setSecurity] = useState({
    password: "",
    newPassword: "",
  });

  const [preferences, setPreferences] = useState({
    theme: "dark",
    notifications: true,
  });

  const saveProfile = () => {
    alert("پروفایل ذخیره شد (استاتیک)");
  };

  const changePassword = () => {
    alert("رمز عبور تغییر کرد (استاتیک)");
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1>Settings</h1>
          <p>مدیریت حساب کاربری و تنظیمات سیستم</p>
        </div>
      </header>

      {/* Profile */}
      <section className={styles.card}>
        <h3>اطلاعات حساب</h3>

        <div className={styles.formGrid}>
          <div>
            <label>نام</label>
            <input
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
            />
          </div>

          <div>
            <label>ایمیل</label>
            <input value={profile.email} disabled />
          </div>
        </div>

        <button className={styles.primaryBtn} onClick={saveProfile}>
          ذخیره تغییرات
        </button>
      </section>

      {/* Security */}
      <section className={styles.card}>
        <h3>امنیت</h3>

        <div className={styles.formGrid}>
          <div>
            <label>رمز عبور فعلی</label>
            <input
              type="password"
              value={security.password}
              onChange={(e) =>
                setSecurity({ ...security, password: e.target.value })
              }
            />
          </div>

          <div>
            <label>رمز عبور جدید</label>
            <input
              type="password"
              value={security.newPassword}
              onChange={(e) =>
                setSecurity({ ...security, newPassword: e.target.value })
              }
            />
          </div>
        </div>

        <button className={styles.dangerBtn} onClick={changePassword}>
          تغییر رمز عبور
        </button>
      </section>

      {/* Preferences */}
      <section className={styles.card}>
        <h3>تنظیمات ظاهری</h3>

        <div className={styles.preferences}>
          <div className={styles.prefItem}>
            <div>
              <strong>حالت نمایش</strong>
              <span>انتخاب تم سیستم</span>
            </div>

            <select
              value={preferences.theme}
              onChange={(e) =>
                setPreferences({ ...preferences, theme: e.target.value })
              }
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          <div className={styles.prefItem}>
            <div>
              <strong>اعلان‌ها</strong>
              <span>دریافت اعلان‌های سیستم</span>
            </div>

            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={() =>
                setPreferences({
                  ...preferences,
                  notifications: !preferences.notifications,
                })
              }
            />
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className={`${styles.card} ${styles.danger}`}>
        <h3>Danger Zone</h3>

        <p>
          حذف حساب کاربری غیرقابل بازگشت است.
        </p>

        <button className={styles.deleteBtn}>
          حذف حساب کاربری
        </button>
      </section>
    </div>
  );
}
