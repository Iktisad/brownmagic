import { motion } from "framer-motion";
import fanCard1 from "../assets/press/fan-card-1.jpg";
import fanCard2 from "../assets/press/fan-card-2.jpg";
import { experienceClosing, experienceFeatures, experienceIntro } from "../data/content";

function CollageImage({ src, alt, className = "" }) {
  return (
    <div className={`absolute overflow-hidden rounded-lg ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative h-180 sm:h-205"
          >
            <CollageImage
              src={fanCard2}
              alt="A crowd reacting with surprise around Brown Magic"
              className="right-0 top-0 h-96 w-3/4 rotate-2 shadow-2xl sm:h-112"
            />
            <CollageImage
              src={fanCard1}
              alt="A guest laughing during a Brown Magic close-up moment"
              className="bottom-0 left-0 z-10 h-96 w-3/4 -rotate-2 shadow-2xl sm:h-112"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <span className="hover-glitch inline-block w-fit text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {experienceIntro.eyebrow}
            </span>
            <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">
              Festival Performance Description
            </h2>

            <p className="text-base leading-relaxed text-bone/70 sm:text-lg">{experienceIntro.lead}</p>

            <p className="text-lg font-medium leading-relaxed text-gold sm:text-xl">
              {experienceIntro.highlight}
            </p>

            <ul className="flex flex-col gap-3">
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
        </div>
      </div>
    </section>
  );
}
