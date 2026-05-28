import { useState, useMemo, useId } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Filter,
  TrendingUp,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import AnimatedStat from '../components/AnimatedStat.jsx'
import { SoundWaveBars, SoundWaveLine } from '../components/SoundWave.jsx'
import { brandMarkBySlug } from '../components/BrandMarks.jsx'
import { cases } from '../data/cases.js'

/* ────────────────────────────────────────────────────────────────────────── */
/*  Hero — aggregate animated counters across the top                          */
/* ────────────────────────────────────────────────────────────────────────── */

function Hero() {
  const tickers = [
    { target: 100, suffix: '+', label: 'Products in production' },
    { target: 17, suffix: '+', label: 'Industries served' },
    { target: 100, suffix: 'M+ raised', label: 'By clients (USD)' },
    { target: 9, suffix: ' yrs', label: 'Avg senior tenure' },
  ]
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[620px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(105,87,255,0.20), rgba(229,38,115,0.10) 45%, transparent 70%)',
        }}
      />

      <div className="container-page pb-10 pt-16 sm:pt-24 lg:pb-14 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">By the numbers</span>
          <h1 className="h-display mt-6">
            We don't pitch with logos.{' '}
            <span className="gradient-text">We pitch with deltas.</span>
          </h1>
          <p className="lede mx-auto mt-6 max-w-2xl">
            Every project on this page is in production. Every number is
            measured, not modeled. Click any case to see the math.
          </p>
        </div>

        {/* Animated counter row */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tickers.map((t, i) => (
            <Reveal key={t.label} delay={i * 80}>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-soft">
                <span
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-magenta opacity-80"
                />
                <div className="gradient-text font-display text-5xl font-bold leading-none tracking-tight sm:text-[56px]">
                  <AnimatedStat target={t.target} suffix={t.suffix} />
                </div>
                <div className="mt-3 text-[13px] font-medium text-slate-500">
                  {t.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Filter strip                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'founder', label: 'For founders' },
  { id: 'enterprise', label: 'For enterprises' },
]

function FilterStrip({ active, setActive }) {
  return (
    <Reveal>
      <div className="container-page">
        <div className="mb-2 flex flex-wrap items-center justify-center gap-2 py-10 sm:py-12">
          <span className="mr-1 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-slate-500">
            <Filter className="h-3.5 w-3.5" />
            Filter
          </span>
          {filters.map((f) => {
            const count =
              f.id === 'all'
                ? cases.length
                : cases.filter((c) => c.audience === f.id).length
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-full border px-4 py-1.5 text-[13px] font-semibold transition-all duration-200 ${
                  active === f.id
                    ? 'border-brand-purple/30 bg-brand-purple/[0.08] text-brand-purple shadow-soft'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink-950'
                }`}
              >
                {f.label}
                <span className="ml-1.5 text-[11px] text-slate-400">
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Case visual — real screenshot if provided, else an on-brand device mockup  */
/* ────────────────────────────────────────────────────────────────────────── */

function CaseVisual({ c }) {
  // Real asset wins. Drop a file at public/case-studies/<slug>.png and set
  // `image: '/case-studies/<slug>.png'` in src/data/cases.js.
  if (c.image) {
    return (
      <div className="relative">
        <div
          aria-hidden
          className={`pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br ${c.gradient} opacity-[0.10] blur-2xl`}
        />
        <img
          src={c.image}
          alt={`${c.name} — product`}
          loading="lazy"
          className="w-full rounded-2xl border border-slate-200/80 shadow-card"
        />
      </div>
    )
  }
  return (
    <div className="relative">
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br ${c.gradient} opacity-[0.12] blur-3xl`}
      />
      {c.device === 'phone' ? (
        <PhoneMockup gradient={c.gradient} />
      ) : (
        <BrowserMockup gradient={c.gradient} />
      )}
    </div>
  )
}

function BrowserMockup({ gradient }) {
  const gid = useId()
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-slate-200/70" />
      </div>
      {/* Screen */}
      <div className="space-y-3 p-4">
        <div
          className={`animated-gradient relative h-24 overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.35), transparent 45%)',
            }}
          />
          <div className="absolute bottom-3 left-4 h-2.5 w-24 rounded-full bg-white/70" />
          <div className="absolute bottom-7 left-4 h-2.5 w-16 rounded-full bg-white/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex h-14 flex-col justify-center gap-1.5 rounded-lg bg-slate-100 px-2"
            >
              <span
                className={`h-3 w-3 rounded-md bg-gradient-to-br ${gradient}`}
              />
              <span className="h-1.5 w-8 rounded-full bg-slate-300/80" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-slate-100 p-2.5">
          <svg
            viewBox="0 0 120 32"
            className="h-12 w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id={gid} x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6957ff" />
                <stop offset="100%" stopColor="#e52673" />
              </linearGradient>
            </defs>
            <path
              d="M0,26 L24,20 L48,23 L72,12 L96,15 L120,5"
              fill="none"
              stroke={`url(#${gid})`}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function PhoneMockup({ gradient }) {
  return (
    <div className="mx-auto w-full max-w-[240px]">
      <div className="overflow-hidden rounded-[2.4rem] border-[7px] border-ink-950 bg-white shadow-card">
        {/* Notch */}
        <div className="relative h-5 bg-white">
          <div className="absolute left-1/2 top-0 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-950" />
        </div>
        {/* Screen */}
        <div className="space-y-3 px-3 pb-3">
          <div
            className={`animated-gradient relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 45%)',
              }}
            />
            <div className="absolute bottom-4 left-4 h-3 w-20 rounded-full bg-white/75" />
            <div className="absolute bottom-9 left-4 h-2.5 w-12 rounded-full bg-white/40" />
          </div>
          <div className="space-y-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl bg-slate-100 p-2.5"
              >
                <span
                  className={`h-7 w-7 flex-none rounded-lg bg-gradient-to-br ${gradient}`}
                />
                <div className="flex-1 space-y-1.5">
                  <span className="block h-2 w-3/4 rounded-full bg-slate-300/80" />
                  <span className="block h-2 w-1/2 rounded-full bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-slate-100 py-3">
          <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${gradient}`} />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Per-case full-width band — hero metric + bento of supporting stats        */
/* ────────────────────────────────────────────────────────────────────────── */

function CaseBand({ c, index }) {
  const isAlt = index % 2 === 1
  const Logo = brandMarkBySlug[c.slug]
  return (
    <Reveal>
      <article
        className={`relative overflow-hidden ${
          isAlt ? 'bg-slate-50/60' : 'bg-white'
        }`}
      >
        {/* Top brand strip */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${c.gradient}`} />

        <div className="container-page py-16 sm:py-20">
          {/* Header — text + product visual, side by side */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className={`min-w-0 ${isAlt ? 'lg:order-2' : ''}`}>
              {/* Client brand mark — sits as a small bordered logo plate */}
              {Logo && (
                <div className="mb-5 inline-flex items-center rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 shadow-soft">
                  <Logo />
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
                <span className="text-slate-500">{c.industry}</span>
                <span className="rounded-full border border-brand-purple/20 bg-brand-purple/[0.06] px-2 py-0.5 text-brand-purple">
                  {c.audience === 'founder' ? 'For founders' : 'For enterprises'}
                </span>
              </div>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink-950 sm:text-5xl">
                {c.name}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
                {c.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={isAlt ? 'lg:order-1' : ''}>
              <CaseVisual c={c} />
            </div>
          </div>

          {/* Metrics layout — hero left, bento right */}
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {/* HERO METRIC — takes 2 cols */}
            <div className="lg:col-span-2">
              <div
                className={`relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-gradient-to-br ${c.gradient} opacity-[0.12] blur-2xl`}
                />
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Hero metric
                  </span>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="gradient-text font-display text-7xl font-bold leading-none tracking-tighter sm:text-[84px]">
                      {c.heroMetric.value}
                    </span>
                    {c.heroMetric.delta && (
                      <DeltaBadge dir={c.heroMetric.delta} />
                    )}
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-ink-950">
                    {c.heroMetric.label}
                  </div>
                  {c.heroMetric.context && (
                    <div className="mt-1 text-[13px] text-slate-500">
                      {c.heroMetric.context}
                    </div>
                  )}
                  <div className="mt-7 border-t border-slate-100 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-950 transition-colors hover:text-brand-purple"
                    >
                      Talk to the team that built it
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BENTO — 4 supporting metrics in a 2x2 grid that fills 3 cols */}
            <div className="grid grid-cols-2 gap-5 lg:col-span-3">
              {c.metrics.map((m, i) => (
                <MetricTile key={i} metric={m} gradient={c.gradient} index={i} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function DeltaBadge({ dir }) {
  if (dir === 'up') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[11px] font-bold text-emerald-700">
        <ArrowUp className="h-3 w-3" />
        Up
      </span>
    )
  }
  if (dir === 'down') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[11px] font-bold text-emerald-700">
        <ArrowDown className="h-3 w-3" />
        Down (good)
      </span>
    )
  }
  return null
}

function MetricTile({ metric, gradient, index }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-6">
      <span
        aria-hidden
        className={`absolute inset-x-5 top-0 h-[2px] rounded-full bg-gradient-to-r ${gradient} opacity-50`}
      />
      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
        Metric · 0{index + 2}
      </div>
      <div className="mt-3 font-display text-3xl font-bold leading-none tracking-tight text-ink-950 sm:text-[36px]">
        {metric.value}
      </div>
      <div className="mt-3 text-[13px] font-medium text-slate-600">
        {metric.label}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Process recap                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function ProcessRecap() {
  const steps = [
    { n: '01', t: 'Paid discovery', b: 'We map the real problem and lock the outcome — in writing.' },
    { n: '02', t: 'Pure-play prototype', b: 'Working spine in weeks, not slides in months.' },
    { n: '03', t: 'Beta-test platform', b: 'Real users on the build. Instrument, observe, fix.' },
    { n: '04', t: 'Production handoff', b: 'Security review, runbooks, full IP transfer. Your team owns it.' },
  ]
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-6 h-[100px] w-full opacity-40"
        strokeWidth={1.4}
        duration={13}
        amplitude={22}
        gradientId="caseProcessWave"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How every engagement runs</span>
            <h2 className="h-section mt-4">
              The same 4-step arc.{' '}
              <span className="gradient-text">Every project on this page.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              We don't reinvent the process per client. The repetition is the
              point — it's what makes the outcomes predictable.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <span
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-brand-purple-deep via-brand-purple to-brand-magenta opacity-70"
                />
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {s.n}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-ink-950">
                  {s.t}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {s.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <SoundWaveBars count={48} className="h-12 opacity-80" />
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

export default function CaseStudiesPage() {
  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    if (active === 'all') return cases
    return cases.filter((c) => c.audience === active)
  }, [active])

  return (
    <>
      <Hero />
      <FilterStrip active={active} setActive={setActive} />
      {filtered.map((c, i) => (
        <CaseBand key={c.slug} c={c} index={i} />
      ))}
      {filtered.length === 0 && (
        <section className="container-page py-20 text-center text-slate-500">
          No cases match this filter yet.
        </section>
      )}
      <ProcessRecap />
      <CTA
        eyebrow="Be the next case study"
        title="Tell us where you're stuck."
        body="30-minute discovery call — not a sales pitch. We'll tell you whether we're the right team for the work before you commit to anything."
        primaryLabel="Book a discovery call"
        primaryHref="/contact"
        secondaryLabel="Read the methodology"
        secondaryHref="/enterprise-ai-engineering#engagement"
      />
    </>
  )
}
