"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (!data?.user) {
          router.replace("/login");
          return;
        }

        if (data.user.role !== "admin") {
          router.replace("/dashboard");
          return;
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) return null;

  return children;
}
