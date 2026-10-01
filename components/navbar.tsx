"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { PROFILE } from "@/lib/data";

const LINKS = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Escape closes the menu; lock page scroll while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // If the window grows to desktop size, close the mobile menu
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav aria-label="Main" className="flex items-center justify-between py-5">
      <a href="#top" className="font-head text-lg font-extrabold">
        {PROFILE.name}
      </a>

      {/* Desktop links */}
      <ul className="hidden gap-6 font-medium text-muted md:flex">
        {LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="hover:text-ink">
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile only) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 cursor-pointer rounded-lg p-2 md:hidden"
      >
        <FaBars className="size-6" aria-hidden="true" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel that slides in from the top */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-paper shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-head text-lg font-extrabold">
            {PROFILE.name}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="-mr-2 cursor-pointer rounded-lg p-2"
          >
            <FaXmark className="size-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="px-6 pb-8">
          {LINKS.map((l) => (
            <li key={l} className="border-t border-line">
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-4 font-head text-2xl font-semibold hover:text-accent"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
