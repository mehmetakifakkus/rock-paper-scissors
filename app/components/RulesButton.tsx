"use client";

import React from "react";

type Props = { setOpened: React.Dispatch<React.SetStateAction<boolean>> };

export default function RulesButton({ setOpened }: Props) {
  return (
    <button
      onClick={() => {
        setOpened(true);
      }}
      className="fixed bottom-8 right-8 w-[132px] border px-6 py-2 font-barlow text-center border-gray-200 rounded-md bg-transparent cursor-pointer"
    >
      <span className="text-white text leading-[8px] tracking-[2px]">
        RULES
      </span>
    </button>
  );
}
