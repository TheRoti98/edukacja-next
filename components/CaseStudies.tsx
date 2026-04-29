'use client'

import Image from 'next/image'
import { Reveal } from './Reveal'

const clients = [
  { name: 'Szkoła językowa', type: 'Angielski dla dzieci' },
  { name: 'Przedszkole prywatne', type: 'Montessori' },
  { name: 'Studio tańca', type: 'Zajęcia dla dzieci' },
  { name: 'Szkoła muzyczna', type: 'Fortepian, gitara, wokal' },
  { name: 'Centrum sportowe', type: 'Zajęcia dodatkowe' },
  { name: 'Niepubliczna szkoła', type: 'Szkoła podstawowa' },
  { name: 'Akademia piłkarska', type: 'Piłka nożna dla dzieci' },
  { name: 'Centrum terapii', type: 'Logopedia, SI' },
]

export function CaseStudies() {
  return (
    <section id="wyniki" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="relative w-full rounded-2xl overflow-hidden mb-10" style={{ height: '380px' }}>
            <Image
              src="/przedszkole.jpg"
              alt="Nowoczesna sala zajęć"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(5,0,10,0.72) 0%, rgba(5,0,10,0.3) 60%, rgba(5,0,10,0.1) 100%)' }}
            />
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/50 mb-4">Wyniki</p>
              <h2
                className="font-black text-white leading-tight tracking-tight mb-3"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
              >
                Placówki, z którymi<br />pracowaliśmy
              </h2>
              <p className="text-white/65 text-[15px] leading-relaxed max-w-lg">
                Konkretne wyniki. Realne placówki. Bez owijania w bawełnę.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <Reveal key={c.name + i} delay={i * 50}>
              <div
                className="rounded-2xl p-6 flex flex-col gap-3 aspect-square items-center justify-center text-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(60,0,128,0.03)',
                  border: '1px solid rgba(60,0,128,0.09)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(3,239,35,0.1), rgba(0,187,245,0.1))' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(60,0,128,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-midnight text-[14px] leading-snug">{c.name}</p>
                  <p className="text-text-main/40 text-[12px] mt-0.5">{c.type}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-text-main/30 text-[12px] mt-8">
            Szczegółowe case studies dostępne na konsultacji.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
