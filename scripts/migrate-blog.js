/**
 * Volumetree blog migration script.
 *
 * Crawls volumetree.com/blogs/, collects every post URL, fetches each one,
 * extracts title / date / author / category / body, converts the body to
 * markdown, and writes one .md file per post to src/content/blog/.
 *
 * Run:
 *   npm install --save-dev cheerio turndown
 *   node scripts/migrate-blog.js
 */

import * as cheerio from 'cheerio'
import TurndownService from 'turndown'
import { writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog')
const BASE = 'https://www.volumetree.com'
const MAX_PAGES = 15
const POST_URL_RE = /^https?:\/\/(?:www\.)?volumetree\.com\/(\d{4})\/(\d{2})\/(\d{2})\/([a-z0-9-]+)\/?$/i

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
  bulletListMarker: '-',
})
// Strip inline style/class noise from WordPress
turndown.remove(['script', 'style', 'noscript', 'iframe'])

// Brand gradients to cycle through for visual variety
const GRADIENTS = [
  'from-brand-purple-deep via-brand-purple to-brand-purple-light',
  'from-brand-magenta via-brand-crimson to-brand-yellow',
  'from-brand-purple via-brand-purple-light to-brand-cyan',
  'from-brand-crimson via-brand-magenta to-brand-pink-soft',
  'from-brand-purple-deep via-brand-purple to-brand-cyan',
]

function hashString(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0
  return h
}

function escapeYamlStr(s) {
  return String(s ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n+/g, ' ')
    .trim()
}

function cleanText(s) {
  return String(s ?? '').replace(/\s+/g, ' ').trim()
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0) AppleWebKit/605 (KHTML, like Gecko) Volumetree-Migrator/1.0',
      Accept: 'text/html,application/xhtml+xml',
    },
    redirect: 'follow',
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return await res.text()
}

async function collectPostUrls() {
  const urls = new Set()
  for (let page = 1; page <= MAX_PAGES; page++) {
    const url = page === 1 ? `${BASE}/blogs/` : `${BASE}/blogs/page/${page}/`
    let html
    try {
      html = await fetchHtml(url)
    } catch (e) {
      console.log(`  Page ${page}: ${e.message} — stopping`)
      break
    }
    const $ = cheerio.load(html)
    const before = urls.size
    $('a').each((_, el) => {
      const href = $(el).attr('href') || ''
      const m = href.match(POST_URL_RE)
      if (m) {
        const clean = href.replace(/\/?$/, '/').replace(/\?.*$/, '')
        urls.add(clean)
      }
    })
    const added = urls.size - before
    console.log(`  Page ${page}: +${added} links (total: ${urls.size})`)
    // If a page added no new URLs, we've likely hit the end of new content
    if (added === 0 && page > 1) break
  }
  return Array.from(urls)
}

function extractBodyHtml($) {
  // WordPress / Yoast / common themes — try multiple selectors in priority order
  const selectors = [
    '.entry-content',
    'article .post-content',
    'article .content',
    'main .post-content',
    'article',
    '.post',
  ]
  for (const sel of selectors) {
    const el = $(sel).first()
    if (el.length) {
      // Strip navigation noise / share / related / comments
      el.find(
        [
          'script',
          'style',
          'noscript',
          '.sharedaddy',
          '.share',
          '.social-share',
          '.share-buttons',
          '.related-posts',
          '.related',
          '.yoast-related',
          '.comments',
          '#comments',
          '.comment-respond',
          '.author-bio',
          '.post-tags',
          '.entry-meta',
          '.post-meta',
          '.nav-links',
          '.post-navigation',
          '.wp-block-buttons',
          '.cta',
          'form',
          'aside',
          'nav',
          'footer',
          'header',
        ].join(', ')
      ).remove()
      // Also strip the H1 title (we already captured it separately)
      el.find('h1').first().remove()
      const html = el.html()
      if (html && html.replace(/<[^>]+>/g, '').trim().length > 80) return html
    }
  }
  return $('body').html()
}

function extractTitle($) {
  return (
    cleanText($('h1').first().text()) ||
    cleanText($('meta[property="og:title"]').attr('content')) ||
    cleanText($('title').text().split('|')[0])
  )
}

function extractDate($, urlDate) {
  const candidates = [
    $('time').attr('datetime'),
    $('time').first().text(),
    $('meta[property="article:published_time"]').attr('content'),
    $('.posted-on time').attr('datetime'),
  ]
  for (const c of candidates) {
    if (!c) continue
    const d = new Date(c)
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0]
  }
  return urlDate
}

function extractAuthor($) {
  const candidates = [
    $('.author-name').first().text(),
    $('[rel="author"]').first().text(),
    $('.byline .author').first().text(),
    $('.author').first().text(),
    $('meta[name="author"]').attr('content'),
  ]
  for (const c of candidates) {
    const t = cleanText(c)
    if (t && t.length < 80) return t
  }
  return 'Volumetree Editorial'
}

function extractCategory($) {
  const candidates = [
    $('.cat-links a').first().text(),
    $('.category a').first().text(),
    $('[rel="category tag"]').first().text(),
    $('.post-categories a').first().text(),
  ]
  for (const c of candidates) {
    const t = cleanText(c)
    if (t && t.toLowerCase() !== 'uncategorized') return t
  }
  return 'Insights'
}

function extractCover($) {
  return (
    $('meta[property="og:image"]').attr('content') ||
    $('article img').first().attr('src') ||
    null
  )
}

function extractDescription($) {
  return (
    cleanText($('meta[name="description"]').attr('content')) ||
    cleanText($('meta[property="og:description"]').attr('content')) ||
    ''
  )
}

async function migratePost(url) {
  const html = await fetchHtml(url)
  const $ = cheerio.load(html)

  const urlMatch = url.match(POST_URL_RE)
  if (!urlMatch) return null
  const urlDate = `${urlMatch[1]}-${urlMatch[2]}-${urlMatch[3]}`
  const slug = urlMatch[4]

  const title = extractTitle($)
  const date = extractDate($, urlDate)
  const author = extractAuthor($)
  const category = extractCategory($)
  const cover = extractCover($)
  const description = extractDescription($)

  const bodyHtml = extractBodyHtml($)
  let bodyMd = turndown.turndown(bodyHtml || '')

  // Tidy up: collapse blank-line runs, strip empty links/images
  bodyMd = bodyMd
    .replace(/ /g, ' ')
    .replace(/!\[\]\(\s*\)/g, '')
    .replace(/\[\s*\]\([^)]*\)/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const gradient = GRADIENTS[Math.abs(hashString(slug)) % GRADIENTS.length]

  return {
    slug,
    title,
    description: description.slice(0, 220),
    date,
    author,
    category,
    cover,
    gradient,
    body: bodyMd,
    sourceUrl: url,
  }
}

function buildMarkdown(post) {
  const lines = ['---']
  lines.push(`title: "${escapeYamlStr(post.title)}"`)
  if (post.description) lines.push(`description: "${escapeYamlStr(post.description)}"`)
  lines.push(`date: ${post.date}`)
  lines.push(`author: "${escapeYamlStr(post.author)}"`)
  lines.push(`category: "${escapeYamlStr(post.category)}"`)
  if (post.cover) lines.push(`cover: "${escapeYamlStr(post.cover)}"`)
  lines.push(`coverGradient: "${post.gradient}"`)
  lines.push(`sourceUrl: "${post.sourceUrl}"`)
  lines.push('---')
  lines.push('')
  lines.push(post.body)
  lines.push('')
  return lines.join('\n')
}

async function main() {
  console.log('Collecting post URLs from volumetree.com/blogs/ …')
  const urls = await collectPostUrls()
  console.log(`\nFound ${urls.length} unique posts.\n`)

  if (!existsSync(BLOG_DIR)) {
    mkdirSync(BLOG_DIR, { recursive: true })
  } else {
    const removed = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
    removed.forEach((f) => unlinkSync(join(BLOG_DIR, f)))
    if (removed.length) console.log(`Removed ${removed.length} existing .md files.\n`)
  }

  console.log('Migrating posts:')
  let ok = 0
  let failed = 0
  for (const url of urls) {
    try {
      const post = await migratePost(url)
      if (!post) {
        failed++
        continue
      }
      const md = buildMarkdown(post)
      const outPath = join(BLOG_DIR, `${post.slug}.md`)
      writeFileSync(outPath, md, 'utf8')
      ok++
      const words = post.body.split(/\s+/).filter(Boolean).length
      console.log(`  ✓ ${post.slug.padEnd(48)} ${String(words).padStart(5)} words`)
    } catch (e) {
      failed++
      console.warn(`  ✗ ${url}\n    ${e.message}`)
    }
  }

  console.log(`\nDone. ${ok} migrated, ${failed} failed of ${urls.length}.`)
}

main().catch((e) => {
  console.error('Fatal:', e)
  process.exit(1)
})
