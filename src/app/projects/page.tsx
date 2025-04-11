"use client";

import { motion } from "framer-motion";
import { projectData } from "../data";
import ProjectCard from "../component/projectcard/ProjectCard";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
      className="flex flex-col justify-center items-center mt-[10%] mb-[10%]"
    >
      <h1 className="font-extrabold text-3xl text-green-700 text-center">
        My Projects
      </h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full pb-24 justify-items-center">
        {projectData.map(({ id, title, img, link }) => {
          return (
            <ProjectCard
              key={id}
              title={title}
              img={img}
              link={link}
              _id={id}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
}
