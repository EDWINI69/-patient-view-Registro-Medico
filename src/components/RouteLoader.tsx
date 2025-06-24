// components/RouteLoader.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./ui/loader"; // o spinner propio

export default function RouteLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100); // Ajusta el tiempo según necesites

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader /> : null;
}
