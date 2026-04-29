'use client'

import Image from 'next/image'
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

const panels = [
  {
    role: 'Rodzic',
    sub: 'Podejmuje decyzję.',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=85',
    color: '#a855f7',
  },
  {
    role: 'Dziecko',
    sub: 'Wpływa na wybór.',
    src: '/dzieci.jpg',
    color: '#00bbf5',
  },
  {
    role: 'Placówka',
    sub: 'Musi na tym zarabiać.',
    src: '/przedszkole.jpg',
    color: '#03ef23',
  },
]

export function ThreePerspectivesV2() {
  const { ref, visible } = useVisible(0.08)
  const { ref: panelsRef, visible: panelsVisible } = useVisible(0.08)

  return (
    <section className="bg-offwhite py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(60,0,128,0.05), transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={ref}
          className="mb-12 md:mb-16 max-w-2xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #03ef23, #00bbf5)' }} />
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-text-main/35">Twoja placówka</p>
          </div>
          <h2
            className="font-black text-midnight leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Składowa trzech<br />
            <span style={{ color: '#3c0080' }}>perspektyw.</span>
          </h2>
        </div>

        {/* Photo panels */}
        <div
          ref={panelsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {panels.map((p, i) => (
            <div
              key={p.role}
              className="relative rounded-2xl overflow-hidden group cursor-default"
              style={{
                height: '420px',
                opacity: panelsVisible ? 1 : 0,
                transform: panelsVisible ? 'none' : 'translateY(32px)',
                transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
              }}
            >
              <Image
                src={p.src}
                alt={p.role}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(5,0,10,0.1) 0%, rgba(5,0,10,0.65) 70%, rgba(5,0,10,0.88) 100%)' }}
              />

              {/* Connector number */}
              <div
                className="absolute top-5 left-5 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <span className="text-white/70 text-[11px] font-black">0{i + 1}</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div
                  className="w-8 h-[3px] rounded-full mb-4"
                  style={{ background: p.color }}
                />
                <p
                  className="font-black text-white leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
                >
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Unifying statement */}
        <div
          style={{
            opacity: panelsVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 500ms',
          }}
        >
          <div
            className="rounded-2xl px-8 py-7"
            style={{ background: 'rgba(60,0,128,0.06)', border: '1px solid rgba(60,0,128,0.12)' }}
          >
            <p
              className="font-black text-midnight leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
            >
              Rozumiemy każdą z nich.{' '}
              <span className="gradient-text">I potrafimy trafić we wszystkie trzy naraz.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
