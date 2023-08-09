"use client";
import Image from "next/image";
import React from "react";
import { useGameContext } from "../context/gameContext";

type Props = {};

export default function Header({}: Props) {
  const { score, isLoading } = useGameContext();

  return (
    <div className="flex flex-row justify-between px-[18px] py-[14px] border-2 border-gray-500 w-[590px] h-[126px] rounded-xl">
      <Image
        src="/images/logo.svg"
        alt="logo"
        className="w-[142px] h-[90px] pt-[6px] pl-[6px]"
        width={142}
        height={90}
      />
      <div className="w-[128px] p-3 flex flex-col items-center bg-white rounded-lg">
        <span className="text-sm font-barlow tracking-widest text-blue-700">
          SCORE
        </span>
        <span className="text-[52px] leading-[52px] font-barlow font-bold text-gray-600">
          {isLoading ? "-" : score}
        </span>
      </div>
    </div>
  );
}
