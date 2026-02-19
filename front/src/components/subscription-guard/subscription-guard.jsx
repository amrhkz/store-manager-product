"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SubscriptionGuard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.user?.subscription) {
          router.replace("/pricing");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return children;
}
