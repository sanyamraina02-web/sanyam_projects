import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

// NOTE: placeholder testimonials. Swap in real customer quotes when available.
const tones = [
  'from-brand-purple-deep via-brand-purple to-brand-purple-light',
  'from-brand-magenta via-brand-crimson to-brand-yellow',
  'from-brand-purple via-brand-purple-light to-brand-cyan',
  'from-brand-crimson via-brand-magenta to-brand-pink-soft',
]

const items = [
  {
    quote:
      "Volumetree delivered in 9 weeks what two prior agencies couldn't in 9 months. The discovery sprint alone reframed our entire roadmap — and the team that started it shipped it.",
    name: 'Aishwarya Panda',
    role: 'VP Product',
    company: 'NorthStar Credit',
    initials: 'AP',
  },
  {
    quote:
      'They embedded with our team like founders, not vendors. The org ships faster than it did before they ever showed up — and they were honest enough to leave when the job was done.',
    name: 'Marcus Hill',
    role: 'CTO',
    company: 'Helios Health',
    initials: 'MH',
  },
  {
    quote:
      'They cut 60% of what we walked in with, kept the 40% that mattered, and shipped it in 7 weeks. The cuts list was the secret weapon nobody told us we needed.',
    name: 'Rishi Mehta',
    role: 'Founder & CEO',
    company: 'Loopwise',
    initials: 'RM',
  },
  {
    quote:
      "Honestly the most senior team we've worked with. Every standup felt like a working session, not a status update.",
    name: 'Sara Lin',
    role: 'Head of Engineering',
    company: 'Cortex',
    initials: 'SL',
  },
  {
    quote:
      'They scoped the AI work down to what we could actually evaluate and ship. We had real users on it in week three.',
    name: 'Daniel Otieno',
    role: 'Product Lead',
    company: 'Nimbus AI',
    initials: 'DO',
  },
  {
    quote:
      'We have used five development partners over four years. Volumetree was the first one we re-signed without comparing quotes.',
    name: 'Priya Iyer',
    role: 'COO',
    company: 'Trukkin',
    initials: 'PI',
  },
  {
    quote:
      "Their post-launch support quietly became the most valuable part of the engagement. They didn't ship and disappear.",
    name: 'Tom Reyes',
    role: 'Founder',
    company: 'Vantage',
    initials: 'TR',
  },
  {
    quote:
      'Procurement-friendly without the procurement-friendly slowdown. Rare combination.',
    name: 'Hannah Kowalski',
    role: 'Director of Digital',
    company: 'Kindred Retail',
    initials: 'HK',
  },
  {
    quote:
      "I have hired agencies for 12 years. This is the first team that has felt like an internal one from day one.",
    name: 'James Okafor',
    role: 'VP Technology',
    company: 'Orbital',
    initials: 'JO',
  },
  {
    quote:
      'Their discovery sprint reset assumptions we had been carrying for two years. Worth it for that alone.',
    name: 'Mei Tanaka',
    role: 'Chief of Staff',
    company: 'Linear Path',
    initials: 'MT',
  },
  {
    quote:
      "They told us no on a feature in week one — saved us four months. That's the kind of partner you want.",
    name: 'Arjun Sethi',
    role: 'Founder',
    company: 'Loopwise',
    initials: 'AS',
  },
  {
    quote:
      'Senior squad, opinionated takes, and a delivery rhythm that made our internal team faster by association.',
    name: 'Elena García',
    role: 'Head of Product',
    company: 'Helios Health',
    initials: 'EG',
  },
].map((q, i) => ({ ...q, tone: tones[i % tones.length] }))

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/60 py-24 sm:py-28">
      {/* Decorative semicircles inspired by brand "Implementers" element */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 -z-0 h-72 w-72 rounded-full border border-brand-purple/10 opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 -z-0 h-96 w-96 rounded-full border border-brand-magenta/10 opacity-50"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">In their words</span>
          <h2 className="h-section mt-4">What our clients say.</h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-sm text-slate-500">
              4.9 / 5 across 60+ engagements
            </span>
          </div>
        </div>

        <FeaturedQuote items={items} />

        {/* Animated marquee — name + company pop at the top of each card */}
        <div className="relative mt-16">
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee items-stretch gap-5">
              {[...items, ...items].map((q, i) => (
                <MiniQuote key={'row-a-' + i} q={q} />
              ))}
            </div>
          </div>
          <div className="marquee-mask mt-5 overflow-hidden">
            <div className="flex w-max animate-marquee-reverse items-stretch gap-5">
              {[...items.slice().reverse(), ...items.slice().reverse()].map((q, i) => (
                <MiniQuote key={'row-b-' + i} q={q} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniQuote({ q }) {
  return (
    <figure className="flex w-[340px] flex-none flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:w-[400px]">
      {/* Header: name + company POP */}
      <figcaption className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <span
          className={`animated-gradient inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br ${q.tone} text-sm font-semibold text-white shadow-glow`}
        >
          {q.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="font-display text-[17px] font-semibold leading-tight tracking-tight text-ink-950">
            {q.name}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span className="text-[12px] text-slate-500">{q.role}</span>
            <span className="text-slate-300">·</span>
            <span className="rounded-full bg-brand-purple/[0.08] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple">
              {q.company}
            </span>
          </div>
        </div>
      </figcaption>

      {/* Stars */}
      <div className="mt-4 flex items-center gap-0.5 text-brand-yellow">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-3 text-[14px] leading-relaxed text-slate-600">
        “{q.quote}”
      </blockquote>
    </figure>
  )
}

function FeaturedQuote({ items }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % items.length)
    }, 7000)
    return () => clearInterval(t)
  }, [items.length, paused])

  const q = items[idx]
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length)
  const next = () => setIdx((i) => (i + 1) % items.length)

  return (
    <div
      className="relative mx-auto mt-14 max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute -inset-x-8 -inset-y-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-purple/10 via-brand-magenta/8 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card">
        <div className="grid lg:grid-cols-[1fr_1.4fr]">
          {/* Left: gradient panel with avatar */}
          <div
            className={`animated-gradient relative bg-gradient-to-br ${q.tone} p-8 sm:p-10`}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.32), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 50%)',
              }}
            />
            <div className="relative flex h-full flex-col justify-between gap-10 text-white">
              <Quote className="h-10 w-10 text-white/70" />
              <div key={'av-' + idx} style={{ animation: 'fadeUp 0.5s ease-out both' }}>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 font-display text-lg font-semibold backdrop-blur">
                  {q.initials}
                </div>
                <div className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {q.name}
                </div>
                <div className="text-sm text-white/80">
                  {q.role} · {q.company}
                </div>
              </div>
            </div>
          </div>
          {/* Right: quote */}
          <div className="flex flex-col p-8 sm:p-12">
            <div className="flex items-center gap-1 text-brand-yellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div key={'q-' + idx} style={{ animation: 'fadeUp 0.5s ease-out both' }} className="mt-5 flex-1">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink-950 sm:text-[28px]">
                “{q.quote}”
              </p>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                {String(idx + 1).padStart(2, '0')} <span className="text-slate-300">/</span>{' '}
                {String(items.length).padStart(2, '0')}
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={prev}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={next}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots — compact bar instead of N dots */}
      <div className="mt-5 flex justify-center">
        <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-magenta transition-all duration-500"
            style={{ width: `${((idx + 1) / items.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
