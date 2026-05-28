import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight } from 'lucide-react'

const interests = [
  'Launch in 30 days',
  'Enterprise AI Engineering',
  'AI Consultation & Strategy',
  'AI Training',
  '7-Day Workshop',
  'Something else',
]

const budgets = ['Under $60k', '$60k – $120k', '$120k – $250k', '$250k+', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: interests[0],
    budget: budgets[1],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email || !form.message) return
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="container-page py-16 sm:py-24 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Let's talk</span>
            <h1 className="h-display mt-6">
              Tell us what you want to{' '}
              <span className="gradient-text">ship.</span>
            </h1>
            <p className="lede mt-6">
              Discovery calls are 30 minutes. No pitch deck, no fluff —
              just a working session to see if we can help and how fast.
            </p>

            <div className="mt-10 space-y-5">
              <InfoRow icon={Mail} label="Email">
                <a
                  href="mailto:hello@volumetree.com"
                  className="link-underline"
                >
                  hello@volumetree.com
                </a>
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <span>+91 98XXX XXXXX</span>
              </InfoRow>
              <InfoRow icon={MapPin} label="HQ">
                <span>Mohali, India · with squads in Dubai & Toronto</span>
              </InfoRow>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                What happens next
              </div>
              <ol className="mt-4 space-y-3 text-[15px] text-slate-700">
                <Step n="01" body="We respond within one business day." />
                <Step n="02" body="A 30-minute discovery call to test fit." />
                <Step n="03" body="If we can help, we send a scoped proposal in 48 hours." />
              </ol>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    placeholder="Alex Doe"
                    value={form.name}
                    onChange={(v) => update('name', v)}
                  />
                  <Field
                    label="Work email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={(v) => update('email', v)}
                  />
                </div>
                <Field
                  label="Company"
                  placeholder="Company Inc."
                  value={form.company}
                  onChange={(v) => update('company', v)}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select
                    label="I'm interested in"
                    value={form.interest}
                    onChange={(v) => update('interest', v)}
                    options={interests}
                  />
                  <Select
                    label="Budget"
                    value={form.budget}
                    onChange={(v) => update('budget', v)}
                    options={budgets}
                  />
                </div>
                <TextArea
                  label="What are you trying to ship?"
                  placeholder="Two or three sentences is plenty. Be honest about where you're stuck."
                  required
                  value={form.message}
                  onChange={(v) => update('message', v)}
                />
                <button type="submit" className="btn-gradient w-full">
                  Send message
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to our reasonable handling of your
                  info. We never share it.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple/[0.08] text-brand-purple">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink-950">
                  Thanks — message received.
                </h2>
                <p className="mt-3 text-[15px] text-slate-600">
                  We'll reply within one business day, often sooner. In the
                  meantime, the e-book might be useful.
                </p>
                <Link to="/ebook" className="btn-ghost mt-7">
                  Read the 30-day playbook
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/[0.06] text-brand-purple">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          {label}
        </div>
        <div className="text-[15px] text-ink-950">{children}</div>
      </div>
    </div>
  )
}

function Step({ n, body }) {
  return (
    <li className="flex items-start gap-3">
      <span className="font-display text-sm font-semibold text-brand-purple">
        {n}
      </span>
      <span>{body}</span>
    </li>
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

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-950">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-ink-950 transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}

function TextArea({ label, value, onChange, placeholder, required }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-950">{label}</span>
      <textarea
        rows={5}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-ink-950 placeholder:text-slate-400 transition-colors focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
      />
    </label>
  )
}
