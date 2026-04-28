import Image from 'next/image'
import { Reveal } from './Reveal'

const signals = [
  {
    num: '01',
    label: 'Szuka\nw Google',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num: '02',
    label: 'Czyta opinie\nzanim zadzwoni',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num: '03',
    label: 'Porównuje\nkilka miejsc',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    num: '04',
    label: 'Wybiera\nwidocznych',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=85"
          alt="Placówka edukacyjna"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(5,0,10,0.92) 0%, rgba(5,0,10,0.82) 50%, rgba(5,0,10,0.95) 100%)',
        }} />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 text-center" style={{ paddingTop: '13vh', paddingBottom: '11vh' }}>

        <Reveal>
          <h1
            className="font-black tracking-tight leading-[1.0] text-white mb-8 md:mb-14"
            style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)' }}
          >
            Twój rodzic{' '}
            <span className="gradient-text">się zmienił.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="grid grid-cols-2 md:grid-cols-4 mb-8 md:mb-14">
            {signals.map((s, i) => (
              <div
                key={s.num}
                className={`flex flex-col items-center gap-2 md:gap-3 py-4 md:py-6 px-2 md:px-4 ${
                  i !== 0 ? 'border-l border-white/[0.07]' : ''
                } ${i >= 2 ? 'border-t md:border-t-0 border-white/[0.07]' : ''}`}
              >
                <span
                  className="font-black tabular-nums"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'rgba(3,239,35,0.6)' }}
                >
                  {s.num}
                </span>
                <span className="text-white [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-[52px] md:[&>svg]:h-[52px]">{s.icon}</span>
                <span
                  className="text-white font-semibold leading-snug whitespace-pre-line"
                  style={{ fontSize: 'clamp(0.78rem, 1.8vw, 1.05rem)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div
            className="w-full h-px mb-8 md:mb-14 mx-auto max-w-xs"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(3,239,35,0.4), rgba(0,187,245,0.4), transparent)' }}
          />
        </Reveal>

        <Reveal delay={300}>
          <div className="mb-8 md:mb-10">
            <p
              className="font-normal italic text-white/50 leading-tight mb-1"
              style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.7rem)' }}
            >
              A Twój marketing?
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)' }}
            >
              Stoi w miejscu.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <a
            href="#problemy"
            className="inline-flex items-center gap-3 gradient-btn px-6 md:px-8 py-3.5 md:py-4 rounded-md font-bold shadow-xl shadow-brand-green/20 w-auto justify-center"
            style={{ fontSize: 'clamp(13px, 3.5vw, 15px)' }}
          >
            Zobacz gdzie tracisz pieniądze
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </Reveal>

      </div>
    </section>
  )
}
