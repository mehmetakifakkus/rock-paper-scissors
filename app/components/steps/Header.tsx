import { useGameContext } from "@/app/context/gameContext";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  const { isMobile } = useGameContext();

  return (
    <section
      className={`flex flex-row relative " + ${isMobile ? "mt-48" : "mt-6"}`}
    >
      <span className="absolute left-4 sm:left-[60px] text-white text-base sm:text-xl leading-[8px] font-barlow tracking-wider">
        YOU PICKED
      </span>
      <span className="absolute right-1 sm:right-[12px] text-white text-base sm:text-xl leading-[8px] font-barlow tracking-wider">
        THE HOUSE PICKED
      </span>
    </section>
  );
}
