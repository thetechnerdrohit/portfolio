import React from "react";
import { CircularText } from "../Navbar/Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-auto w-48 items-center justify-center">
        <CircularText className="animate-spin-slow fill-dark dark:fill-light" />
        <Link
          href="mailto:thetechnerdrohit@gmail.com"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-dark bg-dark font-semibold text-light shadow-md hover:border-dark hover:bg-light dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
