import { Link } from 'react-router-dom'
import {
  Compass,
  Target,
  ShieldCheck,
  TrendingUp,
  FileText,
  Workflow,
  Layers,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import FAQ from '../components/FAQ.jsx'

const deliverables = [
  {
    icon: Target,
    title: 'Opportunity map',
    body: 'Where AI moves the needle in your business — ranked by impact, effort and time-to-value.',
  },
  {
    icon: Workflow,
    title: 'Use-case sequencing',
    body: "What to ship first, what to wait on, and what to deliberately not build.",
  },
  {
    icon: FileText,
    title: 'Architecture & data plan',
    body: 'Reference architecture, data readiness assessment, build-vs-buy on every layer.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk & governance',
    body: 'Evals, guardrails, data privacy, model selection — opinionated, not theoretical.',
  },
  {
    icon: TrendingUp,
    title: 'ROI model',
    body: 'A spreadsheet you can defend to your CFO. Real assumptions, real numbers.',
  },
  {
    icon: Layers,
    title: 'Roadmap',
    body: 'A 90-day plan with named owners — ready to execute, not to admire.',
  },
]

const phases = [
  {
    week: 'Week 1',
    title: 'Interviews + signal',
    body: 'Sessions with execs, ops, engineering, and at least three customers. We trade slideware for primary research.',
  },
  {
    week: 'Week 2',
    title: 'Use-case shortlist',
    body: '20+ candidate use-cases scored against impact, feasibility and strategic fit. Most get cut on purpose.',
  },
  {
    week: 'Week 3',
    title: 'Architecture + readiness',
    body: 'Reference architecture, data audit, vendor recommendations, and risk register.',
  },
  {
    week: 'Week 4',
    title: 'Roadmap + presentation',
    body: 'Final readout to leadership. 90-day plan, budget, and the go/no-go on each bet.',
  },
]

const faqs = [
  {
    q: "We've already done an AI strategy with a Big-4 firm. Why redo it?",
    a: "If their plan got shipped, you wouldn't be reading this. Most enterprise AI strategies fail because they were written by people who've never shipped a production AI feature. We have, for 2–3 years across enterprises and SMBs — and our roadmap reflects that.",
  },
  {
    q: 'Do you deliver the roadmap and disappear?',
    a: "We can. But most clients roll the consultation into an Enterprise AI Engineering engagement — same team that wrote the plan executes the first 90 days. Continuity is the cheat code.",
  },
  {
    q: 'How long is the engagement?',
    a: 'A focused 4-week consultation with executive readouts at week 2 and week 4. We don\'t do 6-month strategy projects — your market moves faster than that.',
  },
  {
    q: "Who do you typically work with on our side?",
    a: 'CTO, VP Eng, Head of Product, and whoever owns the P&L the AI bet touches. We facilitate alignment between them — that\'s often half the value.',
  },
]

export default function AIConsultation() {
  return (
    <>
      <PageHero
        eyebrow="AI Consultation & Strategy"
        title="A roadmap that survives"
        highlight="contact with reality."
        body="2–3 years of shipping AI in production for enterprises and SMBs, distilled into a 4-week consultation that ends with a plan you can actually execute."
        primary={{ href: '/contact', label: 'Book a strategy call' }}
        secondary={{ href: '/enterprise-ai-engineering', label: 'See execution model' }}
        meta={[
          { value: '4 wks', label: 'engagement length' },
          { value: 'Senior', label: 'team only — no juniors' },
          { value: 'Outcomes', label: 'not slideware' },
        ]}
      />

      {/* Why */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">The problem with most AI strategies</span>
              <h2 className="h-section mt-4">
                Strategy decks don't ship. Roadmaps with owners do.
              </h2>
              <p className="lede mt-5">
                Most AI consultancies sell you the map. We've actually driven
                the route — for production systems, with paying users, under
                enterprise constraints.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Insight
                title="We've done it, not just diagrammed it."
                body="2–3 years of real AI shipped, for real businesses, under real constraints."
              />
              <Insight
                title="Roadmaps with named owners."
                body="Every initiative on our roadmap has an owner, a sequence, and a measurable outcome."
              />
              <Insight
                title="Opinionated on build-vs-buy."
                body="We'll tell you when to use the foundation model API, when to fine-tune, and when to walk away."
              />
              <Insight
                title="No vendor lock-in incentives."
                body="We don't resell. We don't get referral fees. Recommendations are clean."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-slate-50/60 py-24 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">What you walk away with</span>
            <h2 className="h-section mt-4">
              Six artifacts you'll still be using in 12 months.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => {
              const Icon = d.icon
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-light text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-950">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    {d.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">The 4-week engagement</span>
            <h2 className="h-section mt-4">
              Tight. Senior-only. Outcome-driven.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {phases.map((p, i) => (
              <div
                key={p.week}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                  {p.week}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {p.body}
                </p>
                {i < phases.length - 1 && (
                  <div className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 lg:flex">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        eyebrow="Consultation FAQ"
        title="What CTOs ask us first."
      />

      <CTA
        eyebrow="Start with a plan"
        title="Book a 30-minute strategy call."
        body="Tell us where you want AI to move the needle. We'll tell you straight whether a consultation is the right next step."
        primaryLabel="Book a strategy call"
        secondaryLabel="See execution model"
        secondaryHref="/enterprise-ai-engineering"
      />
    </>
  )
}

function Insight({ title, body }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
      <h3 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-ink-950">
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{body}</p>
    </div>
  )
}
