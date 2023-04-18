import React from "react";
import Index from "../Index";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Index className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Rohit Chauhan
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2">Say hello</Link>
      </Index>
    </footer>
  );
};

export default Footer;
