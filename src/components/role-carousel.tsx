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
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, filter: "blur(6px)", y: 0 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        exit={{ opacity: 0, filter: "blur(6px)", y: 0 }}
        transition={{
          duration: 0.45,
          delay,
          ease: "easeOut",
        }}
        className="inline-flex leading-none align-baseline"
        >
        {roles[index]}
      </motion.span>

    </AnimatePresence>
  );
}
