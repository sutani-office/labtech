import { GraduationCap, Hospital, Pill, FlaskConical, Factory, CheckSquare, ArrowRight, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const solutions = [
  {
    id: 'government',
    icon: <GraduationCap size={24} />,
    title: 'Pemerintahan',
    shortTitle: 'Pemerintahan',
    desc: 'Pemetaan kebijakan, masterplan kota, dan analisis spasial untuk mendukung pengambilan keputusan strategis tingkat instansi pemerintah.',
    details: [
      'Sistem Informasi Geografis (WebGIS)',
      'Perencanaan Tata Ruang (RTRW/RDTR)',
      'E-Government & Layanan Publik Digital',
      'Kajian Lingkungan Hidup Strategis (KLHS)',
    ],
    clients: ['Pemprov Jabar', 'Kementerian ATR/BPN', 'Bappenas'],
  },
  {
    id: 'mining',
    icon: <Factory size={24} />,
    title: 'Pertambangan & Energi',
    shortTitle: 'Pertambangan',
    desc: 'Monitoring aset, studi kelayakan, dan pemantauan lingkungan operasional tambang menggunakan pemetaan terintegrasi.',
    details: [
      'Topografi & Pemetaan Fotogrametri',
      'Analisis Dampak Lingkungan (AMDAL)',
      'Manajemen Aset Pertambangan',
      'Monitoring Kestabilan Lereng',
    ],
    clients: ['PT Bukit Asam', 'Adaro', 'Pertamina'],
  },
  {
    id: 'property',
    icon: <Hospital size={24} />,
    title: 'Properti & Real Estate',
    shortTitle: 'Properti',
    desc: 'Pemilihan lokasi cerdas, valuasi aset, dan masterplan kawasan berbasis data analitik geospasial.',
    details: [
      'Site Selection & Feasibility Study',
      'Masterplan Kawasan Terpadu',
      'Land Management System',
      'Market & Demographic Analysis',
    ],
    clients: ['Summarecon', 'Ciputra', 'Agung Podomoro'],
  },
  {
    id: 'infrastructure',
    icon: <CheckSquare size={24} />,
    title: 'Infrastruktur',
    shortTitle: 'Infrastruktur',
    desc: 'Detail Engineering Design (DED) dan sistem manajemen infrastruktur pintar untuk pengawasan proyek berkelanjutan.',
    details: [
      'Building Information Modeling (BIM)',
      'Survey Topografi & Utilitas',
      'Sistem Pengawasan Proyek',
      'Kajian Risiko Lingkungan',
    ],
    clients: ['Waskita Karya', 'Adhi Karya', 'Hutama Karya'],
  },
  {
    id: 'environment',
    icon: <FlaskConical size={24} />,
    title: 'Lingkungan',
    shortTitle: 'Lingkungan',
    desc: 'Dukungan penuh untuk kepatuhan ESG, inventarisasi gas rumah kaca, dan perlindungan keanekaragaman hayati.',
    details: [
      'ESG Strategy & Compliance',
      'Carbon Inventory & Offset',
      'Biodiversity Assessment',
      'Social Impact Study',
    ],
    clients: ['WWF', 'Greenpeace', 'KemenLHK'],
  },
]

export default function Solutions() {
  const [active, setActive] = useState('government')
  const current = solutions.find((s) => s.id === active)

  return (
    <main className="pt-[112px]">
      {/* Hero */}
      <section className="py-24 bg-circuit relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="px-5 py-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-sm text-gray-300 flex items-center gap-3">
              Solusi Industri
              <span className="flex items-center gap-1 text-teal-400">
                <ChevronRight size={14} />
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight" style={{ letterSpacing: '-2px' }}>
            Solusi untuk Setiap Industri
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Labtech hadir dengan solusi yang disesuaikan khusus untuk kebutuhan, regulasi, dan tantangan unik setiap sektor industri di Indonesia.
          </p>
        </div>
      </section>

      {/* Solutions Explorer */}
      <section className="py-20 border-t border-[#1e1e1e]" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Tabs */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="card-dark rounded-2xl p-3 space-y-1 lg:sticky lg:top-28">
                {solutions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                      active === s.id
                        ? 'bg-[#2a2a2a] text-white border border-[#3a3a3a]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className={`${active === s.id ? 'text-teal-400' : 'text-gray-500'}`}>{s.icon}</span>
                    {s.shortTitle}
                    {active === s.id && <ChevronRight size={14} className="ml-auto text-teal-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Panel */}
            <div className="flex-1">
              <div className="card-dark rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  {current.icon}
                </div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2a2a2a] border border-[#3a3a3a] text-teal-400 mb-6`}>
                    {current.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{current.title}</h2>
                  <p className="text-gray-400 text-base leading-relaxed mb-10">{current.desc}</p>

                  <h3 className="text-white font-semibold text-sm mb-5">Fitur & Layanan Utama</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {current.details.map((d) => (
                      <div key={d} className="flex items-start gap-3">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#2a2a2a] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Klien Terpercaya</p>
                      <div className="flex flex-wrap gap-2">
                        {current.clients.map((cl) => (
                          <span key={cl} className="text-xs text-gray-400 border border-[#2a2a2a] bg-[#1a1a1a] px-3 py-1.5 rounded-full">
                            {cl}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="btn-teal flex-shrink-0"
                    >
                      Konsultasi Gratis <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
