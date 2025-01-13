"use client";
import React from "react";
import Phone from "../images/phone.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function GetStarted() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="bg-[#000000] p-10 flex flex-col items-center justify-center h-screen">
      <Image
        src={Phone}
        width={400}
        height={400}
        alt="Phone Illustration"
        className="mb-2"
      />
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Your Personal Crypto Wallet
      </h1>
      <p className="text-lg text-white mb-8 text-center">
        Safe, secure, and support near hundred cryptocurrencies.
      </p>
      <button
        onClick={redirectToLogin}
        className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white text-center"
      >
        Get Started
      </button>
    </div>
  );
}

export default GetStarted;
