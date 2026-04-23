import React from 'react'
import { Map, Laptop, Leaf } from 'lucide-react'

const consultancies = [
  {
    icon: <Map size={22} className="text-[var(--accent-color)]" />,
    title: 'Geospatial & Engineering',
    desc: 'GIS based spatial planning analysis · Survey consulting · Geoinformation system implementation · Feasibility Study · Due Dilligence · Detail Engineering Design'
  },
  {
    icon: <Laptop size={22} className="text-[var(--accent-color)]" />,
    title: 'Information Technology',
    desc: 'Web Development · Software Development · Enterprise Resource Planning · Information System'
  },
  {
    icon: <Leaf size={22} className="text-[var(--accent-color)]" />,
    title: 'Environment, Social, and Strategic Planning',
    desc: 'AMDAL & environmental impact assessment · KLHS (Strategic Environmental Assessment) · ESG strategy & compliance · Carbon inventory & biodiversity surveys · Masterplan · Social development program design'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="text-[var(--accent-color)] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 block">What We Do</span>
          <h2 className="text-[42px] font-semibold text-[var(--text-primary)] tracking-tight mb-4">
            Project Consultancy
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed">
            Labtech provides comprehensive consultancy services tailored to address complex challenges in spatial planning, technology, and sustainability.
          </p>
        </div>

        {/* Consultancy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultancies.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[var(--bg-secondary)] p-10 rounded-[20px] border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[var(--accent-color)]/40 transition-all duration-300 relative z-10">
                {item.icon}
              </div>
              
              <h3 className="text-[var(--text-primary)] font-bold text-[19px] mb-5 relative z-10 leading-tight">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-[14px] leading-[1.8] relative z-10 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
