'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useVisible() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

const lines = [
  {
    num: '01',
    headline: 'Konkretny plan i lejek — nie strzały na ślepo.',
    body: 'Strategia dopasowana do Twojej placówki, grupy docelowej i budżetu. Wiesz co robimy, po co i jak zmierzymy efekty.',
  },
  {
    num: '02',
    headline: 'Stałe pozyskanie przez cały rok.',
    body: 'Koniec z paniką w sierpniu i pustymi miejscami przez 10 miesięcy. Kampanie które działają non-stop, nie tylko przed wrześniem.',
  },
  {
    num: '03',
    headline: 'Twój zespół wie co robić — i ma narzędzia.',
    body: 'Szkolimy realnie, nie PowerPointem. Po kilku miesiącach Twoi ludzie ogarniają marketing sami. Zależność od nas maleje, kompetencje rosną.',
  },
]

function Line({ line, index }: { line: typeof lines[0]; index: number }) {
  const { ref, visible } = useVisible()

  return (
    <div
      ref={ref}
      className="group relative flex flex-col md:flex-row md:items-start gap-5 md:gap-8 py-8 md:py-10 border-b border-white/[0.07] last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 0.65s ease ${index * 140}ms, transform 0.65s ease ${index * 140}ms`,
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to bottom, #03ef23, #00bbf5)' }}
      />

      <div className="shrink-0 pl-3 md:pl-4">
        <span
          className="gradient-text font-black tabular-nums leading-none inline-block"
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
        >
          {line.num}
        </span>
      </div>

      <div className="pl-3 md:pl-0 flex flex-col gap-2 pt-1">
        <h3
          className="font-black text-white leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
        >
          {line.headline}
        </h3>
        <p className="text-white/40 text-[14px] leading-relaxed max-w-xl">
          {line.body}
        </p>
      </div>
    </div>
  )
}

export function BridgeAlt3() {
  const { ref, visible } = useVisible()

  return (
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, #3c0080, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: text */}
          <div>
            <div
              ref={ref}
              className="mb-12 md:mb-14"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #03ef23, #00bbf5)' }} />
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/25">Dobra wiadomość</p>
              </div>
              <h2
                className="font-black text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Wszystkie te straty<br />
                <span className="gradient-text">da się zatrzymać.</span>
              </h2>
              <p
                className="leading-relaxed max-w-lg"
                style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'rgba(255,255,255,0.35)' }}
              >
                Nie przez magię. Przez trzy konkretne rzeczy które robimy inaczej niż wszyscy.
              </p>
            </div>

            <div>
              {lines.map((line, i) => (
                <Line key={i} line={line} index={i} />
              ))}
            </div>

            <div
              className="mt-10"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease 700ms',
              }}
            >
              <a
                href="#wyniki"
                className="inline-flex items-center gap-3 text-white/30 hover:text-white/60 transition-colors"
              >
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em]">Przekonaj się na wynikach</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="relative hidden md:block"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(20px)',
              transition: 'opacity 0.8s ease 200ms, transform 0.8s ease 200ms',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ paddingTop: '130%' }}>
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=85"
                alt="Zajęcia edukacyjne"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(5,0,10,0.7) 100%)' }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-4 -left-6 rounded-2xl px-5 py-4"
              style={{ background: 'rgba(5,0,10,0.9)', border: '1px solid rgba(3,239,35,0.2)', backdropFilter: 'blur(12px)' }}
            >
              <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1">Pierwsze zapisy</p>
              <p className="font-black gradient-text text-[1.6rem] leading-none">w 30 dni</p>
            </div>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
