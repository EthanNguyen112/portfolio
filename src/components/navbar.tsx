"use client";

import { useState, useRef, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);          // dropdown container
  const buttonRef = useRef<HTMLButtonElement>(null);             // hamburger button

  // CLICK OUTSIDE HANDLER
  useEffect(() => {
    interface ClickOutsideEvent extends MouseEvent {
      target: EventTarget | null;
    }

    function handleClickOutside(event: ClickOutsideEvent): void {
      // If dropdown is closed, do nothing
      if (!open) return;

      const dropdownEl: HTMLDivElement | null = containerRef.current;
      const buttonEl: HTMLButtonElement | null = buttonRef.current;

      // If click is outside BOTH the dropdown and the button → close
      if (
      dropdownEl &&
      !dropdownEl.contains(event.target as Node) &&
      buttonEl &&
      !buttonEl.contains(event.target as Node)
      ) {
      setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    
    <div className="pointer-events-none fixed inset-0 z-30">

      {/* TOP LEFT NAME */}
    <div className="pointer-events-auto fixed top-4 left-4 z-50">
      <Link
        href="/"
      
        className="text-2xl font-bold tracking-tighter sm:text-5xl dark:text-white bckdrop-blur-xl bg-white/50 dark:bg-black/30 p-full py-2 rounded-lg border border-black/10 dark:border-white/10">
        Ethan Nguyen's Portfolio
      </Link>

    </div>

      {/* BOTTOM GRADIENT */}
      <div
        className="
        fixed bottom-0 inset-x-0 h-16 w-full 
        bg-[linear-gradient(to_top,rgba(79,70,229,0.4),rgba(0,0,0,0))] 
        dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0))] 
        backdrop-blur-xl 
        [-webkit-mask-image:linear-gradient(to_top,black,transparent)]
      "
      ></div>

      {/* TOP RIGHT MENU */}
      <div className="pointer-events-auto fixed top-4 right-4 z-50 flex flex-col items-end">

        {/* HAMBURGER / X BUTTON */}
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-10 bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 transition-colors"
          )}
        >
          <div className="transition-transform duration-200">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </div>
        </button>

        {/* DROPDOWN */}
        <div
          ref={containerRef}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out origin-top",
            open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          )}
        >
          <div
            className="flex flex-col gap-3 p-4 rounded-xl shadow-xl bg-white/80 dark:bg-black/70 backdrop-blur-2xl border border-black/10 dark:border-white/10">

            {/* Theme toggle */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center">
                  <ModeToggle />
                </div>
              </TooltipTrigger>
            </Tooltip>

            <Separator />

            {/* LinkedIn */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <DATA.contact.social.LinkedIn.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>

            {/* GitHub */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10"
                  )}
                >
                  <DATA.contact.social.GitHub.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>

          </div>
        </div>
      </div>
    </div>
  );
}
