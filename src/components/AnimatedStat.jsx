import { useEffect, useRef, useState } from 'react'

/**
 * AnimatedStat — animates a numeric count-up the first time the element
 * scrolls into view. Respects users who prefer reduced motion.
 */
export default function AnimatedStat({
  target,
  duration = 1600,
  prefix = '',
  suffix = '+',
  format = (n) => n.toLocaleString(),
}) {
  const [value, setValue] = useState(0)
  const nodeRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setValue(target)
      startedRef.current = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}
      {format(value)}
      {suffix}
    </span>
  )
}
