import { Link } from 'react-router-dom'
import { Rocket, Cpu, CalendarClock, ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const services = [
  {
    icon: Rocket,
    eyebrow: 'Launch in 30 Days',
    title: 'Be live before your competitors finish their pitch deck.',
    body: 'Ideation, roadmap, strategy, build, integration and post-launch support — one team, 30 days, one fixed price.',
    href: '/launch-in-30-days',
    tone: 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
  },
  {
    icon: Cpu,
    eyebrow: 'Enterprise AI Engineering',
    title: 'Move at startup speed without breaking enterprise reliability.',
    body: 'A senior squad that drops in, ships fast, and stays stable — engineered for teams stuck inside legacy stacks.',
    href: '/enterprise-ai-engineering',
    tone: 'from-brand-magenta via-brand-crimson to-brand-red',
  },
  {
    icon: CalendarClock,
    eyebrow: '7-Day Launch Workshop',
    title: 'Learn the exact playbook behind 60+ launches.',
    body: 'A focused week with our senior team — leave with a validated plan to ship your product in 30 days.',
    href: '/workshops',
    tone: 'from-brand-purple to-brand-magenta',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">What we do</span>
          <h2 className="h-section mt-4">
            Our services for{' '}
            <span className="gradient-text">founders & enterprises.</span>
          </h2>
          <p className="lede mt-5">
            Founders ship their first product. Enterprises modernize past their
            legacy. Same playbook, different speed — we get you live in weeks,
            not quarters, and stay until your team can run it without us.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.href} delay={i * 80} className="h-full">
              <ServiceCard service={s} highlight={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, highlight }) {
  const Icon = service.icon
  return (
    <Link
      to={service.href}
      className={`group relative block h-full overflow-hidden rounded-2xl border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-8 ${
        highlight ? 'border-brand-purple/20' : 'border-slate-200/80'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`animated-gradient inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.tone} text-white shadow-glow`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:bg-ink-950 group-hover:text-white">
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
      <div className="mt-7">
        <h3 className="font-display text-[26px] font-semibold leading-[1.1] tracking-tight text-ink-950 sm:text-[30px]">
          {service.eyebrow}
        </h3>
        <span
          aria-hidden
          className={`mt-3 block h-[3px] w-10 rounded-full bg-gradient-to-r ${service.tone}`}
        />
        <p className="mt-4 text-[16px] font-medium leading-snug text-slate-700">
          {service.title}
        </p>
        <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500">
          {service.body}
        </p>
      </div>
    </Link>
  )
}
