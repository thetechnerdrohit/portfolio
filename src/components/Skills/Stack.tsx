import { motion } from "framer-motion";
import React, { type ReactNode } from "react";

interface IStackProps {
  children: ReactNode;
}
const Stack = ({ children }: IStackProps) => {
  return (
    <motion.div
      initial={{ x: 50 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring" }}
      whileHover={{
        scale: 1.1,
      }}
      className="m-4 flex items-center justify-center overflow-hidden rounded-md border border-primary p-5 text-center text-7xl opacity-95 shadow-lg dark:border-primaryDark/60"
    >
      {children}
    </motion.div>
  );
};

export default Stack;
