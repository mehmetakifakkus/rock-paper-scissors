import React from "react";
import Modal from "./Modal";
import Image from "next/image";

type Props = {
  isModelOpen: boolean;
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RulesPopup({ isModelOpen, setIsModelOpen }: Props) {
  return (
    <Modal isOpened={isModelOpen}>
      <header className="flex flex-row justify-between items-center mb-4">
        <span className="text-dark-text font-bold text-[26px] font-barlow">
          RULES
        </span>
        <Image
          src="/images/icon-close.svg"
          className="h-4 w-4 cursor-pointer"
          alt=""
          width={20}
          height={20}
          onClick={() => {
            setIsModelOpen(false);
          }}
          priority
        />
      </header>
      <Image
        src="/images/image-rules.svg"
        className="px-4 pt-4 font-barlow"
        alt=""
        width={320}
        height={320}
      />
    </Modal>
  );
}
