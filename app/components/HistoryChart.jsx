"use client";  
import { useEffect, useState } from "react";  
import Chart from "chart.js/auto";  
import { FiTrendingUp, FiActivity, FiBarChart } from "react-icons/fi";  
  
const HistoryChart = () => {  
  const [isLoading, setIsLoading] = useState(true);  
  const [chartInstance, setChartInstance] = useState(null);  
  
  useEffect(() => {  
    const historicalData = [  
      { date: "Jan 2024", price: 43500 },  
      { date: "Feb 2024", price: 42000 },  
      { date: "Mar 2024", price: 41000 },  
      { date: "Apr 2024", price: 44000 },  
      { date: "May 2024", price: 46000 },  
      { date: "Jun 2024", price: 45500 },  
      { date: "Jul 2024", price: 47000 },  
      { date: "Aug 2024", price: 48000 },  
      { date: "Sep 2024", price: 49000 },  
      { date: "Oct 2024", price: 50000 },  
      { date: "Nov 2024", price: 52000 },  
      { date: "Dec 2024", price: 53000 },  
    ];  
  
    const labels = historicalData.map((item) => item.date);  
    const prices = historicalData.map((item) => item.price);  
  
    const timer = setTimeout(() => {  
      // Destroy existing chart if it exists  
      if (chartInstance) {  
        chartInstance.destroy();  
      }  
  
      const canvas = document.getElementById("chartCanvas");  
      if (!canvas) return;  
  
      const newChartInstance = new Chart(canvas, {  
        type: "line",  
        data: {  
          labels,  
          datasets: [  
            {  
              label: "Bitcoin Price (USD)",  
              data: prices,  
              borderColor: "#8B5CF6",  
              backgroundColor: "rgba(139, 92, 246, 0.1)",  
              tension: 0.4,  
              borderWidth: 3,  
              pointBackgroundColor: "#8B5CF6",  
              pointBorderColor: "#FFFFFF",  
              pointBorderWidth: 2,  
              pointRadius: 6,  
              pointHoverRadius: 8,  
              fill: true,  
            },  
          ],  
        },  
        options: {  
          responsive: true,  
          maintainAspectRatio: false,  
          plugins: {  
            legend: {  
              display: true,  
              position: 'top',  
              labels: {  
                color: '#E5E7EB',  
                font: {  
                  size: 14,  
                  weight: 'bold'  
                }  
              }  
            },  
            tooltip: {  
              backgroundColor: 'rgba(31, 29, 31, 0.95)',  
              titleColor: '#FFFFFF',  
              bodyColor: '#E5E7EB',  
              borderColor: '#8B5CF6',  
              borderWidth: 1,  
            }  
          },  
          scales: {  
            x: {  
              grid: {  
                color: 'rgba(75, 85, 99, 0.3)',  
              },  
              ticks: {  
                color: '#9CA3AF',  
              }  
            },  
            y: {  
              grid: {  
                color: 'rgba(75, 85, 99, 0.3)',  
              },  
              ticks: {  
                color: '#9CA3AF',  
                callback: function(value) {  
                  return '$' + value.toLocaleString();  
                }  
              }  
            }  
          }  
        }  
      });  
  
      setChartInstance(newChartInstance);  
      setIsLoading(false);  
    }, 1000);  
  
    return () => {  
      clearTimeout(timer);  
      if (chartInstance) {  
        chartInstance.destroy();  
      }  
    };  
  }, []);  
  
  return (  
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] text-white">  
      {/* Header Section */}  
      <div className="p-4 sm:p-6 lg:p-8">  
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">  
          <div>  
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">  
              Crypto Analysis  
            </h1>  
            <p className="text-gray-400 text-sm sm:text-base">Track Bitcoin price movements over time</p>  
          </div>  
          <div className="flex items-center gap-2 mt-4 sm:mt-0">  
            <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">  
              <FiTrendingUp className="text-green-500" size={16} />  
              <span className="text-green-500 text-sm font-medium">+21.95%</span>  
            </div>  
          </div>  
        </div>  
  
        {/* Stats Cards */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">  
          <div className="bg-gradient-to-r from-[#1F1D1F] to-[#252325] p-4 sm:p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">  
            <div className="flex items-center gap-3 mb-3">  
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">  
                <FiActivity className="text-purple-400" size={20} />  
              </div>  
              <div>  
                <p className="text-gray-400 text-sm">Current Price</p>  
                <p className="text-xl font-bold">$53,000</p>  
              </div>  
            </div>  
          </div>  
            
          <div className="bg-gradient-to-r from-[#1F1D1F] to-[#252325] p-4 sm:p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">  
            <div className="flex items-center gap-3 mb-3">  
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">  
                <FiTrendingUp className="text-green-400" size={20} />  
              </div>  
              <div>  
                <p className="text-gray-400 text-sm">24h High</p>  
                <p className="text-xl font-bold">$54,200</p>  
              </div>  
            </div>  
          </div>  
            
          <div className="bg-gradient-to-r from-[#1F1D1F] to-[#252325] p-4 sm:p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">  
            <div className="flex items-center gap-3 mb-3">  
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">  
                <FiBarChart className="text-blue-400" size={20} />  
              </div>  
              <div>  
                <p className="text-gray-400 text-sm">Market Cap</p>  
                <p className="text-xl font-bold">$1.05T</p>  
              </div>  
            </div>  
          </div>  
        </div>  
  
        {/* Chart Container */}  
        <div className="bg-gradient-to-r from-[#1A1A2E] to-[#16213E] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-gray-800/50">  
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">  
            <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2 sm:mb-0">  
              Bitcoin Price History  
            </h2>  
            <div className="flex items-center gap-2 text-sm text-gray-400">  
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>  
              <span>Sample Data (Not Real)</span>  
            </div>  
          </div>  
            
          <div className="relative">  
            {isLoading && (  
              <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A2E]/80 rounded-xl z-10">  
                <div className="flex flex-col items-center gap-3">  
                  <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>  
                  <p className="text-gray-400 text-sm">Loading chart data...</p>  
                </div>  
              </div>  
            )}  
              
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">  
              <canvas id="chartCanvas" className="w-full h-full" />  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  
  
export default HistoryChart;