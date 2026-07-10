// Labeled placeholder block sized for a real photo. Swap the parent's
// background image / <img> in later without touching layout or spacing.
export default function ImagePlaceholder({ label, aspect = "aspect-[4/5]", className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-ink-soft to-cyan-500/10 ${aspect} ${className}`}
    >
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-display text-lg tracking-wide text-bone/40">PHOTO</span>
        <span className="text-xs uppercase tracking-[0.2em] text-bone/30">{label}</span>
      </div>
      <div className="pointer-events-none absolute inset-0 border border-gold/10" />
    </div>
  );
}
