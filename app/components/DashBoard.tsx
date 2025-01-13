"use client";
import React from "react";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import UserImage from "../images/defaultUser.svg";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white p-6">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image
            src={UserImage}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-semibold text-lg">Welcome back, Vishal</span>
        </div>
        <FaBell
          size={24}
          className="cursor-pointer text-gray-400 hover:text-white"
        />
      </header>

      {/* Portfolio Section */}
      <section className="bg-[#131216] p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-lg font-medium mb-2">Portfolio Balance</h2>
        <div className="text-4xl font-bold mb-2">$12,550.50</div>
        <span className="text-green-500 text-sm">+10.75%</span>
      </section>

      {/* My Portfolio Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">My Portfolio</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Bitcoin Card */}
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Bitcoin</span>
              <span className="text-gray-400">BTC</span>
            </div>
            <div className="text-xl font-semibold mb-2">$6780</div>
            <span className="text-green-500 text-sm">+11.75%</span>
          </div>
          {/* Ethereum Card */}
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

      {/* Refer Rewards Banner */}
      <section className="relative bg-teal-700 p-6 rounded-lg mb-6 shadow-lg">
        <p className="text-white font-semibold mb-2">
          Earn $5 rewards on every successful referral
        </p>
        <button className="absolute top-3 right-3 bg-teal-900 text-white px-3 py-1 rounded-md text-sm">
          Close
        </button>
      </section>

      {/* Market Statistics Section */}
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
          {/* Uniswap */}
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Uniswap</span>
              <span className="text-gray-400">LTC</span>
            </div>
            <div className="text-xl font-semibold mb-2">$16.96</div>
            <span className="text-red-500 text-sm">-11.75%</span>
          </div>
          {/* Tether */}
          <div className="bg-[#1F1D1F] p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white">Tether</span>
              <span className="text-gray-400">USDT</span>
            </div>
            <div className="text-xl font-semibold mb-2">$0.98</div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 w-full bg-[#1F1D1F] flex justify-around items-center py-3 shadow-lg rounded-t-xl">
        <button className="text-white">🏠</button>
        <button className="text-white">➕</button>
        <button className="text-white">📈</button>
        <button className="text-white" onClick={() => router.push("/settings")}>
          ⚙️
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
