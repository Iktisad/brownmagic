import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import flyingCircusPoster from "../assets/press/flying-circus-poster.jpg";
import { festivalOriginQuote, festivalStages } from "../data/content";

const posters = { "flying-circus": flyingCircusPoster };

export default function FestivalStages() {
  return (
    <section id="festivals" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Past Festival Stages"
        title="Trusted Across Global Festival Environments"
        description="From underground dancefloors to world-renowned festival stages, Brown Magic delivers high-impact interactive experiences across diverse global audiences."
        align="center"
      />

      <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-white/10 lg:block" />
        {festivalStages.map((stage, i) => (
          <motion.div
            key={stage.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-panel/60 p-6"
          >
            <span className="h-3 w-3 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(242,193,78,0.5)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{stage.year}</span>
            <h3 className="font-display text-xl uppercase leading-tight text-bone">{stage.name}</h3>
            <p className="text-xs uppercase tracking-wide text-bone/40">{stage.place}</p>
            <p className="text-sm leading-relaxed text-bone/70">{stage.description}</p>
            {stage.poster && (
              <img
                src={posters[stage.poster]}
                alt={`${stage.name} lineup credit`}
                className="mt-2 w-full rounded-lg border border-gold/20"
              />
            )}
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-14 max-w-2xl border-l-2 border-gold/60 pl-6 text-center italic text-bone/90 sm:text-left"
      >
        <p className="text-lg leading-relaxed sm:text-xl">"{festivalOriginQuote.text}"</p>
        <p className="mt-3 text-sm not-italic uppercase tracking-wide text-gold">
          {festivalOriginQuote.attribution}
        </p>
      </motion.blockquote>
    </section>
  );
}
