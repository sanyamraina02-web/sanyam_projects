import { Link } from 'react-router-dom'
import { ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink-950 text-slate-300">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(105,87,255,0.55) 0%, rgba(61,0,90,0) 70%)',
        }}
      />
      <div className="container-page relative">
        <div className="grid gap-12 py-20 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo variant="light" />
            <p className="max-w-sm text-[15px] leading-relaxed text-slate-400">
              We turn ideas into shipped products in 30 days, and we build
              enterprise AI teams that move at the speed of startups.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <FooterCol
            title="Services"
            items={[
              ['Launch in 30 Days', '/launch-in-30-days'],
              ['Enterprise AI Engineering', '/enterprise-ai-engineering'],
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              ['About', '/about'],
              ['Blog', '/blog'],
              ['Workshops', '/workshops'],
              ['Free E-book', '/ebook'],
              ['Contact', '/contact'],
            ]}
          />
          <FooterCol
            title="Resources"
            items={[
              ['Case studies', '/case-studies'],
              ['Methodology', '/#methodology'],
              ['Pricing', '/contact'],
            ]}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Volumetree. Crafted with intent.
          </p>
          <div className="flex items-center gap-2">
            <SocialLink
              href="https://www.linkedin.com/company/volumetree"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://twitter.com" label="Twitter">
              <Twitter className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://github.com" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={href + label}>
            <Link
              to={href}
              className="text-[15px] text-slate-300 transition-colors hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  )
}
