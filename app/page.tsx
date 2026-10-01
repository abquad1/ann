import { PROFILE, SOCIALS, SKILLS } from "@/lib/data";
import HeroChart from "@/components/hero";
import Projects from "@/components/projects";
import SocialIcon from "@/components/social-icons";
import Navbar from "@/components/navbar";
import HeroText from "@/components/hero-text";

const H2 =
  "mb-7 font-head text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight tracking-tight";
const SECTION = "border-t border-line py-4";
const WRAP = "mx-auto max-w-full px-4 md:px-24";

export default function Home() {
  return (
    <>
      <div className={WRAP}>
        <Navbar />

        <header
          id="top"
          className="grid items-end gap-10 pb-16 pt-8 md:grid-cols-[1.1fr_.9fr] md:pb-20 md:pt-8"
        >
          <div>
            <HeroText />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg border-[1.5px] border-accent bg-accent px-5 py-3 font-medium text-accent-ink"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="rounded-lg border-[1.5px] border-ink px-5 py-3 font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>
          <HeroChart />
        </header>
      </div>

      <section id="about" className={SECTION}>
        <div className={WRAP}>
          <h2 className={H2}>About</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="max-w-[60ch] space-y-3.5">
              {PROFILE.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="border-l-[3px] border-accent pl-5">
              {PROFILE.facts.map((f) => (
                <li key={f.label} className="py-2">
                  <b className="block font-head text-[1.05rem]">{f.label}</b>
                  <span className="text-muted">{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className={SECTION}>
        <div className={WRAP}>
          <h2 className={H2}>Projects</h2>
          <Projects />
        </div>
      </section>

      <section id="skills" className={SECTION}>
        <div className={WRAP}>
          <h2 className={H2}>Skills</h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-2.5 font-head text-lg font-semibold">
                  {group}
                </h3>
                <ul className="space-y-1 text-muted">
                  {items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={SECTION}>
        <div className={WRAP}>
          <h2 className={H2}>Contact</h2>
          <p className="max-w-[55ch] text-muted">{PROFILE.contactIntro}</p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-5 inline-flex items-center gap-3 font-head text-[clamp(1.3rem,4vw,2rem)] font-semibold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
          >
            <SocialIcon name="email" className="size-6" /> {PROFILE.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-line bg-panel px-4 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.icon} className="size-[18px]" /> {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-sm text-muted">
        <div className={WRAP}>
          &copy; {new Date().getFullYear()} {PROFILE.name}. Based in{" "}
          {PROFILE.location}.
        </div>
      </footer>
    </>
  );
}
