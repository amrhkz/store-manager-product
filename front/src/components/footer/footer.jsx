import React from "react";
import "./footer.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="copy-right">
          © 1404 طراحی شده توسط {" "}
          <Link
            href="https://malektech.ir"
            target="_blank"
            rel="noopener noreferrer"
          >
            مالــکــ تکـــ
          </Link>
        </div>
        <div className="terms">قوانین و مقررات</div>
      </div>
    </div>
  );
}

export default Footer;
