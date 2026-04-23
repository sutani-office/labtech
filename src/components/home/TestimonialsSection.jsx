import { useState } from 'react'

const testimonials = [
  {
    text: 'Labtech berhasil membantu kami menyelesaikan studi AMDAL dengan sangat profesional. Tim mereka memahami regulasi lingkungan Indonesia dengan mendalam.',
    name: 'Ir. Budi Santoso, M.T.',
    role: 'Direktur Teknik',
    org: 'PT Pertamina EP',
    avatar: 'BS',
  },
  {
    text: 'Implementasi sistem GIS dari Labtech mengubah cara kami mengelola aset infrastruktur. Data yang dulunya tersebar kini terintegrasi dalam satu platform.',
    name: 'Dr. Rini Wulandari',
    role: 'Kepala Bidang Infrastruktur',
    org: 'Pemprov Jawa Barat',
    avatar: 'RW',
  },
  {
    text: 'Platform ERP yang dibangun Labtech sangat sesuai dengan kebutuhan operasional kami. Tim developer mereka responsif dan solution-oriented.',
    name: 'Ahmad Fauzi, S.Kom',
    role: 'IT Manager',
    org: 'PT Waskita Karya',
    avatar: 'AF',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container max-w-3xl">
        <p className="text-center section-label mb-0">Client Stories</p>

        {/* Quote */}
        <div className="text-center mt-12 mb-12">
          <svg className="mx-auto mb-8 text-[var(--border-color)]" width="44" height="36" fill="currentColor" viewBox="0 0 40 32">
            <path d="M0 32V20C0 12.533 2.667 6.933 8 3.2L11.2 0l4.8 4.8C12.533 6.933 10.667 10.4 10 14.4H16V32H0zm24 0V20c0-7.467 2.667-13.067 8-16.8L35.2 0 40 4.8c-3.467 2.133-5.333 5.6-6 9.6H40V32H24z"/>
          </svg>
          <blockquote className="text-[var(--text-primary)] text-[22px] sm:text-[26px] font-light leading-[1.6] mb-10 max-w-2xl mx-auto">
            "{t.text}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-[14px]">
              {t.avatar}
            </div>
            <div className="text-left">
              <div className="text-[var(--text-primary)] text-[15px] font-semibold">{t.name}</div>
              <div className="text-[var(--text-muted)] text-[13px] mt-0.5">{t.role} · {t.org}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                active === i
                  ? 'w-8 h-2 bg-teal-400'
                  : 'w-2 h-2 bg-[var(--border-color)] hover:bg-[var(--border-hover)]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
