import { parseFrontmatter } from './frontmatter.js'

const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function parseDate(d) {
  if (!d) return null
  const dt = new Date(d)
  return isNaN(dt.getTime()) ? null : dt
}

function formatDate(d) {
  if (!d) return ''
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function readingTime(text) {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = data.slug || slugFromPath(path)
    const date = parseDate(data.date)
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || data.excerpt || '',
      excerpt: data.excerpt || data.description || '',
      date,
      dateFormatted: formatDate(date),
      author: data.author || 'Volumetree',
      authorRole: data.authorRole || '',
      tags: data.tags || [],
      category: data.category || 'Insights',
      cover: data.cover || null,
      coverGradient: data.coverGradient || 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
      readingTime: readingTime(content),
      featured: !!data.featured,
      content,
    }
  })
  .sort((a, b) => {
    const ad = a.date ? a.date.getTime() : 0
    const bd = b.date ? b.date.getTime() : 0
    return bd - ad
  })

export function getAllPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug, limit = 3) {
  return posts.filter((p) => p.slug !== slug).slice(0, limit)
}
