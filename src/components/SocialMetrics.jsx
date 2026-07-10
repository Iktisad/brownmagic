import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import socialCrowd from "../assets/press/social-crowd.jpg";
import { brand, signatureMoment, socialStats } from "../data/content";

export default function SocialMetrics() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 aspect-3/4"
        >
          <img src={socialCrowd} alt="Guests reacting with laughter at a Brown Magic event" className="h-full w-full object-cover" />
        </motion.div>

        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Social Metrics" title={brand.instagram} />

          <div className="grid grid-cols-3 gap-4">
            {socialStats.map((stat) => (
              <a
                key={stat.platform}
                href={stat.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-panel/60 px-4 py-6 text-center transition hover:border-gold/40"
              >
                <span className="font-display text-2xl text-gold sm:text-3xl">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-bone/50">{stat.platform}</span>
                <span className="text-[11px] uppercase tracking-widest text-bone/30">{stat.label}</span>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold/80">Signature Moment</p>
            <p className="mt-3 text-lg italic leading-relaxed text-bone/90">"{signatureMoment.message}"</p>
            <p className="mt-3 text-sm text-bone/50">— {signatureMoment.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
