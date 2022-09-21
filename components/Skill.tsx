import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer hover">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200 }}
        transition={{ duration: .8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale
        transition duration-300 ease-in-out"
      ></motion.img>
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
    </div>
  );
};

export default Skill;
