import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { pressLogos } from "../data/content";

export default function PressLogos() {
  return (
    <section id="press" className="relative bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Media" title="TV Features & Shows" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {pressLogos.map((name) => (
            <span
              key={name}
              className="rounded-lg border border-white/10 bg-ink-soft px-5 py-3 text-sm font-medium uppercase tracking-wide text-bone/60 transition hover:border-gold/40 hover:text-gold"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
