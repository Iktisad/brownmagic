import { motion } from "framer-motion";
import heroPortrait from "../assets/press/hero-portrait-profile.jpg";
import { statIcons } from "./icons";
import { brand, heroStats, socialStats } from "../data/content";

function Hook({ text }) {
  const parts = text.split(/[{}]/);
  return (
    <p className="max-w-lg text-lg leading-relaxed text-bone/70">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="text-gold not-italic">
            {part}
          </em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen flex-col overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-20">
        <img
          src={heroPortrait}
          alt="Farhan, Brown Magic, profile portrait"
          className="h-full w-full object-cover object-[75%_25%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-30" />
      <div className="animate-blob pointer-events-none absolute -left-32 top-10 h-96 w-96 -z-10 rounded-full bg-violet-500/30 blur-3xl mix-blend-screen" />
      <div className="animate-blob-delay pointer-events-none absolute -right-24 top-1/3 h-[28rem] w-[28rem] -z-10 rounded-full bg-cyan-400/20 blur-3xl mix-blend-screen" />
      <div className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 -z-10 rounded-full bg-gold/20 blur-3xl mix-blend-screen" />

      <div className="relative mx-auto mt-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <h1 className="font-display text-6xl uppercase leading-[0.92] sm:text-7xl lg:text-8xl">
            <span className="text-gradient-iridescent">Brown</span>
            <br />
            <span className="text-bone">Magic</span>
          </h1>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-bone/60">
            {brand.tagline}
          </span>

          <Hook text={brand.hook} />

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-gold-soft"
            >
              Book Now
            </a>
            <a
              href={`https://instagram.com/${brand.instagram.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-bone/30 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-bone transition hover:border-gold hover:text-gold"
            >
              Watch Showreel
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-5 pt-6 sm:grid-cols-4">
            {heroStats.map((stat) => {
              const Icon = statIcons[stat.icon];
              return (
                <div key={stat.label} className="flex flex-col items-start gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  {stat.value && <span className="font-display text-lg text-bone">{stat.value}</span>}
                  <span className="text-xs uppercase leading-tight tracking-wide text-bone/50">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 pt-2 text-sm text-bone/50">
            {socialStats.map((stat) => (
              <span key={stat.platform}>
                <span className="font-semibold text-gold">{stat.value}</span> {stat.platform} {stat.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
