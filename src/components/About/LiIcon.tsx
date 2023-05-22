import { motion, useScroll } from "framer-motion";
import React, { type RefObject } from "react";

interface LiIconProps {
  reference: RefObject<HTMLInputElement>;
}

const LiIcon = ({ reference }: LiIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:h-[60px] md:w-[60px]  xs:h-[40px] xs:w-[40px]"
        width={75}
        height={75}
        viewBox="0 0 100 100"
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className="fill-none stroke-primary stroke-1 dark:stroke-primaryDark"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx={75}
          cy={50}
          r={20}
          className="fill-light stroke-[5px] dark:fill-dark"
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="animate-pulse fill-primary stroke-1 dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
