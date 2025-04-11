"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  _id,
  title,
  img,
  link,
}: {
  _id: number;
  title: string;
  img: string;
  link: string;
}) {
  return (
    <motion.section className="border-2 rounded-md border-green-800 w-fit flex flex-col justify-center items-center mt-5">
      <Link href={link}>
        {" "}
        <Image src={img} width={350} height={350} alt={title} />
      </Link>
    </motion.section>
  );
}
