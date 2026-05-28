import { useEffect } from 'react'

const SITE_URL = 'https://www.volumetree.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

function setMetaTag(key, attrValue, content) {
  if (content === undefined) return
  let el = document.head.querySelector(`meta[${key}="${attrValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, attrValue)
    document.head.appendChild(el)
  }
  if (content == null || content === '') {
    // Don't remove — leave whatever default index.html set
    return
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  if (href) el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  // Clear previous instance for this id
  const existing = document.head.querySelectorAll(`script[data-jsonld="${id}"]`)
  existing.forEach((s) => s.remove())
  if (!data) return
  const el = document.createElement('script')
  el.setAttribute('type', 'application/ld+json')
  el.setAttribute('data-jsonld', id)
  el.textContent = JSON.stringify(data)
  document.head.appendChild(el)
}

/**
 * Per-route SEO. Sets <title>, meta description, OG/Twitter tags, canonical,
 * and an optional JSON-LD structured-data block.
 *
 * Usage:
 *   useSEO({
 *     title: 'Page title — Volumetree',
 *     description: 'One-line description.',
 *     pathname: '/case-studies',
 *     image: '/og-case-studies.png',
 *     type: 'article',            // optional
 *     jsonLd: { ... },            // optional Schema.org JSON-LD
 *   })
 */
export function useSEO({
  title,
  description,
  pathname = '/',
  image,
  type = 'website',
  jsonLd,
} = {}) {
  useEffect(() => {
    if (title) document.title = title

    const canonical = `${SITE_URL}${pathname || '/'}`
    const ogImage = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_OG_IMAGE

    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:type', type)
    setMetaTag('property', 'og:site_name', 'Volumetree')
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonical)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    setCanonical(canonical)
    setJsonLd('page', jsonLd)

    return () => {
      // Don't strip on unmount — the next route's hook overwrites these.
      // But do clear the per-route JSON-LD so it doesn't leak.
      setJsonLd('page', null)
    }
  }, [title, description, pathname, image, type, JSON.stringify(jsonLd)])
}

/** Helpers for building Schema.org payloads for specific page types. */
export function articleJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.cover ? [post.cover] : undefined,
    datePublished: post.date ? post.date.toISOString() : undefined,
    dateModified: post.date ? post.date.toISOString() : undefined,
    author: {
      '@type': 'Person',
      name: post.author || 'Volumetree',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Volumetree',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
  }
}

export function blogListJsonLd(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Volumetree blog',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Volumetree',
    },
    blogPost: posts.slice(0, 20).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date ? p.date.toISOString() : undefined,
      author: { '@type': 'Person', name: p.author },
    })),
  }
}
