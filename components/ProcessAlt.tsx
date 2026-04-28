'use client'

import { useEffect, useRef, useState } from 'react'

function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

const phases = [
  {
    period: 'Miesiąc 1',
    num: '01',
    title: 'Fundament',
    color: '#3c0080',
    colorLight: 'rgba(60,0,128,0.08)',
    colorBorder: 'rgba(60,0,128,0.2)',
    items: [
      'Warsztat strategiczny (pełny dzień)',
      'Audyt kampanii i strony',
      'Setup Google Ads + Meta Ads',
      'KPI i plan na 3 miesiące',
    ],
    result: 'Pierwsze zapisy w 30 dni',
  },
  {
    period: 'Co miesiąc',
    num: '02',
    title: 'Wzrost',
    color: '#0077aa',
    colorLight: 'rgba(0,119,170,0.08)',
    colorBorder: 'rgba(0,119,170,0.2)',
    items: [
      'Optymalizacja kampanii co tydzień',
      'Konsultacje strategiczne',
      'Content i social media',
      'Testy kreacji i grup docelowych',
    ],
    result: 'Stały dopływ zapisów cały rok',
  },
  {
    period: 'Co kwartał',
    num: '03',
    title: 'Skala',
    badge: 'PRO',
    color: '#00916e',
    colorLight: 'rgba(0,145,110,0.08)',
    colorBorder: 'rgba(0,145,110,0.2)',
    items: [
      'Dzień pracy u Ciebie na miejscu',
      'Nagrywanie wideo',
      'Szkolenia z AI i narzędzi',
      'Strategia na kolejny kwartał',
    ],
    result: 'Pełne grupy + samodzielny zespół',
  },
]

export function ProcessAlt() {
  const { ref, visible } = useVisible(0.08)

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <div
          ref={ref}
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-[3rem]" style={{ background: 'linear-gradient(90deg, #03ef23, #00bbf5)' }} />
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-text-main/35">Proces</p>
          </div>
          <h2
            className="font-black text-midnight leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Jak wygląda<br />
            <span style={{ color: '#3c0080' }}>współpraca w praktyce?</span>
          </h2>
          <p className="text-text-main/50 text-[15px] max-w-lg leading-relaxed">
            Trzy etapy, każdy z mierzalnym efektem. Pierwsze zapisy w ciągu 30 dni.
          </p>
        </div>

        {/* Horizontal phases */}
        <div className="relative">

          {/* Connecting line - desktop only */}
          <div
            className="hidden md:block absolute top-[3.5rem] left-[calc(33.33%/2)] right-[calc(33.33%/2)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(60,0,128,0.2), rgba(0,119,170,0.2), rgba(0,145,110,0.2))' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <div
                key={phase.num}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(28px)',
                  transition: `opacity 0.65s ease ${i * 180}ms, transform 0.65s ease ${i * 180}ms`,
                }}
              >
                {/* Phase number circle */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white"
                    style={{ background: phase.colorLight, boxShadow: `0 0 0 1px ${phase.colorBorder}` }}
                  >
                    <span
                      className="font-black text-[1rem]"
                      style={{ color: phase.color }}
                    >
                      {phase.num}
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.14em]"
                      style={{ color: phase.color }}
                    >
                      {phase.period}
                    </span>
                    {phase.badge && (
                      <span className="ml-2 text-[9px] font-black uppercase tracking-widest gradient-text">{phase.badge}</span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 h-full border transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: phase.colorLight, borderColor: phase.colorBorder }}
                >
                  <h3
                    className="font-black leading-tight tracking-tight mb-5"
                    style={{ fontSize: '1.4rem', color: phase.color }}
                  >
                    {phase.title}
                  </h3>

                  <ul className="flex flex-col gap-3 mb-6">
                    {phase.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: phase.color }}
                        >
                          <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4l1.8 1.8L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-[13px] text-text-main/70 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center gap-2 text-[12px] font-bold pt-4 border-t"
                    style={{ borderColor: phase.colorBorder, color: phase.color }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {phase.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
