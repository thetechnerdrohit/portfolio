"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="mt-2 flex items-center justify-center">
      <MotionLink
        href="/"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-solid border-transparent bg-dark text-2xl font-bold text-light dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        RC
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
