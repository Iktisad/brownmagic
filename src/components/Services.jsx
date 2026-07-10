import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { performanceOptions } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Performance Options"
        title="Built Around Your Event"
        description="From intimate close-up magic to full-stage mentalism — tailored to weddings, corporate events, festivals, and VIP experiences."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {performanceOptions.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`flex flex-col gap-4 rounded-2xl border p-8 ${
              tier.featured ? "border-gold/50 bg-gold/[0.08]" : "border-white/10 bg-panel/60"
            }`}
          >
            <h3 className="font-display text-xl uppercase leading-tight text-bone">{tier.name}</h3>
            <p className="text-sm leading-relaxed text-bone/70">{tier.description}</p>

            <ul className="flex flex-col gap-2">
              {tier.useCases.map((useCase) => (
                <li key={useCase} className="flex items-center gap-2 text-sm text-bone/80">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {useCase}
                </li>
              ))}
            </ul>

            <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Duration: {tier.duration}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
