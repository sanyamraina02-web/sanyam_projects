import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SoundWaveBars, SoundWaveLine } from './SoundWave.jsx'

export default function CTA({
  eyebrow = 'Ready when you are',
  title = 'Tell us what you want to ship.',
  body = "If it's a real problem, we'll tell you what it takes to build, and how fast we can ship. If it isn't, we'll tell you that too.",
  primaryHref = '/contact',
  primaryLabel = 'Book a discovery call',
  secondaryHref = '/ebook',
  secondaryLabel = 'Read the 30-day playbook',
}) {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="animated-gradient relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple-deep via-brand-purple to-brand-purple-light p-10 text-white sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'radial-gradient(50% 60% at 100% 0%, rgba(229,38,115,0.5), transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(16,193,240,0.35), transparent 60%)',
            }}
          />
          {/* Subtle flowing sound-wave overlay */}
          <SoundWaveLine
            className="pointer-events-none absolute inset-x-0 top-0 h-[120px] w-full"
            strokeWidth={2}
            opacity={0.4}
            duration={11}
            amplitude={30}
            fromColor="#ffffff"
            midColor="#ffffff"
            toColor="#ffffff"
            gradientId="ctaWaveTop"
          />
          <SoundWaveLine
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] w-full"
            strokeWidth={2}
            opacity={0.25}
            duration={14}
            amplitude={26}
            fromColor="#ffffff"
            midColor="#ffffff"
            toColor="#ffffff"
            gradientId="ctaWaveBottom"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur">
                {eyebrow}
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                {body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={primaryHref}
                className="btn inline-flex bg-white text-ink-950 hover:bg-slate-100"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={secondaryHref}
                className="btn inline-flex border border-white/20 bg-white/[0.06] text-white backdrop-blur hover:bg-white/[0.12]"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
