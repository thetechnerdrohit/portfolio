import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer hover"
    >
      <Image
        width={100}
        height={100}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale
        transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 translate duration-300 ease-in-out 
        group-hover:bg-white h-24 w-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
