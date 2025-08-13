"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiBell, FiEye, FiDollarSign, FiTrendingUp, FiRefreshCw } from "react-icons/fi";

const CryptoPortfolio = () => {
  const [notifications, setNotifications] = useState({
    priceAlerts: true,
    portfolioUpdates: true,
    marketNews: false,
    weeklyReports: true
  });

  const [displaySettings, setDisplaySettings] = useState({
    showBalance: true,
    showPercentages: true,
    currency: "USD",
    refreshInterval: "30"
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleDisplayChange = (key: string, value: string | boolean) => {
    setDisplaySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] text-white">
      <div className="flex-1 p-4 sm:p-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <Link href="/settings">
            <div className="flex items-center gap-3 cursor-pointer hover:text-purple-400 transition-colors">
              <FiArrowLeft size={20} />
              <h1 className="text-2xl font-bold text-purple-500">
                V Wallet
              </h1>
            </div>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Crypto Portfolio Settings
          </h2>
          <p className="text-gray-400 text-base">
            Customize your portfolio display and notification preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FiBell className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Notification Settings
              </h3>
            </div>

            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-[#2C2A2C] rounded-lg">
                  <span className="text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <FiEye className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Display Settings
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-[#2C2A2C] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Show Balance</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={displaySettings.showBalance}
                      onChange={(e) => handleDisplayChange('showBalance', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>

              <div className="p-3 bg-[#2C2A2C] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Show Percentages</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={displaySettings.showPercentages}
                      onChange={(e) => handleDisplayChange('showPercentages', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>

              <div className="p-3 bg-[#2C2A2C] rounded-lg">
                <label className="block text-gray-300 mb-2">Currency</label>
                <select
                  value={displaySettings.currency}
                  onChange={(e) => handleDisplayChange('currency', e.target.value)}
                  className="w-full bg-[#3D3B3D] text-white border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="BTC">BTC (₿)</option>
                </select>
              </div>

              <div className="p-3 bg-[#2C2A2C] rounded-lg">
                <label className="block text-gray-300 mb-2">Auto Refresh (seconds)</label>
                <select
                  value={displaySettings.refreshInterval}
                  onChange={(e) => handleDisplayChange('refreshInterval', e.target.value)}
                  className="w-full bg-[#3D3B3D] text-white border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="15">15 seconds</option>
                  <option value="30">30 seconds</option>
                  <option value="60">1 minute</option>
                  <option value="300">5 minutes</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FiDollarSign className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Portfolio Value</h4>
            <p className="text-gray-400 text-sm">Track your total portfolio worth in real-time</p>
          </div>

          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
            <p className="text-gray-400 text-sm">Monitor gains and losses across all assets</p>
          </div>

          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FiRefreshCw className="text-white" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Auto Sync</h4>
            <p className="text-gray-400 text-sm">Automatic portfolio updates and synchronization</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPortfolio;
