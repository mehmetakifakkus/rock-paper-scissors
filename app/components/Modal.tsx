import React from "react";

type Props = {
  isOpened: boolean;
  children?: React.ReactNode;
};

export default function Modal({ isOpened, children }: Props) {
  return (
    <>
      {isOpened && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-saturate-50">
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-[340px] blur-none">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
