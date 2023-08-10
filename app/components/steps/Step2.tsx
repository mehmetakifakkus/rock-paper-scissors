"use client";

import React, { useEffect } from "react";
import StyledIcon, { Location, Type } from "../StyledIcon";
import { generateComputerPick, pickedToType } from "./utils";
import Header from "./Header";
import { useGameContext } from "@/app/context/gameContext";

type Props = {};

export default function Step2({}: Props) {
  const { userPicked, setComputerPicked, setStep, isMobile } = useGameContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setComputerPicked(generateComputerPick());
      setStep(3);
    }, 500);
    return () => clearTimeout(timer);
  }, [userPicked, setComputerPicked, setStep]);

  return (
    <section className="relative h-[300px] w-[320px] sm:h-[400px] sm:w-[600px]">
      <Header />
      <StyledIcon type={pickedToType(userPicked)} location={Location.Left} />
      <StyledIcon type={Type.null} location={Location.Right} />
    </section>
  );
}
