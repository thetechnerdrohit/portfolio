import React from "react";
import Index from "../Index";
import Image from "next/image";
import profilePic from "../../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../Navbar/Icons";
import HireMe from "./HireMe";

const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Index className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={profilePic}
              alt="TheTechNerdRohit"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-8xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="RohitChauhan.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:thetechnerdrohit@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Index>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="RohitChauhan" className="w-full h-auto" />
      </div>
    </main>
  );
};

export default Home;
