"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";

const DynamicHeader = dynamic(() => import("./Header"), {
  ssr: false,
  loading: () => <div className="text-black">Loading...</div>,
});

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicHeader />
      </Suspense>
      <section className="bg-[#131216] p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-lg font-medium mb-2">Portfolio Balance</h2>
        <div className="text-4xl font-bold mb-2">$12,550.50</div>
        <span className="text-green-500 text-sm">+10.75%</span>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">My Portfolio</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Bitcoin</span>
              <span className="text-gray-400">BTC</span>
            </div>
            <div className="text-xl font-semibold mb-2">$6780</div>
            <span className="text-green-500 text-sm">+11.75%</span>
          </div>
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Ethereum</span>
              <span className="text-gray-400">ETH</span>
            </div>
            <div className="text-xl font-semibold mb-2">$1478.10</div>
            <span className="text-green-500 text-sm">+4.7%</span>
          </div>
        </div>
      </section>

      <section className="relative bg-teal-700 p-6 rounded-lg mb-6 shadow-lg">
        <p className="text-white font-semibold mb-2">
          Earn $5 rewards on every successful referral
        </p>
        <button className="absolute top-3 right-3 bg-teal-900 text-white px-3 py-1 rounded-md text-sm">
          Close
        </button>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Market Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Cardano */}
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Cardano</span>
              <span className="text-gray-400">ADA</span>
            </div>
            <div className="text-xl font-semibold mb-2">$123.77</div>
            <span className="text-green-500 text-sm">+1.75%</span>
          </div>
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Uniswap</span>
              <span className="text-gray-400">LTC</span>
            </div>
            <div className="text-xl font-semibold mb-2">$16.96</div>
            <span className="text-red-500 text-sm">-11.75%</span>
          </div>
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Tether</span>
              <span className="text-gray-400">USDT</span>
            </div>
            <div className="text-xl font-semibold mb-2">$0.98</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
