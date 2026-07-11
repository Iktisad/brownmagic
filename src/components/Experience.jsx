import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import fanCard1 from "../assets/press/fan-card-1.jpg";
import fanCard2 from "../assets/press/fan-card-2.jpg";
import { experienceClosing, experienceFeatures, experienceIntro } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow={experienceIntro.eyebrow} title="Festival Performance Description" />

            <p className="text-base leading-relaxed text-bone/70 sm:text-lg">{experienceIntro.lead}</p>

            <p className="text-lg font-medium leading-relaxed text-gold sm:text-xl">
              {experienceIntro.highlight}
            </p>

            <ul className="flex flex-col gap-4">
              {experienceFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-bone/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-bone/60">
              {experienceClosing.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="overflow-hidden rounded-2xl aspect-3/4">
              <img
                src={fanCard1}
                alt="A guest laughing during a Brown Magic close-up moment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl aspect-3/4">
              <img
                src={fanCard2}
                alt="A crowd reacting with surprise around Brown Magic"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
