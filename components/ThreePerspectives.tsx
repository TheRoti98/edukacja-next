'use client'

import { useEffect, useRef, useState } from 'react'

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

const perspectives = [
  {
    role: 'Rodzic',
    insight: 'Podejmuje decyzję.',
    quote: 'Chcę żeby moje dziecko trafiło w dobre ręce. Szukam czegoś wiarygodnego — i nie mam czasu na złe wybory.',
    needs: ['Opinie i dowody społeczne', 'Transparentność i zaufanie', 'Szybka odpowiedź na pytania'],
    headerBg: 'linear-gradient(145deg, #3c0080 0%, #1a0040 100%)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    role: 'Dziecko',
    insight: 'Wpływa na decyzję.',
    quote: 'Chcę iść tam gdzie będzie fajnie, gdzie coś osiągnę. Moje zdanie się liczy — i rodzice to wiedzą.',
    needs: ['Atmosfera i energia miejsca', 'Poczucie sukcesu i postępu', 'Coś fajnego do pokazania'],
    headerBg: 'linear-gradient(145deg, #006688 0%, #003344 100%)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    role: 'Placówka',
    insight: 'Musi zarabiać.',
    quote: 'Chcę pełne grupy przez cały rok, spokój finansowy i marketing który nie wymaga ode mnie bycia ekspertem od reklam.',
    needs: ['Stały dopływ zapisów', 'Przewidywalny przychód', 'Marketing bez stresu i chaosu'],
    headerBg: 'linear-gradient(145deg, #00613a 0%, #002a1a 100%)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
]

export function ThreePerspectives() {
  const { ref, visible } = useVisible(0.08)

  return (
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, #3c0080, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">

        <div
          ref={ref}
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #03ef23, #00bbf5)' }} />
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/25">Rozumiemy wszystkich</p>
          </div>
          <h2
            className="font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Trzy osoby.<br />
            <span className="gradient-text">Jedna decyzja.</span>
          </h2>
          <p className="text-white/35 text-[15px] leading-relaxed max-w-lg">
            Nasze kampanie trafiają jednocześnie w potrzeby rodzica, dziecka i Twoje — bo każde z nich wpływa na zapis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {perspectives.map((p, i) => (
            <div
              key={p.role}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(32px)',
                transition: `opacity 0.65s ease ${i * 150}ms, transform 0.65s ease ${i * 150}ms`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* Colored header */}
              <div
                className="px-7 pt-8 pb-7 flex flex-col gap-4"
                style={{ background: p.headerBg }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  {p.icon}
                </div>
                <div>
                  <p className="font-black text-white text-[1.5rem] leading-none mb-1">{p.role}</p>
                  <p className="text-white/50 text-[12px] font-semibold uppercase tracking-wide">{p.insight}</p>
                </div>
              </div>

              {/* Dark body */}
              <div
                className="px-7 py-6 flex flex-col gap-5 flex-1"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderTop: 'none' }}
              >
                <blockquote className="text-[14px] text-white/55 leading-relaxed border-l-2 border-white/10 pl-4 italic">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>

                <ul className="flex flex-col gap-2.5">
                  {p.needs.map(need => (
                    <li key={need} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #03ef23, #00bbf5)' }}
                      />
                      <span className="text-[13px] text-white/45">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
