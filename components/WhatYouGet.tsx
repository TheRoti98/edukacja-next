'use client'

import { Reveal } from './Reveal'

const deliverables = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Konfiguracja kont reklamowych',
    desc: 'Meta Ads i Google Ads ustawione od zera lub przejęte i naprawione. Struktura kampanii, piksele, grupy docelowe.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Tracking i analityka',
    desc: 'Pixel Meta, GA4, śledzenie konwersji. Wiesz skąd przychodzi każdy zapis — nie strzelamy w ciemno.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Reklamy bez limitu wariacji',
    desc: 'Tyle wersji reklam ile potrzeba. Testujemy, optymalizujemy, skalujemy to co działa. Bez dopłat za każdą zmianę.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'Grafiki reklamowe',
    desc: 'Kreacje dopasowane do Twojej placówki i grupy docelowej. Nie szablony ze stocka — materiały które wyróżniają.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: 'Filmy reklamowe',
    desc: 'Wideo które sprzedaje atmosferę i wartości placówki. Nagrywamy u Ciebie na miejscu — nie zlecamy na zewnątrz.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Copy i teksty reklam',
    desc: 'Treści które trafiają w potrzeby rodzica — nie branżowy żargon. Piszemy po ludzku i mierzamy co konwertuje.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Konsultacje strategiczne',
    desc: 'Co miesiąc rozmawiamy o wynikach, kierunku i następnych krokach. Masz dostęp do nas kiedy coś się dzieje.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Raporty wynikowe',
    desc: 'Miesięczny raport który rozumiesz. Co wydaliśmy, ile zapisów przynieśliśmy, co robimy dalej. Bez 40-stronicowego PDF.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Szkolenia z AI i narzędzi',
    desc: 'Uczymy Twój zespół jak używać AI do tworzenia contentu, planowania i oszczędzania czasu. Narzędzia nie zastąpią ludzi — ale przyspieszą ich pracę.',
  },
]

export function WhatYouGet() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Co dostajesz</p>
          <h2
            className="font-black text-violet leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Wszystko czego potrzebujesz.<br />W jednym miejscu.
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Nie zbierasz różnych dostawców w kupę. My robimy to wszystko — i odpowiadamy za wyniki całości.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((d, i) => (
            <Reveal key={d.title} delay={i * 40}>
              <div
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 0 0 1px rgba(60,0,128,0.07), 0 2px 12px rgba(60,0,128,0.04)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(3,239,35,0.12), rgba(0,187,245,0.12))', color: '#3c0080' }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-bold text-midnight text-[15px] mb-1.5">{d.title}</h3>
                  <p className="text-text-main/55 text-[13px] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
