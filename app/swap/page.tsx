import React from "react";
import Swap from "../components/Swap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="bg-[#0A0A0A] pt-4 min-h-screen text-white p-6">
      <Header />
      <Swap />
      <Footer />
    </div>
  );
}
