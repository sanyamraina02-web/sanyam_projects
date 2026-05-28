// Visual logo marquee — each "logo" is a stylized brand mark for a real
// Volumetree client. Marks live in BrandMarks.jsx so they can be reused
// on the case studies page too.

import { clientMarks } from './BrandMarks.jsx'

// Two rows — top scrolls forward, bottom scrolls reverse.
// Different starting offsets so the two rows feel independent.
const rowA = clientMarks
const rowB = [...clientMarks.slice(4), ...clientMarks.slice(0, 4)]

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-16">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Our clients</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
            Trusted by founders & enterprise teams across{' '}
            <span className="gradient-text">17+ industries.</span>
          </h2>
        </div>
      </div>

      {/* Full-bleed marquee, two opposing rows */}
      <div className="marquee-mask mt-12 space-y-4 overflow-hidden">
        <div className="flex w-max animate-marquee items-stretch gap-4">
          {[...rowA, ...rowA, ...rowA].map((c, i) => (
            <LogoCard key={`a-${i}`} Mark={c.Mark} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse items-stretch gap-4">
          {[...rowB, ...rowB, ...rowB].map((c, i) => (
            <LogoCard key={`b-${i}`} Mark={c.Mark} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoCard({ Mark }) {
  return (
    <div className="flex h-20 w-[210px] flex-none items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/20 hover:shadow-card">
      <div className="text-slate-700">
        <Mark />
      </div>
    </div>
  )
}
