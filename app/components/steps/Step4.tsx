"use client";
import React, { useEffect } from "react";
import StyledIcon, { Location } from "../StyledIcon";
import { pickedToType } from "./utils";
import Header from "./Header";
import { useGameContext } from "@/app/context/gameContext";

type Props = {};

export default function Step4({}: Props) {
  const {
    incrementScore,
    decrementScore,
    setStep,
    userPicked,
    computerPicked,
  } = useGameContext();

  const determineWinner = () => {
    if (userPicked === computerPicked) {
      return "tie";
    } else if (
      (userPicked === "paper" && computerPicked === "rock") ||
      (userPicked === "rock" && computerPicked === "scissors") ||
      (userPicked === "scissors" && computerPicked === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  const state = determineWinner();

  useEffect(() => {
    console.log("--");
    if (state === "win") {
      incrementScore();
    } else if (state === "lose") {
      decrementScore();
    }
  }, [state]);

  return (
    <section className="relative h-[300px] w-[320px] sm:h-[400px] sm:w-[800px]">
      <Header />
      <StyledIcon
        type={pickedToType(userPicked)}
        location={Location.Left}
        state={state}
      />
      <div className="flex flex-col h-[320px] justify-center items-center">
        <h1 className="text-[44px] text-white font-barlow font-bold mb-4">
          {state === "tie" ? "TIE" : `YOU ${state.toUpperCase()}`}
        </h1>
        <button
          onClick={() => {
            setStep(1);
          }}
          className="text-gray-800 text-[16px] px-8 py-1 h-10 rounded-md bg-white leading-[8px] tracking-[2px] hover:text-rock-start"
        >
          Play Again
        </button>
      </div>
      <StyledIcon
        type={pickedToType(computerPicked)}
        location={Location.RightMost}
        state={state === "win" ? "lose" : state === "lose" ? "win" : state}
      />
    </section>
  );
}
