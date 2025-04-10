"use client";

import { motion } from "framer-motion";

export default function Introanim() {
  const intro = ["I", "n", "t", "r", "o", "d", "u", "c", "t", "i", "o", "n"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="flex justify-center items-center w-full mt-[12%]">
      <motion.div
        className="flex space-x-1 text-4xl font-bold text-green-800 text-center justify-items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {intro.map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
