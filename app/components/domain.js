"use client";

import { useEffect, useState } from "react";

export default function useDomainPrefix() {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const domain = window.location.origin + "/";
      setPrefix(`${domain}`);
    }
  }, []);

  return prefix;
}