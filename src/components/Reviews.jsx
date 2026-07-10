import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";
import { reviews } from "../data/content";

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Artist Reviews" title="What Artists & Organizers Say" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-ink-soft p-8"
            >
              <blockquote className="font-display text-xl uppercase leading-snug text-bone sm:text-2xl">
                "{review.quote}"
              </blockquote>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm uppercase tracking-wide text-gold">— {review.author}</span>
                <span className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <StarIcon key={star} className="h-3.5 w-3.5" fill="currentColor" />
                  ))}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
