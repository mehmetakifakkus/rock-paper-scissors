"use client";

import React from "react";

type Props = { setOpened: React.Dispatch<React.SetStateAction<boolean>> };

export default function RulesButton({ setOpened }: Props) {
  return (
    <button
      onClick={() => {
        setOpened(true);
      }}
      className="fixed bottom-6 right-[26px] w-[108px]  border p-1 font-barlow text-center border-gray-200 rounded-md bg-transparent cursor-pointer"
    >
      <span className="text-white text-sm leading-[8px] tracking-[2px]">
        RULES
      </span>
    </button>
  );
}
