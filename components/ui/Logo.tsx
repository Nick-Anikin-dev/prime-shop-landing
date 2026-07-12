interface LogoProps {
  onDark?: boolean;
}

/** Prime Shop wordmark — warehouse/columns glyph matching the app UI. */
export function Logo({ onDark = false }: LogoProps) {
  return (
    <span className={`logo${onDark ? " on-dark" : ""}`} aria-label="Prime Shop">
      <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M3 12 16 4l13 8v2H3v-2Z" fill="currentColor" />
        <rect x="5" y="15" width="3" height="10" rx="1" fill="currentColor" />
        <rect x="11" y="15" width="3" height="10" rx="1" fill="currentColor" />
        <rect x="18" y="15" width="3" height="10" rx="1" fill="currentColor" />
        <rect x="24" y="15" width="3" height="10" rx="1" fill="currentColor" />
        <rect x="3" y="26" width="26" height="3" rx="1.5" fill="currentColor" />
      </svg>
      <span className="word">Prime Shop</span>
    </span>
  );
}
