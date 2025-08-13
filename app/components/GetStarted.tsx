"use client";  
import React, { useState, useEffect } from "react";  
import Phone from "../images/phone.svg";  
import Image from "next/image";  
import { useRouter } from "next/navigation";  
import { FiShield, FiTrendingUp, FiUsers, FiArrowRight, FiStar } from "react-icons/fi";  
  
function GetStarted() {  
  const router = useRouter();  
  const [isLoading, setIsLoading] = useState(false);  
  const [animateStats, setAnimateStats] = useState(false);  
  
  useEffect(() => {  
    const timer = setTimeout(() => setAnimateStats(true), 500);  
    return () => clearTimeout(timer);  
  }, []);  
  
  const redirectToLogin = async () => {  
    setIsLoading(true);  
    await new Promise(resolve => setTimeout(resolve, 800)); // Smooth transition  
    router.push("/login");  
  };  
  
  const features = [  
    { icon: FiShield, title: "Bank-Grade Security", desc: "Multi-layer encryption" },  
    { icon: FiTrendingUp, title: "Real-Time Trading", desc: "Live market data" },  
    { icon: FiUsers, title: "24/7 Support", desc: "Expert assistance" }  
  ];  
  
  const stats = [  
    { value: "100+", label: "Cryptocurrencies" },  
    { value: "50K+", label: "Active Users" },  
    { value: "99.9%", label: "Uptime" }  
  ];  
  
  return (  
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#16213E] text-white overflow-hidden relative">  
      {/* Animated Background Elements */}  
      <div className="absolute inset-0 overflow-hidden">  
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>  
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>  
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>  
      </div>  
  
      {/* Main Content */}  
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">  
          
        {/* Hero Section */}  
        <div className="text-center max-w-4xl mx-auto">  
            
          {/* Trust Badge */}  
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">  
            <FiStar className="text-yellow-400" size={16} />  
            <span className="text-sm font-medium">Trusted by 50,000+ users worldwide</span>  
          </div>  
  
          {/* Main Heading */}  
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">  
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">  
              Your Personal  
            </span>  
            <br />  
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">  
              Crypto Wallet  
            </span>  
          </h1>  
  
          {/* Enhanced Description */}  
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">  
            Safe, secure, and supporting <span className="text-purple-400 font-semibold">100+ cryptocurrencies</span>.   
            Start your crypto journey with enterprise-grade security and intuitive design.  
          </p>  
  
          {/* Phone Image with Enhanced Styling */}  
          <div className="relative mb-12">  
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl transform scale-110"></div>  
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl">  
              <Image  
                src={Phone}  
                width={320}  
                height={320}  
                alt="V Wallet Mobile App"  
                className="mx-auto transform hover:scale-105 transition-transform duration-500"  
                priority  
              />  
            </div>  
          </div>  
  
          {/* Enhanced CTA Button */}  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">  
            <button  
              onClick={redirectToLogin}  
              disabled={isLoading}  
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"  
            >  
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>  
              <div className="relative flex items-center justify-center gap-2">  
                {isLoading ? (  
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>  
                ) : (  
                  <>  
                    <span>Get Started</span>  
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />  
                  </>  
                )}  
              </div>  
            </button>  
              
            <div className="text-sm text-gray-400">  
              Free to download • No hidden fees  
            </div>  
          </div>  
  
          {/* Stats Section */}  
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">  
            {stats.map((stat, index) => (  
              <div key={index} className="text-center">  
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${animateStats ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>  
                  {stat.value}  
                </div>  
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>  
              </div>  
            ))}  
          </div>  
  
          {/* Features Grid */}  
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">  
            {features.map((feature, index) => {  
              const Icon = feature.icon;  
              return (  
                <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">  
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">  
                    <Icon className="text-purple-400" size={24} />  
                  </div>  
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>  
                  <p className="text-gray-400 text-sm">{feature.desc}</p>  
                </div>  
              );  
            })}  
          </div>  
        </div>  
      </div>  
  
      {/* Bottom Gradient */}  
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>  
    </div>  
  );  
}  
  
export default GetStarted;