"use client";

import { useEffect } from "react";
import Chart from "chart.js/auto";

const HistoryChart = () => {
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

    const newChartInstance = new Chart("chartCanvas", {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Bitcoin Price (USD)",
            data: prices,
            borderColor: "#1E90FF",
            backgroundColor: "white",
            tension: 0.4,
          },
        ],
      },
    });

    return () => {
      newChartInstance.destroy();
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1>Sample Data (not real)</h1>
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <canvas id="chartCanvas" />
      </div>
    </div>
  );
};

export default HistoryChart;
