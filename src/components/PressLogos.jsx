import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import cbcLogo from "../assets/logos/cbc.svg";
import bellMediaLogo from "../assets/logos/bell-fibe.jpg";
import matvLogo from "../assets/logos/matv.svg";
import ntvLogo from "../assets/logos/ntv.svg";
import btvLogo from "../assets/logos/btv.svg";
import somoyTvLogo from "../assets/logos/somoytv.svg";
import channel24Logo from "../assets/logos/channel24.svg";
import familyFeudLogo from "../assets/logos/family-feud.jpg";
import deeptoStarHuntLogo from "../assets/logos/deepto-star-hunt.jpg";
import bplLogo from "../assets/logos/bpl-t20-alt.jpg";
import whatAMagicShowLogo from "../assets/logos/what-a-magic-show.jpg";
import deeptoTvLogo from "../assets/logos/deepto-tv.jpg";
import etyadiLogo from "../assets/logos/etyadi.jpg";
import burningManLogo from "../assets/logos/burning-man-wordmark.jpg";
import bedouinSagaLogo from "../assets/logos/bedouin-saga.jpg";
import { pressLogos } from "../data/content";

const logos = {
  cbc: cbcLogo,
  bellmedia: bellMediaLogo,
  matv: matvLogo,
  ntv: ntvLogo,
  btv: btvLogo,
  somoytv: somoyTvLogo,
  channel24: channel24Logo,
  "family-feud": familyFeudLogo,
  "deepto-star-hunt": deeptoStarHuntLogo,
  "bpl-t20-alt": bplLogo,
  "what-a-magic-show": whatAMagicShowLogo,
  "deepto-tv": deeptoTvLogo,
  etyadi: etyadiLogo,
  "burning-man-wordmark": burningManLogo,
  "bedouin-saga": bedouinSagaLogo,
};

export default function PressLogos() {
  return (
    <section id="press" className="relative bg-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Media" title="TV Features & Shows" align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {pressLogos.map((item) =>
            item.type === "logo" ? (
              <span
                key={item.name}
                className="flex h-16 w-28 items-center justify-center opacity-80 transition hover:opacity-100"
              >
                <img src={logos[item.image]} alt={item.name} className="max-h-full max-w-full object-contain" />
              </span>
            ) : (
              <span
                key={item.name}
                className="px-5 py-3 text-sm font-medium uppercase tracking-wide text-bone/60 transition hover:text-gold"
              >
                {item.name}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
