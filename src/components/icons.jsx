const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3.5l2.47 5.18 5.53.66-4.1 3.94 1.06 5.72L12 16.2l-4.96 2.8 1.06-5.72-4.1-3.94 5.53-.66L12 3.5z" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5s1.2-6.2 3.6-8.5z" />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19c.6-3 2.7-4.7 5.5-4.7s4.9 1.7 5.5 4.7" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.5 14.5c2 0 3.7 1.4 4.2 4" />
    </svg>
  );
}

export function DiamondIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M6 9l6-5.5L18 9l-6 11.5L6 9z" />
      <path d="M6 9h12M9.5 9l2.5 11.5L14.5 9" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 12.5l5 5L20 6" />
    </svg>
  );
}

export const statIcons = {
  star: StarIcon,
  globe: GlobeIcon,
  users: UsersIcon,
  diamond: DiamondIcon,
};
