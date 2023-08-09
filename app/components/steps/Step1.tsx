"use client";

import React from "react";
import StyledIcon, { Location, Type } from "../StyledIcon";
import Image from "next/image";

type Props = {};

export default function Step1({}: Props) {
  return (
    <section className="relative h-[400px] w-[600px]">
      <Image
        className="absolute top-[80px] left-[180px] h-[220px] w-[240px]"
        src="/images/bg-triangle.svg"
        width={240}
        height={240}
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
