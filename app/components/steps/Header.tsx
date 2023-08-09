import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <section className="flex flex-row relative mt-6">
      <span className="absolute left-[88px] text-white text-xl leading-[8px] font-barlow tracking-wider">
        YOU PICKED
      </span>
      <span className="absolute right-[56px] text-white text-xl leading-[8px] font-barlow tracking-wider">
        THE HOUSE PICKED
      </span>
    </section>
  );
}
