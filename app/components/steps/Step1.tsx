"use client";

import React from "react";
import StyledIcon, { Location, Type } from "../StyledIcon";
import Image from "next/image";

type Props = {};

export default function Step1({}: Props) {
  return (
    <section className="relative h-[400px] w-[700px]">
      <Image
        className="absolute top-[100px] left-[190px] h-[300px] w-[320px]"
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
  );
}
