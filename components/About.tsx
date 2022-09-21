import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

type Props = { about: any };

const About = ({ about }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(about?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">litte</span>{" "}
          background
        </h4>
        <p className="text-base">
          I&apos;m Rohit. Here&apos;s a bit about me... I&apos;ve been coding
          for over 4+ years. As a full stack developer. I&apos;ve worked with
          both startups and large corporations to help build & scale their
          compaines,
        </p>
      </div>
    </motion.div>
  );
};

export default About;
