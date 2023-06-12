import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-primary dark:bg-primaryDark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
