"use client";
import React from "react";
import Link from "next/link";
import { FiUser, FiLock, FiEdit3, FiFileText, FiLogOut, FiChevronRight, FiPieChart } from "react-icons/fi";

const Settings = () => {
  const settingsItems = [
    {
      icon: FiPieChart,
      title: "Crypto Portfolio",
      description: "View and manage your cryptocurrency holdings",
      href: "/crypto-portfolio",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: FiLock,
      title: "Change Password",
      description: "Update your account security credentials",
      href: "/change-password",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: FiUser,
      title: "Change Profile",
      description: "Edit your personal information and preferences",
      href: "/change-profile",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: FiFileText,
      title: "Terms and Conditions",
      description: "Review our terms of service and privacy policy",
      href: "/terms-and-conditions",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] text-white">
      <div className="flex-1 p-4 sm:p-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard">
            <h1 className="text-2xl font-bold text-purple-500 cursor-pointer hover:text-purple-400 transition-colors">
              V Wallet
            </h1>
          </Link>
        </div>

        {/* Settings Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Settings
          </h2>
          <p className="text-gray-400 text-base">
            Manage your account preferences and security settings
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.href}>
                <div className="bg-[#1F1D1F] hover:bg-[#252325] transition-all duration-300 p-6 rounded-xl shadow-lg border border-gray-800/30 hover:border-gray-700/50 group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <FiChevronRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout Section */}
        <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-600/30 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <FiLogOut className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Log Out
                </h3>
                <p className="text-gray-400 text-sm">
                  Sign out of your account securely
                </p>
              </div>
            </div>
            <Link href="/">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
                Sign Out
              </button>
            </Link>
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Contact our support team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
