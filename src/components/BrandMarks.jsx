/**
 * Stylized brand marks for real Volumetree clients — single source of truth
 * used by LogoCloud (homepage) and the CaseStudies page.
 *
 * Each mark is an icon + wordmark combo. Real client image logos can replace
 * these later by swapping the body for an <img src="/logos/foo.svg" />.
 */

export function TrukkinMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-purple"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="7" width="13" height="10" rx="1" />
        <path d="M15 10h5l1 3v4h-6z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Trukkin
      </span>
    </div>
  )
}

export function ESanjeevaniMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-teal"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h4l2.5-6 4 13 2.5-7 1.5 3h5.5" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        e<span className="text-brand-teal">Sanjeevani</span>
      </span>
    </div>
  )
}

export function TataCrucibleMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-yellow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M9 18h6M10 21h4" />
        <path
          d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.6l.2 1h4.6l.2-1c.1-.6.5-1.2 1-1.6A6 6 0 0 0 12 3z"
          fill="currentColor"
          fillOpacity="0.25"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Tata Crucible
      </span>
    </div>
  )
}

export function EasemyhiringMark() {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-purple-deep via-brand-purple to-brand-magenta text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
          <path d="M5 13l4 4 10-11" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        easemy<span className="text-brand-purple">hiring</span>
      </span>
    </div>
  )
}

export function SkybagMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-magenta"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h16l-1.4 12H5.4z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Skybag
      </span>
    </div>
  )
}

export function ElbyMark() {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-cyan to-brand-purple-light text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M13 2L4.5 13.5H11l-1.5 8.5L19 10h-6.5z" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Elby
      </span>
    </div>
  )
}

export function EduploymentMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-purple"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4 2 9l10 5 10-5z" />
        <path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Eduployment
      </span>
    </div>
  )
}

export function DanskeBankMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-purple-deep"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-5 9 5" />
        <path d="M5 9v9M10 9v9M14 9v9M19 9v9" />
        <path d="M3 21h18" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Danske Bank
      </span>
    </div>
  )
}

export function SirolularMark() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-brand-magenta"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M20 12a8 8 0 1 1-2.3-5.6" />
        <path d="M20 4v4h-4" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
        Sirolular
      </span>
    </div>
  )
}

/** Ordered list of real client marks for the homepage logo cloud. */
export const clientMarks = [
  { name: 'Trukkin', Mark: TrukkinMark },
  { name: 'eSanjeevani', Mark: ESanjeevaniMark },
  { name: 'Tata Crucible', Mark: TataCrucibleMark },
  { name: 'Easemyhiring', Mark: EasemyhiringMark },
  { name: 'Skybag', Mark: SkybagMark },
  { name: 'Elby', Mark: ElbyMark },
  { name: 'Eduployment', Mark: EduploymentMark },
  { name: 'Danske Bank', Mark: DanskeBankMark },
  { name: 'Sirolular', Mark: SirolularMark },
]

/** Lookup by case-study slug — used by the CaseStudies page logo plates. */
export const brandMarkBySlug = {
  trukkin: TrukkinMark,
  esanjeevani: ESanjeevaniMark,
  'tata-crucible': TataCrucibleMark,
  easemyhiring: EasemyhiringMark,
  skybag: SkybagMark,
  elby: ElbyMark,
  eduployment: EduploymentMark,
  'impact-danske-bank': DanskeBankMark,
  sirolular: SirolularMark,
}
