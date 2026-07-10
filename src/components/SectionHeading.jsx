import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
      )}
      <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-bone/70 sm:text-lg">{description}</p>}
    </motion.div>
  );
}
