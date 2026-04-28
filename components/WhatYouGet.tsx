'use client'

import { Reveal } from './Reveal'

const tiles = [
  {
    size: 'large',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Reklamy bez limitu',
    desc: 'Tyle wersji kampanii ile potrzeba. Testujemy, optymalizujemy, skalujemy. Bez dopłat za każdą zmianę.',
    accent: 'linear-gradient(135deg, #03ef23, #00bbf5)',
  },
  {
    size: 'large',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: 'Filmy reklamowe',
    desc: 'Nagrywamy u Ciebie na miejscu. Wideo które sprzedaje atmosferę placówki i przyciąga rodziców.',
    accent: 'linear-gradient(135deg, #3c0080, #00bbf5)',
  },
  {
    size: 'small',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Konfiguracja kont',
    desc: 'Meta Ads + Google Ads od zera lub przejęte i naprawione.',
    accent: 'linear-gradient(135deg, #03ef23, #3c0080)',
  },
  {
    size: 'small',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Tracking i analityka',
    desc: 'Pixel, GA4, konwersje. Wiesz skąd każdy zapis.',
    accent: 'linear-gradient(135deg, #00bbf5, #03ef23)',
  },
  {
    size: 'small',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'Grafiki reklamowe',
    desc: 'Kreacje które wyróżniają, nie szablony ze stocka.',
    accent: 'linear-gradient(135deg, #3c0080, #03ef23)',
  },
  {
    size: 'small',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Copy i teksty',
    desc: 'Treści które trafiają w potrzeby rodzica. Nie żargon.',
    accent: 'linear-gradient(135deg, #00bbf5, #3c0080)',
  },
  {
    size: 'wide',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Konsultacje strategiczne + szkolenia AI',
    desc: 'Co miesiąc rozmawiamy o wynikach i kierunku. Uczymy Twój zespół jak używać AI do tworzenia contentu i oszczędzania czasu.',
    accent: 'linear-gradient(135deg, #03ef23, #00bbf5)',
  },
  {
    size: 'small',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Raporty wynikowe',
    desc: 'Miesięczny raport który rozumiesz. Nie 40-stronicowy PDF.',
    accent: 'linear-gradient(135deg, #3c0080, #00bbf5)',
  },
]

export function WhatYouGet() {
  return (
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 50%, #3c0080, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/25 mb-5">Co dostajesz</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Wszystko czego potrzebujesz.<br />
              <span className="gradient-text">W jednym miejscu.</span>
            </h2>
            <p className="text-white/35 text-[14px] leading-relaxed max-w-xs">
              Nie zbierasz różnych dostawców. My robimy to wszystko i odpowiadamy za wyniki całości.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-4">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.title}
              delay={i * 50}
              className={
                tile.size === 'large' ? 'col-span-2 row-span-1' :
                tile.size === 'wide' ? 'col-span-2 md:col-span-3' :
                'col-span-1'
              }
            >
              <div
                className="relative h-full rounded-2xl p-6 flex flex-col gap-4 overflow-hidden group transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: tile.accent }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
                >
                  {tile.icon}
                </div>

                <div>
                  <h3
                    className="font-bold text-white leading-snug mb-2"
                    style={{ fontSize: tile.size === 'large' ? '1.15rem' : '0.95rem' }}
                  >
                    {tile.title}
                  </h3>
                  <p
                    className="text-white/35 leading-relaxed"
                    style={{ fontSize: tile.size === 'large' ? '0.875rem' : '0.8rem' }}
                  >
                    {tile.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
