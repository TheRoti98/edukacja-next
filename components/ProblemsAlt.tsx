'use client'

import { Reveal } from './Reveal'

const cards = [
  {
    num: '01',
    title: 'Agencje i specjaliści cię ruchają.',
    kicker: 'Biorą budżet, wysyłają raport którego nie rozumiesz i tłumaczą dlaczego wyniki są "takie a nie inne". Twoje pieniądze uczą kogoś fachu.',
    tags: ['Brak transparentności', 'Raporty do szuflady', 'Budżet bez kontroli', 'Rotacja opiekunów'],
  },
  {
    num: '02',
    title: 'Twój marketing to dzień otwarty i polecenia.',
    kicker: 'Bo tak ci powiedział kolega dyrektor. Grupy zapełniają się we wrześniu albo wcale. Zero systemu który działa przez cały rok.',
    tags: ['Brak strategii cyfrowej', 'Sezonowość zapisów', 'Zależność od poleceń', 'Brak lejka sprzedażowego'],
  },
  {
    num: '03',
    title: 'Wolne miejsca w grupach.',
    kicker: 'Każde wolne miejsce to koszt który i tak ponosisz — sala, nauczyciel, media. Różnica między 80% a 100% pojemności to czysty zysk który odpływa.',
    tags: ['Stałe koszty mimo pustych miejsc', 'Brak kampanii poza wrześniem', 'Słaba widoczność online', 'Konkurencja Cię wyprzedza'],
  },
  {
    num: '04',
    title: 'Posty robi pomoc nauczyciela.',
    kicker: 'Bo "ktoś musi to robić". Efekt jest losowy, strategii brak, a Twój najlepszy nauczyciel zamiast uczyć — walczy z Canvą i zastanawia się co wrzucić na Instagram.',
    tags: ['Brak spójnej komunikacji', 'Czas nauczyciela zmarnowany', 'Content bez celu', 'Zero mierzalnych efektów'],
  },
]

export function ProblemsAlt() {
  return (
    <section id="problemy" className="bg-offwhite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="mb-14">
            <p className="section-tag">Diagnoza</p>
            <h2 className="font-black text-violet leading-tight tracking-tight mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Gdzie konkretnie<br />tracisz pieniądze?
            </h2>
            <p className="text-text-main/60 max-w-lg text-[15px] leading-relaxed">
              Nie w jednym miejscu. W czterech. I każde z nich da się zatrzymać.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 60}>
              <div
                className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-5 h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 0 0 1px rgba(60,0,128,0.08), 0 2px 16px rgba(60,0,128,0.04)' }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-violet/50">{c.num}</span>
                    <h3 className="font-black text-midnight" style={{ fontSize: '1.1rem' }}>{c.title}</h3>
                  </div>
                  <p className="text-[14px] text-text-main/75 leading-relaxed">{c.kicker}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[12px] text-red-500/70 bg-red-500/[0.06] border border-red-500/15 rounded-lg px-3 py-1.5 leading-snug"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
