"use client";
import React, { useState } from "react";
import { getCurrentYear } from "../common/utils";
import Ethereum from "../images/ethereumSign.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#131216] gap-20">
      <div className="flex flex-col justify-between h-[90%] w-[50%] max-w-lg p-8">
        <div>
          <h1 className="text-white text-2xl font-bold mb-4">
            V Crypto Wallet
          </h1>
          <p className="text-gray-400 text-base">
            Platform where you can buy and exchange crypto.
          </p>
        </div>
        <Image src={Ethereum} width={380} height={380} alt="ethereum image" />
        <p className="text-gray-500 text-sm mt-6">
          © {getCurrentYear()} All rights reserved
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center w-[40%] max-w-md bg-[#1F1D1F] rounded-lg shadow-lg p-6">
        <div className="w-full">
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-400 font-medium mb-2 focus:outline-none"
              >
                Email :
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-400 font-medium mb-2"
              >
                Password :
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="mr-2 bg-[#2C2A2C] border-[#3D3B3D]"
                  onClick={() => setShowPassword(!showPassword)}
                />
                Show password
              </label>
              <a href="#" className="text-purple-400 text-sm hover:underline">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="/signup" className="text-purple-400 hover:underline">
              New user? Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
