import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import originStoryStage from "../assets/press/origin-story-stage.jpg";
import { originStory } from "../data/content";

export default function OriginStory() {
  return (
    <section id="story" className="relative bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow={originStory.eyebrow} title="Where Brown Magic Comes From" />

            <div className="flex flex-col gap-4 text-base leading-relaxed text-bone/70 sm:text-lg">
              {originStory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {originStory.quotes.map((quote, i) => (
                <motion.blockquote
                  key={quote.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-gold/60 pl-6 italic text-bone/90"
                >
                  <p className="text-lg leading-relaxed sm:text-xl">"{quote.text}"</p>
                  <p className="mt-2 text-sm not-italic text-bone/50">{quote.attribution}</p>
                </motion.blockquote>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={originStoryStage}
              alt="A guest reacting with laughter during a Brown Magic on-stage reveal"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
