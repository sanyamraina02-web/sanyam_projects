import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Code2,
  Megaphone,
  Briefcase,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import FAQ from '../components/FAQ.jsx'

const tracks = [
  {
    icon: Code2,
    title: 'For engineering teams',
    duration: '3 weeks',
    body: 'Cursor, Claude Code, agentic workflows, evals, RAG patterns. Less theory. More live coding inside your codebase.',
    outcomes: [
      'Measurable cycle-time reduction',
      'AI-assisted PR workflow',
      'Internal "vibe coding" playbook',
    ],
  },
  {
    icon: Megaphone,
    title: 'For product & ops teams',
    duration: '2 weeks',
    body: 'Prompting, workflow automation, internal agents. We help PMs and ops leads automate the busywork that drains the org.',
    outcomes: [
      'Custom internal agents shipped',
      'Workflow automation library',
      'Prompt evaluation rubric',
    ],
  },
  {
    icon: Briefcase,
    title: 'For leadership',
    duration: '1 week',
    body: 'A working session for execs and senior managers. What to bet on, what to fund, how to measure progress — without the hype.',
    outcomes: [
      'AI fluency for decision-making',
      'Investment thesis for your org',
      'Org design recommendations',
    ],
  },
]

const before = [
  'New tools demoed by team leads but never adopted',
  'Engineers Googling prompts when they need them',
  'AI work scattered across personal accounts and shadow tools',
  'No shared rubric for what \"good\" AI output looks like',
]

const after = [
  'Every team has an opinionated, vetted toolchain',
  'Engineers ship with AI by default — and know when not to',
  'Workflows live in shared infra, observable and auditable',
  'Output quality measured the way you measure code quality',
]

const faqs = [
  {
    q: 'Is this another lecture series?',
    a: 'No. Most of the program is hands-on, inside your codebase or your workflows. Lecture-to-lab ratio is roughly 1:4. People leave with shipped artifacts, not certificates.',
  },
  {
    q: 'On-site or remote?',
    a: 'Both. We default to remote with two on-site weeks for engineering tracks (kickoff + final shipfest). Leadership and product tracks can run fully on-site.',
  },
  {
    q: "Will my team's velocity actually go up?",
    a: 'We instrument it. Cycle time, PR throughput, time-to-first-prototype — all measured before and after. Our average client sees a 1.8–2.5× lift on engineering velocity within the quarter.',
  },
  {
    q: 'Can we run this for just one team first?',
    a: 'Yes. Most companies pilot with one engineering or product team, then roll out to the rest of the org. We help you scope the pilot to maximize the signal.',
  },
]

export default function AITraining() {
  return (
    <>
      <PageHero
        eyebrow="AI Training for Teams"
        title="Make every person in your org"
        highlight="measurably faster."
        body="Hands-on programs that turn your team into AI-native operators. No PowerPoint. No certificates. Just velocity you can measure."
        primary={{ href: '/contact', label: 'Plan a program' }}
        secondary={{ href: '/workshops', label: 'See workshops' }}
        meta={[
          { value: '1.8–2.5×', label: 'avg. velocity lift' },
          { value: '1–3 wks', label: 'per track' },
          { value: 'Hands-on', label: 'inside your stack' },
        ]}
      />

      {/* Tracks */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Three tracks</span>
            <h2 className="h-section mt-4">
              Programs built for the people who actually use AI.
            </h2>
            <p className="lede mt-5">
              Engineers, operators, and leaders learn AI differently. We don't
              pretend otherwise.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {tracks.map((t) => {
              const Icon = t.icon
              return (
                <div
                  key={t.title}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-crimson via-brand-magenta to-brand-pink-soft text-white shadow-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pill">{t.duration}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {t.body}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {t.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2 text-[14px] text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-purple" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-slate-50/60 py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Before / after</span>
            <h2 className="h-section mt-4">
              What changes when an org actually adopts AI.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Before
              </div>
              <ul className="mt-5 space-y-3">
                {before.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] text-slate-600"
                  >
                    <span className="mt-1.5 h-1 w-3 rounded-full bg-slate-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-purple/20 bg-white p-7 shadow-glow">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                After
              </div>
              <ul className="mt-5 space-y-3">
                {after.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 text-[15px] text-ink-950"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-purple" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section className="py-24 sm:py-28">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow">How we run it</span>
              <h2 className="h-section mt-4">
                Inside your stack. With your problems. By people who ship.
              </h2>
              <p className="lede mt-5">
                We don't sell off-the-shelf curriculum. The program is shaped
                by your codebase, your workflows, and the bottlenecks your
                team already knows about.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple hover:text-brand-purple-deep"
              >
                Plan a training program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <Step
                n="01"
                title="Diagnostic"
                body="Cycle-time baselines, skill-gap survey, candidate workflow shortlist."
              />
              <Step
                n="02"
                title="Curriculum design"
                body="A program shaped to your stack, your priorities, your business — not a generic syllabus."
              />
              <Step
                n="03"
                title="Hands-on cohorts"
                body="Small groups, pair-coding, live evals, real PRs against real backlogs."
              />
              <Step
                n="04"
                title="Measure + scale"
                body="Velocity instrumented before/after. Working playbook for the next teams in your org."
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} eyebrow="Training FAQ" title="Common questions." />

      <CTA
        eyebrow="Make your team AI-native"
        title="Pilot a track with one team."
        body="We'll scope a pilot to your codebase and your priorities. You'll see the velocity lift before you scale the program."
        primaryLabel="Plan a pilot"
        secondaryLabel="Read workshops"
        secondaryHref="/workshops"
      />
    </>
  )
}

function Step({ n, title, body }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
      <span className="font-display text-2xl font-semibold tracking-tight text-slate-200">
        {n}
      </span>
      <div>
        <h3 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-ink-950">
          {title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
          {body}
        </p>
      </div>
    </div>
  )
}
