'use client'

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

const problems = [
  {
    num: '01',
    title: 'Agencje i specjaliści robią Cię w konia.',
    body: 'Biorą budżet, wysyłają raport którego nie rozumiesz i tłumaczą dlaczego wyniki są "takie a nie inne". Twoje pieniądze uczą kogoś fachu.',
    tags: ['Zero transparentności', 'Budżet bez kontroli', 'Rotacja opiekunów'],
  },
  {
    num: '02',
    title: 'Twój marketing to dzień otwarty i polecenia.',
    body: 'Grupy zapełniają się we wrześniu albo wcale. Zero systemu który działa przez cały rok. Jeden zły sezon i katastrofa finansowa.',
    tags: ['Brak lejka sprzedażowego', 'Sezonowość zapisów', 'Zależność od poleceń'],
  },
  {
    num: '03',
    title: 'Wolne miejsca w grupach.',
    body: 'Każde wolne miejsce to koszt który i tak ponosisz. Sala, nauczyciel, media. Różnica między 80% a 100% pojemności to czysty zysk który odpływa.',
    tags: ['Stałe koszty mimo pustych miejsc', 'Słaba widoczność online', 'Konkurencja Cię wyprzedza'],
  },
  {
    num: '04',
    title: 'Posty robi pomoc nauczyciela.',
    body: 'Bo "ktoś musi to robić". Content jest losowy, strategii brak, a Twój najlepszy nauczyciel zamiast uczyć walczy z Canvą.',
    tags: ['Brak spójnej komunikacji', 'Zero mierzalnych efektów', 'Czas nauczyciela zmarnowany'],
  },
]

function ProblemRow({ p, index }: { p: typeof problems[0]; index: number }) {
  const { ref, visible } = useVisible()
  const isEven = index % 2 === 1

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-b border-gray1 last:border-b-0 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      {/* Hover accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to bottom, #03ef23, #00bbf5)' }}
      />

      {/* Number */}
      <div className="flex items-start justify-start md:justify-end pt-1">
        <span
          className="font-black tabular-nums leading-none"
          style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: isEven ? 'rgba(3,239,35,0.15)' : 'rgba(60,0,128,0.12)',
            letterSpacing: '-0.04em',
          }}
        >
          {p.num}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h3
          className="font-black text-midnight leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
        >
          {p.title}
        </h3>
        <p className="text-text-main/60 text-[15px] leading-relaxed max-w-2xl">
          {p.body}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {p.tags.map(tag => (
            <span
              key={tag}
              className="text-[12px] font-medium px-3 py-1.5 rounded-lg"
              style={{ background: 'rgba(220,38,38,0.06)', color: 'rgb(220 38 38 / 0.7)', border: '1px solid rgba(220,38,38,0.12)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProblemsAlt() {
  const { ref, visible } = useVisible()

  return (
    <section id="problemy" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

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
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-text-main/35">Diagnoza</p>
          </div>
          <h2
            className="font-black text-midnight leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Gdzie konkretnie<br />
            <span style={{ color: '#3c0080' }}>tracisz pieniądze?</span>
          </h2>
          <p className="text-text-main/50 text-[15px] leading-relaxed max-w-lg">
            Nie w jednym miejscu. W czterech. I każde z nich da się zatrzymać.
          </p>
        </div>

        <div>
          {problems.map((p, i) => (
            <ProblemRow key={p.num} p={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
