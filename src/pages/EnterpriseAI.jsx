import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowDown,
  Check,
  CheckCircle2,
  Shield,
  ShieldCheck,
  Lock,
  Users,
  Zap,
  GitBranch,
  Activity,
  Layers,
  Building2,
  Compass,
  Sparkles,
  Plus,
  Star,
  Heart,
  MessageCircle,
  Repeat2,
  Globe,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Code2,
  Megaphone,
  Briefcase,
  GraduationCap,
  Database,
  FileSearch,
  Rocket,
  CalendarClock,
  CloudRain,
  AlertTriangle,
  Calendar,
  Linkedin,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import {
  SoundWaveBars,
  SoundWaveLine,
  GrowthWave,
  Ripple,
} from '../components/SoundWave.jsx'

/* ────────────────────────────────────────────────────────────────────────── */
/*  Hero                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

function Hero() {
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

      <div className="container-page pb-16 pt-16 sm:pt-24 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/[0.05] px-3.5 py-1.5 text-xs font-semibold text-brand-purple">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-magenta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-magenta" />
            </span>
            Enterprise AI Engineering & Training · We're picky about who we work with
          </span>

          <h1 className="h-display mt-6">
            Production AI in 8 weeks. Not 6 months.{' '}
            <span className="gradient-text">For $60K, not $400K.</span>
          </h1>

          <p className="lede mx-auto mt-6 max-w-2xl">
            Two services, one discipline. Senior squads that ship without breaking
            your existing systems — and AI training that turns your existing
            team into the kind that does.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <ShieldCheck className="h-4 w-4" />
            Fixed fee. Discovery non-negotiable. 100% IP transfer.
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#engagement" className="btn-gradient">
              See the engagement
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Book a discovery call
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Trusted by enterprise teams at
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {['GovTech India', 'Trukkin', 'Easemyhiring', 'CoinView', '+ 30 more'].map(
                (l) => (
                  <span
                    key={l}
                    className="rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-soft"
                  >
                    {l}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { n: '< 8 wks', l: 'Discovery → production' },
            { n: '$60K', l: 'Starting investment' },
            { n: '85%', l: 'Cost saved vs incumbents' },
            { n: '1.8–2.5×', l: 'Velocity lift (training)' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 70}>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-soft">
                <div className="gradient-text font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {s.n}
                </div>
                <div className="mt-2 text-xs text-slate-500">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Brand sound-wave signature */}
        <div className="mx-auto mt-16 max-w-3xl">
          <SoundWaveBars count={56} className="h-14" />
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Promises bar                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function Promises() {
  const items = [
    {
      icon: FileSearch,
      label: 'Discovery first. Always.',
      sub: "We don't work without one.",
      tone: 'from-brand-purple-deep to-brand-purple',
    },
    {
      icon: Users,
      label: 'Senior squad. No juniors.',
      sub: 'Operators who have shipped before.',
      tone: 'from-brand-purple to-brand-purple-light',
    },
    {
      icon: ShieldCheck,
      label: 'Production-grade by default.',
      sub: 'Security, observability, runbooks.',
      tone: 'from-brand-magenta to-brand-crimson',
    },
    {
      icon: GitBranch,
      label: 'Clean exit. IP transferred.',
      sub: 'No managed-services lock-in.',
      tone: 'from-brand-purple-light to-brand-cyan',
    },
  ]
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-white py-12 sm:py-14">
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
                  i === 0
                    ? 'lg:pr-6'
                    : i === items.length - 1
                    ? 'lg:pl-6'
                    : 'lg:px-6'
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
/*  Pain — why enterprise innovation stalls                                   */
/* ────────────────────────────────────────────────────────────────────────── */

function Pain() {
  const cards = [
    {
      icon: Layers,
      title: 'Stuck inside a 12-year-old monolith',
      body:
        'Your team knows what to build. The platform makes it cost a quarter to ship. Every new feature touches 14 services and 4 teams.',
      cost: 'Cost: A quarter per release',
      tone: 'from-brand-purple-deep to-brand-purple',
      Visual: LegacyStackMock,
    },
    {
      icon: AlertTriangle,
      title: 'AI initiatives stalled at PoC',
      body:
        "A notebook was demoed in March. By December, it's still a notebook. Procurement, security review, MLOps maturity — and the model hasn't moved.",
      cost: 'Cost: 8 months. Zero production.',
      tone: 'from-brand-magenta to-brand-crimson',
      Visual: StalledPoCMock,
    },
    {
      icon: TrendingDown,
      title: "Velocity dropped. Headcount didn't.",
      body:
        "You're shipping less than you did with half the team. Process became the product. Every PR waits 6 days on review.",
      cost: 'Cost: 60% velocity. 100% payroll.',
      tone: 'from-brand-crimson to-brand-yellow',
      Visual: VelocityDropMock,
    },
    {
      icon: Compass,
      title: 'Innovation lives in the deck, not the repo',
      body:
        "Bold bets in the roadmap. Reality: maintenance tickets and a quarterly demo. The 'AI strategy' is 80 slides nobody has touched in months.",
      cost: 'Cost: Strategy without shipping',
      tone: 'from-brand-purple to-brand-magenta',
      Visual: DeckVsRepoMock,
    },
  ]
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What we hear in every discovery call</span>
            <h2 className="h-section mt-4">
              If you're a <span className="gradient-text">CIO</span> or{' '}
              <span className="gradient-text">VP of Engineering</span>, you've
              lived at least two of these.
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Enterprise AI doesn't stall because the technology is hard. It stalls
              because the organization around it is heavier than the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon
            const Visual = c.Visual
            return (
              <Reveal key={c.title} delay={i * 80} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <div className="relative h-44 overflow-hidden border-b border-slate-100">
                    <Visual />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span
                      className={`animated-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.tone} text-white shadow-glow`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">
                      {c.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                      {c.body}
                    </p>
                    <span className="mt-5 inline-flex w-fit rounded-full border border-brand-crimson/20 bg-brand-crimson/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-crimson">
                      {c.cost}
                    </span>
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

/* ── Pain mock illustrations ── */

function LegacyStackMock() {
  const layers = [
    { name: 'Frontend (React 16)', year: '2018', status: 'rose' },
    { name: 'API Gateway (Express)', year: '2016', status: 'amber' },
    { name: 'Monolith Backend (Java 8)', year: '2013', status: 'rose' },
    { name: 'Oracle DB · 4.2TB', year: '2011', status: 'rose' },
  ]
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/[0.06] to-brand-purple-light/[0.04] p-4">
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-500">
        <span>Architecture diagram</span>
        <span className="font-mono text-brand-crimson">14 services</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {layers.map((l) => (
          <div
            key={l.name}
            className="flex items-center justify-between rounded-md border border-slate-200/80 bg-white px-2.5 py-1.5"
          >
            <span className="text-[10px] font-semibold text-slate-700">
              {l.name}
            </span>
            <span
              className={`font-mono text-[10px] ${
                l.status === 'rose' ? 'text-rose-600' : 'text-amber-600'
              }`}
            >
              since {l.year}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md border border-rose-200/70 bg-rose-50/60 px-2.5 py-1.5">
        <span className="text-[10px] font-semibold text-rose-700">
          Avg. release cycle
        </span>
        <span className="font-mono text-[10px] font-bold text-rose-600">
          ~ 11 weeks
        </span>
      </div>
    </div>
  )
}

function StalledPoCMock() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/[0.06] to-brand-crimson/[0.04] p-4">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="font-mono text-[10px] font-semibold text-slate-600">
          PoC-classifier-v3.ipynb
        </span>
        <span className="ml-auto font-mono text-[10px] text-slate-400">
          Last run · 8 mo ago
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="rounded-md bg-slate-100/80 px-2 py-1.5 font-mono text-[9.5px] text-slate-600">
          [1] import openai, pandas as pd
        </div>
        <div className="rounded-md bg-slate-100/80 px-2 py-1.5 font-mono text-[9.5px] text-slate-600">
          [2] df = pd.read_csv("data.csv")
        </div>
        <div className="rounded-md bg-slate-100/80 px-2 py-1.5 font-mono text-[9.5px] text-slate-600">
          [3] # eval looked promising
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md border border-amber-200/70 bg-amber-50/60 px-2.5 py-1.5">
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800">
          <AlertTriangle className="h-3 w-3" />
          Awaiting · MLOps review
        </span>
        <span className="font-mono text-[10px] font-bold text-amber-700">
          ~ 4 mo
        </span>
      </div>
    </div>
  )
}

function VelocityDropMock() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson/[0.06] to-brand-yellow/[0.04] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
          PR throughput · last 6 mo
        </span>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-rose-100 px-1.5 py-0.5 text-[9px] font-bold text-rose-700">
          <TrendingDown className="h-2.5 w-2.5" />
          -47%
        </span>
      </div>
      <svg viewBox="0 0 120 60" className="mt-3 h-20 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="velArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e52673" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#e52673" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="velLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#d1023c" />
            <stop offset="100%" stopColor="#e52673" />
          </linearGradient>
        </defs>
        <path d="M0,12 L20,18 L40,22 L60,30 L80,38 L100,48 L120,52 L120,60 L0,60 Z" fill="url(#velArea)" />
        <path d="M0,12 L20,18 L40,22 L60,30 L80,38 L100,48 L120,52" stroke="url(#velLine)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        <div className="rounded-md border border-slate-200/80 bg-white px-2 py-1 text-center">
          <div className="text-[8.5px] uppercase tracking-wider text-slate-400">PRs/wk</div>
          <div className="font-mono text-[11px] font-bold text-ink-950">14</div>
        </div>
        <div className="rounded-md border border-slate-200/80 bg-white px-2 py-1 text-center">
          <div className="text-[8.5px] uppercase tracking-wider text-slate-400">Cycle</div>
          <div className="font-mono text-[11px] font-bold text-rose-600">6.2d</div>
        </div>
        <div className="rounded-md border border-slate-200/80 bg-white px-2 py-1 text-center">
          <div className="text-[8.5px] uppercase tracking-wider text-slate-400">Headcount</div>
          <div className="font-mono text-[11px] font-bold text-ink-950">38</div>
        </div>
      </div>
    </div>
  )
}

function DeckVsRepoMock() {
  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-2 bg-gradient-to-br from-brand-purple/[0.05] to-brand-magenta/[0.04] p-4">
      {/* Deck side */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
          The roadmap deck
        </span>
        <div className="flex-1 rounded-md border border-slate-200/80 bg-white p-2">
          <div className="text-[10px] font-bold text-ink-950">FY26 AI Bets</div>
          <div className="mt-1 space-y-0.5">
            {['• Agentic platform', '• Internal copilot', '• Smart search', '• ML data lake'].map((b) => (
              <div key={b} className="text-[8.5px] text-slate-600">
                {b}
              </div>
            ))}
          </div>
          <div className="mt-1.5 inline-flex rounded-sm bg-brand-purple/10 px-1 text-[8px] font-bold text-brand-purple">
            80 slides
          </div>
        </div>
      </div>

      {/* Repo side */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
          The actual repo
        </span>
        <div className="flex-1 rounded-md border border-slate-200/80 bg-ink-950 p-2 font-mono text-[8.5px] leading-relaxed text-white/70">
          <div className="text-emerald-300">$ git log --since="6 mo"</div>
          <div className="mt-1 text-white/60">
            fix: typo in readme.md
          </div>
          <div className="text-white/60">chore: bump deps</div>
          <div className="text-white/60">fix: lint warning</div>
          <div className="text-white/60">chore: ci config</div>
          <div className="mt-1 text-rose-300">↳ 0 feature commits</div>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  The Math — side-by-side cost comparison                                   */
/* ────────────────────────────────────────────────────────────────────────── */

function TheMath() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-6 h-[100px] w-full opacity-40"
        strokeWidth={1.4}
        duration={13}
        amplitude={24}
        gradientId="mathTopWave"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Run the numbers</span>
            <h2 className="h-section mt-4">
              Same outcome.{' '}
              <span className="gradient-text">A 6× cost delta.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Big Consulting will quote you 6 months. We don't compete with them on
              process. We compete with them on math.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Their way */}
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-rose-600">
                <TrendingDown className="h-3 w-3" />
                The Big Consulting way
              </div>
              <div className="mt-5 flex items-baseline gap-2 font-display">
                <span className="text-5xl font-bold leading-none text-rose-500 line-through decoration-rose-400 decoration-2">
                  $400–700K
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/25 bg-rose-50 px-3 py-1.5 text-[12.5px] font-bold text-rose-700">
                  <Calendar className="h-3.5 w-3.5" />
                  4–6 months
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/25 bg-rose-50 px-3 py-1.5 text-[12.5px] font-bold text-rose-700">
                  <Users className="h-3.5 w-3.5" />
                  30+ stakeholders
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/25 bg-rose-50 px-3 py-1.5 text-[12.5px] font-bold text-rose-700">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Still a prototype
                </span>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                {[
                  '12-week discovery phase (mostly slides)',
                  '60% of PoCs never reach production',
                  'Recurring change-order invoices',
                  'Hand-off doc on a Notion page nobody reads',
                  'Lock-in to their managed services',
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13px] text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-rose-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Our way */}
          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border-2 border-brand-purple/30 bg-white p-8 shadow-glow">
              {/* Ripple behind the price */}
              <div className="pointer-events-none absolute right-6 top-16 -z-0 h-[200px] w-[200px]">
                <Ripple
                  size={220}
                  count={3}
                  duration={4.4}
                  color="rgba(64, 41, 153, 0.22)"
                  origin="right"
                />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/25 bg-brand-purple/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-purple">
                <TrendingUp className="h-3 w-3" />
                The Volumetree way
              </div>
              <div className="relative mt-5 flex items-baseline gap-2 font-display">
                <span className="gradient-text text-6xl font-bold leading-none">
                  $60K
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  fixed-fee
                </span>
              </div>
              <div className="relative mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-purple/25 bg-brand-purple/[0.07] px-3 py-1.5 text-[12.5px] font-bold text-brand-purple">
                  <Calendar className="h-3.5 w-3.5" />
                  &lt; 8 weeks
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-magenta/25 bg-brand-magenta/[0.08] px-3 py-1.5 text-[12.5px] font-bold text-brand-magenta">
                  <Users className="h-3.5 w-3.5" />
                  Senior squad
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1.5 text-[12.5px] font-bold text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  In production
                </span>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                {[
                  'Paid discovery in week 1 — outcomes locked',
                  'Pure-play prototyping by week 3',
                  'Beta-test platform live for real users',
                  'Production hand-off with full IP transfer',
                  'Optional AI Training to keep velocity after we leave',
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13px] text-ink-950"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-magenta" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Diagnosis Callout — the "more headcount" line as a solo fold              */
/* ────────────────────────────────────────────────────────────────────────── */

function DiagnosisCallout() {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-20 sm:py-24">
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-6 h-[100px] w-full opacity-35"
        strokeWidth={1.3}
        duration={14}
        amplitude={22}
        gradientId="diagnosisWave"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">The real diagnosis</span>
            <p className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tighter text-ink-950 sm:text-4xl md:text-[44px]">
              You don't need more headcount.{' '}
              <span className="gradient-text">You need a different operating model.</span>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Hiring three more engineers won't fix a 6-day code review. Adding a
              director won't shorten the security review queue. The fix is the way
              the work flows — not the number of people in it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  The Promise — DARK, the brand promise                                     */
/* ────────────────────────────────────────────────────────────────────────── */

function ThePromise() {
  const promises = [
    {
      icon: Zap,
      title: 'Really fast.',
      body: 'PRs in week one. Production in week six. Velocity measured in cycle time, not promises.',
    },
    {
      icon: Shield,
      title: 'Really stable.',
      body: 'Test coverage, observability, runbooks, rollback paths. We ship the things on-call teams actually want.',
    },
    {
      icon: Users,
      title: 'Embedded, not parachuted.',
      body: 'We work inside your repos, your CI, your standups. We hand back a team that ships better — not a tool.',
    },
    {
      icon: GitBranch,
      title: 'Clean exit, every time.',
      body: 'No managed-services lock-in. Documented, knowledge-transferred, and out — when the work is done.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(50% 50% at 80% 10%, rgba(105,87,255,0.4) 0%, transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(229,38,115,0.3) 0%, transparent 60%)',
        }}
      />
      <GrowthWave className="opacity-30" idPrefix="promiseWave" />

      <div className="container-page relative">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              The promise
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Development — really fast,{' '}
              <span className="gradient-text">really stable.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Two words on every contract. Both non-negotiable.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {promises.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 90}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                    {p.body}
                  </p>
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
/*  Methodology — 4-step process                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function Methodology() {
  const steps = [
    {
      n: '01',
      icon: FileSearch,
      title: 'Discovery (non-negotiable)',
      duration: '1–2 weeks · paid',
      body:
        "We don't quote a build without one. We map your real problem, the constraints around it, and the riskiest assumption first. If we're not the right fit, we tell you in writing.",
      tone: 'from-brand-purple-deep to-brand-purple',
    },
    {
      n: '02',
      icon: Rocket,
      title: 'Pure-play prototyping',
      duration: '2–3 weeks',
      body:
        'We build the spine of the product, not a slide of it. Real data flows, real auth, real deploy. By end of week 3 there is something running you can click.',
      tone: 'from-brand-purple to-brand-magenta',
    },
    {
      n: '03',
      icon: Users,
      title: 'Beta-test platform',
      duration: '1–2 weeks',
      body:
        "We don't ship into a vacuum. The prototype goes live to a small ring of real users — your internal team or a friendly cohort. We instrument it, watch it, and fix what breaks.",
      tone: 'from-brand-magenta to-brand-crimson',
    },
    {
      n: '04',
      icon: ShieldCheck,
      title: 'Iteration & hardening',
      duration: '2–3 weeks',
      body:
        'Production rollout. Security review, monitoring, runbooks, error fixes. We don\'t hand off "demo-ready" — we hand off "running tomorrow without us."',
      tone: 'from-brand-crimson to-brand-yellow',
    },
  ]

  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we work</span>
            <h2 className="h-section mt-4">
              Four steps. Eight weeks.{' '}
              <span className="gradient-text">Production.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              The same arc on every engagement. We don't reinvent the process per
              client — that's the part the big firms charge you for.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.n} delay={i * 80}>
                <div className="flex h-full items-start gap-5 rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <div className="flex-none">
                    <span
                      className={`animated-gradient inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${s.tone} text-white shadow-glow`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="mt-3 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {s.n}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">
                        {s.title}
                      </h3>
                      <span className="rounded-full bg-brand-purple/[0.06] px-2 py-0.5 text-[11px] font-semibold text-brand-purple">
                        {s.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                      {s.body}
                    </p>
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
/*  Two Paths — Engineering vs Training                                       */
/* ────────────────────────────────────────────────────────────────────────── */

function TwoPaths() {
  const paths = [
    {
      kind: 'engineering',
      label: 'AI Engineering Teams',
      tagline: 'We build it. You ship it.',
      icon: Code2,
      tone: 'from-brand-purple-deep to-brand-purple',
      headline: 'Senior squad. Embedded. Production in 8 weeks.',
      body:
        'A self-contained squad inside your repos, your CI, your standups. We carry the build from discovery to production. You get the artifact and the team that knows it.',
      bullets: [
        '1 engagement lead · 2–4 senior engineers',
        '1 AI/ML specialist · 1 product strategist',
        'Designer added when the surface needs it',
        'Discovery → Prototype → Beta → Production',
        'Full IP transfer + runbooks + monitoring',
      ],
      footer: '$60K starting · 8-week fixed-fee sprint',
      cta: 'Scope an engagement',
      href: '#engagement',
    },
    {
      kind: 'training',
      label: 'AI Training for Teams',
      tagline: 'We train you. You ship like us.',
      icon: GraduationCap,
      tone: 'from-brand-magenta to-brand-crimson',
      headline: 'Make every team in your org measurably faster.',
      body:
        "We don't sell off-the-shelf curriculum. The program is shaped by your codebase, your workflows, and the bottlenecks your team already knows about. Hands-on, inside your stack.",
      bullets: [
        'Engineering track · 3 weeks · Cursor, Claude Code, agentic workflows',
        'Product & Ops track · 2 weeks · automation, internal agents',
        'Leadership track · 1 week · bets, funding, measurement',
        'Cycle time instrumented before & after',
        'Pilot one team first, then scale across the org',
      ],
      footer: '1.8–2.5× avg velocity lift · Pilot starts at $25K',
      cta: 'Plan a training pilot',
      href: '/contact',
    },
  ]
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Two ways to work with us</span>
            <h2 className="h-section mt-4">
              Build it with our squad —{' '}
              <span className="gradient-text">or train yours to ship like ours.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Most enterprises do both. We start with the build, finish with the
              training, and your team owns it after we leave.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {paths.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.kind} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <div className="flex items-center gap-3">
                    <span
                      className={`animated-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.tone} text-white shadow-glow`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        {p.label}
                      </div>
                      <div className="font-display text-base font-bold text-ink-950">
                        {p.tagline}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-ink-950">
                    {p.headline}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {p.body}
                  </p>

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[13.5px] text-slate-700"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-none text-brand-magenta" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="text-[12px] font-semibold text-slate-500">
                      {p.footer}
                    </div>
                  </div>
                  <Link
                    to={p.href.startsWith('#') ? '#' : p.href}
                    {...(p.href.startsWith('#') ? { onClick: (e) => { e.preventDefault(); document.getElementById('engagement')?.scrollIntoView({ behavior: 'smooth' }) } } : {})}
                    className="btn-primary mt-4 w-full justify-center"
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
/*  Engagement — what $60K gets you                                           */
/* ────────────────────────────────────────────────────────────────────────── */

function Engagement() {
  const included = [
    { t: '1–2 week paid discovery', b: 'We map the problem, lock the outcome, and tell you in writing if we are the right fit.' },
    { t: 'Senior 4–7 person squad', b: 'Engagement lead, senior engineers, AI/ML specialist, product strategist. No juniors.' },
    { t: 'Pure-play prototype', b: 'Working spine of the product by week 3 — auth, data flows, AI, deploy. Not a Figma.' },
    { t: 'Beta-test platform', b: 'Real users on the build. Instrumentation, observation, and the fixes that come from it.' },
  ]
  const bonuses = [
    { t: 'Security review & infra hardening', b: 'IAM, secrets, threat model, runbooks. Not an add-on invoice.' },
    { t: 'Production handoff docs', b: 'Architecture, decisions, ops playbooks. Your team can own it on day 57.' },
    { t: 'AI Training pilot (optional)', b: 'Plug in a 1–3 week training track to lock the velocity in after we leave.' },
    { t: '30-day post-launch support', b: 'We do not disappear. Issues after launch, we are on it. Included.' },
  ]
  const stack = [
    ['Paid discovery & strategy', '$18,000'],
    ['Senior engineering squad (8 wks)', '$280,000'],
    ['AI/ML specialist (8 wks)', '$80,000'],
    ['Beta-test platform & observability', '$28,000'],
    ['Security review & hardening', '$24,000'],
    ['Production handoff & docs', '$12,000'],
    ['30-day post-launch support', '$18,000'],
  ]

  return (
    <section id="engagement" className="relative overflow-hidden py-24 sm:py-28">
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-8 h-[100px] w-full opacity-50"
        strokeWidth={1.5}
        duration={12}
        amplitude={26}
        gradientId="engagementWave"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The engagement</span>
            <h2 className="h-section mt-4">
              $60K. 8 weeks.{' '}
              <span className="gradient-text">Production-grade.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              One contract, one number, one calendar. The math is the offer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-3xl border-2 border-brand-purple/30 bg-white shadow-glow">
            {/* Header panel */}
            <div className="animated-gradient relative overflow-hidden bg-gradient-to-br from-brand-purple-deep via-brand-purple to-brand-magenta p-8 text-white sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full border border-white/10"
              />
              <SoundWaveLine
                className="pointer-events-none absolute inset-x-0 top-0 h-[100px] w-full opacity-45"
                strokeWidth={2}
                duration={10}
                amplitude={26}
                fromColor="#ffffff"
                midColor="#ffffff"
                toColor="#ffffff"
                gradientId="engHeadWave"
              />
              <SoundWaveBars
                count={18}
                width={2}
                gap={3}
                className="pointer-events-none absolute bottom-6 right-6 h-10 w-32 opacity-40"
                barClassName="bg-white"
              />

              <div className="relative">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                  Enterprise AI Engineering · 8-week sprint
                </div>
                <div className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  From legacy to live.<br />8 weeks. $60K fixed-fee.
                </div>
                <div className="mt-3 text-base text-white/75">
                  Discovery non-negotiable. Pure-play prototype. Real users. Production.
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    What's included
                  </div>
                  <div className="mt-5 space-y-3">
                    {included.map((it) => (
                      <OfferItem
                        key={it.t}
                        item={it}
                        icon={<Check className="h-3.5 w-3.5" />}
                        tone="bg-brand-purple"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    The bonuses (stacked in)
                  </div>
                  <div className="mt-5 space-y-3">
                    {bonuses.map((it) => (
                      <OfferItem
                        key={it.t}
                        item={it}
                        icon={<Plus className="h-3.5 w-3.5" />}
                        tone="bg-brand-magenta"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Value stack */}
              <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[13px] font-bold text-ink-950">
                  <span>📦</span> What you're actually getting
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
                    <div className="text-[13px] font-bold text-ink-950">
                      Total market value
                    </div>
                    <div className="text-[13px] font-semibold text-slate-400 line-through">
                      $460,000
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-semibold text-slate-500">Your price</div>
                    <div className="font-display text-2xl font-bold text-brand-purple">
                      $60,000 fixed-fee
                    </div>
                  </div>
                </div>
              </div>

              {/* Picky callout */}
              <div className="mt-6 flex items-start gap-5 rounded-2xl border-2 border-brand-purple/20 bg-brand-purple/[0.04] p-6 sm:p-7">
                <FileSearch className="h-9 w-9 flex-none text-brand-purple" />
                <div>
                  <h4 className="font-display text-base font-bold text-brand-purple">
                    We're picky. Discovery decides it.
                  </h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                    We don't take every engagement. The paid discovery is the
                    qualifier. If the work isn't a fit, we tell you — and you
                    keep the discovery artifact either way.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gradient">
                  Book a discovery call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Or start with training only
                </Link>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500">
                🔒 Fixed-fee. Discovery before quote. 100% IP transfer on exit.
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
/*  Social Wall — enterprise version                                          */
/* ────────────────────────────────────────────────────────────────────────── */

function SocialWall() {
  const items = [
    {
      type: 'linkedin',
      name: 'Ravi Subramanian',
      role: 'VP Engineering, Series C SaaS',
      initials: 'RS',
      tone: 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
      date: '2w',
      body: (
        <>
          Replaced a 6-month, <Hl>$500K</Hl> consulting engagement with Volumetree's 8-week sprint. <Hl>Live in production on day 56</Hl>. My CFO has stopped asking hard questions for the first time in a year.
        </>
      ),
    },
    {
      type: 'slack',
      channel: '#eng-leadership',
      author: 'Sarah Chen (CTO)',
      body: 'team: the Volumetree squad just shipped the agent platform to prod. our internal teams are using it. that\'s phase 2 of our roadmap done in 7 weeks. ridiculous.',
      reactions: ['🚀 12', '🙌 8', '❤️ 5'],
    },
    {
      type: 'velocity',
      label: 'Eng velocity · before/after',
      before: '14 PRs/wk',
      after: '38 PRs/wk',
      delta: '+171%',
      caption: '"After the training, our internal team kept the velocity up. That\'s the actual win." — Head of Platform',
    },
    {
      type: 'quote',
      name: 'Priya Krishnan',
      role: 'CIO, $4B Logistics co.',
      initials: 'PK',
      tone: 'from-brand-magenta via-brand-crimson to-brand-yellow',
      body: 'We had three Big Four PoCs sitting in notebooks. Volumetree shipped one of them to production in 7 weeks. The other two we cancelled.',
    },
    {
      type: 'deploy',
      status: 'Production deployment',
      domain: 'agents.acmecorp.internal',
      meta: 'main · ✓ 142 tests passed · 8s',
      caption: '"Day 56. Production. Real users. From a notebook nobody had touched in 8 months."',
    },
    {
      type: 'linkedin',
      name: 'Karan Mehta',
      role: 'Head of AI, Series B FinTech',
      initials: 'KM',
      tone: 'from-brand-purple via-brand-purple-light to-brand-cyan',
      date: '4w',
      body: (
        <>
          We brought Volumetree in for the build AND the training. <Hl>Engineering velocity is up 2.1×</Hl> two months after handoff. The team is the team. The playbook is what changed.
        </>
      ),
    },
    {
      type: 'audit',
      label: 'Security review · passed',
      checks: ['SOC 2 controls', 'IAM hardened', 'Threat model documented', 'Runbooks signed off'],
      caption: '"Audit-ready on day one of production. We didn\'t have to do anything." — Head of InfoSec',
    },
    {
      type: 'quote',
      name: 'Anna L.',
      role: 'VP Product, HealthTech',
      initials: 'AL',
      tone: 'from-brand-purple-light via-brand-purple to-brand-cyan',
      body: 'The discovery phase paid for itself. We went in thinking we needed a chatbot. We came out shipping internal automation that saved 1,200 ops hours a month.',
    },
  ]
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(50% 50% at 20% 0%, rgba(105,87,255,0.28) 0%, transparent 60%), radial-gradient(50% 50% at 80% 100%, rgba(229,38,115,0.22) 0%, transparent 60%)',
        }}
      />
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-10 h-[100px] w-full opacity-25"
        strokeWidth={1.2}
        duration={16}
        amplitude={20}
        fromColor="#6957ff"
        midColor="#e52673"
        toColor="#6957ff"
        gradientId="enterpriseWallWave"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              Thank-you notes
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tighter sm:text-4xl md:text-[44px]">
              Enterprise teams that bet on us.{' '}
              <span className="gradient-text">No regrets attached.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              VPs, CIOs, and heads of engineering. They shipped. They scaled. They told us about it.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-7xl columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 4) * 90} className="break-inside-avoid">
              {it.type === 'linkedin' && <LinkedInCard t={it} />}
              {it.type === 'slack' && <SlackCard s={it} />}
              {it.type === 'velocity' && <VelocityCard v={it} />}
              {it.type === 'quote' && <EQuoteCard q={it} />}
              {it.type === 'deploy' && <EDeployCard d={it} />}
              {it.type === 'audit' && <AuditCard a={it} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hl({ children }) {
  return (
    <span className="rounded-sm bg-brand-magenta/25 px-1 text-white">
      {children}
    </span>
  )
}

function ECardShell({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </div>
  )
}

function LinkedInCard({ t }) {
  return (
    <ECardShell>
      <div className="flex items-center gap-3">
        <span
          className={`animated-gradient inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${t.tone} text-[11px] font-bold text-white`}
        >
          {t.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-bold leading-tight text-white">{t.name}</div>
          <div className="text-[11px] leading-tight text-white/50">{t.role}</div>
        </div>
        <Linkedin className="h-4 w-4 flex-none text-[#0a66c2]" />
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-white/85">{t.body}</p>
      <div className="mt-4 flex items-center justify-between text-white/40">
        <div className="flex items-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-1">
            👍 {Math.floor(40 + Math.random() * 200)}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-3 w-3" /> {Math.floor(5 + Math.random() * 30)}
          </span>
        </div>
        <span className="text-[10px]">{t.date}</span>
      </div>
    </ECardShell>
  )
}

function SlackCard({ s }) {
  return (
    <ECardShell>
      <div className="flex items-center gap-2 text-[11px]">
        <span className="font-mono font-semibold text-white/60">{s.channel}</span>
        <span className="ml-auto rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white/60">
          Slack
        </span>
      </div>
      <div className="mt-3 flex items-start gap-2.5">
        <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded bg-gradient-to-br from-emerald-500 to-emerald-700 text-[10px] font-bold text-white">
          SC
        </span>
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="text-[12px] font-bold text-white">{s.author}</span>
            <span className="text-[10px] text-white/40">12:42 PM</span>
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-white/85">{s.body}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {s.reactions.map((r) => (
              <span
                key={r}
                className="inline-flex rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ECardShell>
  )
}

function VelocityCard({ v }) {
  return (
    <ECardShell>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
          <BarChart3 className="h-3 w-3" />
          {v.label}
        </span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
          {v.delta}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
          <div className="text-[9px] font-bold uppercase tracking-wider text-white/40">
            Before
          </div>
          <div className="mt-1 font-display text-xl font-bold text-white/65 line-through">
            {v.before}
          </div>
        </div>
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/[0.08] p-3">
          <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-300">
            After
          </div>
          <div className="mt-1 font-display text-xl font-bold text-emerald-200">
            {v.after}
          </div>
        </div>
      </div>
      <svg viewBox="0 0 120 30" className="mt-4 h-10 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="velUp" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#6957ff" />
          </linearGradient>
        </defs>
        <path d="M0,24 L20,22 L40,18 L60,14 L80,10 L100,6 L120,4" stroke="url(#velUp)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <div className="mt-3 border-t border-white/10 pt-3 text-[12px] text-white/65">
        {v.caption}
      </div>
    </ECardShell>
  )
}

function EQuoteCard({ q }) {
  return (
    <ECardShell>
      <div className="font-display text-3xl font-bold leading-none text-brand-magenta">"</div>
      <p className="mt-2 text-[14px] italic leading-relaxed text-white/85">{q.body}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <span
          className={`animated-gradient inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${q.tone} text-[11px] font-bold text-white`}
        >
          {q.initials}
        </span>
        <div className="min-w-0">
          <div className="text-[13px] font-bold text-white">{q.name}</div>
          <span className="mt-1 inline-flex items-center rounded-md border border-brand-magenta/25 bg-brand-magenta/10 px-2 py-0.5 text-[11px] font-semibold text-brand-magenta">
            {q.role}
          </span>
        </div>
      </div>
    </ECardShell>
  )
}

function EDeployCard({ d }) {
  return (
    <ECardShell>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        <span className="text-[12px] font-bold text-white">{d.status}</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-white/40">CI/CD</span>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900 px-3 py-2 font-mono text-[11px] text-emerald-300">
        <Globe className="h-3.5 w-3.5 text-white/60" />
        <span className="truncate">{d.domain}</span>
      </div>
      <div className="mt-2 font-mono text-[10.5px] text-white/45">{d.meta}</div>
      <div className="mt-4 space-y-1.5 rounded-lg border border-white/10 bg-ink-900 p-3 font-mono text-[10.5px] leading-relaxed text-white/65">
        <div className="text-emerald-300">✓ Built workspace</div>
        <div className="text-emerald-300">✓ Ran tests · 142 passed</div>
        <div className="text-emerald-300">✓ Security review signed off</div>
        <div className="text-white">→ Production live</div>
      </div>
      <div className="mt-4 border-t border-white/10 pt-3 text-[12px] text-white/65">
        {d.caption}
      </div>
    </ECardShell>
  )
}

function AuditCard({ a }) {
  return (
    <ECardShell>
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-emerald-400" />
        <span className="text-[12px] font-bold text-white">{a.label}</span>
        <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
          PASSED
        </span>
      </div>
      <div className="mt-3 space-y-1.5">
        {a.checks.map((c) => (
          <div
            key={c}
            className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5"
          >
            <CheckCircle2 className="h-3.5 w-3.5 flex-none text-emerald-400" />
            <span className="text-[12px] text-white/85">{c}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-white/10 pt-3 text-[12px] text-white/65">
        {a.caption}
      </div>
    </ECardShell>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  FAQ                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

function FAQSection() {
  const items = [
    {
      q: 'How is this different from staff augmentation?',
      a: "Staff-aug gives you bodies. We give you a self-contained squad with an opinionated delivery model that ships in weeks, not quarters. We own outcomes, not hours. If we miss the date, that's our problem.",
    },
    {
      q: 'Do you work inside our codebase or stand up something parallel?',
      a: "Inside yours, by default. We adapt to your CI, your conventions, your code review process. We only build parallel stacks when the existing one is the actual blocker — and we'll tell you straight in discovery.",
    },
    {
      q: 'What if discovery shows we are not a fit?',
      a: 'We tell you in writing, you keep the artifact, and we recommend a path forward — even if it is not us. Roughly 30% of discoveries end this way. We are not desperate for the build, and that is exactly why we are good at it.',
    },
    {
      q: 'How do you handle security and IP?',
      a: "We sign your standard MSA/NDA. All code lives in your repos, behind your IAM. Security review is built into week 7 — not invoiced separately. On exit, full IP, documentation, and access transfer. We've passed SOC2-aligned reviews at 10+ enterprises.",
    },
    {
      q: 'When should we pick Training instead of Engineering?',
      a: 'Engineering = you have a thing to build and you need it shipped. Training = your team has the headcount but not the AI muscle. Most enterprises do both: we ship the first one, train the team alongside, and they own the next one without us.',
    },
    {
      q: 'Does the price really stay at $60K?',
      a: "Yes, for the standard 8-week engagement scope. We don't run T&M, and we don't run change-order invoices mid-sprint. If your scope is bigger than 8 weeks (rare), we'll quote it in discovery — before you sign anything.",
    },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Enterprise FAQ</span>
            <h2 className="h-section mt-4">What enterprise leaders ask first.</h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    isOpen
                      ? 'border-brand-purple/20 shadow-soft'
                      : 'border-slate-200/80'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[17px] font-semibold tracking-tight text-ink-950">
                      {item.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 flex-none text-brand-purple transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </div>
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
/*  Page                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

export default function EnterpriseAI() {
  return (
    <>
      <Hero />
      <Promises />
      <Pain />
      <TheMath />
      <DiagnosisCallout />
      <ThePromise />
      <Methodology />
      <TwoPaths />
      <Engagement />
      <SocialWall />
      <FAQSection />
      <CTA
        eyebrow="Tell us where you're stuck"
        title="30-minute discovery call. Not a sales pitch."
        body="If the work is a fit, you'll know by the end of the call. If it isn't, we'll tell you straight — and point you to who is."
        primaryLabel="Book a discovery call"
        primaryHref="/contact"
        secondaryLabel="Read the methodology"
        secondaryHref="#engagement"
      />
    </>
  )
}
