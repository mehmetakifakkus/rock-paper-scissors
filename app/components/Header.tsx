"use client";
import Image from "next/image";
import React from "react";
import { useGameContext } from "../context/gameContext";

type Props = {};

export default function Header({}: Props) {
  const { score, isLoading } = useGameContext();

  return (
    <div className="flex flex-row justify-between px-5 py-4 border-2 border-gray-500 w-[700px] h-[150px] rounded-2xl">
      <Image
        src="/images/logo.svg"
        alt="logo"
        className="w-[168px] h-[112px] pt-[6px] pl-[6px]"
        width={142}
        height={90}
        priority
      />
      <div className="w-[150px] p-3 flex flex-col items-center bg-white rounded-lg">
        <span className="font-barlow tracking-widest text-blue-700">SCORE</span>
        <span className="text-[64px] leading-[64px] font-barlow font-bold text-gray-600">
          {isLoading ? "-" : score}
        </span>
      </div>
    </div>
  );
}
