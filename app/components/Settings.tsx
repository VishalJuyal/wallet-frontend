"use client";
import React from "react";
import Link from "next/link";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center py-10 px-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-purple-500">V Wallet</h1>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-8">Settings</h2>

      {/* Links */}
      <div className="w-full max-w-md flex flex-col gap-6">
        <Link
          href="/crypto-portfolio"
          className="block w-full bg-[#1F1D1F] text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
        >
          Crypto Portfolio
        </Link>
        <Link
          href="/change-password"
          className="block w-full bg-[#1F1D1F] text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
        >
          Change Password
        </Link>
        <Link
          href="/change-profile"
          className="block w-full bg-[#1F1D1F] text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
        >
          Change Profile
        </Link>
        <Link
          href="/terms-and-conditions"
          className="block w-full bg-[#1F1D1F] text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
        >
          Terms and Conditions
        </Link>
        <Link
          href="/"
          className="block w-full bg-red-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-red-700 transition-all duration-200"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Settings;
