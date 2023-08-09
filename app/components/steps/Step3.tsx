// http://localhost:3000/step3?picked=paper&computer=rock

"use client";
import React, { useEffect } from "react";
import StyledIcon, { Location } from "../StyledIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { pickedToType } from "./utils";
import Header from "./Header";

type Props = {};

export default function Step3({}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const picked = searchParams.get("picked");
  const computer = searchParams.get("computer");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(`/step4?picked=${picked}&computer=${computer}`);
    }, 500);
    return () => clearTimeout(timer);
  }, [picked, computer, router]);

  return (
    <section className="relative h-[400px] w-[600px]">
      <Header />
      <StyledIcon type={pickedToType(picked)} location={Location.Left} />
      <StyledIcon type={pickedToType(computer)} location={Location.Right} />
    </section>
  );
}
