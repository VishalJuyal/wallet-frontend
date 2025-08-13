"use client";  
import React from "react";  
import { useRouter, usePathname } from "next/navigation";  
import { FiHome, FiRefreshCw, FiTrendingUp, FiSettings } from "react-icons/fi";  
  
export default function Footer() {  
  const router = useRouter();  
  const pathname = usePathname();  
  
  const navItems = [  
    { icon: FiHome, path: "/dashboard", label: "Home" },  
    { icon: FiRefreshCw, path: "/swap", label: "Swap" },  
    { icon: FiTrendingUp, path: "/crypto-graphs-analysis", label: "Charts" },  
    { icon: FiSettings, path: "/settings", label: "Settings" },  
  ];  
  
  return (  
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1F1D1F]/95 backdrop-blur-lg border-t border-gray-800/50 px-4 py-3 z-50">  
      <div className="flex justify-around items-center max-w-md mx-auto">  
        {navItems.map((item, index) => {  
          const isActive = pathname === item.path;  
          const Icon = item.icon;  
            
          return (  
            <button  
              key={index}  
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${  
                isActive   
                  ? 'text-purple-400 bg-purple-500/10'   
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'  
              }`}  
              onClick={() => router.push(item.path)}  
            >  
              <Icon size={20} />  
              <span className="text-xs font-medium">{item.label}</span>  
              {isActive && (  
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>  
              )}  
            </button>  
          );  
        })}  
      </div>  
    </footer>  
  );  
}