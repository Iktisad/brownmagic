import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import tomorrowlandLogo from "../assets/logos/tomorrowland.svg";
import burningManLogo from "../assets/logos/burning-man.svg";
import { trustBar } from "../data/content";

const logos = { tomorrowland: tomorrowlandLogo, "burning-man": burningManLogo };

export default function TrustBar() {
  return (
    <section id="festivals" className="border-y border-white/10 bg-ink-soft/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Live Performances"
          title="Trusted Across Global Festival Environments"
          description="From underground dancefloors to world-renowned festival stages, Brown Magic delivers high-impact interactive experiences across diverse global audiences."
          align="center"
        />

        <div className="mt-10 flex min-h-32 flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {trustBar.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
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
