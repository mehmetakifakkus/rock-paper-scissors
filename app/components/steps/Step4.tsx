"use client";
import React, { useEffect } from "react";
import StyledIcon, { Location } from "../StyledIcon";
import { useSearchParams } from "next/navigation";
import { pickedToType } from "./utils";
import Header from "./Header";
import { useRouter } from "next/navigation";
import { useGameContext } from "@/app/context/gameContext";

type Props = {};

export default function Step3({}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const picked = searchParams.get("picked");
  const computer = searchParams.get("computer");

  const { incrementScore, decrementScore } = useGameContext();

  const determineWinner = () => {
    if (picked === computer) {
      return "tie";
    } else if (
      (picked === "paper" && computer === "rock") ||
      (picked === "rock" && computer === "scissors") ||
      (picked === "paper" && computer === "scissors") ||
      (picked === "scissors" && computer === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  const state = determineWinner();

  useEffect(() => {
    if (state === "win") {
      incrementScore();
    } else if (state === "lose") {
      decrementScore();
    }
  }, []);

  return (
    <section className="relative h-[400px] w-[800px]">
      <Header />
      <StyledIcon type={pickedToType(picked)} location={Location.Left} />
      <div className="flex flex-col h-[320px] justify-center items-center">
        <h1 className="text-[44px] text-white font-barlow font-bold mb-4">
          {state === "tie" ? "TIE" : `YOU ${state.toUpperCase()}`}
        </h1>
        <button
          onClick={() => {
            router.replace(`/step1`);
          }}
          className="text-gray-800 text-[16px] px-8 py-1 h-10 rounded-md bg-white leading-[8px] tracking-[2px] hover:text-rock-start"
        >
          Play Again
        </button>
      </div>
      <StyledIcon
        type={pickedToType(computer)}
        location={Location.RightMost}
        state={determineWinner()}
      />
    </section>
  );
}
