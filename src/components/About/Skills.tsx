/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, positionX = 0, positionY = 0, className }: any) => {
  return (
    <motion.div
      className={`${className} absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark`}
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x: positionX,
        y: positionY,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-8xl font-bold">Skills</h2>
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight">
        <Skill name="Full Stack" className="!p-6" />

        <Skill name="Team Management" positionX="-18vw" positionY="-22vw" />
        <Skill name="Product Research" positionX="0vw" positionY="-22vw" />
        <Skill name="Product Research" positionX="18vw" positionY="-22vw" />
        
        <Skill name="HTML" positionX="-5vw" positionY="-5vw" />
        <Skill name="CSS" positionX="-10vw" positionY="-10vw" />
        <Skill name="Javascript" positionX="-15vw" positionY="-15vw" />

        <Skill name="ReactJs" positionX="5vw" positionY="-5vw" />
        <Skill name="NextJs" positionX="10vw" positionY="-10vw" />
        <Skill name="NestJs" positionX="15vw" positionY="-15vw" />

        <Skill name="Firebase" positionX="-10vw" positionY="0vw" />
        <Skill name="Tailwind CSS" positionX="-20vw" positionY="0vw" />
        <Skill name="Material UI" positionX="-30vw" positionY="0vw" />
        
        <Skill name="NodeJs" positionX="-5vw" positionY="5vw" />
        <Skill name="NoSQL" positionX="-10vw" positionY="10vw" />
        <Skill name="SQL" positionX="-15vw" positionY="15vw" />

        <Skill name="GCP" positionX="10vw" positionY="0vw" />
        <Skill name="AWS" positionX="20vw" positionY="0vw" />
        <Skill name="Docker" positionX="30vw" positionY="0vw" />

        <Skill name="Upcoming 1" positionX="5vw" positionY="5vw" />
        <Skill name="Upcoming 2" positionX="10vw" positionY="10vw" />
        <Skill name="Upcoming 3" positionX="15vw" positionY="15vw" />
      </div>
    </>
  );
};

export default Skills;