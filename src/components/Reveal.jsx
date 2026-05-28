import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — fade + translate-up the children when they scroll into view.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  y = 16,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delay)
          observer.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const style = visible
    ? { opacity: 1, transform: 'translate3d(0,0,0)' }
    : { opacity: 0, transform: `translate3d(0, ${y}px, 0)` }

  return (
    <Tag
      ref={ref}
      style={{ ...style, transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
