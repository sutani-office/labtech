import React from 'react'

const values = [
  {
    title: 'Multi-Disciplinary Expertise',
    desc: 'Our team brings deep expertise across environmental science, GIS, data science, social development, and organizational management – all under one roof.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-3'
  },
  {
    title: 'Research-Backed Solutions',
    desc: 'Every recommendation is grounded in rigorous research, field data, and evidence-based methodologies – not generic templates.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-3'
  },
  {
    title: 'Geospatial Intelligence',
    desc: 'We leverage advanced GIS, drone surveys, and spatial analysis to provide location-based insights that conventional consultants cannot.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-2'
  },
  {
    title: 'Sustainability at Core',
    desc: "Sustainability is not an add-on for us – it's the foundation of how we approach every project, from ESG to biodiversity to social impact.",
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-2'
  },
  {
    title: 'End-to-End Service',
    desc: 'From initial assessment to final delivery and post-project evaluation, we are with our clients at every phase.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    span: 'lg:col-span-2'
  }
]

export default function ValuesSection() {
  return (
    <section className="py-24 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-medium text-[var(--text-primary)] tracking-tight">
            Our Value Proposition
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {values.map((v, i) => (
            <div 
              key={i} 
              className={`${v.span} rounded-[24px] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden flex flex-col relative group transition-all duration-300`}
              style={{ minHeight: i < 2 ? '280px' : '380px' }}
            >
              {/* Content Layer */}
              <div className={`p-10 relative z-20 flex flex-col h-full ${i < 2 ? 'sm:w-[50%] justify-center' : 'justify-end'}`}>
                <h3 className="text-[var(--text-primary)] font-semibold text-[20px] mb-4">
                  {v.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[14px] leading-[1.6]">
                  {v.desc}
                </p>
              </div>

              {/* Image Layer */}
              <div className={`absolute inset-0 z-10 pointer-events-none transition-transform duration-700 group-hover:scale-105 ${i < 2 ? 'left-[40%]' : ''}`}>
                <div className={`absolute inset-0 z-10 ${i < 2 ? 'bg-gradient-to-r' : 'bg-gradient-to-t'} from-[var(--bg-secondary)] via-[var(--bg-secondary)]/60 to-transparent`} />
                <img 
                  src={v.image} 
                  alt={v.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
