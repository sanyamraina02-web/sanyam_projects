import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PageHero({
  eyebrow,
  title,
  highlight,
  body,
  primary = { href: '/contact', label: 'Book a discovery call' },
  secondary,
  meta = [],
  titleClassName = '',
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(105,87,255,0.18), rgba(229,38,115,0.06) 50%, transparent 75%)',
        }}
      />

      <div className="container-page pb-16 pt-16 sm:pt-24 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={`h-display mt-6 ${titleClassName}`}>
            {title}{' '}
            {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>
          {body && <p className="lede mx-auto mt-6 max-w-2xl">{body}</p>}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primary && (
              <Link to={primary.href} className="btn-gradient">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {secondary && (
              <Link to={secondary.href} className="btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>

          {meta.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
              {meta.map((m, i) => (
                <span
                  key={m.label + i}
                  className="inline-flex items-baseline gap-1.5"
                >
                  <span className="text-base font-semibold text-ink-950">
                    {m.value}
                  </span>
                  <span>{m.label}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
