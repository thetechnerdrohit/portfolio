import React from "react";
import Link from "next/link";
import Layout from "../Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium dark:border-light dark:text-light sm:text-base">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Rohit Chauhan
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
