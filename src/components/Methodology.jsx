import { Search, Layers, Rocket, Activity } from 'lucide-react'
import Reveal from './Reveal.jsx'

const steps = [
  { n: '01', icon: Search,  label: 'Discover',  caption: 'Map the problem.' },
  { n: '02', icon: Layers,  label: 'Design',    caption: 'Prototype the spine.' },
  { n: '03', icon: Rocket,  label: 'Engineer',  caption: 'Ship production-grade.' },
  { n: '04', icon: Activity, label: 'Operate',  caption: 'Scale and iterate.' },
]

export default function Methodology() {
  return (
    <section id="methodology" className="relative overflow-hidden py-24 sm:py-32">
      {/* Brand-inspired soft semicircles */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-purple/10 opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-magenta/10 opacity-40"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we work</span>
            <h2 className="h-section mt-4">
              One team. <span className="gradient-text">End to end.</span>
            </h2>
          </div>
        </Reveal>

        {/* Flow diagram */}
        <Flow />
      </div>
    </section>
  )
}

function Flow() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      {/* Faded dashed track (desktop) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-12 hidden h-4 w-full opacity-40 lg:block"
        viewBox="0 0 1000 16"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#402999" />
            <stop offset="0.5" stopColor="#e52673" />
            <stop offset="1" stopColor="#6957ff" />
          </linearGradient>
        </defs>
        <path
          d="M 40 8 L 960 8"
          stroke="url(#flowLine)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
          style={{ animation: 'flowDash 8s linear infinite' }}
        />
        <style>{`
          @keyframes flowDash {
            from { stroke-dashoffset: 0; }
            to   { stroke-dashoffset: -56; }
          }
        `}</style>
      </svg>

      {/* Animated gradient line — paints through icons and retracts back */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-12 hidden h-4 lg:block"
        style={{ left: '4%', right: '4%' }}
      >
        {/* The line itself */}
        <div
          className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #402999 0%, #6957ff 25%, #e52673 55%, #d1023c 80%, #402999 100%)',
            boxShadow:
              '0 0 14px rgba(105, 87, 255, 0.55), 0 0 28px rgba(229, 38, 115, 0.28)',
            animation: 'sweepLine 5.5s ease-in-out infinite',
            clipPath: 'inset(0 100% 0 0)',
          }}
        />
        {/* Bright glowing head travelling along the line */}
        <div
          className="absolute top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, #e52673 0%, rgba(229,38,115,0.55) 35%, transparent 70%)',
            boxShadow:
              '0 0 16px rgba(229, 38, 115, 0.85), 0 0 32px rgba(105, 87, 255, 0.5)',
            animation: 'travelHead 5.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Vertical connector (mobile) */}
      <div
        aria-hidden
        className="absolute bottom-12 left-12 top-12 w-px bg-gradient-to-b from-brand-purple via-brand-magenta to-brand-purple-light lg:hidden"
      />

      <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 140} as="li" className="relative">
            <Node step={s} />
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

function Node({ step }) {
  const Icon = step.icon
  return (
    <div className="relative flex items-center gap-5 lg:flex-col lg:items-center lg:text-center">
      {/* Bubble */}
      <div className="relative z-10 flex-none">
        <span
          aria-hidden
          className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-magenta/15 to-brand-purple-light/20 blur-md"
        />
        <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-glow ring-1 ring-slate-200">
          <span className="animated-gradient inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple-deep via-brand-purple to-brand-purple-light text-white">
            <Icon className="h-7 w-7" />
          </span>
        </span>
        <span className="absolute -right-1 -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-950 text-[10px] font-semibold text-white shadow-soft">
          {step.n}
        </span>
      </div>

      {/* Label */}
      <div className="lg:mt-6">
        <div className="font-display text-xl font-semibold tracking-tight text-ink-950 lg:text-2xl">
          {step.label}
        </div>
        <div className="mt-1 text-sm text-slate-500">{step.caption}</div>
      </div>
    </div>
  )
}
