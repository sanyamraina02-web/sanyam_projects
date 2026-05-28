import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQ({
  eyebrow = 'Common questions',
  title = 'Answers before you ask.',
  items = [],
}) {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-section mt-4">{title}</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen
                    ? 'border-brand-purple/20 shadow-soft'
                    : 'border-slate-200/80'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[17px] font-semibold tracking-tight text-ink-950">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 flex-none text-brand-purple transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
