import { Link } from 'react-router-dom'
import {
  Sparkles,
  Users,
  Globe,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Gauge,
  TrendingUp,
  Linkedin,
  MapPin,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import { SoundWaveLine } from '../components/SoundWave.jsx'

const values = [
  {
    title: 'Curious, creative, allergic to fluff.',
    body: 'We hire people who would rather ship a useful v1 than pitch a perfect v10.',
  },
  {
    title: 'Disruptive, scalable, impactful.',
    body: "Three filters every project passes through. Two-of-three isn't enough.",
  },
  {
    title: 'Picky on purpose.',
    body: "We turn down projects we can't move the needle on. That's how we keep the shipping record honest.",
  },
  {
    title: 'When in doubt, keep it simple.',
    body: "The brand says it. The code says it. The contracts say it. It's the only way to ship in 30 days.",
  },
]

const stats = [
  { value: '100+', label: 'Products shipped' },
  { value: '70+', label: 'Engineers & designers' },
  { value: '17+', label: 'Industries served' },
  { value: '60+', label: 'Launches in 30-day format' },
]

const speedPrinciples = [
  {
    icon: Gauge,
    title: 'Speed is a forcing function',
    body: 'A 30-day deadline kills scope creep before it starts. You ship the 5 features that matter — not the 50 you imagined at the whiteboard.',
    tone: 'from-brand-purple-deep to-brand-purple',
  },
  {
    icon: Zap,
    title: 'Slow is the expensive option',
    body: "Every month you're not in market is a month a competitor is. The “careful” 6-month build is the riskiest thing a team can do with its runway.",
    tone: 'from-brand-magenta to-brand-crimson',
  },
  {
    icon: TrendingUp,
    title: 'Velocity compounds',
    body: 'Ship in week 4, learn in week 5, correct in week 6. Teams that ship fast don\'t just move faster — they end up right more often.',
    tone: 'from-brand-purple to-brand-purple-light',
  },
]

const offices = ['India · HQ', 'South Africa', 'Sweden']

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Volumetree"
        title="Curious, creative problem solvers building"
        highlight="disruptive, scalable, impactful products."
        titleClassName="leading-[1.18] sm:leading-[1.16]"
        body="A small senior team that's spent the last decade quietly shipping products other teams quote half a year for."
        primary={{ href: '/contact', label: 'Work with us' }}
        secondary={{ href: '/blog', label: 'Read the blog' }}
      />

      {/* Story */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="h-section mt-4">We built it backwards on purpose.</h2>
            </div>
            <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">
              <p>
                Volumetree started with a frustration. Founders kept walking in
                with great ideas and walking out with quotes for 6-month builds
                and $500k price tags. None of it shipped fast enough to learn
                anything.
              </p>
              <p>
                So we built an operating model on the opposite side of every
                trade.{' '}
                <span className="font-medium text-ink-950">
                  Senior over scaled. Fixed over flexible. Cuts over features.
                </span>{' '}
                And we tested it on 60+ launches before we put it on a website.
              </p>
              <p>
                Today we run two practices in parallel — 30-day product launches
                for founders, and embedded AI engineering squads for
                enterprises. Same operating model. Different speed limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl font-semibold tracking-tight text-ink-950">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ideology of speed */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <SoundWaveLine
          className="pointer-events-none absolute inset-x-0 top-8 h-[100px] w-full opacity-40"
          strokeWidth={1.4}
          duration={13}
          amplitude={24}
          gradientId="aboutSpeedWave"
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">The ideology of speed</span>
            <h2 className="h-section mt-4">
              Speed isn't a feature we sell.{' '}
              <span className="gradient-text">It's the whole strategy.</span>
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl">
              Most teams treat speed as something you trade away for quality. We
              think that trade is a myth — and a decade of shipping says we're
              right.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {speedPrinciples.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span
                    className={`animated-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.tone} text-white shadow-glow`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-brand-purple/20 bg-brand-purple/[0.04] p-7 text-center">
            <p className="font-display text-xl font-semibold leading-snug tracking-tight text-ink-950 sm:text-2xl">
              “We don't move fast to impress anyone. We move fast because slow
              is how good ideas quietly die.”
            </p>
          </div>
        </div>
      </section>

      {/* About Shivam — founder */}
      <section className="bg-slate-50/60 py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Founder card */}
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card">
                {/* Gradient avatar block — swap for a real photo at /public/shivam.jpg */}
                <div className="animated-gradient relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-purple-deep via-brand-purple to-brand-magenta">
                  <span className="font-display text-7xl font-bold tracking-tight text-white/90">
                    SG
                  </span>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.3), transparent 45%)',
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
                    Shivam Gupta
                  </h3>
                  <div className="mt-1 text-sm font-medium text-brand-purple">
                    Co-founder & CEO, Volumetree
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                    Also building EaseMyHiring.ai — reimagining how companies
                    hire with AI-led interviewing and assessment.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/shivamgupta1993/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:border-[#0a66c2]/40 hover:text-[#0a66c2]"
                  >
                    <Linkedin className="h-4 w-4 text-[#0a66c2]" />
                    Connect on LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="eyebrow">The founder</span>
              <h2 className="h-section mt-4">
                The person who set the{' '}
                <span className="gradient-text">speed limit.</span>
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-700">
                <p>
                  Shivam Gupta co-founded Volumetree on a simple conviction: the
                  gap between a good idea and a shipped product should be
                  measured in weeks, not quarters.
                </p>
                <p>
                  Over the last{' '}
                  <span className="font-medium text-ink-950">
                    9+ years
                  </span>
                  , he's partnered with startups and enterprises across
                  transportation, healthcare, logistics, SaaS, IoT and
                  hospitality — taking each from concept to a scalable digital
                  product. Along the way he built Volumetree into a{' '}
                  <span className="font-medium text-ink-950">
                    60+ person product engineering team
                  </span>{' '}
                  with delivery hubs across three continents.
                </p>
                <p>
                  His current obsession is AI as a force multiplier — not as a
                  demo. That thinking now runs through everything Volumetree
                  ships, and through{' '}
                  <span className="font-medium text-ink-950">
                    EaseMyHiring.ai
                  </span>
                  , the venture he's building to rebuild hiring around AI-led
                  interviewing and automation.
                </p>
              </div>

              {/* Office footprint */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  Delivery hubs
                </span>
                {offices.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-semibold text-slate-600"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">How we operate</span>
            <h2 className="h-section mt-4">
              Four sentences we'd put on the office wall.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-ink-950 py-24 text-white sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              The team
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Senior by default. Embedded by design.
            </h2>
            <p className="mt-5 text-lg text-white/75">
              No bench teams. No junior-heavy delivery models. Every Volumetree
              engagement is staffed by people who've shipped the kind of work
              you're hiring us for.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Pillar
              icon={Sparkles}
              title="Senior product strategists"
              body="People who own the why before the what."
            />
            <Pillar
              icon={Rocket}
              title="Full-stack & AI engineers"
              body="Engineers who can ship the spine and the sparkle."
            />
            <Pillar
              icon={Globe}
              title="Designers who measure impact"
              body="Brand, UI, motion — designed for outcomes, not awards."
            />
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Work with us"
        title="Tell us what you're shipping next."
        body="If it's a real problem, we'll be straight about whether we can help and how fast we can move."
      />
    </>
  )
}

function Pillar({ icon: Icon, title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-white/75">{body}</p>
    </div>
  )
}
