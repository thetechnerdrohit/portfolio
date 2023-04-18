import React from "react";
import Index from "../Index";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Index className="py-8 flex items-center justify-between">
        <span>Rights</span>
        <Link href="/">CodeBucks</Link>
        <Link href="/">Say hello</Link>
      </Index>
    </footer>
  );
};

export default Footer;
