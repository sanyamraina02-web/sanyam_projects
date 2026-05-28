import { Link } from 'react-router-dom'
import { ArrowRight, Check, X } from 'lucide-react'

export default function ValueProp() {
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
      <div className="container-page relative">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/80">
              The Volumetree math
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              What others bill at{' '}
              <span className="line-through decoration-brand-magenta decoration-2 decoration-wavy">
                $400k–$700k
              </span>{' '}
              over 4–6 months, we ship for{' '}
              <span className="gradient-text">$60k in under 2.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Same scope. Same enterprise rigor. Different operating model.
              We're picky about who we work with — because that's how we keep
              the math honest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gradient">
                See if your project qualifies
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/launch-in-30-days"
                className="btn inline-flex border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:bg-white/[0.08]"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <CompareCard
              tone="bad"
              label="Traditional agency / SI"
              items={[
                'Sales pitch → SOW → kickoff in 6–10 weeks',
                'Discovery as a separate $80k deliverable',
                'Hand-offs between strategy, design, and dev',
                '4–6 months to MVP. Change requests cost more.',
                '$400k–$700k average enterprise quote',
              ]}
            />
            <CompareCard
              tone="good"
              label="Volumetree"
              items={[
                'Discovery in week 1, building by week 2',
                'One team: strategy, design, AI, engineering',
                'Pure-play prototyping → beta → harden',
                'Live product in under 2 months',
                'Fixed scope from $60k. No change-order theater.',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CompareCard({ tone, label, items }) {
  const isGood = tone === 'good'
  return (
    <div
      className={`relative rounded-2xl border p-6 sm:p-7 ${
        isGood
          ? 'border-white/15 bg-white/[0.05] backdrop-blur'
          : 'border-white/10 bg-white/[0.02]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
            isGood ? 'text-brand-cyan' : 'text-white/40'
          }`}
        >
          {label}
        </span>
        {isGood && (
          <span className="rounded-full bg-gradient-to-r from-brand-purple to-brand-purple-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
            Recommended
          </span>
        )}
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[15px]">
            {isGood ? (
              <Check className="mt-0.5 h-4 w-4 flex-none text-brand-cyan" />
            ) : (
              <X className="mt-0.5 h-4 w-4 flex-none text-white/30" />
            )}
            <span className={isGood ? 'text-white/90' : 'text-white/55'}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
