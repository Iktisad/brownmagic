import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import tomorrowlandLogo from "../assets/logos/tomorrowland.svg";
import burningManLogo from "../assets/logos/burning-man.svg";
import { trustBar } from "../data/content";

const logos = { tomorrowland: tomorrowlandLogo, "burning-man": burningManLogo };

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-ink-soft/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Live Performances" title="As Seen At" align="center" />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {trustBar.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex h-32 w-56 flex-col items-center justify-center gap-2 opacity-80 transition hover:opacity-100"
            >
              {item.type === "logo" ? (
                <>
                  <img
                    src={logos[item.image]}
                    alt={item.name}
                    className={`max-h-24 max-w-full object-contain ${item.colorful ? "" : "brightness-0 invert"}`}
                  />
                  {item.showLabel && (
                    <span className="font-display text-sm uppercase leading-none tracking-[0.15em] text-bone">
                      {item.name}
                    </span>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display text-3xl uppercase leading-none tracking-[0.04em] text-bone text-center">
                    {item.name}
                  </span>
                  {item.subtitle && (
                    <span className="font-display text-base uppercase leading-none tracking-[0.3em] text-bone/80">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
