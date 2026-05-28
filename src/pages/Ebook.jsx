import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, BookOpen, Download, Mail, ArrowRight } from 'lucide-react'

const inside = [
  'The exact 4-week sprint we use on 60+ launches',
  'The 5 scope cuts that buy you 3 weeks',
  'Our default stack — and what we deliberately avoid',
  'How we run discovery in 5 working days',
  'Auth, billing, AI, integrations — the boring spine, solved',
  'Templates: scope doc, risk register, day-30 launch checklist',
]

export default function Ebook() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

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

      <div className="container-page py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow">
              <BookOpen className="h-3.5 w-3.5" />
              Free e-book · 30 pages
            </span>
            <h1 className="h-display mt-6">
              The 30-Day Launch Playbook —{' '}
              <span className="gradient-text">free to your inbox.</span>
            </h1>
            <p className="lede mt-6 max-w-xl">
              The playbook behind 60+ products shipped in 30 days. Same model
              we use with enterprise clients — distilled into a read you can
              finish over coffee.
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {inside.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[15px] text-slate-700"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-purple" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/[0.08] text-brand-purple">
                <Download className="h-5 w-5" />
              </span>
              <div className="pr-3 text-sm text-slate-600">
                Delivered as a PDF · also includes editable templates
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-brand-purple/15 via-brand-magenta/8 to-transparent blur-2xl" />
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card">
              {!submitted ? (
                <>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
                    Get instant access.
                  </h2>
                  <p className="mt-2 text-[15px] text-slate-600">
                    No drip campaign. One e-mail, with the link. We don't
                    waste your inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <Field
                      label="Your name"
                      type="text"
                      value={name}
                      onChange={setName}
                      placeholder="Alex Doe"
                    />
                    <Field
                      label="Work email"
                      type="email"
                      required
                      value={email}
                      onChange={setEmail}
                      placeholder="alex@company.com"
                    />
                    <button type="submit" className="btn-gradient w-full">
                      Send me the e-book
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      We never share your e-mail. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-4 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/[0.08] text-brand-purple">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink-950">
                    Check your inbox.
                  </h2>
                  <p className="mt-2 text-[15px] text-slate-600">
                    We just sent the e-book to{' '}
                    <span className="font-medium text-ink-950">{email}</span>.
                    If it's not there in a minute, peek in spam.
                  </p>
                  <Link
                    to="/contact"
                    className="btn-ghost mt-7"
                  >
                    Book a discovery call next
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', placeholder, required }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-950">{label}</span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-ink-950 placeholder:text-slate-400 transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
      />
    </label>
  )
}
