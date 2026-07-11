import { motion } from "framer-motion";
import { CheckIcon } from "./icons";
import signaturePoster from "../assets/press/signature-poster-latest.jpg";
import { careerHighlights, pressFeatures, signatureShow } from "../data/content";

function Cell({ className = "", delay = 0, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border border-white/10 bg-panel/60 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function FeaturedBento() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Cell className="p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Career Highlights</p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {careerHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-bone/80">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Cell>

        <Cell className="p-8" delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Featured Articles</p>
          <div className="flex flex-col">
            {pressFeatures.map((feature, i) => {
              return (
                <a
                  key={feature.publication}
                  href={feature.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-start gap-3 py-4 ${i > 0 ? "border-t border-white/10" : "pt-0"}`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                      As Featured In {feature.publication}
                    </span>
                    <p className="font-display text-base uppercase leading-snug text-bone">{feature.headline}</p>
                    <p className="text-xs leading-relaxed text-bone/50">{feature.snippet}</p>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold transition group-hover:translate-x-1">
                      Read the Feature →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </Cell>
      </div>

      <Cell
        className="relative isolate mt-4 grid grid-cols-1 gap-6 overflow-hidden p-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center"
        delay={0.2}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-violet-500/10 via-transparent to-gold/10" />

        <div className="w-full overflow-hidden rounded-xl">
          <img src={signaturePoster} alt="The Mentalist — Live in Dhaka show poster" className="w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {signatureShow.eyebrow}
          </span>
          <h3 className="font-display text-xl uppercase leading-tight text-bone sm:text-2xl">
            {signatureShow.title}
          </h3>
          <p className="text-xs uppercase tracking-wide text-bone/40">
            {signatureShow.venue} · {signatureShow.date}
          </p>
          <p className="text-sm leading-relaxed text-bone/70">{signatureShow.description}</p>
        </div>
      </Cell>
    </section>
  );
}
