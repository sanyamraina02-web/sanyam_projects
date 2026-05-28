import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { cases } from '../data/cases.js'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected work</span>
            <h2 className="h-section mt-4">
              Products in production. Outcomes we can prove.
            </h2>
            <p className="lede mt-5">
              A sample of the products our teams have shipped — from
              early-stage startups to Fortune-500 enterprises.
            </p>
          </div>
          <Link to="/contact" className="btn-ghost">
            Talk to a customer
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 90} as="article" className="group h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {/* Brand-gradient accent strip — keeps the brand identity present */}
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r ${c.gradient}`}
                />

                {/* Background: real product image when provided, animated gradient otherwise */}
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.name} — product`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div
                      className={`animated-gradient absolute inset-0 bg-gradient-to-br ${c.gradient}`}
                      style={{ animationDelay: `${i * 1.2}s` }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25), transparent 50%)',
                      }}
                    />
                  </>
                )}

                {/* Bottom fade — guarantees the corner text reads on any image */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-25"
                />

                {/* Default state: industry + name (bottom-left), metric (bottom-right) */}
                <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between text-white transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:opacity-0">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 drop-shadow-sm">
                      {c.industry}
                    </div>
                    <div className="mt-1 font-display text-2xl font-semibold tracking-tight drop-shadow">
                      {c.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold tracking-tight drop-shadow">
                      {c.metric.value}
                    </div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-white/85 drop-shadow-sm">
                      {c.metric.label}
                    </div>
                  </div>
                </div>

                {/* Hover wash */}
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-ink-950/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Hover state: centered name + what-we-did */}
                <div className="pointer-events-none absolute inset-0 z-10 flex translate-y-2 flex-col items-center justify-center px-6 text-center text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    {c.industry}
                  </div>
                  <div className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {c.name}
                  </div>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/90">
                    {c.whatWeDid}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
                    <span>{c.metric.label}</span>
                    <span className="text-white/60">·</span>
                    <span className="font-display text-sm font-semibold">
                      {c.metric.value}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[15px] leading-relaxed text-slate-600">
                  {c.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/case-studies"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-950 transition-colors hover:text-brand-purple"
                >
                  Read the case study
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
