"use client";

import { motion } from "framer-motion";

interface BlurFadeTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function BlurFadeText({
  text,
  delay = 0,
  className = "",
}: BlurFadeTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(6px)", y: 0 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
      className={`inline-flex align-baseline leading-none ${className}`}
    >
      {text}
    </motion.span>
  );
}
