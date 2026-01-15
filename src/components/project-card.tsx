"use client";

import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags?: string[];
  image?: string;
  video?: string;
  links?: Array<{ href: string; icon: React.ReactNode; type: string }>;
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
}: Props) {
  const router = useRouter();

  return (
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
        flex flex-col
        w-full
        max-w-[320px]
        h-full
        cursor-pointer
        border-1
        p-2
        transition-all
        duration-300
        ease-out
        hover:scale-[1.015]
        hover:shadow-lg
        dark:hover:shadow-none
        focus:outline-none
      "
    >
      {/* Media */}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-40 w-full object-cover"
        />
      )}

      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full object-cover"
        />
      )}

      {/* Content */}
      <CardHeader className="px-2">
        <CardTitle className="text-base">{title}</CardTitle>
        {dates && <time className="text-xs">{dates}</time>}
        <Markdown className="prose text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
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
}
