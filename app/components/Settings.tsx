"use client";
import React from "react";
import Link from "next/link";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <div className="absolute top-6 left-6">
        <Link href="/dashboard">
          <h1 className="text-3xl font-bold text-purple-500 cursor-pointer">
            V Wallet
          </h1>
        </Link>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8">Settings</h2>
          <div className="flex flex-col gap-6">
            <Link
              href="/crypto-portfolio"
              className="block w-96 bg-[#1F1D1F] text-white py-3 px-8 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
            >
              Crypto Portfolio
            </Link>
            <Link
              href="/change-password"
              className="block w-96 bg-[#1F1D1F] text-white py-3 px-8 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
            >
              Change Password
            </Link>
            <Link
              href="/change-profile"
              className="block w-96 bg-[#1F1D1F] text-white py-3 px-8 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
            >
              Change Profile
            </Link>
            <Link
              href="/terms-and-conditions"
              className="block w-96 bg-[#1F1D1F] text-white py-3 px-8 rounded-lg text-center font-medium hover:bg-purple-600 transition-all duration-200"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/"
              className="block w-96 bg-red-600 text-white py-3 px-8 rounded-lg text-center font-medium hover:bg-red-700 transition-all duration-200"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;