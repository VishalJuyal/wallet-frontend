import React from "react";
import HistoryChart from "../components/HistoryChart";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
      <Header />
      <HistoryChart />
      <Footer />
    </div>
  );
}
