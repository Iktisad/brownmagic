export default function Logo({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="32" r="31" stroke="currentColor" strokeWidth="1.5" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="32" y1="14" x2="32" y2="24" />
        <line x1="32" y1="40" x2="32" y2="50" />
        <line x1="14" y1="32" x2="24" y2="32" />
        <line x1="40" y1="32" x2="50" y2="32" />
        <line x1="20.3" y1="20.3" x2="27.2" y2="27.2" />
        <line x1="36.8" y1="36.8" x2="43.7" y2="43.7" />
        <line x1="43.7" y1="20.3" x2="36.8" y2="27.2" />
        <line x1="27.2" y1="36.8" x2="20.3" y2="43.7" />
      </g>
      <circle cx="32" cy="32" r="5" fill="currentColor" />
    </svg>
  );
}
