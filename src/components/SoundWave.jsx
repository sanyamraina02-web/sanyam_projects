/**
 * Brand-aligned sound-wave visuals.
 * The Volumetree brand guidelines call sound waves out as a graphic element
 * "in the context of revealing content … the shape when animated creates an
 * interesting visual that compliments our brand’s identity."
 */

/**
 * Ripple — concentric expanding rings that fade out, like a dropped stone.
 * Subtle, ambient. Use behind a focal point (badge, stat, CTA, hero center).
 */
export function Ripple({
  className = '',
  size = 220,
  count = 3,
  duration = 4.4,
  color = 'rgba(105, 87, 255, 0.4)',
  borderWidth = 1,
  origin = 'center',
}) {
  const justify =
    origin === 'left'
      ? 'justify-start'
      : origin === 'right'
      ? 'justify-end'
      : 'justify-center'
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 flex items-center ${justify} ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-full"
          style={{
            width: size,
            height: size,
            border: `${borderWidth}px solid ${color}`,
            animation: `ripplePulse ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${(duration / count) * i}s infinite`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}

/**
 * SoundWaveBars — vertical equalizer-style bars with organic, staggered motion.
 * Each bar has a deterministic base height and animation delay/duration so the
 * animation feels alive but never identical to its neighbour.
 */
export function SoundWaveBars({
  count = 36,
  className = '',
  barClassName = 'bg-gradient-to-t from-brand-purple-deep via-brand-purple to-brand-magenta',
  gap = 3,
  width = 3,
}) {
  return (
    <div
      className={`flex items-end justify-center ${className}`}
      style={{ gap: `${gap}px` }}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => {
        // Deterministic pseudo-random for stable across renders
        const phase = Math.sin(i * 0.65) * 0.3 + 0.55
        const baseHeight = Math.round(phase * 100) // 25–85 %
        const delay = Math.round(((i * 137) % 1000) - 200) // -200ms … 800ms
        const duration = 1100 + ((i * 211) % 700) // 1.1 – 1.8s
        return (
          <span
            key={i}
            className={`block rounded-full ${barClassName}`}
            style={{
              width: `${width}px`,
              height: `${baseHeight}%`,
              transformOrigin: 'bottom',
              animation: `soundWave ${duration}ms ease-in-out infinite`,
              animationDelay: `${delay}ms`,
            }}
          />
        )
      })}
    </div>
  )
}

/**
 * SoundWaveLine — a flowing SVG sine wave that morphs smoothly between
 * two crest configurations. Use as a subtle background element.
 */
export function SoundWaveLine({
  className = '',
  strokeWidth = 2,
  opacity = 0.55,
  duration = 9,
  amplitude = 30,
  yCenter = 60,
  fromColor = '#402999',
  midColor = '#e52673',
  toColor = '#6957ff',
  gradientId = 'soundWaveLineGradient',
}) {
  const a = amplitude
  const y = yCenter
  // Two distinct sine paths between which we morph
  const d1 = `M0,${y} C150,${y - a} 300,${y + a} 450,${y} C600,${y - a} 750,${y + a} 900,${y} C1050,${y - a} 1200,${y + a} 1200,${y}`
  const d2 = `M0,${y} C150,${y + a} 300,${y - a} 450,${y} C600,${y + a} 750,${y - a} 900,${y} C1050,${y + a} 1200,${y - a} 1200,${y}`

  return (
    <svg
      aria-hidden
      className={className}
      viewBox={`0 0 1200 ${y * 2}`}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={fromColor} stopOpacity="0" />
          <stop offset="30%" stopColor={fromColor} />
          <stop offset="55%" stopColor={midColor} />
          <stop offset="75%" stopColor={toColor} />
          <stop offset="100%" stopColor={toColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={opacity}
      >
        <animate
          attributeName="d"
          values={`${d1};${d2};${d1}`}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

/**
 * SoundWaveBackdrop — stacked, opposing flowing waves for ambient depth.
 */
export function SoundWaveBackdrop({ className = '', opacity = 0.5 }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <SoundWaveLine
        className="absolute inset-x-0 top-[20%] h-[120px]"
        strokeWidth={1.5}
        duration={11}
        amplitude={28}
        gradientId="waveBackdropA"
      />
      <SoundWaveLine
        className="absolute inset-x-0 top-[45%] h-[120px]"
        strokeWidth={1.5}
        duration={14}
        amplitude={36}
        fromColor="#6957ff"
        midColor="#e52673"
        toColor="#10c1f0"
        gradientId="waveBackdropB"
      />
      <SoundWaveLine
        className="absolute inset-x-0 top-[70%] h-[120px]"
        strokeWidth={1.5}
        duration={12}
        amplitude={22}
        fromColor="#10c1f0"
        midColor="#6957ff"
        toColor="#e52673"
        gradientId="waveBackdropC"
      />
    </div>
  )
}

/**
 * GrowthWave — for positive / maximise folds.
 * A confident, upward-trending sine wave plus two harmonic underlays.
 * Brand emerald + purple — calm, ascending.
 */
export function GrowthWave({ className = '', opacity = 0.85, idPrefix = 'growth' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* Primary cresting wave — slight upward bias */}
      <svg
        className="absolute inset-x-0 top-[12%] h-[180px] w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${idPrefix}A`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="30%" stopColor="#10b981" />
            <stop offset="65%" stopColor="#6957ff" />
            <stop offset="100%" stopColor="#6957ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${idPrefix}A)`}
          strokeWidth="2.6"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M0,140 C200,80 400,160 600,90 C800,30 1000,110 1200,50;
                    M0,150 C200,110 400,80 600,120 C800,80 1000,60 1200,70;
                    M0,140 C200,80 400,160 600,90 C800,30 1000,110 1200,50"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Soft harmonic underlay */}
      <svg
        className="absolute inset-x-0 top-[38%] h-[180px] w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${idPrefix}B`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${idPrefix}B)`}
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M0,130 C300,60 600,180 900,100 C1050,70 1200,110 1200,110;
                    M0,150 C300,110 600,80 900,140 C1050,100 1200,80 1200,80;
                    M0,130 C300,60 600,180 900,100 C1050,70 1200,110 1200,110"
            dur="14s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Tertiary low wave — depth */}
      <svg
        className="absolute inset-x-0 top-[65%] h-[180px] w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${idPrefix}C`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6957ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#6957ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${idPrefix}C)`}
          strokeWidth="1.3"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M0,120 C300,90 600,150 900,90 C1050,60 1200,90 1200,90;
                    M0,130 C300,140 600,90 900,130 C1050,110 1200,70 1200,70;
                    M0,120 C300,90 600,150 900,90 C1050,60 1200,90 1200,90"
            dur="17s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}

/**
 * FrictionWave — for negative / minimise folds.
 * Sharp jagged sound-wave bars + a descending crimson sine.
 * Conveys friction / cost / risk — visually busier, more aggressive.
 */
export function FrictionWave({ className = '', opacity = 0.85, idPrefix = 'friction' }) {
  // Generate deterministic jagged path
  const jaggedPath = (yBase, amp, segments = 28) => {
    const step = 1200 / segments
    let d = `M0,${yBase}`
    for (let i = 1; i <= segments; i++) {
      const x = i * step
      const dir = i % 2 === 0 ? 1 : -1
      const wobble = Math.sin(i * 0.7) * amp * 0.4
      const y = yBase + dir * amp + wobble
      d += ` L${x.toFixed(0)},${y.toFixed(1)}`
    }
    return d
  }
  const j1 = jaggedPath(110, 30)
  const j2 = jaggedPath(110, 24)

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* Jagged sawtooth — fast & restless */}
      <svg
        className="absolute inset-x-0 top-[10%] h-[200px] w-full"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${idPrefix}A`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="35%" stopColor="#ef4444" />
            <stop offset="65%" stopColor="#e52673" />
            <stop offset="100%" stopColor="#e52673" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${idPrefix}A)`}
          strokeWidth="2"
          strokeLinejoin="miter"
        >
          <animate
            attributeName="d"
            values={`${j1};${j2};${j1}`}
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Descending sine — risk trending down */}
      <svg
        className="absolute inset-x-0 top-[42%] h-[200px] w-full"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${idPrefix}B`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#e52673" stopOpacity="0" />
            <stop offset="50%" stopColor="#d1023c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d1023c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${idPrefix}B)`}
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <animate
            attributeName="d"
            values="M0,60 C200,140 400,80 600,160 C800,100 1000,180 1200,140;
                    M0,80 C200,160 400,100 600,180 C800,120 1000,200 1200,170;
                    M0,60 C200,140 400,80 600,160 C800,100 1000,180 1200,140"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Quick jitter line for texture */}
      <svg
        className="absolute inset-x-0 top-[70%] h-[180px] w-full"
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${idPrefix}C`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="50%" stopColor="#f87171" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          stroke={`url(#${idPrefix}C)`}
          strokeWidth="1.4"
          strokeLinejoin="miter"
        >
          <animate
            attributeName="d"
            values={`${jaggedPath(90, 16, 40)};${jaggedPath(90, 12, 40)};${jaggedPath(90, 16, 40)}`}
            dur="2.4s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
