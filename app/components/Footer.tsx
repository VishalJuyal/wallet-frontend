"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardRoute = pathname === "/dashboard";

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#1F1D1F] flex justify-around items-center py-3 shadow-lg rounded-t-xl">
      <button
        className="text-white"
        onClick={() => !isDashboardRoute && router.push("/dashboard")}
      >
        🏠
      </button>
      <button className="text-white" onClick={() => router.push("/swap")}>
        ➕
      </button>
      <button
        className="text-white"
        onClick={() => router.push("/crypto-graphs-analysis")}
      >
        📈
      </button>
      <button className="text-white" onClick={() => router.push("/settings")}>
        ⚙️
      </button>
    </footer>
  );
}
