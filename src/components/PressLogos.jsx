import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import mediaCookingShow from "../assets/press/media-cooking-show.jpg";
import mediaDailyStarInterview from "../assets/press/media-daily-star-interview.jpg";
import mediaTvPanel from "../assets/press/media-tv-panel.jpg";
import { mediaFeatures, pressLogos } from "../data/content";

const images = {
  "media-cooking-show": mediaCookingShow,
  "media-daily-star-interview": mediaDailyStarInterview,
  "media-tv-panel": mediaTvPanel,
};

export default function PressLogos() {
  return (
    <section id="press" className="relative bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Media" title="TV Features & Shows" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {mediaFeatures.map((feature, i) => (
            <motion.figure
              key={feature.caption}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={images[feature.image]} alt={feature.caption} className="aspect-4/3 w-full object-cover" />
              <figcaption className="bg-ink-soft px-4 py-3 text-center text-xs uppercase tracking-wide text-bone/60">
                {feature.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
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
