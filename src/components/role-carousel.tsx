"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Computer Engineer",
  "Software Engineer",
  "Mobile Phone Technician",
  "Tech Enthusiast",
  "Lifelong Learner",
];

export default function BlurFadeRoles({ delay = 0 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.45,
            delay,
            ease: "easeOut",
          }}
          className="md:text-xl font-medium text-black dark:text-white"
          >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
