"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-950/30 w-[90%] backdrop-blur-md max-w-5xl px-6 py-4 flex justify-between items-center shadow-lg rounded-xl">
      <div className="text-white font-bold text-2xl tracking-wide">
        <h1>Innerside.dev</h1>
      </div>
      <ul className="hidden md:flex justify-between space-x-8 text-white text-base font-medium">
        <li className="hover:text-green-700 transition">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-green-700 transition">
          <Link href="/about">About</Link>
        </li>

        <li className="hover:text-green-700 transition">
          {" "}
          <Link href="/projects">Projects </Link>
        </li>
      </ul>

      {/* mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* mobile view */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[63px] right-0 w-1/2 bg-green-950/30 text-white flex flex-col item-center gap-4 p-4 shadow-xl rounded-xl"
        >
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-700 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-green-700 transition">
            Projects
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
