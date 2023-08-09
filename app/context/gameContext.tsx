"use client";

import { SetStateAction, createContext, useContext, useState } from "react";
import { Type } from "../components/StyledIcon";

const GameContext = createContext({
  score: 0,
  isCompleted: false,
  incrementScore: () => {},
  decrementScore: () => {},
  resetScore: () => {},
  markCompleted: () => {},
  resetCompleted: () => {},
  userPicked: Type.null,
  computerPicked: Type.null,
  setUserPicked: (value: SetStateAction<Type>) => {},
  setComputerPicked: (value: SetStateAction<Type>) => {},
  step: 1,
  setStep: (value: SetStateAction<number>) => {},
});

// create a provider for score context
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userPicked, setUserPicked] = useState<Type>(Type.null);
  const [computerPicked, setComputerPicked] = useState<Type>(Type.null);
  const [step, setStep] = useState(1);

  const incrementScore = () => {
    console.log("incrementing score");
    setScore((prevScore) => prevScore + 1);
  };

  const decrementScore = () => {
    console.log("decrementing score");
    setScore((prevScore) => prevScore - 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const markCompleted = () => {
    setIsCompleted(true);
  };

  const resetCompleted = () => {
    setIsCompleted(false);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        incrementScore,
        decrementScore,
        resetScore,
        isCompleted,
        markCompleted,
        resetCompleted,
        userPicked,
        computerPicked,
        setUserPicked,
        setComputerPicked,
        step,
        setStep,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
export const useGameContext = () => useContext(GameContext);
