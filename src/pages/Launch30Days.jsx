import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  Plus,
  Snail,
  Wallet,
  Ghost,
  TrendingUp,
  Clock,
  Target,
  Activity,
  BarChart3,
  Timer,
  Calculator,
  Search,
  Bot,
  FileText,
  Zap,
  CalendarCheck,
  Lock,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import {
  SoundWaveBars,
  SoundWaveLine,
  SoundWaveBackdrop,
  GrowthWave,
  Ripple,
} from '../components/SoundWave.jsx'

/* ────────────────────────────────────────────────────────────────────────── */
/*  Hero — guarantee badge, big headline, dream outcome, stats                */
/* ────────────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[620px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(105,87,255,0.20), rgba(229,38,115,0.10) 45%, transparent 70%)',
        }}
      />

      <div className="container-page pb-16 pt-16 sm:pt-24 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Guarantee badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Ship in 30 days — or you don’t pay for the overrun
          </span>

          <h1 className="h-display mt-6">
            Your idea. In production.{' '}
            <span className="gradient-text">In 30 days.</span>
          </h1>

          <p className="lede mx-auto mt-6 max-w-2xl">
            Not a prototype. Not a demo. A <span className="font-semibold text-ink-950">live, production-grade product</span> with security, monitoring, and real users — in the time most agencies are still writing a requirements doc.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <ShieldCheck className="h-4 w-4" />
            30-day delivery guarantee. Fixed fee. No scope creep. No surprises.
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#offer" className="btn-gradient">
              See the full offer
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Book a free call first
            </Link>
          </div>

          {/* Trusted by */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Trusted by teams at
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {['Trukkin', 'CoinView', 'Easemyhiring', 'GovTech India', '+ 75 more'].map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-soft"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { n: '80+', l: 'Products shipped' },
            { n: '9 yrs', l: 'Average experience' },
            { n: '$100M+', l: 'Raised by clients' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-soft">
                <div className="gradient-text font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {s.n}
                </div>
                <div className="mt-2 text-sm text-slate-500">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Brand sound-wave signature */}
        <div className="mx-auto mt-20 max-w-3xl">
          <SoundWaveBars count={56} className="h-16" />
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Ticker — scrolling brand bar                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function Promises() {
  const items = [
    {
      icon: CalendarCheck,
      label: '30-day delivery, guaranteed',
      sub: 'Or every day after is free.',
      tone: 'from-emerald-500 to-emerald-700',
    },
    {
      icon: Lock,
      label: 'Fixed fee. Fixed scope.',
      sub: 'Know the number before we start.',
      tone: 'from-brand-purple-deep to-brand-purple',
    },
    {
      icon: ShieldCheck,
      label: 'Security built in',
      sub: 'Not an add-on invoice.',
      tone: 'from-brand-magenta to-brand-crimson',
    },
    {
      icon: Sparkles,
      label: 'AI-native by default',
      sub: 'Pattern recognition from 80+ builds.',
      tone: 'from-brand-purple to-brand-purple-light',
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-white py-12 sm:py-14">
      {/* Soft brand tint edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(50% 100% at 0% 50%, rgba(64,41,153,0.05), transparent 70%), radial-gradient(50% 100% at 100% 50%, rgba(229,38,115,0.05), transparent 70%)',
        }}
      />

      <div className="container-page">
        <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <Reveal
                key={it.label}
                delay={i * 90}
                className={`flex items-start gap-4 ${
                  i === 0 ? 'lg:pr-6' : i === items.length - 1 ? 'lg:pl-6' : 'lg:px-6'
                }`}
              >
                <span
                  className={`animated-gradient inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${it.tone} text-white shadow-glow`}
                  style={{ animationDelay: `${i * 1.1}s` }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-[15px] font-bold leading-tight tracking-tight text-ink-950">
                    {it.label}
                  </div>
                  <div className="mt-1 text-[13px] leading-snug text-slate-500">
                    {it.sub}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Pain section — agitate the problem                                        */
/* ────────────────────────────────────────────────────────────────────────── */

function Pain() {
  const cards = [
    {
      icon: Snail,
      title: 'The 6-month agency nightmare',
      body: 'Discovery calls. Scope debates. Sprint reviews. Six months later you have a staging environment and a $180K invoice. Sound familiar?',
      cost: 'Avg. cost: $150–300K + 6 months',
      tone: 'from-brand-purple-deep to-brand-purple',
    },
    {
      icon: Wallet,
      title: 'Runway burned on the wrong thing',
      body: "Every month you're not in market is a month a competitor is. At $50K/month burn, a 3-month delay costs $150K — before you even count lost revenue.",
      cost: 'Avg. delay cost: $50–150K',
      tone: 'from-brand-magenta to-brand-crimson',
    },
    {
      icon: Ghost,
      title: 'Agencies that ship and disappear',
      body: "They handed you a demo, a GitHub link, and zero documentation. Now it's broken in production and no one picks up the phone. Classic.",
      cost: 'Avg. rescue cost: $30–80K',
      tone: 'from-brand-crimson to-brand-yellow',
    },
  ]
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The real cost of getting this wrong</span>
            <h2 className="h-section mt-4">
              Every week you wait{' '}
              <span className="gradient-text">costs more than we charge.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Most founders know they need to build faster. They just don’t know the dollar value of being slow.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.title} delay={i * 90} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <span className={`animated-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.tone} text-white shadow-glow`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {c.body}
                  </p>
                  <span className="mt-5 inline-flex rounded-full border border-brand-crimson/20 bg-brand-crimson/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-crimson">
                    {c.cost}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Value Equation — dark Hormozi 4-quadrant                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function ValueEquation() {
  const cards = [
    {
      kind: 'up',
      tag: 'Maximise',
      label: 'Dream Outcome',
      desc: 'A live product that gets real users and generates real revenue — not a demo you show investors.',
      proof: 'Production-ready in 30 days. Security review included. Post-launch support included.',
    },
    {
      kind: 'up',
      tag: 'Maximise',
      label: 'Likelihood of Success',
      desc: "80+ products shipped. We've solved this problem shape before. You're not an experiment.",
      proof: '30-day delivery guarantee. Fixed fee. If we miss the date, the overrun is on us.',
    },
    {
      kind: 'down',
      tag: 'Minimise',
      label: 'Time Delay',
      desc: 'Discovery to production in 30 days. We can start your diagnostic call this week.',
      proof: 'Begin this week. Most agencies quote 3–6 months for the same outcome.',
    },
    {
      kind: 'down',
      tag: 'Minimise',
      label: 'Effort & Risk',
      desc: 'Fixed fee, not T&M. You show up for two calls. We handle everything else.',
      proof: 'No scope debates. No surprise invoices. No "we need two more weeks."',
    },
  ]
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Soft radial halo across the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(60% 60% at 20% 0%, rgba(105,87,255,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 90% 100%, rgba(229,38,115,0.28) 0%, transparent 60%)',
        }}
      />

      {/* Header */}
      <div className="container-page relative z-10 pt-24 sm:pt-28">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              Why we’re different
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We’ve built 80+ products. Your problem has a{' '}
              <span className="gradient-text">shape we’ve seen before.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              The Volumetree edge isn’t just speed. It’s pattern recognition from 80+ real builds — so we collapse months of “figuring it out” into days of “here’s the plan.”
            </p>
          </div>
        </Reveal>
      </div>

      {/* POSITIVE band — growth waves */}
      <div className="relative pt-14 pb-12">
        <GrowthWave className="z-0" opacity={0.95} idPrefix="veGrowth" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(16,185,129,0.07), rgba(16,185,129,0.02) 50%, transparent)',
          }}
        />
        <div className="container-page relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-400">
            <TrendingUp className="h-3 w-3" />
            What we maximise
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.filter((c) => c.kind === 'up').map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <Quadrant card={c} up />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* NEGATIVE band — calm crimson wash (no jagged waves) */}
      <div className="relative pb-24 pt-12 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(229,38,115,0.04) 40%, rgba(229,38,115,0.08))',
          }}
        />
        {/* Subtle flowing wave in rose tones — replaces the jagged friction wave */}
        <SoundWaveLine
          className="pointer-events-none absolute inset-x-0 top-1/2 h-[140px] w-full -translate-y-1/2 opacity-40"
          strokeWidth={1.2}
          duration={16}
          amplitude={22}
          fromColor="#e52673"
          midColor="#d1023c"
          toColor="#e52673"
          gradientId="negBandWave"
        />
        <div className="container-page relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-rose-400">
            <Activity className="h-3 w-3" />
            What we minimise
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.filter((c) => c.kind === 'down').map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <Quadrant card={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Quadrant({ card, up = false }) {
  return (
    <div
      className={`rounded-2xl border p-7 backdrop-blur-md ${
        up
          ? 'border-emerald-500/25 bg-emerald-500/[0.06]'
          : 'border-rose-500/25 bg-rose-500/[0.05]'
      }`}
    >
      <div
        className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${
          up ? 'text-emerald-400' : 'text-rose-400'
        }`}
      >
        {up ? <TrendingUp className="h-3 w-3" /> : <Activity className="h-3 w-3" />}
        {card.tag}
      </div>
      <div className="mt-3 font-display text-xl font-bold tracking-tight">
        {card.label}
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-white/65">{card.desc}</p>
      <div
        className={`mt-4 flex items-start gap-2 rounded-lg px-3.5 py-2.5 text-[13px] font-medium ${
          up
            ? 'bg-emerald-500/12 text-emerald-300'
            : 'bg-rose-500/10 text-rose-200'
        }`}
      >
        <span className="mt-px flex-none">{up ? '✓' : '⚡'}</span>
        <span>{card.proof}</span>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Split sections — text + visual mock                                       */
/* ────────────────────────────────────────────────────────────────────────── */

function SplitTimeline() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h3 className="h-sub mt-4">
              Discovery to production. One timeline. No gaps.
            </h3>
            <p className="body-muted mt-5 text-[15px]">
              We don’t run a 4-week discovery and then start charging for build. Discovery, prototype, and production are one continuous motion — scoped upfront, priced upfront, delivered on day 30.
            </p>
            <a href="#offer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-brand-purple-deep">
              See the full offer
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <TimelineMock />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function TimelineMock() {
  const rows = [
    { phase: '01 — Discover', label: 'We find the real problem', sub: 'Business context, users, constraints', badge: 'Days 1–5', tone: 'bg-brand-purple/10 text-brand-purple', dot: 'bg-brand-purple' },
    { phase: '02 — Prototype', label: 'Working core, production architecture', sub: 'Real data flows, tested with real users', badge: 'Days 6–18', tone: 'bg-brand-magenta/10 text-brand-magenta', dot: 'bg-brand-magenta' },
    { phase: '03 — Production', label: 'Security. Observability. Shipped.', sub: 'Runbooks, monitoring, handoff docs', badge: 'Days 19–30', tone: 'bg-brand-cyan/10 text-brand-cyan', dot: 'bg-brand-cyan' },
    { phase: '04 — After', label: 'We stay if you want', sub: '30-day support included. Retainer optional.', badge: 'Month 2+', tone: 'bg-emerald-500/10 text-emerald-600', dot: 'bg-emerald-500' },
  ]
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
      <div className="flex items-center gap-2 border-b border-slate-200/80 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs font-semibold text-slate-500">Delivery timeline</span>
      </div>
      <div className="p-6">
        <ol className="relative space-y-5">
          {rows.map((r, i) => (
            <li key={r.phase} className="flex gap-4">
              <div className="flex w-4 flex-col items-center">
                <span className={`mt-1 inline-flex h-3 w-3 rounded-full ${r.dot}`} />
                {i < rows.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-slate-200" />
                )}
              </div>
              <div className="pb-2">
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  {r.phase}
                </div>
                <div className="mt-0.5 text-[14px] font-bold text-ink-950">
                  {r.label}
                </div>
                <div className="mt-0.5 text-[12px] text-slate-500">{r.sub}</div>
                <span className={`mt-2 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold ${r.tone}`}>
                  {r.badge}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function SplitGuarantee() {
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal delay={120} className="order-2 lg:order-1">
            <ChecklistMock />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <span className="eyebrow">The guarantee</span>
            <h3 className="h-sub mt-4">
              We ship on day 30. Or you don’t pay for the overrun.
            </h3>
            <p className="body-muted mt-5 text-[15px]">
              No other agency says this because they can’t. We can — because we’ve done it 80+ times. It’s not a marketing line. It’s a contractual commitment that transfers the risk to us, where it belongs.
            </p>
            <a href="#offer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-brand-purple-deep">
              See guarantee terms
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ChecklistMock() {
  const items = [
    'Deployed to production',
    'Security review complete',
    'Monitoring & observability live',
    'Runbooks & docs handed off',
    'Infra hardening complete',
    '30-day post-ship support active',
  ]
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-900 bg-ink-950 shadow-card">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs font-semibold text-white/40">Production checklist — Day 30</span>
      </div>
      <div className="space-y-2 p-5">
        {items.map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5"
          >
            <Check className="h-4 w-4 flex-none text-emerald-400" />
            <span className="text-[13px] text-white/75">{i}</span>
          </div>
        ))}
        <div className="mt-3 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.08] py-3 text-center text-[13px] font-bold text-emerald-300">
          Shipped on day 30 ✓
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Grand Slam Offer                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

function Offer() {
  const included = [
    { t: '5-day deep discovery', b: 'We find the real problem, not just the stated one. Build plan handed back by day 5.' },
    { t: 'AI-native product build', b: 'Frontend, backend, data layer, integrations — production architecture from day 1.' },
    { t: 'Security review (built in)', b: 'Infra hardening, IAM, secrets management, threat model. Not an add-on invoice.' },
    { t: 'Observability stack', b: 'Monitoring, alerting, logging, error tracking — live on day 30. Not set up later.' },
  ]
  const bonuses = [
    { t: 'Free diagnostic call (pre-commit)', b: "We tell you honestly if we're the right fit — before you spend a dollar." },
    { t: 'Runbooks & handoff docs', b: 'Your team can own it on day 31. No vendor lock-in, no dependency.' },
    { t: '30-day post-launch support', b: "We don't disappear. Issues after launch? We're on it, included." },
    { t: 'Marketing integration setup', b: "Analytics, CRM, email capture — wired in so you're ready to grow on day 1." },
  ]
  const stack = [
    ['Product discovery & strategy', '$8,000'],
    ['Full-stack AI product build', '$60,000'],
    ['Security review & infra hardening', '$12,000'],
    ['Observability & monitoring setup', '$6,000'],
    ['30-day post-launch support', '$8,000'],
    ['Runbooks & handoff docs', '$4,000'],
    ['Marketing integration setup', '$3,000'],
  ]
  return (
    <section id="offer" className="relative overflow-hidden py-24 sm:py-28">
      {/* Wave divider — subtle flowing accent above the offer */}
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-8 h-[100px] w-full opacity-50"
        strokeWidth={1.5}
        duration={12}
        amplitude={26}
        gradientId="offerWave"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The offer</span>
            <h2 className="h-section mt-4">
              Everything you need.{' '}
              <span className="gradient-text">Nothing you don’t.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              We’ve stacked everything that eliminates a reason to say no. By the time you see the price, the math should be obvious.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-3xl border-2 border-brand-purple/30 bg-white shadow-glow">
            {/* Offer top — gradient panel */}
            <div className="animated-gradient relative overflow-hidden bg-gradient-to-br from-brand-purple-deep via-brand-purple to-brand-magenta p-8 text-white sm:p-12">
              {/* Decorative outline circles */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full border border-white/10"
              />

              {/* Flowing sound-wave overlays — top + middle + bottom */}
              <SoundWaveLine
                className="pointer-events-none absolute inset-x-0 top-0 h-[100px] w-full opacity-45"
                strokeWidth={2}
                duration={10}
                amplitude={26}
                fromColor="#ffffff"
                midColor="#ffffff"
                toColor="#ffffff"
                gradientId="offerHeadWaveA"
              />
              <SoundWaveLine
                className="pointer-events-none absolute inset-x-0 top-1/2 h-[120px] w-full -translate-y-1/2 opacity-30"
                strokeWidth={1.5}
                duration={14}
                amplitude={36}
                fromColor="#ffffff"
                midColor="#ffffff"
                toColor="#ffffff"
                gradientId="offerHeadWaveB"
              />
              <SoundWaveLine
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] w-full opacity-25"
                strokeWidth={1.5}
                duration={12}
                amplitude={20}
                fromColor="#ffffff"
                midColor="#ffffff"
                toColor="#ffffff"
                gradientId="offerHeadWaveC"
              />

              {/* Subtle equalizer bars in the corner */}
              <SoundWaveBars
                count={18}
                width={2}
                gap={3}
                className="pointer-events-none absolute bottom-6 right-6 h-10 w-32 opacity-40"
                barClassName="bg-white"
              />

              <div className="relative">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                  Launch Studio · 30-Day Sprint
                </div>
                <div className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  From idea to production.<br />30 days. Guaranteed.
                </div>
                <div className="mt-3 text-base text-white/75">
                  Fixed fee. No T&M stalling. No scope debates. No surprises.
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {/* Two columns: included + bonuses */}
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    What’s included
                  </div>
                  <div className="mt-5 space-y-3">
                    {included.map((it) => (
                      <OfferItem key={it.t} item={it} icon={<Check className="h-3.5 w-3.5" />} tone="bg-brand-purple" />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    The bonuses (stacked in)
                  </div>
                  <div className="mt-5 space-y-3">
                    {bonuses.map((it) => (
                      <OfferItem key={it.t} item={it} icon={<Plus className="h-3.5 w-3.5" />} tone="bg-brand-magenta" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Value stack */}
              <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[13px] font-bold text-ink-950">
                  <span>📦</span> What you’re actually getting
                </div>
                <div className="mt-4 space-y-2">
                  {stack.map(([name, price]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-white px-4 py-2.5"
                    >
                      <span className="flex items-center gap-2 text-[13px] font-medium text-ink-950">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        {name}
                      </span>
                      <span className="text-[13px] font-semibold text-slate-400 line-through">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
                <hr className="my-5 border-slate-200/80" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-bold text-ink-950">Total market value</div>
                    <div className="text-[13px] font-semibold text-slate-400 line-through">$101,000</div>
                  </div>
                  <div className="relative text-right">
                    {/* Ripple behind the price to draw the eye */}
                    <Ripple
                      className="-z-10"
                      size={160}
                      count={3}
                      duration={3.6}
                      color="rgba(64, 41, 153, 0.28)"
                      origin="right"
                    />
                    <div className="text-[11px] font-semibold text-slate-500">Your price</div>
                    <div className="relative font-display text-2xl font-bold text-brand-purple">From $25,000</div>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-6 flex items-start gap-5 rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/60 p-6 sm:p-7">
                <ShieldCheck className="h-9 w-9 flex-none text-emerald-600" />
                <div>
                  <h4 className="font-display text-base font-bold text-emerald-700">
                    The 30-Day Delivery Guarantee
                  </h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                    We ship your production-ready product by day 30 — or <span className="font-semibold text-ink-950">every day after is free</span>. We’ve made 80+ deliveries. We’re not worried. You shouldn’t be either.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gradient">
                  Start with a free diagnostic call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#calc" className="btn-ghost">
                  Calculate your ROI first
                </a>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                🔒 Fixed-fee engagement. You know the number before we start.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function OfferItem({ item, icon, tone }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 transition-colors hover:border-brand-purple/20">
      <span
        className={`inline-flex h-6 w-6 flex-none items-center justify-center rounded-md ${tone} text-white shadow-glow`}
      >
        {icon}
      </span>
      <div>
        <h5 className="text-[13px] font-bold text-ink-950">{item.t}</h5>
        <p className="mt-0.5 text-[12px] leading-snug text-slate-500">{item.b}</p>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Proof — 3 testimonial cards                                               */
/* ────────────────────────────────────────────────────────────────────────── */

function Proof() {
  const quotes = [
    { t: "They didn't build what we asked for. They built what we actually needed. Saved us three months of going in the wrong direction.", n: 'Rahul K.', r: 'Founder, HealthTech', i: 'RK' },
    { t: "First call, they handed us a build plan sharper than anything we'd seen after months of agency pitches. We signed in two days.", n: 'Sarah M.', r: 'CPO, Series A SaaS', i: 'SM' },
    { t: "Engineering Pod flipped how we think about our tech team. Moving faster, spending 60% less. Embarrassing how long we waited.", n: 'Arjun J.', r: 'CTO, 200-person Enterprise', i: 'AJ' },
  ]
  const tones = [
    'from-brand-purple-deep via-brand-purple to-brand-purple-light',
    'from-brand-magenta via-brand-crimson to-brand-yellow',
    'from-brand-purple via-brand-purple-light to-brand-cyan',
  ]
  return (
    <section id="proof" className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What clients say</span>
            <h2 className="h-section mt-4">
              The first call <span className="gradient-text">actually was different.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.n} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                <div className="font-display text-4xl font-bold leading-none text-brand-magenta">
                  “
                </div>
                <blockquote className="mt-2 flex-1 text-[15px] italic leading-relaxed text-ink-950">
                  {q.t}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span
                    className={`animated-gradient inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${tones[i]} text-xs font-bold text-white`}
                  >
                    {q.i}
                  </span>
                  <div>
                    <div className="text-[13px] font-bold text-ink-950">{q.n}</div>
                    <div className="text-[12px] text-slate-500">{q.r}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  ROI Calculator                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

function ROICalculator() {
  const [engineers, setEngineers] = useState(3)
  const [salaryK, setSalaryK] = useState(120)
  const [overhead, setOverhead] = useState(1.5)

  const { trueMonthly, podMonthly, savings } = useMemo(() => {
    const annual = engineers * salaryK * 1000 * overhead
    const mo = Math.round(annual / 12)
    const pod = Math.max(5000, Math.round((engineers * 3500) / 500) * 500)
    const sv = Math.max(0, mo - pod)
    return { trueMonthly: mo, podMonthly: pod, savings: sv }
  }, [engineers, salaryK, overhead])

  const headline = savings >= 1000 ? `$${Math.round(savings / 1000)}K` : `$${savings.toLocaleString()}`

  return (
    <section id="calc" className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">The ROI</span>
            <div className="gradient-text mt-5 font-display text-7xl font-extrabold leading-none tracking-tighter sm:text-[110px]">
              {headline}
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-ink-950 sm:text-3xl">
              Saved per month<br />vs. hiring in-house.
            </h2>
            <p className="body-muted mt-4 max-w-sm text-[15px]">
              Most teams undercount their true engineering cost by 2–3×. Factor in benefits, overhead, and attrition. Then compare.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-base font-bold text-ink-950">
                  <Calculator className="h-4 w-4 text-brand-purple" />
                  True cost calculator
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-magenta/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-magenta">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-magenta opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-magenta" />
                  </span>
                  Interactive
                </span>
              </div>
              <p className="mt-1.5 text-[12px] text-slate-500">
                Drag the sliders to see your real engineering spend vs. an Engineering Pod.
              </p>

              <div className="mt-6 space-y-1">
                <Slider
                  label="Engineers"
                  value={engineers}
                  setValue={setEngineers}
                  min={1}
                  max={20}
                  step={1}
                  display={engineers}
                />
                <Slider
                  label="Avg. annual salary"
                  value={salaryK}
                  setValue={setSalaryK}
                  min={60}
                  max={200}
                  step={5}
                  display={`$${salaryK}K`}
                />
                <Slider
                  label="Overhead multiplier"
                  value={overhead}
                  setValue={(v) => setOverhead(Number(v))}
                  min={1.2}
                  max={2.0}
                  step={0.1}
                  display={`${overhead.toFixed(1)}×`}
                />
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5">
                <Row label="Your true monthly cost" value={`$${trueMonthly.toLocaleString()}`} />
                <hr className="my-2 border-slate-200/80" />
                <Row
                  label="Engineering Pod"
                  value={
                    <span className="text-brand-purple">${podMonthly.toLocaleString()}/mo</span>
                  }
                />
                <hr className="my-2 border-slate-200/80" />
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-ink-950">Monthly savings</span>
                  <span className="font-display text-xl font-extrabold text-brand-crimson">
                    ${savings.toLocaleString()}
                  </span>
                </div>
              </div>

              <Link to="/contact" className="btn-primary mt-5 w-full justify-center">
                Talk to us about an Engineering Pod
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Slider({ label, value, setValue, min, max, step, display }) {
  const fillPercent = ((Number(value) - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-2 border-b border-slate-200/80 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span className="text-[13px] font-medium text-ink-950">{label}</span>
      <div className="flex flex-1 items-center gap-3 sm:max-w-[220px]">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label={label}
          className="slider-vt flex-1"
          style={{ '--fill': `${fillPercent}%` }}
        />
        <span className="min-w-[3.5rem] text-right text-[13px] font-bold text-brand-purple">
          {display}
        </span>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[12px] font-medium text-slate-500">{label}</span>
      <span className="text-[13px] font-bold text-ink-950">{value}</span>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Free Tools                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

function FreeTools() {
  const tools = [
    { icon: BarChart3, t: 'AI Readiness Score', b: '3 minutes. Know exactly where you stand before spending a dollar on AI.', cta: 'Take the assessment', tone: 'from-brand-purple-deep to-brand-purple' },
    { icon: Calculator, t: 'True Cost Calculator', b: 'What your engineering team actually costs. The number is higher than you think.', cta: 'Calculate now', tone: 'from-brand-purple to-brand-magenta', href: '#calc' },
    { icon: Timer, t: 'Delay Cost Calculator', b: 'Every week of delay has a dollar value. Enter your numbers. Try not to panic.', cta: 'Run the numbers', tone: 'from-brand-magenta to-brand-crimson' },
    { icon: Search, t: 'Scope Validator', b: 'Describe your product in plain English. Get back what’s actually buildable in 30 days.', cta: 'Validate your scope', tone: 'from-brand-crimson to-brand-yellow' },
    { icon: Bot, t: 'AI Workflow Audit', b: '5 questions. We’ll show you where AI can cut time from your process right now.', cta: 'Audit my workflow', tone: 'from-brand-purple to-brand-cyan' },
    { icon: FileText, t: 'Free 30-Day Roadmap', b: 'Our exact playbook. If you can run it yourself — amazing. We’re here if you can’t.', cta: 'Download free', tone: 'from-brand-purple-deep to-brand-purple-light' },
  ]
  return (
    <section id="tools" className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Free tools</span>
              <h2 className="h-section mt-4">
                Diagnose before <span className="gradient-text">you invest.</span>
              </h2>
            </div>
            <p className="lede max-w-xs text-base">
              Give away the diagnosis. The execution is where we earn it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => {
            const Icon = t.icon
            const inner = (
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/30 hover:shadow-card">
                <span className={`animated-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${t.tone} text-white shadow-glow`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h4 className="font-display text-base font-bold tracking-tight text-ink-950">
                  {t.t}
                </h4>
                <p className="flex-1 text-[14px] leading-relaxed text-slate-500">
                  {t.b}
                </p>
                <div className="inline-flex items-center gap-1 text-[12px] font-bold text-brand-purple">
                  {t.cta} <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            )
            return (
              <Reveal key={t.t} delay={i * 70} className="h-full">
                {t.href ? (
                  <a href={t.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

export default function Launch30Days() {
  return (
    <>
      <Hero />
      <Promises />
      <Pain />
      <ValueEquation />
      <SplitTimeline />
      <SplitGuarantee />
      <Offer />
      <Proof />
      <ROICalculator />
      <FreeTools />
      <CTA
        eyebrow="Start this week"
        title="30 minutes. No deck. No pitch."
        body="A sharp conversation about your problem. We’ll tell you what we’d build, how long it’d take, and what it costs — before you commit to anything."
        primaryLabel="Book a free call"
        primaryHref="/contact"
        secondaryLabel="Try a free tool first"
        secondaryHref="#tools"
      />
    </>
  )
}
