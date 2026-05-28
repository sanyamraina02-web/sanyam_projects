import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Clock, Search, Filter, Hash } from 'lucide-react'
import { getAllPosts } from '../lib/posts.js'
import { useSEO, blogListJsonLd } from '../lib/useSEO.js'

const TOPIC_GRADIENTS = [
  'from-brand-purple-deep via-brand-purple to-brand-purple-light',
  'from-brand-magenta via-brand-crimson to-brand-yellow',
  'from-brand-purple via-brand-purple-light to-brand-cyan',
  'from-brand-crimson via-brand-magenta to-brand-pink-soft',
  'from-brand-purple-deep via-brand-purple to-brand-cyan',
  'from-brand-cyan via-brand-purple-light to-brand-magenta',
  'from-brand-purple to-brand-magenta',
  'from-brand-magenta to-brand-crimson',
]

const PAGE_SIZE = 12

export default function Blog() {
  const posts = getAllPosts()

  useSEO({
    title: 'Insights — Volumetree blog',
    description:
      'Honest writing on shipping fast, operating models, and enterprise AI from the Volumetree team. 150+ articles for founders and engineering leaders.',
    pathname: '/blog',
    jsonLd: blogListJsonLd(posts),
  })

  const featured = posts.find((p) => p.featured) || posts[0]
  const rest = useMemo(() => posts.filter((p) => p.slug !== featured?.slug), [posts, featured])

  // Normalize categories (case-insensitive dedupe) and only show ones with
  // enough posts to be useful as filters. Smaller categories still exist —
  // they're just not pill buttons. Search can still find them.
  const CATEGORY_MIN = 5
  const categories = useMemo(() => {
    const counts = new Map()
    rest.forEach((p) => {
      const key = (p.category || 'Insights').toLowerCase()
      const existing = counts.get(key) || { label: p.category, count: 0 }
      counts.set(key, { label: existing.label, count: existing.count + 1 })
    })
    const significant = Array.from(counts.entries())
      .filter(([, v]) => v.count >= CATEGORY_MIN)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([key, v]) => ({ id: key, label: v.label, count: v.count }))
    return [
      { id: '__all__', label: 'All articles', count: rest.length },
      ...significant,
    ]
  }, [rest])

  const [active, setActive] = useState('__all__')
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const gridRef = useRef(null)

  const selectTopic = (id) => {
    setActive(id)
    setVisible(PAGE_SIZE)
    // Smooth-scroll the grid into view so the filter feels responsive
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 30)
  }

  const filtered = useMemo(() => {
    let list = rest
    if (active !== '__all__') {
      list = list.filter((p) => (p.category || '').toLowerCase() === active)
    }
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description || '').toLowerCase().includes(q) ||
          (p.category || '').toLowerCase().includes(q),
      )
    }
    return list
  }, [rest, active, query])

  const shown = filtered.slice(0, visible)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgba(105,87,255,0.16), rgba(229,38,115,0.06) 50%, transparent 75%)',
          }}
        />
        <div className="container-page pb-10 pt-16 sm:pt-24">
          <div className="max-w-3xl">
            <span className="eyebrow">The Volumetree blog</span>
            <h1 className="h-display mt-6">
              Notes from <span className="gradient-text">shipping fast</span>{' '}
              in slow places.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Operating models, enterprise AI, founder playbooks — written by
              the team that actually ships in 30 days. {posts.length} articles
              and counting.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured banner ──────────────────────────────────────── */}
      {featured && (
        <section className="pb-10 pt-2 sm:pb-14">
          <div className="container-page">
            <Link
              to={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="grid lg:grid-cols-[1.05fr_1fr]">
                {/* Visual */}
                <div
                  className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br ${featured.coverGradient} lg:min-h-full`}
                >
                  {featured.cover && (
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      loading="eager"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  {/* Soft top fade for the badge */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent"
                  />
                  <div className="absolute left-7 top-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                    Featured
                  </div>
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple">
                    {featured.category}
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">
                      {featured.dateFormatted}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Clock className="h-3 w-3" />
                      {featured.readingTime} min
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-[40px] sm:leading-[1.05]">
                    {featured.title}
                  </h2>
                  {featured.description && (
                    <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
                      {featured.description}
                    </p>
                  )}
                  <div className="mt-7 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar name={featured.author} />
                      <div>
                        <div className="text-sm font-semibold text-ink-950">
                          {featured.author}
                        </div>
                        {featured.authorRole && (
                          <div className="text-xs text-slate-500">
                            {featured.authorRole}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple">
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Browse by topic ──────────────────────────────────────── */}
      <section className="pb-12 sm:pb-16">
        <div className="container-page">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Topics</span>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
                Browse by topic.
              </h2>
            </div>
            {active !== '__all__' && (
              <button
                onClick={() => selectTopic('__all__')}
                className="text-sm font-semibold text-brand-purple hover:text-brand-purple-deep"
              >
                Clear filter ✕
              </button>
            )}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories
              .filter((c) => c.id !== '__all__')
              .slice(0, 8)
              .map((c, i) => {
                const isActive = active === c.id
                const tone = TOPIC_GRADIENTS[i % TOPIC_GRADIENTS.length]
                return (
                  <button
                    key={c.id}
                    onClick={() => selectTopic(isActive ? '__all__' : c.id)}
                    className={`group relative h-32 overflow-hidden rounded-2xl border bg-gradient-to-br text-left text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${tone} ${
                      isActive
                        ? 'ring-2 ring-brand-magenta ring-offset-2'
                        : 'border-transparent'
                    }`}
                  >
                    {/* Soft glow texture */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-90"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.22), transparent 50%)',
                      }}
                    />
                    {/* Dot grid backdrop */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'radial-gradient(rgba(255,255,255,0.5) 0.6px, transparent 0.6px)',
                        backgroundSize: '14px 14px',
                      }}
                    />
                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                        <Hash className="h-3 w-3" />
                        {c.count} {c.count === 1 ? 'article' : 'articles'}
                      </div>
                      <div className="flex items-end justify-between gap-3">
                        <span className="font-display text-lg font-semibold leading-tight tracking-tight">
                          {c.label}
                        </span>
                        <span className="flex-none rounded-full bg-white/15 p-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
          </div>
        </div>
      </section>

      {/* ── Filter + search bar ──────────────────────────────────── */}
      <section className="border-y border-slate-200/80 bg-slate-50/60 py-6">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search 150+ articles…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisible(PAGE_SIZE)
                }}
                className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm placeholder-slate-400 shadow-soft transition-colors focus:border-brand-purple/40 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
              />
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <Filter className="h-3.5 w-3.5 flex-none text-slate-400" />
              {categories.map((c) => {
                const isActive = active === c.id
                return (
                  <button
                    key={c.id}
                    onClick={() => selectTopic(c.id)}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'border-brand-purple/30 bg-brand-purple/[0.08] text-brand-purple shadow-soft'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink-950'
                    }`}
                  >
                    {c.label}
                    <span className="ml-1.5 text-[11px] text-slate-400">
                      {c.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────────── */}
      <section ref={gridRef} className="scroll-mt-24 py-14 sm:py-16">
        <div className="container-page">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
              {active === '__all__'
                ? 'All articles'
                : categories.find((c) => c.id === active)?.label || 'Articles'}
            </h2>
            <span className="text-sm text-slate-500">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {shown.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 p-12 text-center text-slate-500">
              No articles match this filter.
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>

              {visible < filtered.length && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="btn-primary"
                  >
                    Load more ({filtered.length - visible} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

/* ── Post card ──────────────────────────────────────────────── */

function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div
        className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${post.coverGradient}`}
      >
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 50%)',
            }}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-purple">
          <span className="truncate">{post.category}</span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1 font-medium text-slate-500">
            <Clock className="h-3 w-3" />
            {post.readingTime} min
          </span>
        </div>
        <h3 className="mt-3 line-clamp-3 font-display text-[19px] font-semibold leading-snug tracking-tight text-ink-950">
          {post.title}
        </h3>
        <p className="mt-2.5 line-clamp-2 flex-1 text-[14px] leading-relaxed text-slate-600">
          {post.description}
        </p>
        <div className="mt-5 flex items-center gap-2.5 border-t border-slate-100 pt-4">
          <Avatar name={post.author} small />
          <span className="truncate text-sm text-slate-600">{post.author}</span>
          <span className="ml-auto whitespace-nowrap text-xs text-slate-400">
            {post.dateFormatted}
          </span>
        </div>
      </div>
    </Link>
  )
}

function Avatar({ name, small }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
  return (
    <span
      className={`inline-flex flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-light font-semibold text-white ${
        small ? 'h-7 w-7 text-[11px]' : 'h-10 w-10 text-sm'
      }`}
    >
      {initials}
    </span>
  )
}
