"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const PUBLIC_ROUTES = ["/", "/login", "/register"];

export default function AuthGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 🔓 اگر مسیر عمومی بود، اصلاً auth چک نکن
    if (PUBLIC_ROUTES.includes(pathname)) {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });

        if (!res.ok) throw new Error();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname]);

  if (loading) return null;

  // 🔓 مسیر عمومی → مستقیم نمایش بده
  if (PUBLIC_ROUTES.includes(pathname)) {
    return children;
  }

  // 🔒 مسیر خصوصی ولی لاگین نیست
  if (!isAuthenticated) {
    return null;
  }

  return children;
}
