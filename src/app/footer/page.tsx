"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-green-900/30 backdrop-blur-md mt-10 p-6 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-white">
        <div className="flex space-x-6 mb-2">
          <Link href="https://www.github.com/georgeinnerside" target="_parent">
            <GitHubIcon className="w-6 h-6 hover:text-green-600 transition duration-300"  />
          </Link>
          <Link href="https://www.linkedin.com/in/george-bassey-6a0a57239?" target="_parent">
            <LinkedInIcon className="w-6 h-6 hover:text-green-600 transition duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
