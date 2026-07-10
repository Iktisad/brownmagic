import { motion } from "framer-motion";
import photostrip1 from "../assets/press/photostrip-1.jpg";
import photostrip2 from "../assets/press/photostrip-2.jpg";
import photostrip3 from "../assets/press/photostrip-3.jpg";
import photostrip4 from "../assets/press/photostrip-4.jpg";
import { photoStrip } from "../data/content";

const images = {
  "photostrip-1": photostrip1,
  "photostrip-2": photostrip2,
  "photostrip-3": photostrip3,
  "photostrip-4": photostrip4,
};

export default function PhotoStrip() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {photoStrip.map((item, i) => (
          <motion.div
            key={item.caption}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 aspect-4/3">
              <img
                src={images[item.image]}
                alt={`Brown Magic — ${item.caption}`}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-bone/50">
              {item.caption}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
