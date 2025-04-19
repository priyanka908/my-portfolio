"use client";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "Tech Learner",
  "Project Management",
  "React and Node.JS Learner",
  "Web Developer",
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundBeamsWithCollision>
      <div
        className="min-h-[70vh] md:h-[40rem] w-full rounded-md flex
        flex-col items-center relative overflow-hidden mx-auto px-4 py-8 md:py-0"
      >
        <div className="pt-16 md:pt-24 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white 
              bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
          >
            Hi! I am Priyanka
          </motion.h1>

          <div className="h-10 mt-6 text-xl md:text-2xl font-semibold text-neutral-200">
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-base md:text-xl font-light text-neutral-300 mt-6 max-w-3xl mx-auto leading-snug px-2">
            Motivated Full Stack Developer, currently exploring real world projects hosted in platforms like Vercel and GitHub 
          </p>

          <div className="mt-8">
            <Link href="#projects">
              <Button
                borderRadius="1.75rem"
                className="text-base px-4 py-2 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default HeroSection;
