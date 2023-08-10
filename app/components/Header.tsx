"use client";
import Image from "next/image";
import React from "react";
import { useGameContext } from "../context/gameContext";

type Props = {};

export default function Header({}: Props) {
  const { score, isLoading } = useGameContext();

  return (
    <div className="flex justify-between px-3 sm:px-5 py-4 border-2 border-gray-500 min-w-[300px] w-[calc(100vw-16px)] sm:max-w-[700px] h-[108px] sm:w-[700px] sm:h-[150px] rounded-2xl">
      <Image
        src="/images/logo.svg"
        alt="logo"
        className="w-[100px] h-[72px] sm:w-[168px] sm:h-[112px] pt-[6px] sm:pl-[6px]"
        width={142}
        height={90}
        priority
      />
      <div className="w-[100px] sm:w-[150px] p-1 sm:p-3 flex flex-col items-center bg-white rounded-lg">
        <span className="font-barlow tracking-widest text-blue-700">SCORE</span>
        <span className="text-[36px] sm:text-[64px] leading-[36px] sm:leading-[64px] font-barlow font-bold text-gray-600">
          {isLoading ? "-" : score}
        </span>
      </div>
    </div>
  );
}
