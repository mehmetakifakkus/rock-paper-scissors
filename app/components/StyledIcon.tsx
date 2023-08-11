"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useGameContext } from "../context/gameContext";

const CONTAINER_WIDTH = 160;
const IMAGE_WIDTH = 60;

type Props = {
  type: Type;
  location: Location;
  selectable?: boolean;
  state?: "win" | "lose" | "tie";
};

export enum Location {
  TopLeft = 1,
  TopRight = 2,
  BottomCenter = 3,
  Left = 4,
  Right = 5,
  RightMost = 6,
}

export enum Type {
  Paper = "paper",
  Rock = "rock",
  Scissors = "scissors",
  null = "null",
}

const TypeMap = {
  [Type.Paper]: {
    color: "border-paper-end",
    shadow: " shadow-[0px_0.4em_0px_0px_rgba(0,0,0,0.3)] ",
  }, // bg-gradient-to-b from-paper-start to-paper-end
  [Type.Rock]: {
    color: "border-rock-start",
    shadow: " shadow-[0px_0.4em_0px_0px_rgba(0,0,0,0.3)] ",
  },
  [Type.Scissors]: {
    color: "border-scissors-start",
    shadow: " shadow-[0px_0.4em_0px_0px_rgba(0,0,0,0.3)] ",
  },
  [Type.null]: {
    color: "bg-gradient-radial-end",
    shadow: " shadow-[0px_0.4em_0px_0px] shadow-radial-end ",
  },
};

const getLocation = (location: Location, isMobile: boolean) => {
  const width = isMobile ? CONTAINER_WIDTH * 0.6 : CONTAINER_WIDTH;
  const locationMap = {
    [Location.TopLeft]: {
      top: `${(isMobile ? 40 : 80) - width / 2}px`,
      left: `${(isMobile ? 50 : 180) - width / 2}px`,
    },
    [Location.TopRight]: {
      top: `${(isMobile ? 40 : 80) - width / 2}px`,
      left: `${(isMobile ? 250 : 480) - width / 2}px`,
    },
    [Location.BottomCenter]: {
      top: `${(isMobile ? 200 : 320) - width / 2}px`,
      left: `${(isMobile ? 150 : 330) - width / 2}px`,
    },
    [Location.Left]: {
      top: `${(isMobile ? 60 : 220) - width / 2}px`,
      left: `${(isMobile ? 60 : 100) - width / 2}px`,
      transform: isMobile ? "scale(1.2)" : "scale(1.52)",
    },
    [Location.Right]: {
      top: `${(isMobile ? 60 : 220) - width / 2}px`,
      left: `${(isMobile ? 240 : 480) - width / 2}px`,
      transform: isMobile ? "scale(1.2)" : "scale(1.52)",
    },
    [Location.RightMost]: {
      top: `${(isMobile ? 60 : 220) - width / 2}px`,
      left: `${(isMobile ? 240 : 660) - width / 2}px`,
      transform: isMobile ? "scale(1.2)" : "scale(1.52)",
    },
  };
  return locationMap[location];
};

const createCircle = (x: number, y: number, radius: number) => (
  <div
    style={{
      width: 2 * radius,
      height: 2 * radius,
      left: x - radius,
      top: y - radius,
      borderRadius: "50%",
      position: "absolute",
      backgroundColor: "white",
      opacity: 0.05,
      zIndex: -1,
    }}
  />
);

export default function StyledIcon({
  type,
  location,
  selectable = false,
  state,
}: Props) {
  const { setUserPicked, setStep, isMobile } = useGameContext();

  return (
    <>
      {state === "win" &&
        location === Location.Left &&
        (isMobile ? (
          <>
            {createCircle(70, 70, 200)} {createCircle(70, 70, 160)}
            {createCircle(70, 70, 120)}
          </>
        ) : (
          <>
            {createCircle(120, 240, 300)} {createCircle(120, 240, 250)}
            {createCircle(120, 240, 200)}
          </>
        ))}
      {state === "win" &&
        location === Location.RightMost &&
        (isMobile ? (
          <>
            {createCircle(240, 70, 200)} {createCircle(240, 70, 160)}
            {createCircle(240, 70, 120)}
          </>
        ) : (
          <>
            {createCircle(680, 240, 300)} {createCircle(680, 240, 250)}
            {createCircle(680, 240, 200)}
          </>
        ))}
      <section
        className={
          "absolute flex items-center justify-center h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] bg-white rounded-full " +
          TypeMap[type].color +
          TypeMap[type].shadow +
          (type === Type.null
            ? " bg-gray-400 h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]"
            : " border-[12px] sm:border-[20px]") +
          (selectable ? " cursor-pointer filter hover:saturate-200" : "") +
          (state === "lose" ? " filter grayscale" : "")
        }
        onClick={() => {
          if (!selectable) return;
          setUserPicked(type);
          setStep(2);
        }}
        style={{
          ...getLocation(location, isMobile),
          // boxShadow: "hsl(349, 66%, 40%) 0px 0.4em",
        }}
      >
        {type !== Type.null && (
          <Image
            src={`/images/icon-${type}.svg`}
            width={isMobile ? IMAGE_WIDTH * 0.66 : IMAGE_WIDTH}
            height={isMobile ? IMAGE_WIDTH * 0.66 : IMAGE_WIDTH}
            alt=""
            priority
          />
        )}
      </section>
    </>
  );
}
