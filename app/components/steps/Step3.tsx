"use client";
import React, { useEffect } from "react";
import StyledIcon, { Location } from "../StyledIcon";
import { pickedToType } from "./utils";
import Header from "./Header";
import { useGameContext } from "@/app/context/gameContext";

type Props = {};

export default function Step3({}: Props) {
  const { userPicked, computerPicked, setStep } = useGameContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(4);
    }, 500);
    return () => clearTimeout(timer);
  }, [userPicked, computerPicked, setStep]);

  return (
    <section className="relative h-[400px] w-[600px]">
      <Header />
      <StyledIcon type={pickedToType(userPicked)} location={Location.Left} />
      <StyledIcon
        type={pickedToType(computerPicked)}
        location={Location.Right}
      />
    </section>
  );
}
