import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { getPost, getRelatedPosts } from '../lib/posts.js'
import { useSEO, articleJsonLd } from '../lib/useSEO.js'
import CTA from '../components/CTA.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  // Hook ALWAYS runs (rules of hooks) — pass empty when no post
  useSEO(
    post
      ? {
          title: `${post.title} — Volumetree`,
          description: post.description || `${post.title} — read on the Volumetree blog.`,
          pathname: `/blog/${post.slug}`,
          image: post.cover,
          type: 'article',
          jsonLd: articleJsonLd(post),
        }
      : { title: 'Article not found — Volumetree', pathname: '/blog' },
  )

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(slug)

  return (
    <>
      <article className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40"
        />
        <div className="container-page py-10 sm:py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-ink-950"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          <header className="mx-auto mt-8 max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
              <span>{post.category}</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 font-medium text-slate-500">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
              <span className="text-slate-300">·</span>
              <span className="font-medium text-slate-500">
                {post.dateFormatted}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tightest text-ink-950 sm:text-5xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                {post.description}
              </p>
            )}
            <div className="mt-7 inline-flex items-center gap-3">
              <Avatar name={post.author} />
              <div className="text-left">
                <div className="text-sm font-semibold text-ink-950">
                  {post.author}
                </div>
                {post.authorRole && (
                  <div className="text-xs text-slate-500">
                    {post.authorRole}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Cover */}
          <div
            className={`relative mx-auto mt-12 aspect-[16/8] w-full max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br ${post.coverGradient} shadow-glow`}
          >
            {post.cover ? (
              <img
                src={post.cover}
                alt={post.title}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div
                aria-hidden
                className="h-full w-full rounded-2xl"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.32), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.22), transparent 50%)',
                }}
              />
            )}
          </div>

          {/* Body */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="prose-blog">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ node, ...props }) => {
                    const href = props.href || ''
                    const external = /^https?:\/\//.test(href)
                    return external ? (
                      <a target="_blank" rel="noreferrer" {...props} />
                    ) : (
                      <Link to={href}>{props.children}</Link>
                    )
                  },
                  img: ({ node, ...props }) => (
                    <img
                      {...props}
                      loading="lazy"
                      className="my-6 rounded-xl"
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {post.tags?.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                {post.tags.map((t) => (
                  <span key={t} className="pill">
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-slate-50/60 py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div
                    className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.coverGradient}`}
                  >
                    {p.cover && (
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-purple">
                      {p.category}
                    </div>
                    <h3 className="mt-2 line-clamp-3 font-display text-lg font-semibold leading-snug tracking-tight text-ink-950">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-slate-600">
                      {p.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-950">
                      Read article
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        eyebrow="Working on something?"
        title="Tell us what you want to ship."
        body="We'll be straight with you about whether a 30-day launch fits — and what it would take if it does."
      />
    </>
  )
}

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-light text-sm font-semibold text-white">
      {initials}
    </span>
  )
}
