import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    tag: 'Geospatial',
    tagColor: '#2dd4bf',
    title: 'GIS & Spatial Analysis Platform',
    desc: 'Collect, process, and visualize geospatial data for spatial planning, site selection, and geographic modeling across Indonesia.',
    features: ['Spatial data collection & processing', 'Interactive GIS dashboard', 'Multi-layer map analysis', 'Field survey integration'],
  },
  {
    tag: 'Technology',
    tagColor: '#818cf8',
    title: 'Enterprise IT Solutions',
    desc: 'Custom web applications, ERP systems, and information platforms built for government and enterprise needs.',
    features: ['Custom web development', 'ERP implementation', 'System integration', 'IT consulting & support'],
  },
  {
    tag: 'Environment',
    tagColor: '#4ade80',
    title: 'Environmental Assessment Tools',
    desc: 'Digital tools and expertise for AMDAL, KLHS, ESG compliance, and sustainability planning across industries.',
    features: ['AMDAL documentation & process', 'KLHS (Strategic Env. Assessment)', 'ESG reporting & compliance', 'Carbon & biodiversity inventory'],
  },
]

export default function ProductsSection() {
  return (
    <section className="section bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="container">
        <div className="mb-12">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">Platform</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)]" style={{ letterSpacing: '-1.5px' }}>
            Our Platform
          </h2>
        </div>

        <div className="space-y-4">
          {products.map((p, i) => (
            <div key={p.title} className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl p-7 group transition-all duration-300 hover:border-[var(--border-hover)]">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left */}
                <div className="lg:w-1/3">
                  <span
                    className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                    style={{ color: p.tagColor, background: `${p.tagColor}18` }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-[var(--text-primary)] font-bold text-xl mb-2">{p.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{p.desc}</p>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-24 bg-[var(--border-color)]" />

                {/* Right - features */}
                <div className="flex-1 grid grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.tagColor }} />
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Link to="/contact"
                    className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group-hover:text-teal-400">
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
