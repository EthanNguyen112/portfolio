"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";

type Command = {
  id: string;
  label: string;
  group: string;
  keywords?: string;
  run: () => void;
};

export const OPEN_PALETTE_EVENT = "open-command-palette";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const { theme, setTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const goTo = (id: string) => () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  const openUrl = (url: string) => () =>
    window.open(url, "_blank", "noopener,noreferrer");

  const commands: Command[] = useMemo(
    () => [
      { id: "hero", label: "Go to top", group: "Navigate", run: goTo("hero") },
      { id: "about", label: "About", group: "Navigate", run: goTo("about") },
      { id: "work", label: "Work experience", group: "Navigate", keywords: "jobs museumsoft l3harris", run: goTo("work") },
      { id: "education", label: "Education", group: "Navigate", run: goTo("education") },
      { id: "skills", label: "Skills", group: "Navigate", run: goTo("skills") },
      { id: "projects", label: "Projects", group: "Navigate", run: goTo("projects") },
      { id: "resume", label: "Resume section", group: "Navigate", run: goTo("resume") },
      { id: "contact", label: "Contact", group: "Navigate", run: goTo("contact") },
      { id: "pdf", label: "Open resume PDF", group: "Links", keywords: "download cv", run: openUrl("/Resume/Nguyen_Ethan_Resume_2026.pdf") },
      { id: "github", label: "GitHub", group: "Links", run: openUrl(DATA.contact.social.GitHub.url) },
      { id: "linkedin", label: "LinkedIn", group: "Links", run: openUrl(DATA.contact.social.LinkedIn.url) },
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        group: "Preferences",
        keywords: "theme dark light",
        run: () => setTheme(theme === "dark" ? "light" : "dark"),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme, setTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.group} ${c.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Open via Cmd/Ctrl+K or a custom event (used by the navbar button)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  // Keep the highlighted row visible
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [index]);

  const runAt = (i: number) => {
    const cmd = filtered[i];
    if (!cmd) return;
    close();
    setTimeout(cmd.run, 0);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(index);
    } else if (e.key === "Escape") {
      close();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-lg overflow-hidden rounded-xl border bg-white text-black shadow-2xl dark:bg-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIndex(0);
              }}
              onKeyDown={onInputKey}
              placeholder="Type a command or search…"
              aria-controls="palette-list"
              aria-activedescendant={filtered[index] ? `cmd-${filtered[index].id}` : undefined}
              className="w-full border-b bg-transparent px-4 py-3 text-sm outline-none placeholder:text-neutral-500"
            />
            <ul
              id="palette-list"
              ref={listRef}
              role="listbox"
              className="max-h-72 overflow-y-auto p-2"
            >
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-neutral-500">
                  No results
                </li>
              )}
              {filtered.map((c, i) => (
                <li
                  key={c.id}
                  id={`cmd-${c.id}`}
                  role="option"
                  aria-selected={i === index}
                  data-index={i}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => runAt(i)}
                  className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm ${
                    i === index ? "bg-neutral-100 dark:bg-neutral-800" : ""
                  }`}
                >
                  <span>{c.label}</span>
                  <span className="text-xs text-neutral-500">{c.group}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}