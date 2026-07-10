import { motion } from "framer-motion";
import signaturePoster from "../assets/press/signature-poster-latest.jpg";
import { signatureShow } from "../data/content";

export default function SignatureShow() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-10 rounded-2xl border border-white/10 bg-panel/60 p-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center sm:p-10"
      >
        <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-xl border border-gold/20 sm:mx-0">
          <img src={signaturePoster} alt="The Mentalist — Live in Dhaka show poster" className="w-full" />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {signatureShow.eyebrow}
          </span>
          <h3 className="font-display text-2xl uppercase leading-tight text-bone sm:text-3xl">
            {signatureShow.title}
          </h3>
          <p className="text-sm uppercase tracking-wide text-bone/40">
            {signatureShow.venue} · {signatureShow.date}
          </p>
          <p className="text-base leading-relaxed text-bone/70">{signatureShow.description}</p>
        </div>
      </motion.div>
    </section>
  );
}
