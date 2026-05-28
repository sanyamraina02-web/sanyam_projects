// Minimal frontmatter parser — handles the subset we use in blog posts:
// scalar strings (quoted or unquoted), numbers, booleans, and string arrays.
// No Buffer / no eval / no dependency.

function unquote(s) {
  s = s.trim()
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1)
  }
  return s
}

function parseScalar(raw) {
  const v = raw.trim()
  if (v === '') return ''
  if (v === 'true') return true
  if (v === 'false') return false
  if (v === 'null') return null
  if (!isNaN(Number(v)) && !/^['"]/.test(v) && !/-\d{4}-/.test(v)) {
    return Number(v)
  }
  return unquote(v)
}

function parseArray(raw) {
  const inner = raw.trim().slice(1, -1).trim()
  if (!inner) return []
  return inner
    .split(',')
    .map((p) => unquote(p.trim()))
    .filter((p) => p !== '')
}

export function parseFrontmatter(source) {
  const text = source.replace(/^﻿/, '')
  const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: text }
  const yaml = match[1]
  const content = match[2]
  const data = {}
  for (const line of yaml.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    if (value.startsWith('[')) {
      data[key] = parseArray(value)
    } else {
      data[key] = parseScalar(value)
    }
  }
  return { data, content }
}
