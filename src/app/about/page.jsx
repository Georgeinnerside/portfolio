"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.8,
        transition: "easeIn",
        delay: 0,
      }}
      className="flex flex-col md:flex-row justify-center items-center px-5 mt-[10%]"
    >
      <motion.div className="max-w-md">
        <motion.h1 className="text-emerald-500 hover:text-white text-3xl font-bold text-center px-[5rem]">
          About
        </motion.h1>
        <p className="text-white text-xl text-center leading-relaxed">
          I'm a Front End Developer with a passion to build to builder user
          friendly and resposnsive applications. The excitment of bringing ideas
          to life through writing code is exciting and has driven me to be
          passionate abiut what web development. I hjave understood what it
          takes to transforn designs into functional, responsive and user
          friendly web application. I am constantly working hard to imporove and
          open to learning more on the space by collaborating with other
          experienced developers. My goal is to be a majorn contributor in the
          tech space by bringing new ideas to life.
        </p>
      </motion.div>
      <Image
        src="/office.jpg"
        width={400}
        height={400}
        alt="office"
        className="py-6 px-5"
      />
    </motion.section>
  );
}
