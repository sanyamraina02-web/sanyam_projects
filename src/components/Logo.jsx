import { Link } from 'react-router-dom'

/**
 * Volumetree logo lockup — uses the real brand PNG assets from public/.
 *
 *   public/volumetree-logo.png        — full-color lockup for light backgrounds
 *   public/volumetree-logo-light.png  — light/white variant for dark backgrounds
 *   public/favicon.png                — the mark alone, used as favicon
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const src =
    variant === 'light' ? '/volumetree-logo-light.png' : '/volumetree-logo.png'
  return (
    <Link
      to="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Volumetree home"
    >
      <img
        src={src}
        alt="Volumetree"
        width="180"
        height="40"
        className="h-9 w-auto"
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
