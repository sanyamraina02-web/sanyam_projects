/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0612',
          900: '#15102a',
          800: '#1f1640',
          700: '#2d2057',
        },
        brand: {
          purple: '#402999',
          'purple-deep': '#3d005a',
          'purple-light': '#6957ff',
          magenta: '#e52673',
          crimson: '#d1214a',
          red: '#eb3345',
          yellow: '#f5cc0d',
          teal: '#73c9cf',
          cyan: '#10c1f0',
          lilac: '#e4dde9',
          'pink-soft': '#f6bedc',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      backgroundImage: {
        'resonating-trust':
          'linear-gradient(120deg, #3d005a 0%, #402999 30%, #6957ff 65%, #10c1f0 100%)',
        'echoing-warmth':
          'linear-gradient(120deg, #d1023c 0%, #e2a560 55%, #f7d205 100%)',
        'purposeful-engineering':
          'linear-gradient(120deg, #603297 0%, #d70a54 50%, #e3a7c7 100%)',
        'minimal-scale':
          'linear-gradient(135deg, #d50055 0%, #f6bedc 60%, #ffffff 100%)',
        'minimal-tech':
          'linear-gradient(135deg, #e7609e 0%, #c7baea 60%, #ffffff 100%)',
        'grid-soft':
          'radial-gradient(circle at 1px 1px, rgba(64,41,153,0.08) 1px, transparent 0)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 10, 40, 0.04), 0 4px 16px rgba(15, 10, 40, 0.06)',
        card: '0 1px 2px rgba(15, 10, 40, 0.04), 0 8px 32px rgba(15, 10, 40, 0.08)',
        glow: '0 0 0 1px rgba(64,41,153,0.08), 0 18px 60px -20px rgba(64,41,153,0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse': 'marqueeReverse 50s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
