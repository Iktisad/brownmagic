import { motion } from "framer-motion";
import legacyAccent from "../assets/press/legacy-accent.jpg";
import { legacyQuote } from "../data/content";

export default function Legacy() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pb-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="mb-2 h-40 w-40 overflow-hidden rounded-full border border-gold/20 grayscale">
          <img src={legacyAccent} alt="Brown Magic, close-up" className="h-full w-full object-cover" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {legacyQuote.eyebrow}
        </span>
        <p className="font-display text-2xl uppercase leading-snug text-bone sm:text-3xl">
          "{legacyQuote.text}"
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-bone/50">{legacyQuote.attribution}</p>

        <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6">
          <p className="max-w-lg text-base italic leading-relaxed text-bone/80">"{legacyQuote.advice}"</p>
          <p className="text-xs uppercase tracking-wide text-bone/40">{legacyQuote.adviceAttribution}</p>
        </div>
      </motion.div>
    </section>
  );
}
