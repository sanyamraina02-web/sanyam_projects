import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const beliefs = [
  {
    title: 'Build to ship, not to bill.',
    body: 'Scope creeps when the operating model rewards it. Ours doesn\'t. Fixed scope, fixed timeline, opinionated team.',
  },
  {
    title: 'Discovery isn\'t optional.',
    body: 'The first week defines the next eleven. We walk away from engagements where the discovery doesn\'t survive scrutiny.',
  },
  {
    title: 'Pure-play prototypes beat polished plans.',
    body: 'A working prototype tells you more in 5 days than a 50-page PRD does in 5 weeks. We optimize for signal.',
  },
  {
    title: 'AI is a tool, not a strategy.',
    body: 'We\'ve shipped real AI for enterprises for 2–3 years. We know where it adds leverage — and where it adds cost.',
  },
]

export default function Ideology() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Our ideology</span>
            <h2 className="h-section mt-4">
              Curious, opinionated, allergic to fluff.
            </h2>
            <p className="lede mt-5">
              We're a team of problem-solvers who'd rather ship a useful
              version-one than pitch a perfect version-ten. These four beliefs
              shape every engagement.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple hover:text-brand-purple-deep"
            >
              How we hire and operate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="group relative h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold tracking-tighter text-brand-purple/20 transition-colors group-hover:text-brand-purple/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-ink-950">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
