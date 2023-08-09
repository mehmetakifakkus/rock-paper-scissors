"use client";

import React, { useEffect } from "react";
import StyledIcon, { Location, Type } from "../StyledIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { generateComputerPick, pickedToType } from "./utils";
import Header from "./Header";

type Props = {};

export default function Step2({}: Props) {
  const searchParams = useSearchParams();
  const picked = searchParams.get("picked");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/step3?picked=${picked}&computer=${generateComputerPick()}`);
    }, 500);
    return () => clearTimeout(timer);
  }, [picked, router]);

  return (
    <section className="relative h-[400px] w-[600px]">
      <Header />
      <StyledIcon type={pickedToType(picked)} location={Location.Left} />
      <StyledIcon type={Type.null} location={Location.Right} />
    </section>
  );
}
