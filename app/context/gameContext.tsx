"use client";

import { SetStateAction, createContext, useContext, useState } from "react";

const GameContext = createContext({
  score: 0,
  isCompleted: false,
  incrementScore: () => {},
  decrementScore: () => {},
  resetScore: () => {},
  markCompleted: () => {},
  resetCompleted: () => {},
});

// create a provider for score context
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
export const useGameContext = () => useContext(GameContext);
