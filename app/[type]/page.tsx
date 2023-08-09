"use client";

import React, { useState } from "react";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";
import RulesPopup from "../components/RulesPopup";
import RulesButton from "../components/RulesButton";

type Props = {
  params: { type: string };
};

export default function Page({ params }: Props) {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <RulesPopup isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
      <RulesButton setOpened={setIsModelOpen} />

      {params.type === "step1" && <Step1 />}
      {params.type === "step2" && <Step2 />}
      {params.type === "step3" && <Step3 />}
      {params.type === "step4" && <Step4 />}
    </>
  );
}
