"use client";

import Image from "next/image";
import React from "react";
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
  [Type.Paper]: { color: "border-paper-end" }, // bg-gradient-to-b from-paper-start to-paper-end
  [Type.Rock]: { color: "border-rock-start" },
  [Type.Scissors]: { color: "border-scissors-start" },
  [Type.null]: { color: "bg-gradient-radial-end" },
};

const locationMap = {
  [Location.TopLeft]: {
    top: `${80 - CONTAINER_WIDTH / 2}px`,
    left: `${180 - CONTAINER_WIDTH / 2}px`,
  },
  [Location.TopRight]: {
    top: `${80 - CONTAINER_WIDTH / 2}px`,
    left: `${480 - CONTAINER_WIDTH / 2}px`,
  },
  [Location.BottomCenter]: {
    top: `${320 - CONTAINER_WIDTH / 2}px`,
    left: `${330 - CONTAINER_WIDTH / 2}px`,
  },
  [Location.Left]: {
    top: `${220 - CONTAINER_WIDTH / 2}px`,
    left: `${100 - CONTAINER_WIDTH / 2}px`,
    transform: "scale(1.56)",
  },
  [Location.Right]: {
    top: `${220 - CONTAINER_WIDTH / 2}px`,
    left: `${480 - CONTAINER_WIDTH / 2}px`,
    transform: "scale(1.56)",
  },
  [Location.RightMost]: {
    top: `${220 - CONTAINER_WIDTH / 2}px`,
    left: `${660 - CONTAINER_WIDTH / 2}px`,
    transform: "scale(1.56)",
  },
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
  const { setUserPicked, setStep } = useGameContext();

  return (
    <>
      {state === "win" && location === Location.Left && (
        <>
          {createCircle(120, 240, 300)} {createCircle(120, 240, 250)}
          {createCircle(120, 240, 200)}
        </>
      )}
      {state === "win" && location === Location.RightMost && (
        <>
          {createCircle(680, 240, 300)} {createCircle(680, 240, 250)}
          {createCircle(680, 240, 200)}
        </>
      )}
      <section
        className={
          "absolute flex items-center justify-center h-[200px] w-[200px] bg-white rounded-full " +
          TypeMap[type].color +
          (type === Type.null ? " " : " h-[160px] w-[160px]  border-[20px]") +
          (selectable ? " cursor-pointer filter hover:saturate-200" : "") +
          (state === "lose" ? " filter grayscale" : "")
        }
        onClick={() => {
          if (!selectable) return;
          setUserPicked(type);
          setStep(2);
        }}
        style={locationMap[location]}
      >
        {type !== Type.null && (
          <Image
            src={`/images/icon-${type}.svg`}
            width={IMAGE_WIDTH}
            height={IMAGE_WIDTH}
            alt=""
            priority
          />
        )}
      </section>
    </>
  );
}
