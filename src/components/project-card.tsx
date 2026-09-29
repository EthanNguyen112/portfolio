"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags?: string[];
  image?: string;
  video?: string;
  links?: Array<{ href: string; icon: React.ReactNode; type: string }>;
  isActive?: boolean;
  enableTilt?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  isActive = true,
  enableTilt = true,
}: Props) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (isActive) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [isActive]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 25,
  });

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current;
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rectRef.current = null;
  };

  const cardContent = (
    <Card
      role="link"
      tabIndex={0}
      onClick={() => href && window.open(href, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if (e.key === "Enter" && href) {
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }}
      className="
        relative
        overflow-visible
        flex flex-col
        w-full
        h-full
        cursor-pointer
        border-1
        p-2
        transition-shadow
        duration-300
        ease-out
        hover:shadow-lg
        dark:hover:shadow-none
        focus:outline-none
      "
    >
      {/* Media */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          playsInline
          preload="metadata"
          className="pointer-events-none h-40 w-full object-cover"
        />
      )}

      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          sizes="(max-width: 640px) 90vw, 320px"
          className="h-40 w-full object-cover"
        />
      )}

      {/* Content */}
      <CardHeader className="px-2">
        <CardTitle className="text-base">{title}</CardTitle>
        {dates && <time className="text-xs">{dates}</time>}
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </CardHeader>

      {/* Tags */}
      <CardContent className="mt-auto px-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {/* Footer links (do not trigger card click) */}
      <CardFooter className="px-2 pb-2">
        {links?.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <Badge className="flex gap-2 px-2 py-1 text-[10px]">
              {link.icon}
              {link.type}
            </Badge>
          </a>
        ))}
      </CardFooter>
    </Card>
  );

  if (!enableTilt) {
    return <div className="w-full h-full">{cardContent}</div>;
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="w-full h-full"
    >
      {cardContent}
    </motion.div>
  );
}