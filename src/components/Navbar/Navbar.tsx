/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import { LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "~/hooks/useThemeSwitcher";

interface CustomLink {
  href: string;
  title: string;
  className: string;
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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
