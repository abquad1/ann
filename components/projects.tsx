"use client";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import { PROJECTS } from "@/lib/data";

const TAGS = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const list = PROJECTS.filter(
    (p) => active === "All" || p.tags.includes(active),
  );

  return (
    <>
      <div
        className="mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by tag"
      >
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={t === active}
            onClick={() => setActive(t)}
            className="cursor-pointer rounded-full border-[1.5px] border-line px-4 py-1.5 text-[15px] font-medium transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper"
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-line bg-panel p-6"
          >
            <h3 className="mb-2 font-head text-[1.35rem] font-semibold leading-tight tracking-tight">
              {p.title}
            </h3>
            <p className="flex-1 text-muted">{p.description}</p>
            {p.result && (
              <p className="mt-3.5 border-t border-dashed border-line pt-3.5 font-medium">
                {p.result}
              </p>
            )}
            <ul className="mb-1 mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-paper px-2.5 py-0.5 text-[13px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-3.5 flex gap-4 font-medium text-accent">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                >
                  <FaArrowUpRightFromSquare
                    className="size-3.5"
                    aria-hidden="true"
                  />{" "}
                  View project
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                >
                  <FaCode className="size-4" aria-hidden="true" /> Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
