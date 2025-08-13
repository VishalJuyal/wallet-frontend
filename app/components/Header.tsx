import React from "react";
import { FaBell } from "react-icons/fa";
import UserImage from "../images/defaultUser.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#0A0A0A] pt-4 text-white p-6">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image
            src={UserImage}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-semibold text-base text-white">
            Welcome back, Vishal
          </span>
        </div>
        <FaBell
          size={24}
          className="cursor-pointer text-gray-400 hover:text-white"
        />
      </header>
    </div>
  );
}
