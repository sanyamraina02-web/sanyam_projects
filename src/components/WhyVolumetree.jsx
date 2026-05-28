import { Link } from 'react-router-dom'
import {
  Trophy,
  Layers,
  ShieldCheck,
  Zap,
  Users,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { SoundWaveBackdrop, SoundWaveBars } from './SoundWave.jsx'

const reasons = [
  {
    icon: Trophy,
    title: '11 years of pattern recognition.',
    body: 'We have already solved the hard parts on someone else’s project. Every engagement starts from a head-start, not a blank page.',
  },
  {
    icon: Layers,
    title: 'End-to-end execution.',
    body: 'Discovery, design, engineering, AI, integrations, launch and post-launch ops — one team, one accountability line.',
  },
  {
    icon: Zap,
    title: 'Fast — without breaking things.',
    body: 'We ship in weeks, not quarters. Test coverage, observability and rollback paths are not "nice to haves" — they are how we move quickly.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade by default.',
    body: 'SOC-friendly baseline, SSO, RBAC, audit trails and procurement-ready paperwork ship with every engagement that needs them.',
  },
  {
    icon: Users,
    title: 'Senior teams only.',
    body: 'No bench juniors. No "throw bodies at it." A small squad of operators who have built what you are hiring us to build.',
  },
  {
    icon: HeartHandshake,
    title: 'Skin in the game.',
    body: 'Fixed scope, fixed timeline, fixed price. We win when you ship — not when the SOW expands.',
  },
]

export default function WhyVolumetree() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(60% 60% at 20% 0%, rgba(105,87,255,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 90% 100%, rgba(229,38,115,0.28) 0%, transparent 60%)',
        }}
      />

      {/* Flowing brand waves */}
      <SoundWaveBackdrop className="z-0" opacity={0.55} />

      <div className="container-page relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              Why Volumetree
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Why teams pick us{' '}
              <span className="gradient-text">over the alternatives.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            We compete with three kinds of vendors: big agencies that move
            slowly, freelance pods that don’t scale, and offshore shops that
            don’t own outcomes. Here is what we do differently.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.title} delay={i * 80}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="btn inline-flex bg-white text-ink-950 hover:bg-slate-100"
          >
            Tell us about your project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="btn inline-flex border border-white/20 bg-white/[0.06] text-white backdrop-blur hover:bg-white/[0.12]"
          >
            More about Volumetree
          </Link>
        </div>
      </div>
    </section>
  )
}
