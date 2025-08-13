"use client";  
import React, { Suspense } from "react";  
import dynamic from "next/dynamic";  
import Footer from "./Footer";  
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";  
  
const DynamicHeader = dynamic(() => import("./Header"), {  
  ssr: false,  
  loading: () => (  
    <div className="animate-pulse bg-gray-800 h-20 rounded-lg mb-6"></div>  
  ),  
});  
  
const Dashboard: React.FC = () => {  
  const portfolioData = [  
    { name: "Bitcoin", symbol: "BTC", value: 6780, change: 11.75, positive: true },  
    { name: "Ethereum", symbol: "ETH", value: 1478.10, change: 4.7, positive: true },  
  ];  
  
  const marketData = [  
    { name: "Cardano", symbol: "ADA", value: 123.77, change: 1.75, positive: true },  
    { name: "Litecoin", symbol: "LTC", value: 16.96, change: -11.75, positive: false },  
    { name: "Tether", symbol: "USDT", value: 0.98, change: 0, positive: true },  
  ];  
  
  return (  
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] text-white">  
      <div className="flex-1 p-4 sm:p-6 pb-24">  
        <Suspense fallback={<div className="animate-pulse bg-gray-800 h-20 rounded-lg mb-6"></div>}>  
          <DynamicHeader />  
        </Suspense>  
  
        {/* Portfolio Balance Card */}  
        <section className="bg-gradient-to-r from-[#1A1A2E] to-[#16213E] p-6 rounded-2xl mb-6 shadow-2xl border border-gray-800/50">  
          <div className="flex items-center justify-between mb-3">  
            <h2 className="text-lg font-medium text-gray-300">Portfolio Balance</h2>  
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>  
          </div>  
          <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">  
            $12,550.50  
          </div>  
          <div className="flex items-center gap-2">  
            <FiTrendingUp className="text-green-500" size={16} />  
            <span className="text-green-500 text-sm font-medium">+10.75%</span>  
            <span className="text-gray-500 text-sm">24h</span>  
          </div>  
        </section>  
  
        {/* My Portfolio Section */}  
        <section className="mb-6">  
          <h2 className="text-xl font-semibold mb-4 text-gray-100">My Portfolio</h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
            {portfolioData.map((asset, index) => (  
              <div key={index} className="bg-[#1F1D1F] hover:bg-[#252325] transition-all duration-300 p-5 rounded-xl shadow-lg border border-gray-800/30 hover:border-gray-700/50">  
                <div className="flex items-center justify-between mb-3">  
                  <div className="flex items-center gap-3">  
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">  
                      {asset.symbol.charAt(0)}  
                    </div>  
                    <div>  
                      <span className="text-white font-medium">{asset.name}</span>  
                      <div className="text-gray-400 text-sm">{asset.symbol}</div>  
                    </div>  
                  </div>  
                </div>  
                <div className="text-xl font-semibold mb-2">${asset.value.toLocaleString()}</div>  
                <div className="flex items-center gap-1">  
                  {asset.positive ? (  
                    <FiTrendingUp className="text-green-500" size={14} />  
                  ) : (  
                    <FiTrendingDown className="text-red-500" size={14} />  
                  )}  
                  <span className={`text-sm font-medium ${asset.positive ? 'text-green-500' : 'text-red-500'}`}>  
                    {asset.positive ? '+' : ''}{asset.change}%  
                  </span>  
                </div>  
              </div>  
            ))}  
          </div>  
        </section>  
  
        {/* Referral Banner */}  
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 p-6 rounded-xl mb-6 shadow-lg overflow-hidden">  
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>  
          <div className="relative z-10">  
            <p className="text-white font-semibold mb-2 text-lg">  
              💰 Earn $5 rewards on every successful referral  
            </p>  
            <p className="text-teal-100 text-sm">Share your referral code and start earning!</p>  
          </div>  
          <button className="absolute top-4 right-4 bg-teal-800/50 hover:bg-teal-800 text-white p-2 rounded-lg text-sm transition-colors duration-200">  
            ✕  
          </button>  
        </section>  
  
        {/* Market Statistics */}  
        <section>  
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Market Statistics</h2>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
            {marketData.map((asset, index) => (  
              <div key={index} className="bg-[#1F1D1F] hover:bg-[#252325] transition-all duration-300 p-5 rounded-xl shadow-lg border border-gray-800/30 hover:border-gray-700/50">  
                <div className="flex items-center justify-between mb-3">  
                  <div className="flex items-center gap-3">  
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">  
                      {asset.symbol.charAt(0)}  
                    </div>  
                    <div>  
                      <span className="text-white font-medium text-sm">{asset.name}</span>  
                      <div className="text-gray-400 text-xs">{asset.symbol}</div>  
                    </div>  
                  </div>  
                </div>  
                <div className="text-lg font-semibold mb-2">${asset.value}</div>  
                {asset.change !== 0 && (  
                  <div className="flex items-center gap-1">  
                    {asset.positive ? (  
                      <FiTrendingUp className="text-green-500" size={12} />  
                    ) : (  
                      <FiTrendingDown className="text-red-500" size={12} />  
                    )}  
                    <span className={`text-xs font-medium ${asset.positive ? 'text-green-500' : 'text-red-500'}`}>  
                      {asset.positive ? '+' : ''}{asset.change}%  
                    </span>  
                  </div>  
                )}  
              </div>  
            ))}  
          </div>  
        </section>  
      </div>  
      <Footer />  
    </div>  
  );  
};  
  
export default Dashboard;