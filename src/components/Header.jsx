import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'

const services = [
  {
    label: 'Launch in 30 Days',
    href: '/launch-in-30-days',
    blurb: 'Idea → live product in one month.',
  },
  {
    label: 'Enterprise AI Engineering',
    href: '/enterprise-ai-engineering',
    blurb: 'Fast, stable squads embedded in your stack.',
  },
  {
    label: '7-Day Launch Workshop',
    href: '/workshops',
    blurb: 'Learn how we ship in 30 days.',
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const closeTimer = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-md'
          : 'border-b border-transparent bg-white'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <button
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-ink-950"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-1 opacity-0'
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-card">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-950">
                        {s.label}
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-y-px opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <div className="mt-0.5 text-[13px] leading-snug text-slate-500">
                        {s.blurb}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem to="/workshops">Workshops</NavItem>
          <NavItem to="/case-studies">Case studies</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/ebook" className="btn-ghost">
            Free E-book
          </Link>
          <Link to="/contact" className="btn-gradient">
            Book a discovery call
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink-950 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-page space-y-1 py-4">
            <div className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-700 hover:bg-slate-50"
              >
                {s.label}
              </Link>
            ))}
            <div className="px-2 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </div>
            <Link
              to="/workshops"
              className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-700 hover:bg-slate-50"
            >
              Workshops
            </Link>
            <Link
              to="/case-studies"
              className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-700 hover:bg-slate-50"
            >
              Case studies
            </Link>
            <Link
              to="/blog"
              className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-700 hover:bg-slate-50"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-700 hover:bg-slate-50"
            >
              About
            </Link>
            <div className="flex gap-2 pt-4">
              <Link to="/ebook" className="btn-ghost flex-1">
                Free E-book
              </Link>
              <Link to="/contact" className="btn-gradient flex-1">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          isActive
            ? 'bg-slate-100 text-ink-950'
            : 'text-slate-700 hover:bg-slate-100 hover:text-ink-950'
        }`
      }
    >
      {children}
    </NavLink>
  )
}
