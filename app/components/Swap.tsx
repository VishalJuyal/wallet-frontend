"use client";
import React, { useEffect } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Swap() {
  useEffect(() => {
    const metaMaskApiCall = async () => {
      if (!window.ethereum) {
        console.error("MetaMask is not installed!");
        return;
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const accounts = await provider.send("eth_requestAccounts", []);
        console.log("Connected accounts:", accounts);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };

    metaMaskApiCall();
  }, []);

  return (
    <div>
      <h1>Swap</h1>
    </div>
  );
}
