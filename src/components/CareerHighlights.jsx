import { motion } from "framer-motion";
import { CheckIcon } from "./icons";
import { careerHighlights } from "../data/content";

export default function CareerHighlights() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28">
      <div className="rounded-2xl border border-white/10 bg-panel/60 p-8 sm:p-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Career Highlights</p>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {careerHighlights.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-bone/80"
            >
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
