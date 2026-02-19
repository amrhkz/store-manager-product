"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export default function useSubscription() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    apiFetch("/subscription/status")
      .then(res => res.json())
      .then(setSubscription);
  }, []);

  return subscription;
}
