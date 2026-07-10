import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import aboutIntroPoster from "../assets/press/about-intro-poster.jpg";
import { aboutCopy, brand, idealFor, pullQuote } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 md:mx-0"
        >
          <img
            src={aboutIntroPoster}
            alt="Flying Circus, Tulum — official lineup poster featuring Farhan, Brown Magic, as Ring Master"
            className="w-full"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Introduction" title="The Brown Magic Experience" />

          <div className="flex flex-col gap-4 text-base leading-relaxed text-bone/70 sm:text-lg">
            {aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="font-signature text-3xl text-gold">Brown Magic</p>

          <div className="flex flex-wrap gap-2">
            {brand.selfDescription.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-gold/25 px-3 py-1 text-xs uppercase tracking-[0.15em] text-gold/80"
              >
                {trait}
              </span>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative border-l-2 border-gold/60 pl-6 italic text-bone/90"
          >
            <p className="text-lg leading-relaxed sm:text-xl">"{pullQuote.text}"</p>
            <p className="mt-3 text-sm not-italic uppercase tracking-wide text-gold">{pullQuote.attribution}</p>
          </motion.blockquote>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-bone/40">Ideal for</p>
            <div className="flex flex-wrap gap-3">
              {idealFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-bone/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
