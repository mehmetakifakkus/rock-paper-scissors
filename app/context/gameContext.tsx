"use client";

import {
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Type } from "../components/StyledIcon";
import StringCrypto from "string-crypto";

const GameContext = createContext({
  score: 0,
  step: 1,
  userPicked: "null",
  computerPicked: "null",
  isLoading: true,
  isMobile: false,
  incrementScore: () => {},
  decrementScore: () => {},
  resetScore: () => {},
  setUserPicked: (value: SetStateAction<Type>) => {},
  setComputerPicked: (value: SetStateAction<Type>) => {},
  setStep: (value: SetStateAction<number>) => {},
});

const { encryptString, decryptString } = new StringCrypto();
const password = "password123Osm";

// create a provider for score context
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);
  const [userPicked, setUserPicked] = useState<Type>(Type.null);
  const [computerPicked, setComputerPicked] = useState<Type>(Type.null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setMobileView] = useState(false);
  const [step, setStep] = useState(1);
  console.log(isMobile);

  useEffect(() => {
    setMobileView(window.innerWidth < 640);

    const handleWindowResize = () => {
      setMobileView(window.innerWidth < 640);
      console.log("--", isMobile, window.innerHeight, window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (step === 4) {
      let encryptedString = encryptString(score, password);
      localStorage.setItem("score", encryptedString);
    }
    if (step === 1) {
      const decryptedScore = localStorage.getItem("score");
      const decryptedString =
        decryptedScore === null ? "0" : decryptString(decryptedScore, password);
      setScore(decryptedString ? parseInt(decryptedString) : 0);
      setIsLoading(false);
    }
  }, [score, step]);

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

  return (
    <GameContext.Provider
      value={{
        score,
        incrementScore,
        decrementScore,
        resetScore,
        userPicked,
        computerPicked,
        setUserPicked,
        setComputerPicked,
        step,
        setStep,
        isLoading,
        isMobile,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
export const useGameContext = () => useContext(GameContext);
