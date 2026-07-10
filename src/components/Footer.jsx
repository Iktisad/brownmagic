import Logo from "./Logo";
import { brand } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 text-bone/70">
          <Logo className="h-5 w-5 text-gold" />
          <span className="text-sm">{brand.name}</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-bone/30">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
