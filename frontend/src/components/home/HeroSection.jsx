import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 70%)'
        }}
      />

      {/* Mapid-like diagonal circuit lines background (Simulated with absolute SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1"/>
            </pattern>
          </defs>
          {/* Main horizontal line */}
          <line x1="0" y1="40%" x2="40%" y2="40%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="40%" y1="40%" x2="45%" y2="30%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="45%" y1="30%" x2="65%" y2="30%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

          <line x1="100%" y1="65%" x2="70%" y2="65%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="70%" y1="65%" x2="65%" y2="75%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="65%" y1="75%" x2="30%" y2="75%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />

          <line x1="0" y1="60%" x2="25%" y2="60%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="25%" y1="60%" x2="35%" y2="40%" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[850px] mx-auto px-6 text-center py-8">
        <div className="inline-flex items-center mb-8" data-aos="fade-down" data-aos-duration="1000">
          <div
            className="px-6 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[13px] text-[var(--text-secondary)] font-medium tracking-wide"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            {t('hero.badge')}
          </div>
        </div>

        {/* Main headline - exactly like mapid style */}
        <h1
          className="text-[52px] sm:text-[68px] lg:text-[76px] font-bold text-[var(--text-primary)] leading-[1.1] mb-6"
          style={{ letterSpacing: '-1.5px' }}
          data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
        >
          {t('hero.title')}
        </h1>

        <p
          className="text-[var(--text-secondary)] text-[15px] sm:text-[17px] max-w-[650px] mx-auto leading-[1.6] mb-10"
          data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons - pill shape exactly like mapid */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
        >
          <Link to="/contact" className="px-8 py-3.5 rounded-full bg-teal-500 text-white text-[14px] font-bold hover:bg-teal-600 transition-all">
            {t('hero.cta_talk')}
          </Link>
          <Link to="/#services" className="px-8 py-3.5 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] text-[14px] font-semibold hover:bg-[var(--bg-secondary)] transition-all">
            {t('hero.cta_explore')}
          </Link>
        </div>


      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #111111, transparent)' }}
      />
    </section>
  )
}
