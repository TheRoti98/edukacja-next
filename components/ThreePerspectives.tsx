'use client'

import { Reveal } from './Reveal'

const perspectives = [
  {
    role: 'Rodzic',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    insight: 'Podejmuje decyzję.',
    quote: 'Chcę żeby moje dziecko trafiło w dobre ręce. Szukam czegoś wiarygodnego — i nie mam czasu na złe wybory.',
    needs: ['Opinie i dowody społeczne', 'Transparentność i zaufanie', 'Szybka odpowiedź na pytania'],
    color: '#3c0080',
  },
  {
    role: 'Dziecko',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    insight: 'Wpływa na decyzję.',
    quote: 'Chcę iść tam gdzie będzie fajnie, gdzie coś osiągnę i gdzie będę miał znajomych. Moje zdanie się liczy.',
    needs: ['Energia i atmosfera miejsca', 'Poczucie sukcesu i postępu', 'Coś fajnego do pokazania'],
    color: '#0077aa',
  },
  {
    role: 'Placówka',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    insight: 'Musi zarabiać.',
    quote: 'Chcę pełne grupy przez cały rok, spokój finansowy i marketing który nie wymaga ode mnie bycia ekspertem od reklam.',
    needs: ['Stały dopływ zapisów', 'Przewidywalny przychód', 'Marketing bez stresu i chaosu'],
    color: '#00916e',
  },
]

export function ThreePerspectives() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Rozumiemy wszystkich</p>
          <h2
            className="font-black text-violet leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Trzy osoby. Jedna decyzja.
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Wiemy że za zapisem stoi rodzic, dziecko i Twoja placówka jednocześnie. Dlatego nasze kampanie trafiają w każdą z tych potrzeb — nie tylko w jedną.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perspectives.map((p, i) => (
            <Reveal key={p.role} delay={i * 100}>
              <div
                className="rounded-2xl p-7 flex flex-col gap-5 h-full"
                style={{ background: `${p.color}06`, border: `1px solid ${p.color}18` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${p.color}12`, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-black text-midnight text-[16px] leading-none">{p.role}</p>
                    <p className="text-[12px] font-semibold mt-0.5" style={{ color: p.color }}>{p.insight}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-[14px] leading-relaxed text-text-main/70 border-l-2 pl-4"
                  style={{ borderColor: `${p.color}30` }}
                >
                  &ldquo;{p.quote}&rdquo;
                </blockquote>

                {/* Needs */}
                <div className="flex flex-col gap-2 mt-auto">
                  {p.needs.map(need => (
                    <div key={need} className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: `${p.color}15` }}
                      >
                        <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.8 1.8L6.5 2" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-[13px] text-text-main/65">{need}</span>
                    </div>
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
