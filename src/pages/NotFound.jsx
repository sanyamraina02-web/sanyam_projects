import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">404</span>
        <h1 className="h-display mt-6 max-w-2xl">
          We couldn't find that page.
        </h1>
        <p className="lede mt-5 max-w-lg">
          The link is dead, the page moved, or it never existed in the first
          place. Let's get you back somewhere useful.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-gradient">
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <Link to="/blog" className="btn-ghost">
            Read the blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
