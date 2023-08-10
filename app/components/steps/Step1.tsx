"use client";

import React from "react";
import StyledIcon, { Location, Type } from "../StyledIcon";
import Image from "next/image";
import { useGameContext } from "@/app/context/gameContext";

type Props = {};

export default function Step1({}: Props) {
  const { isLoading } = useGameContext();
  return (
    <>
      {isLoading ? (
        <p className="text-3xl text-white font-barlow mt-[12vh]">Loading...</p>
      ) : (
        <section className="relative h-[300px] w-[320px] sm:h-[400px] sm:w-[700px]">
          <Image
            className="absolute top-[60px] sm:top-[100px] left-[60px] h-[180px] sm:h-[300px] w-[200px] sm:w-[320px] sm:left-[190px] "
            src="/images/bg-triangle.svg"
            width={320}
            height={320}
            alt=""
          />
          <StyledIcon
            type={Type.Paper}
            location={Location.TopLeft}
            selectable={true}
          />
          <StyledIcon
            type={Type.Scissors}
            location={Location.TopRight}
            selectable={true}
          />
          <StyledIcon
            type={Type.Rock}
            location={Location.BottomCenter}
            selectable={true}
          />
        </section>
      )}
    </>
  );
}
