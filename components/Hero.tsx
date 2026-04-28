import Image from 'next/image'
import { Reveal } from './Reveal'

const stats = [
  { num: '30 dni', label: 'do pierwszych zapisów' },
  { num: '12 mies.', label: 'aktywne kampanie, nie tylko wrzesień' },
  { num: '2014', label: 'rok założenia, 10+ lat doświadczenia' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-midnight">

      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=85"
          alt="Placówka edukacyjna"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(5,0,10,0.78) 0%, rgba(5,0,10,0.65) 50%, rgba(5,0,10,0.85) 100%)',
        }} />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(60,0,128,0.18), transparent)' }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 text-center" style={{ paddingTop: '14vh', paddingBottom: '10vh' }}>

        {/* Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/25 bg-violet/[0.07] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/50">
              Marketing dla placówek edukacyjnych
            </span>
          </div>
        </Reveal>

        {/* Main headline */}
        <Reveal delay={80}>
          <h1
            className="font-black tracking-tight leading-[0.95] text-white mb-6"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            Pełne grupy.
          </h1>
          <h1
            className="font-black tracking-tight leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            <span className="gradient-text">Przez cały rok.</span>
          </h1>
        </Reveal>

        {/* Sub */}
        <Reveal delay={160}>
          <p
            className="text-white/40 leading-relaxed mb-12 mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '36rem' }}
          >
            Reklamy, content i strategia dla szkół, przedszkoli i zajęć dodatkowych. Koniec z paniką we wrześniu i pustymi miejscami w grupach.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={220}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#konsultacja"
              className="gradient-btn font-bold px-8 py-4 rounded-xl shadow-2xl shadow-brand-green/20 text-[15px]"
            >
              Umów bezpłatną konsultację →
            </a>
            <a
              href="#problemy"
              className="text-white/35 hover:text-white/60 transition-colors text-[14px] font-medium flex items-center gap-2"
            >
              Zobacz gdzie tracisz pieniądze
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={300}>
          <div
            className="inline-grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {stats.map((s, i) => (
              <div
                key={s.num}
                className="flex flex-col items-center gap-1 px-8 py-5 bg-midnight/60 backdrop-blur-sm"
              >
                <span
                  className="font-black gradient-text leading-none"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                >
                  {s.num}
                </span>
                <span className="text-white/30 text-[12px] text-center leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #05000A)' }}
      />
    </section>
  )
}
