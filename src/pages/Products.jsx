import { MapPin, Target, LayoutGrid, BarChart3, Globe, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    icon: <MapPin size={32} />,
    title: 'LabTech Platform',
    subtitle: 'Sistem Informasi Geografis Terpusat',
    desc: 'Platform utama untuk pengumpulan, pengolahan, dan visualisasi data geospasial yang mendukung analisis spasial tingkat lanjut untuk berbagai kebutuhan tata ruang.',
    features: [
      'Visualisasi peta interaktif multi-layer',
      'Pengelolaan database spasial terpusat',
      'Manajemen akses & kolaborasi tim',
      'Integrasi data spasial dan non-spasial',
      'Sistem informasi tata ruang (WebGIS)',
    ],
    badge: 'Produk Utama',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'LabTech Insight',
    subtitle: 'Location Analytics & Demographic Intelligence',
    desc: 'Tools analitik lanjutan berbasis AI untuk memproses data lokasi dan demografi menjadi insight bisnis yang actionable untuk site selection dan perencanaan strategis.',
    features: [
      'Analisis Catchment Area & Demografi',
      'Prediksi pergerakan & kepadatan populasi',
      'Location Scoring & Feasibility Index',
      'Visualisasi data statistik & spasial',
      'Laporan analitik otomatis',
    ],
    badge: 'Analytics',
  },
  {
    icon: <LayoutGrid size={32} />,
    title: 'LabTech Apps',
    subtitle: 'Aplikasi Spesifik Industri Kustom',
    desc: 'Aplikasi modular yang dirancang untuk mengatasi use case spesifik industri, mulai dari manajemen aset properti, monitoring lingkungan, hingga pelaporan CSR/ESG.',
    features: [
      'Modul Monitoring Aset & Infrastruktur',
      'Modul Pelaporan Lingkungan (AMDAL/KLHS)',
      'Modul Inventarisasi Karbon',
      'Modul Manajemen Perizinan',
      'Aplikasi Field Survey Mobile',
    ],
    badge: 'Industry Apps',
  },
  {
    icon: <Globe size={32} />,
    title: 'LabTech Maps',
    subtitle: 'Data Katalog & API Geospasial',
    desc: 'Katalog data spasial komprehensif seluruh Indonesia, dilengkapi API untuk integrasi mulus dengan aplikasi pihak ketiga dan sistem perusahaan yang sudah ada.',
    features: [
      'Peta Dasar & Citra Satelit Resolusi Tinggi',
      'Data Vektor (Batas Wilayah, Jalan, dsb)',
      'Data Point of Interest (POI)',
      'REST API Geocoding & Routing',
      'Dukungan format standar (GeoJSON, SHP)',
    ],
    badge: 'Data & API',
  },
]

export default function Products() {
  return (
    <main className="pt-[112px]">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-circuit relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="px-5 py-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-sm text-gray-300 flex items-center gap-3">
              Produk Kami
              <span className="flex items-center gap-1 text-teal-400">
                <ChevronRight size={14} />
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight" style={{ letterSpacing: '-2px' }}>
            Ekosistem Teknologi Spasial
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Rangkaian produk terintegrasi yang dirancang untuk mengubah data lokasi menjadi intelijen strategis dan solusi berkelanjutan.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 md:py-28 border-t border-[#1e1e1e]" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="card-dark rounded-3xl p-8 sm:p-12"
            >
              <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                {/* Visual Placeholder */}
                <div className="lg:w-2/5 flex-shrink-0 w-full" data-aos="fade-up" data-aos-delay="100">
                  <div className="aspect-[4/3] rounded-2xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center relative overflow-hidden group">
                    <img src={i % 2 === 0 ? "/gis_mockup.png" : "/erp_mockup.png"} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5" data-aos="fade-up" data-aos-delay="200">
                  <span className="inline-block text-[10px] font-bold px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 mb-5 tracking-widest uppercase">
                    {p.badge}
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">{p.title}</h2>
                  <p className="text-teal-400 text-sm font-medium mb-6">{p.subtitle}</p>
                  <p className="text-gray-400 text-base leading-relaxed mb-8">{p.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-teal-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="btn-outline"
                  >
                    Pelajari Lebih Lanjut <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
