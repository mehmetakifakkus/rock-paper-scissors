"use client";
import { useState } from "react";
import RulesPopup from "./components/RulesPopup";
import RulesButton from "./components/RulesButton";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import { useGameContext } from "./context/gameContext";

export default function Home() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { step } = useGameContext();

  return (
    <>
      <RulesPopup isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
      <RulesButton setOpened={setIsModelOpen} />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </>
  );
}
