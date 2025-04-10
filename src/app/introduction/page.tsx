"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Introduction() {
  const name = "George Bassey.".split("");
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
      className="flex flex-col md:flex-row justify-center items-center px-5 m-[10%]"
    >
      <Image
        src="/profile.jpg"
        width={300}
        height={300}
        alt="profile picture"
      />
      <motion.div className="max-w-md ml-8">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            visiible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="text-white text-xl leading-relaxed py-5"
        >
          Hi Everyone, my name is{" "}
          {name.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl text-green-800 font-bold"
            >
              {char}
            </motion.span>
          ))}
        </motion.p>{" "}
        <motion.p className="text-white text-xl leading-relaxed">
          I'm a Frontend Developer, I love to create responsive web app that is
          user friendly and accessible. My stacks are: React and Nextjs
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
