/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import { LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "~/hooks/useThemeSwitcher";
import { useState } from "react";

interface CustomLink {
  href: string;
  title: string;
  className: string;
  toggle?: any;
}
const CustomLink = ({ href, title, className = "" }: CustomLink) => {
  const pathname = usePathname();
  return (
    <Link className={`${className} group relative`} href={href}>
      {title}

      <span
        className={`ease absolute -bottom-0.5 
      left-0 inline-block h-[1px]
      bg-dark transition-[width] duration-300 group-hover:w-full ${
        pathname === href ? "w-full" : "w-0"
      } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLink) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      className={`${className} group relative my-2 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`ease absolute -bottom-0.5 
      left-0 inline-block h-[1px]
      bg-light transition-[width] duration-300 group-hover:w-full ${
        pathname === href ? "w-full" : "w-0"
      } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden flex-col items-center justify-center lg:flex"
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 translate-y-0.5 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen && (
        <div className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md dark:bg-light/75">
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Project"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex flex-wrap items-center justify-center">
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 w-6"
            >
              <TwitterIcon className="" />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="m-3 w-6"
            >
              <GithubIcon className="" />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="ml-3 w-6"
            >
              <LinkedInIcon className="" />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </div>
      )}

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Project" className="mx-4" />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3 w-6"
          >
            <TwitterIcon className="" />
          </motion.a>
          <motion.a
            href="https://github.com/thetechnerdrohit"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="m-3 w-6"
          >
            <GithubIcon className="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/thetechnerdrohit"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <LinkedInIcon className="" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-5 flex w-7 items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
