import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Clock, Package, Users, Layers3 } from 'lucide-react'
import AnimatedStat from './AnimatedStat.jsx'
import { SoundWaveBars, SoundWaveLine, Ripple } from './SoundWave.jsx'

const stats = [
  {
    icon: Clock,
    target: 11,
    suffix: '+',
    label: 'Years building products',
    sublabel: 'Operating since 2014',
    tone: 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
  },
  {
    icon: Package,
    target: 100,
    suffix: '+',
    label: 'Products shipped',
    sublabel: 'Live in production',
    tone: 'from-brand-purple via-brand-magenta to-brand-crimson',
  },
  {
    icon: Users,
    target: 70,
    suffix: '+',
    label: 'Engineers & designers',
    sublabel: 'Senior, on-staff',
    tone: 'from-brand-magenta via-brand-crimson to-brand-yellow',
  },
  {
    icon: Layers3,
    target: 17,
    suffix: '+',
    label: 'Industries served',
    sublabel: 'From fintech to logistics',
    tone: 'from-brand-purple via-brand-purple-light to-brand-cyan',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background fabric */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(105,87,255,0.20), rgba(229,38,115,0.08) 45%, transparent 70%)',
        }}
      />
      {/* Floating gradient orbs — subtle, animated */}
      <FloatingOrbs />

      {/* Ambient ripple — concentric rings emanating from the hero center */}
      <div className="pointer-events-none absolute inset-x-0 top-[140px] -z-10 mx-auto h-[520px] max-w-3xl sm:top-[180px]">
        <Ripple
          size={520}
          count={4}
          duration={5.4}
          color="rgba(105, 87, 255, 0.22)"
          borderWidth={1}
        />
      </div>

      <div className="container-page pb-20 pt-16 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="relative inline-block">
            {/* Tight ripple behind the eyebrow */}
            <Ripple
              className="-z-10"
              size={160}
              count={3}
              duration={3.8}
              color="rgba(229, 38, 115, 0.28)"
            />
            <span className="eyebrow relative">
              <Sparkles className="h-3.5 w-3.5" />
              Product engineering · since 2014
            </span>
          </span>
          <h1 className="h-display mt-6">
            We build your products fast.{' '}
            <span className="gradient-text">We build them unbreakable.</span>
          </h1>
          <p className="lede mx-auto mt-6 max-w-2xl">
            It's simple — we understand the use case, build really fast, make
            them stable, and don't leave you hanging.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-gradient">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="#case-studies" className="btn-ghost">
              See our work
            </Link>
          </div>
        </div>

        {/* Symmetric, animated stat grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 80} />
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

function StatCard({ stat, delay = 0 }) {
  const Icon = stat.icon
  return (
    <div
      className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6"
      style={{
        animation: `fadeUp 0.6s ease-out both`,
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(64,41,153,0.06), transparent 70%)',
        }}
      />
      {/* Top accent line */}
      <span
        aria-hidden
        className={`absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r ${stat.tone} opacity-70`}
      />

      <span
        className={`animated-gradient inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${stat.tone} text-white shadow-glow`}
        style={{ animationDelay: `${delay / 1000 + 0.5}s` }}
      >
        <Icon className="h-4 w-4" />
      </span>

      <div className="mt-4 font-display text-4xl font-semibold leading-none tracking-tight text-ink-950 sm:text-[44px]">
        <AnimatedStat target={stat.target} suffix={stat.suffix} />
      </div>

      <div className="mt-2.5 text-[13px] font-medium text-ink-950">
        {stat.label}
      </div>
      <div className="mt-1 text-[11px] text-slate-500">{stat.sublabel}</div>
    </div>
  )
}

function FloatingOrbs() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(64,41,153,0.35), transparent 70%)',
          animation: 'orb-float-a 14s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-72 -z-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(229,38,115,0.28), transparent 70%)',
          animation: 'orb-float-b 18s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes orb-float-a {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(20px, -30px, 0); }
        }
        @keyframes orb-float-b {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(-25px, 35px, 0); }
        }
      `}</style>
    </>
  )
}
