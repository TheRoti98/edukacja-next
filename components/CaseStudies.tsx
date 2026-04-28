'use client'

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
          <p className="section-tag">Wyniki</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Placówki, z którymi<br />pracowaliśmy
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Konkretne wyniki. Realne placówki. Zero bullshitu.
          </p>
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
