import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";
import socialCrowd from "../assets/press/social-crowd.jpg";
import stageCupTrick from "../assets/press/stage-cup-trick.jpg";
import aboutPortrait from "../assets/press/about-portrait.jpg";
import { performanceOptions } from "../data/content";

const images = {
  "social-crowd": socialCrowd,
  "stage-cup-trick": stageCupTrick,
  "about-portrait": aboutPortrait,
};

const ACCENTS = [
  {
    blob: "bg-violet-500/25",
    overlay: "from-violet-500/40",
    text: "text-violet-300",
    pill: "border-violet-400/30 bg-violet-500/10 text-violet-200",
    ghost: "text-violet-500/10",
    anim: "animate-blob",
  },
  {
    blob: "bg-gold/25",
    overlay: "from-gold/40",
    text: "text-gold",
    pill: "border-gold/30 bg-gold/10 text-gold",
    ghost: "text-gold/10",
    anim: "animate-blob-delay",
  },
  {
    blob: "bg-cyan-400/25",
    overlay: "from-cyan-400/40",
    text: "text-cyan-300",
    pill: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
    ghost: "text-cyan-400/10",
    anim: "animate-blob",
  },
];

function TierRow({ tier, index }) {
  const reversed = index % 2 === 1;
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className={`relative lg:col-span-5 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div
          className={`pointer-events-none absolute -inset-8 -z-10 rounded-full ${accent.blob} ${accent.anim} blur-3xl mix-blend-screen`}
        />
        <div className="relative isolate aspect-4/5 overflow-hidden rounded-3xl">
          <img src={images[tier.image]} alt={tier.name} className="h-full w-full object-cover" />
          <div className={`pointer-events-none absolute inset-0 bg-linear-to-t ${accent.overlay} via-transparent to-transparent`} />
          <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`relative lg:col-span-7 ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <span
          className={`pointer-events-none absolute -top-8 left-0 -z-10 select-none font-display text-8xl leading-none ${accent.ghost} sm:-top-10 sm:text-9xl`}
        >
          0{index + 1}
        </span>

        <div className="flex items-center gap-2">
          <StarIcon className={`h-4 w-4 ${accent.text}`} />
          <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${accent.text}`}>
            Performance Option {index + 1}
          </span>
        </div>

        <h3
          className={`mt-3 font-display text-3xl uppercase leading-[0.95] sm:text-4xl ${
            tier.featured ? "text-gradient-iridescent" : "text-bone"
          }`}
        >
          {tier.name}
        </h3>

        <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70">{tier.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tier.useCases.map((useCase) => (
            <span
              key={useCase}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wide ${accent.pill}`}
            >
              {useCase}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <span className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${accent.pill}`}>
            {tier.duration}
          </span>
          <a
            href="#contact"
            className={`group text-sm font-semibold uppercase tracking-wide ${accent.text} transition hover:text-bone`}
          >
            Book This Experience <span className="inline-block transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Performance Options"
          title="Choose Your Experience"
          description="From intimate close-up magic to full-stage mentalism — tailored to weddings, corporate events, festivals, and VIP experiences."
          align="center"
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-28">
          {performanceOptions.map((tier, i) => (
            <TierRow key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
