import { motion } from "framer-motion";
import tindsFeature from "../assets/press/tinds-feature.jpg";
import { pressFeatures } from "../data/content";

const thumbnails = { "tinds-feature": tindsFeature };

export default function PressFeature() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16">
      <div className="flex flex-col gap-4">
        {pressFeatures.map((feature, i) => {
          const thumb = feature.thumbnail && thumbnails[feature.thumbnail];
          return (
            <motion.a
              key={feature.publication}
              href={feature.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-gold/20 bg-gold/6 p-6 transition hover:border-gold/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                {thumb && (
                  <img
                    src={thumb}
                    alt={`${feature.publication} feature thumbnail`}
                    className="hidden h-16 w-28 shrink-0 rounded-lg object-cover sm:block"
                  />
                )}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    As Featured In {feature.publication}
                  </span>
                  <p className="font-display text-lg uppercase leading-snug text-bone sm:text-xl">
                    {feature.headline}
                  </p>
                  <p className="max-w-2xl text-sm leading-relaxed text-bone/60">{feature.snippet}</p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-semibold uppercase tracking-wide text-gold transition group-hover:translate-x-1">
                Read the Feature →
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
