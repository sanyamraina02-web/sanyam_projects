import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowDown,
  Check,
  Sparkles,
  Users,
  ShieldCheck,
  Lock,
  Wallet,
  Clock,
  Compass,
  PlayCircle,
  Wrench,
  Rocket,
  CalendarClock,
  CloudRain,
  Plus,
  Star,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Globe,
} from 'lucide-react'
import { useState } from 'react'
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
          {/* Live cohort badge with ripple ping */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/[0.05] px-3.5 py-1.5 text-xs font-semibold text-brand-purple">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-magenta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-magenta" />
            </span>
            Idea → Production OS · Built for founders shipping this quarter
          </span>

          <h1 className="h-display mt-6">
            Ship your idea fast.{' '}
            <span className="gradient-text">Like, embarrassingly fast.</span>
          </h1>

          <p className="lede mx-auto mt-6 max-w-2xl">
            The 7-day operating system behind{' '}
            <span className="font-semibold text-ink-950">80+ founder launches</span>.
            Run it as a $299 starter kit, a $1,500 coached month, or a hands-on
            concierge build. Pick your speed.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="btn-gradient">
              See the pricing ladder
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Talk to us first
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Used by founders at
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {['Trukkin', 'CoinView', 'Easemyhiring', 'GovTech India', '+ 75 more'].map(
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
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { n: '$299', l: 'Start at' },
            { n: '7 days', l: 'Idea → shippable plan' },
            { n: '80+', l: 'Launches behind it' },
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
/*  Promises bar                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function Promises() {
  const items = [
    {
      icon: Lock,
      label: 'One scope. One price.',
      sub: 'Know the number before we start.',
      tone: 'from-brand-purple-deep to-brand-purple',
    },
    {
      icon: Users,
      label: 'Senior team. No juniors.',
      sub: 'Founders ship with founders.',
      tone: 'from-brand-purple to-brand-purple-light',
    },
    {
      icon: ShieldCheck,
      label: 'Production-grade by default',
      sub: 'Security & monitoring built in.',
      tone: 'from-brand-magenta to-brand-crimson',
    },
    {
      icon: Sparkles,
      label: 'AI-native templates',
      sub: 'Patterns from 80+ real builds.',
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
/*  Pain — what going slow (or alone) actually costs                          */
/* ────────────────────────────────────────────────────────────────────────── */

function Pain() {
  const cards = [
    {
      icon: Clock,
      title: '6 months of YouTube + half-built prototypes',
      body:
        "You've watched every AI-startup video on the internet. You've half-built three things in Cursor. You still don't have a customer. The tutorials don't tell you what to cut.",
      cost: 'Cost: 6 months of momentum',
      tone: 'from-brand-purple-deep to-brand-purple',
      Visual: TutorialHellMock,
    },
    {
      icon: Wallet,
      title: 'Hiring an agency that ships a deck',
      body:
        'Two months of discovery calls. A 60-slide deck. A Figma file. No code. The retainer keeps billing. You feel further from launch than the day you started.',
      cost: 'Cost: $40–80K and 4 lost months',
      tone: 'from-brand-magenta to-brand-crimson',
      Visual: AgencyDeckMock,
    },
    {
      icon: Compass,
      title: 'Building alone until you burn out',
      body:
        "You're senior enough to build it. You're not senior enough to be your own product manager, designer, and unblocker at 11pm on a Wednesday. Nobody is.",
      cost: 'Cost: Quiet quitting on yourself',
      tone: 'from-brand-crimson to-brand-yellow',
      Visual: SoloBurnoutMock,
    },
  ]
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why most ideas die in the drafts folder</span>
            <h2 className="h-section mt-4">
              The problem isn't your idea.{' '}
              <span className="gradient-text">It's the gap between idea and ship.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              You don't need another course. You need the cuts, the stack, and the
              feedback loop a senior team would give you on day one.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon
            const Visual = c.Visual
            return (
              <Reveal key={c.title} delay={i * 90} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  {/* Top visual area */}
                  <div className="relative h-44 overflow-hidden border-b border-slate-100">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-90"
                      style={{
                        backgroundImage:
                          'radial-gradient(120% 80% at 50% 0%, rgba(64,41,153,0.06), transparent 70%)',
                      }}
                    />
                    <Visual />
                  </div>

                  {/* Content */}
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

/* ── Pain card abstract illustrations ── */

/* Card 1: Concentric spinning loops — "going in circles" */
function TutorialHellMock() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-purple/[0.08] to-brand-purple-light/[0.04]">
      <svg
        viewBox="0 0 240 180"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="loopGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d005a" />
            <stop offset="60%" stopColor="#402999" />
            <stop offset="100%" stopColor="#6957ff" />
          </linearGradient>
          <radialGradient id="loopCenter1" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#6957ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6957ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft glow center */}
        <circle cx="120" cy="90" r="60" fill="url(#loopCenter1)" />

        {/* 4 concentric loops with gaps, rotating */}
        <g transform="translate(120 90)">
          <g>
            <circle
              cx="0"
              cy="0"
              r="68"
              fill="none"
              stroke="url(#loopGrad1)"
              strokeWidth="1.6"
              strokeDasharray="320 60"
              strokeLinecap="round"
              opacity="0.35"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="28s"
              repeatCount="indefinite"
            />
          </g>
          <g>
            <circle
              cx="0"
              cy="0"
              r="52"
              fill="none"
              stroke="url(#loopGrad1)"
              strokeWidth="1.8"
              strokeDasharray="220 50"
              strokeLinecap="round"
              opacity="0.55"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="-360"
              dur="22s"
              repeatCount="indefinite"
            />
          </g>
          <g>
            <circle
              cx="0"
              cy="0"
              r="36"
              fill="none"
              stroke="url(#loopGrad1)"
              strokeWidth="2"
              strokeDasharray="140 40"
              strokeLinecap="round"
              opacity="0.75"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="16s"
              repeatCount="indefinite"
            />
          </g>
          <g>
            <circle
              cx="0"
              cy="0"
              r="20"
              fill="none"
              stroke="url(#loopGrad1)"
              strokeWidth="2"
              strokeDasharray="80 30"
              strokeLinecap="round"
              opacity="0.95"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="-360"
              dur="10s"
              repeatCount="indefinite"
            />
          </g>
          <circle cx="0" cy="0" r="4" fill="url(#loopGrad1)" />
        </g>
      </svg>
    </div>
  )
}

/* Card 2: Receding stack of slides — "decks instead of code" */
function AgencyDeckMock() {
  const slides = [
    { y: 110, w: 150, opacity: 0.18, rotate: -2 },
    { y: 92, w: 138, opacity: 0.28, rotate: 1.2 },
    { y: 74, w: 126, opacity: 0.42, rotate: -1.6 },
    { y: 56, w: 114, opacity: 0.6, rotate: 0.8 },
    { y: 38, w: 102, opacity: 0.82, rotate: -0.6 },
    { y: 22, w: 92, opacity: 1, rotate: 0 },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-magenta/[0.07] to-brand-crimson/[0.04]">
      <svg
        viewBox="0 0 240 180"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="deckGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e52673" />
            <stop offset="100%" stopColor="#d1023c" />
          </linearGradient>
        </defs>

        {/* Soft halo */}
        <ellipse cx="120" cy="60" rx="100" ry="40" fill="#e52673" fillOpacity="0.06" />

        {/* Stack of slide rectangles, receding upward */}
        <g>
          {slides.map((s, i) => (
            <rect
              key={i}
              x={120 - s.w / 2}
              y={s.y}
              width={s.w}
              height={32}
              rx="4"
              fill="white"
              stroke="url(#deckGrad2)"
              strokeWidth="1.5"
              opacity={s.opacity}
              transform={`rotate(${s.rotate} 120 ${s.y + 16})`}
            />
          ))}
          {/* Tiny "WIP" pill on the topmost slide */}
          <rect x="100" y="28" width="40" height="10" rx="5" fill="url(#deckGrad2)" opacity="0.9" />
        </g>

        {/* Ground line */}
        <line
          x1="20"
          y1="158"
          x2="220"
          y2="158"
          stroke="#e52673"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <text
          x="120"
          y="172"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill="#d1023c"
          opacity="0.7"
        >
          0 lines shipped
        </text>
      </svg>
    </div>
  )
}

/* Card 3: Lone pulsing dot in a fading dot-field — "isolation" */
function SoloBurnoutMock() {
  // 7x5 grid of dots, with the center one being the "lone bright dot"
  const cols = 9
  const rows = 5
  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 20 + c * 25
      const y = 28 + r * 28
      const distFromCenter = Math.sqrt(
        Math.pow(c - (cols - 1) / 2, 2) + Math.pow(r - (rows - 1) / 2, 2)
      )
      const isCenter = c === Math.floor(cols / 2) && r === Math.floor(rows / 2)
      dots.push({ x, y, distFromCenter, isCenter })
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-crimson/[0.07] to-brand-yellow/[0.04]">
      <svg
        viewBox="0 0 240 180"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="soloPulse" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#d1023c" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#d1023c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="soloDotGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d1023c" />
            <stop offset="100%" stopColor="#e52673" />
          </linearGradient>
        </defs>

        {/* Pulsing halo behind center */}
        <circle cx="120" cy="84" r="60" fill="url(#soloPulse)">
          <animate
            attributeName="r"
            values="40;72;40"
            dur="3.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0.2;0.9"
            dur="3.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Dot grid — center is bright, distant dots fade */}
        {dots.map((d, i) => {
          if (d.isCenter) return null
          const opacity = Math.max(0.08, 0.5 - d.distFromCenter * 0.09)
          return (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={1.6}
              fill="#d1023c"
              opacity={opacity}
            />
          )
        })}

        {/* Lone bright dot at center */}
        <circle cx="120" cy="84" r="5" fill="url(#soloDotGrad)">
          <animate
            attributeName="r"
            values="4.5;6;4.5"
            dur="3.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* "you" label */}
        <text
          x="120"
          y="155"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill="#d1023c"
          opacity="0.7"
        >
          you · alone here
        </text>
      </svg>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  The 7-Day Arc                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function SevenDayArc() {
  const days = [
    {
      day: 'Day 1',
      title: 'Frame the bet',
      body: 'What are you actually trying to learn or earn in 30 days? We rip the idea to its riskiest assumption.',
    },
    {
      day: 'Day 2',
      title: 'Cut the scope',
      body:
        "20+ features → the 5 that matter on day 30. The 50% you cut is the workshop's superpower.",
    },
    {
      day: 'Day 3',
      title: 'Design the spine',
      body: 'End-to-end flow on paper. Auth, billing, AI, data. We pick the boring stack on purpose.',
    },
    {
      day: 'Day 4',
      title: 'Prototype day',
      body: 'A clickable prototype of the spine, built live by our team and yours.',
    },
    {
      day: 'Day 5',
      title: 'Plan the build',
      body: '4-week sprint plan. Owners, integrations, risks, and the definition of done.',
    },
    {
      day: 'Day 6',
      title: 'Pressure-test',
      body: 'A no-mercy review with a senior Volumetree founder. We poke holes; you patch them.',
    },
    {
      day: 'Day 7',
      title: 'Decide & launch the sprint',
      body: 'Go / no-go on the 30-day build. If yes, you start week 1 with the same team.',
    },
  ]
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Subtle wave divider above */}
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-6 h-[100px] w-full opacity-40"
        strokeWidth={1.4}
        duration={13}
        amplitude={24}
        gradientId="arcTopWave"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How the 7 days work</span>
            <h2 className="h-section mt-4">
              Day 1, frame the bet. Day 7,{' '}
              <span className="gradient-text">ship the plan.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Same 7 days for everyone. The only thing that changes is how much
              help you want — a $299 kit you run yourself, weekly coaching with
              us, or a senior team building alongside you.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {days.map((d, i) => (
            <Reveal key={d.day} delay={i * 50}>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/20 hover:shadow-card">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple-deep to-brand-purple-light text-white shadow-glow">
                  <CalendarClock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                    {d.day}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-snug tracking-tight text-ink-950">
                    {d.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                    {d.body}
                  </p>
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
/*  What's inside the system                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function WhatsInside() {
  const blocks = [
    {
      icon: Wrench,
      t: 'Scaffolding bundle',
      b: 'Production-ready repo with auth, billing, Postgres, queues, and a UI starter you can actually ship.',
      tone: 'from-brand-purple-deep to-brand-purple',
    },
    {
      icon: Sparkles,
      t: 'Prompt playbook',
      b: 'The exact discovery + dev prompts we use internally. Drop them into Cursor or Claude and skip the trial-and-error.',
      tone: 'from-brand-purple to-brand-purple-light',
    },
    {
      icon: PlayCircle,
      t: '1-hour walkthrough video',
      b: "Async walkthrough of the bundle, the playbook, and the 7-day arc — so you can start the same day you buy.",
      tone: 'from-brand-purple-light to-brand-cyan',
    },
    {
      icon: Compass,
      t: 'Discovery Engine',
      b: 'A 4-step framework for finding the one assumption worth testing first. The piece most founders skip and regret.',
      tone: 'from-brand-cyan to-brand-purple',
    },
    {
      icon: Users,
      t: 'Live coaching checkpoints',
      b: '4 working sessions with a senior Volumetree founder across 30 days. We pressure-test, you ship.',
      tone: 'from-brand-magenta to-brand-crimson',
    },
    {
      icon: Rocket,
      t: 'Dev & AI unblock support',
      b: 'Embedded senior on Slack. When something breaks at 9pm Tuesday, you have a person — not a forum thread.',
      tone: 'from-brand-purple to-brand-magenta',
    },
  ]
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What's inside</span>
            <h2 className="h-section mt-4">
              Six building blocks.{' '}
              <span className="gradient-text">Stacked across the tiers.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Every tier inherits what's below it. You always have a clean
              upgrade path — and you never pay twice for what you've already got.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b, i) => {
            const Icon = b.icon
            return (
              <Reveal key={b.t} delay={i * 70} className="h-full">
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/30 hover:shadow-card">
                  <span
                    className={`animated-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${b.tone} text-white shadow-glow`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-base font-bold tracking-tight text-ink-950">
                    {b.t}
                  </h4>
                  <p className="flex-1 text-[14px] leading-relaxed text-slate-500">
                    {b.b}
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
/*  Time Math — the cost of going alone, in hours                             */
/* ────────────────────────────────────────────────────────────────────────── */

function TimeMath() {
  const lines = [
    { hrs: '8 hrs', body: 'picking between Cursor, Bolt, and v0' },
    { hrs: '6 hrs', body: 'designing a logo nobody asked for' },
    { hrs: '5 hrs', body: 'reading “shipped in 7 days” threads' },
    { hrs: '4 hrs', body: 'hand-rolling auth and payments' },
    { hrs: '3 hrs', body: 'picking the perfect domain name' },
    { hrs: '2 hrs', body: 'configuring DNS, SSL, env vars' },
    { hrs: '1 hr', body: 'writing a cold email to the wrong person' },
    { hrs: '∞ hrs', body: 'wondering if anyone wants this' },
  ]
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      {/* Soft radial halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(60% 60% at 50% 0%, rgba(105,87,255,0.30) 0%, transparent 60%), radial-gradient(50% 50% at 100% 100%, rgba(229,38,115,0.22) 0%, transparent 60%)',
        }}
      />
      {/* Subtle wave divider at top */}
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-6 h-[100px] w-full opacity-35"
        strokeWidth={1.3}
        duration={14}
        amplitude={22}
        fromColor="#6957ff"
        midColor="#e52673"
        toColor="#6957ff"
        gradientId="mathTopWave"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              The math of going alone
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tighter sm:text-4xl md:text-[44px]">
              Shipping isn't hard.{' '}
              <span className="gradient-text">Picking what not to do is.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              Most of the time founders lose isn't to building the product. It's to
              the yak-shaving around it. Run the math:
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto mt-12 max-w-2xl">
            {/* Ripple behind the result line for emphasis */}
            <div className="pointer-events-none absolute inset-x-0 bottom-12 -z-0 mx-auto h-[280px]">
              <Ripple
                size={320}
                count={3}
                duration={4.8}
                color="rgba(229, 38, 115, 0.25)"
                borderWidth={1}
              />
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-8 shadow-[0_30px_80px_-30px_rgba(229,38,115,0.35)] sm:p-12">
              <div className="space-y-3 text-center font-display text-base leading-relaxed text-white/80 sm:text-lg">
                {lines.map((l, i) => (
                  <div key={l.body}>
                    {i > 0 && <span className="text-white/40">+ </span>}
                    <span className="font-bold text-brand-magenta">{l.hrs}</span>{' '}
                    <span>{l.body}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-7 text-center">
                <div className="inline-flex items-center justify-center gap-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  <span className="text-white/70">=</span>
                  <span className="gradient-text">29+ hours.</span>
                  <span className="text-white">Zero customers.</span>
                  <CloudRain className="h-7 w-7 text-brand-magenta" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 text-base font-semibold text-white/80 transition-colors hover:text-white"
            >
              <ArrowDown className="h-4 w-4 animate-bounce text-brand-magenta" />
              There's a $299 way to skip all of it.
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Pricing Ladder — 4 tiers                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function PricingLadder() {
  const tiers = [
    {
      name: 'Starter Kit',
      price: '$299',
      cadence: 'one-time',
      tagline: 'For founders ready to start tonight.',
      bullets: [
        'Scaffolding bundle (repo + auth + UI)',
        'Prompt playbook',
        '1-hour async walkthrough video',
        'Lifetime updates',
      ],
      cta: { label: 'Get the kit', href: '/contact?tier=starter' },
      featured: false,
    },
    {
      name: 'Founder OS',
      price: '$1,500',
      cadence: 'one-time',
      tagline: 'The coached month most founders pick.',
      bullets: [
        'Everything in Starter Kit',
        'Discovery Engine + frameworks',
        '4 live coaching checkpoints over 30 days',
        'Async review on prototype + plan',
        'Slack support for 30 days',
      ],
      cta: { label: 'Start Founder OS', href: '/contact?tier=founder-os' },
      featured: true,
    },
    {
      name: 'Idea → Live Concierge',
      price: '$5–10K',
      cadence: 'for 4–6 weeks',
      tagline: 'Done-with-you, all the way to production.',
      bullets: [
        'Everything in Founder OS',
        'Dedicated dev & AI engineer',
        'Daily Slack + working sessions',
        'Production handoff (security + docs)',
        'Direct path into the 30-day build',
      ],
      cta: { label: 'Book a concierge call', href: '/contact?tier=concierge' },
      featured: false,
    },
    {
      name: 'Unblock Session',
      price: '$399',
      cadence: 'per session',
      tagline: 'A la carte. For when something just breaks.',
      bullets: [
        '90-minute senior call',
        'Live diagnosis on your repo or plan',
        'Concrete next-step recommendations',
        'Recording for your team',
      ],
      cta: { label: 'Book a session', href: '/contact?tier=unblock' },
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-28">
      {/* Subtle wave divider above */}
      <SoundWaveLine
        className="pointer-events-none absolute inset-x-0 top-6 h-[100px] w-full opacity-50"
        strokeWidth={1.5}
        duration={12}
        amplitude={26}
        gradientId="pricingTopWave"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The pricing ladder</span>
            <h2 className="h-section mt-4">
              Pick your speed.{' '}
              <span className="gradient-text">Upgrade when you hit the wall.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              They stack. Start at $299 because it's a no-brainer. Upgrade in
              week 3 when you want more eyes on it. Graduate to Concierge when
              you're close to launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <PricingCard tier={t} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

function PricingCard({ tier }) {
  const isFeatured = tier.featured
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 ${
        isFeatured
          ? 'border-brand-purple/40 ring-1 ring-brand-purple/20 shadow-glow'
          : 'border-slate-200/80 hover:shadow-card'
      }`}
    >
      {/* Featured: gradient outline ribbon at the top */}
      {isFeatured && (
        <>
          <div
            aria-hidden
            className="animated-gradient pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-60 blur-md"
            style={{
              background:
                'linear-gradient(120deg, #3d005a 0%, #402999 30%, #6957ff 60%, #e52673 100%)',
            }}
          />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-magenta px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-glow">
              <Star className="h-3 w-3" />
              Most popular
            </span>
          </span>
        </>
      )}

      <div className="font-display text-base font-bold tracking-tight text-ink-950">
        {tier.name}
      </div>
      <p className="mt-1 text-[13px] text-slate-500">{tier.tagline}</p>

      <div className="relative mt-5 inline-block">
        {isFeatured && (
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-3 rounded-full bg-brand-purple/10 blur-md"
          />
        )}
        <span
          className={`relative font-display text-4xl font-bold tracking-tight ${
            isFeatured ? 'gradient-text' : 'text-ink-950'
          }`}
        >
          {tier.price}
        </span>
      </div>
      <div className="mt-1 text-[12px] font-medium text-slate-500">
        {tier.cadence}
      </div>

      <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
        {tier.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[13px] text-slate-700">
            <Check
              className={`mt-0.5 h-4 w-4 flex-none ${
                isFeatured ? 'text-brand-magenta' : 'text-brand-purple'
              }`}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        to={tier.cta.href}
        className={`${
          isFeatured ? 'btn-gradient' : 'btn-primary'
        } mt-7 w-full justify-center`}
      >
        {tier.cta.label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Social Wall — masonry of tweets, quotes, and dashboard screenshots         */
/* ────────────────────────────────────────────────────────────────────────── */

function SocialWall() {
  const items = [
    {
      type: 'tweet',
      name: 'Priya N.',
      handle: 'priyabuilds',
      initials: 'PN',
      tone: 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
      date: 'Mar 12',
      body: (
        <>
          <Hl>@volumetree</Hl> shipped my AI legal tool in 11 days. Day 1 I had an idea. Day 11 I had a paying customer. <Hl>Shivam's discovery framework is unhinged</Hl>. 🚀
        </>
      ),
    },
    {
      type: 'live-deploy',
      domain: 'sparrowtax.app',
      day: 'Shipped on day 9 of Founder OS',
      caption: '"First time anything I built is live on a real domain." — Priya',
    },
    {
      type: 'tweet',
      name: 'Akhil C.',
      handle: 'akhilnchauhan',
      initials: 'AC',
      tone: 'from-brand-magenta via-brand-crimson to-brand-yellow',
      date: 'Apr 02',
      body: (
        <>
          <Hl>@volumetree</Hl> the prompt playbook alone is worth 10× what you charge. Built our entire onboarding flow from one chain. <Hl>Shivam, you have to stop giving away this much</Hl>.
        </>
      ),
    },
    {
      type: 'quote',
      name: 'Marco D.',
      role: 'Founder, B2B SaaS',
      initials: 'MD',
      tone: 'from-brand-purple via-brand-purple-light to-brand-cyan',
      body: 'Founder OS was the first thing that made me cut features instead of add them. By checkpoint 3 I had a v1 my pilot user actually paid for.',
    },
    {
      type: 'stripe',
      amount: '$2,847',
      label: 'Stripe · gross volume',
      delta: '+212%',
      caption: '"First $ since I started. Cried a little." — Tanya',
    },
    {
      type: 'tweet',
      name: 'Sarah M.',
      handle: 'sarah_builds',
      initials: 'SM',
      tone: 'from-brand-purple via-brand-magenta to-brand-crimson',
      date: 'Apr 18',
      body: (
        <>
          4 Founder OS checkpoints in and I just <Hl>deleted half my roadmap</Hl>. exactly the cuts I needed. ship v1 friday. <Hl>@volumetree</Hl> you owe me therapy.
        </>
      ),
    },
    {
      type: 'analytics',
      visitors: '14,832',
      label: 'Plausible · last 7 days',
      delta: '↑ 312%',
      caption: '"Launch week traffic. From a kit I bought for $299."',
    },
    {
      type: 'tweet',
      name: 'Arjun J.',
      handle: 'arjun_ships',
      initials: 'AJ',
      tone: 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
      date: 'May 04',
      body: (
        <>
          finished <Hl>@volumetree</Hl>'s Concierge. team rolls into the 30-day production sprint tomorrow. <Hl>zero ramp. zero re-discovery</Hl>. same people. same plan.
        </>
      ),
    },
    {
      type: 'quote',
      name: 'Devang P.',
      role: 'Solo dev, indie SaaS',
      initials: 'DP',
      tone: 'from-brand-magenta via-brand-crimson to-brand-yellow',
      body: 'Bought the Starter Kit Saturday morning. Working signup flow by Sunday night. The 1-hour walkthrough saved me a week.',
    },
    {
      type: 'deploy',
      status: 'Production deployment',
      domain: 'usewindfall.io',
      meta: 'main · 7s · ✓ 14 builds',
      caption: '"Shipped before our Series A pitch. They thought it was real." — Anya',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      {/* Soft halo + subtle wave */}
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
        gradientId="wallTopWave"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              Thank-you notes
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tighter sm:text-4xl md:text-[44px]">
              Founders won't stop thanking Shivam{' '}
              <span className="gradient-text">for the 7-day workshop.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              They ran it. They shipped. They tagged us. We kept the receipts.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 max-w-7xl columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 4) * 90} className="break-inside-avoid">
              {it.type === 'tweet' && <TweetCard t={it} />}
              {it.type === 'quote' && <QuoteCard q={it} />}
              {it.type === 'live-deploy' && <LiveDeployCard d={it} />}
              {it.type === 'stripe' && <StripeCard s={it} />}
              {it.type === 'analytics' && <AnalyticsCard a={it} />}
              {it.type === 'deploy' && <DeployCard d={it} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Highlight span used inside tweet bodies */
function Hl({ children }) {
  return (
    <span className="rounded-sm bg-brand-magenta/25 px-1 text-white">
      {children}
    </span>
  )
}

/* Tiny X (Twitter) logo */
function XLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function CardShell({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] ${className}`}
    >
      {children}
    </div>
  )
}

function TweetCard({ t }) {
  return (
    <CardShell>
      <div className="flex items-center gap-3">
        <span
          className={`animated-gradient inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${t.tone} text-[11px] font-bold text-white`}
        >
          {t.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-bold leading-tight text-white">{t.name}</div>
          <div className="text-[12px] leading-tight text-white/50">@{t.handle}</div>
        </div>
        <XLogo className="h-3.5 w-3.5 flex-none text-white/80" />
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-white/85">{t.body}</p>
      <div className="mt-4 flex items-center justify-between text-white/40">
        <div className="flex items-center gap-4 text-[12px]">
          <span className="inline-flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" /> {Math.floor(20 + Math.random() * 220)}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" /> {Math.floor(3 + Math.random() * 40)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Repeat2 className="h-3.5 w-3.5" /> {Math.floor(2 + Math.random() * 30)}
          </span>
        </div>
        <span className="text-[11px]">{t.date}</span>
      </div>
    </CardShell>
  )
}

function QuoteCard({ q }) {
  return (
    <CardShell>
      <div className="font-display text-3xl font-bold leading-none text-brand-magenta">“</div>
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
    </CardShell>
  )
}

function LiveDeployCard({ d }) {
  return (
    <CardShell>
      <div className="flex items-center gap-2 text-[11px]">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono font-bold text-emerald-300">LIVE</span>
        <span className="ml-auto text-white/40">Vercel</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Globe className="h-4 w-4 text-white/60" />
        <span className="font-mono text-base text-white">{d.domain}</span>
      </div>
      <div className="mt-1 text-[12px] text-white/50">{d.day}</div>
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-white/40">Status</div>
          <div className="mt-0.5 text-[12px] font-bold text-emerald-300">200</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-white/40">Lighthouse</div>
          <div className="mt-0.5 text-[12px] font-bold text-white">96</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-white/40">Deploys</div>
          <div className="mt-0.5 text-[12px] font-bold text-white">14</div>
        </div>
      </div>
      <div className="mt-3 text-[12px] text-white/65">{d.caption}</div>
    </CardShell>
  )
}

function StripeCard({ s }) {
  const bars = [22, 35, 18, 55, 40, 78, 100]
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
          {s.label}
        </span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
          {s.delta}
        </span>
      </div>
      <div className="mt-3 font-display text-3xl font-bold text-white">{s.amount}</div>
      <div className="mt-1 text-[12px] text-white/50">Since launch · this week</div>
      <div className="mt-4 flex h-14 items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple to-brand-magenta opacity-80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-4 border-t border-white/10 pt-3 text-[12px] text-white/65">
        {s.caption}
      </div>
    </CardShell>
  )
}

function AnalyticsCard({ a }) {
  // Tiny SVG line chart
  const path = 'M0,40 L18,38 L35,30 L52,32 L70,22 L88,18 L105,12 L120,8'
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
          <BarChart3 className="h-3 w-3" />
          {a.label}
        </span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
          {a.delta}
        </span>
      </div>
      <div className="mt-3 font-display text-3xl font-bold text-white">{a.visitors}</div>
      <div className="mt-1 text-[12px] text-white/50">Unique visitors</div>
      <svg viewBox="0 0 120 50" className="mt-4 h-14 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="analyticsLineGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6957ff" />
            <stop offset="100%" stopColor="#e52673" />
          </linearGradient>
          <linearGradient id="analyticsAreaGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#6957ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6957ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${path} L120,50 L0,50 Z`} fill="url(#analyticsAreaGradient)" />
        <path d={path} stroke="url(#analyticsLineGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <div className="mt-3 border-t border-white/10 pt-3 text-[12px] text-white/65">
        {a.caption}
      </div>
    </CardShell>
  )
}

function DeployCard({ d }) {
  return (
    <CardShell>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        <span className="text-[12px] font-bold text-white">{d.status}</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-white/40">CI/CD</span>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900 px-3 py-2 font-mono text-[12px] text-emerald-300">
        <Globe className="h-3.5 w-3.5 text-white/60" />
        {d.domain}
      </div>
      <div className="mt-2 font-mono text-[11px] text-white/45">{d.meta}</div>
      <div className="mt-4 space-y-1.5 rounded-lg border border-white/10 bg-ink-900 p-3 font-mono text-[11px] leading-relaxed text-white/65">
        <div className="text-emerald-300">✓ Built workspace</div>
        <div className="text-emerald-300">✓ Ran tests · 142 passed</div>
        <div className="text-emerald-300">✓ Uploaded artifacts</div>
        <div className="text-white">→ Deploy live in 7s</div>
      </div>
      <div className="mt-4 border-t border-white/10 pt-3 text-[12px] text-white/65">
        {d.caption}
      </div>
    </CardShell>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  FAQ                                                                        */
/* ────────────────────────────────────────────────────────────────────────── */

function FAQSection() {
  const items = [
    {
      q: 'Who is this actually for?',
      a: "Founders, indie hackers, and product leaders who can build (or hire someone to build) — but don't want to spend six months figuring out what to cut. If you've watched too many tutorials and shipped too few things, you're our person.",
    },
    {
      q: 'How does the Founder OS schedule work?',
      a: 'You get the Starter Kit on day 0. Then 4 live coaching checkpoints with a senior Volumetree founder across 30 days — typically weekly, scheduled around you. Async Slack support runs the whole month. You set the pace; we pressure-test it.',
    },
    {
      q: 'What if I get stuck between checkpoints?',
      a: "Founder OS includes async Slack support for 30 days — most blockers get unstuck in an hour. If you're outside Founder OS (or want a deeper unblock), an Unblock Session is $399 for a 90-minute senior call.",
    },
    {
      q: 'Do I keep the code? Any lock-in?',
      a: "You own everything — the scaffolding repo, your code, the playbook. No licensing, no hosted lock-in. We hand off documentation at the end of Concierge engagements so your team can run it without us.",
    },
    {
      q: 'Can I upgrade tiers later?',
      a: "Yes — that's the whole point. Pay the difference, keep what you've already used. Many founders start with Starter, upgrade to Founder OS in week 2, and finish with Concierge when they're near launch.",
    },
    {
      q: 'How does this connect to your 30-day production build?',
      a: "The Concierge tier is the on-ramp. By the end of it, we've validated the scope, the stack, and the team — so if you choose to graduate into our 30-day production engagement, there's zero re-ramp. Same people, same plan, live in 30 days.",
    },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-slate-50/60 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Common questions</span>
            <h2 className="h-section mt-4">Answers before you ask.</h2>
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

export default function Workshops() {
  return (
    <>
      <Hero />
      <Promises />
      <Pain />
      <SevenDayArc />
      <WhatsInside />
      <TimeMath />
      <PricingLadder />
      <SocialWall />
      <FAQSection />
      <CTA
        eyebrow="Ready for production?"
        title="Graduate to the 30-day idea-to-production build."
        body="The Concierge tier is the on-ramp. Same team, same plan — but the next 30 days end with you in production, not in slides."
        primaryHref="/launch-in-30-days"
        primaryLabel="See the 30-day offer"
        secondaryLabel="Talk to us first"
        secondaryHref="/contact"
      />
    </>
  )
}
