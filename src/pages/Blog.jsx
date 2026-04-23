import { useState } from 'react'
import { ArrowRight, Calendar, Clock, Tag, Search, ChevronRight } from 'lucide-react'

const categories = ['Semua', 'Geospatial', 'Teknologi', 'Lingkungan', 'Studi Kasus']

const posts = [
  {
    category: 'Geospatial',
    title: 'Transformasi Perencanaan Kota dengan Platform WebGIS Terpusat',
    excerpt: 'Bagaimana analisis geospasial real-time membantu pemerintah daerah mengelola tata ruang dan infrastruktur lebih efisien.',
    date: '18 Apr 2026',
    readTime: '6 menit',
    author: 'Tim Riset Labtech',
    featured: true,
  },
  {
    category: 'Studi Kasus',
    title: 'Implementasi Sistem ERP di Industri Manufaktur Skala Nasional',
    excerpt: 'Studi kasus keberhasilan integrasi rantai pasok dan produksi menggunakan platform IT enterprise kustom.',
    date: '12 Apr 2026',
    readTime: '8 menit',
    author: 'Budi Santoso',
    featured: false,
  },
  {
    category: 'Lingkungan',
    title: 'Panduan ESG dan Pelaporan Emisi Karbon untuk Korporasi',
    excerpt: 'Langkah taktis bagi perusahaan dalam memenuhi standar kepatuhan lingkungan dan pelaporan ESG secara akurat.',
    date: '5 Apr 2026',
    readTime: '10 menit',
    author: 'Dr. Rini Kusumawati',
    featured: false,
  },
  {
    category: 'Teknologi',
    title: 'Keamanan Data di Sektor Pemerintahan: Best Practices 2026',
    excerpt: 'Memahami kerangka keamanan siber modern untuk melindungi sistem informasi berskala masif.',
    date: '28 Mar 2026',
    readTime: '7 menit',
    author: 'Doni Setiawan',
    featured: false,
  },
  {
    category: 'Geospatial',
    title: 'Drone Mapping dan Analisis Topografi untuk Pertambangan',
    excerpt: 'Memaksimalkan survei udara untuk perhitungan volume dan pemantauan lingkungan area tambang.',
    date: '20 Mar 2026',
    readTime: '5 menit',
    author: 'Lina Mariana',
    featured: false,
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')

  const featured = posts.find((p) => p.featured)
  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === 'Semua' || p.category === activeCategory)
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <main className="pt-[112px]">
      {/* Hero */}
      <section className="py-24 bg-circuit relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="px-5 py-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-sm text-gray-300 flex items-center gap-3">
              Blog & Insight
              <span className="flex items-center gap-1 text-teal-400">
                <ChevronRight size={14} />
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight" style={{ letterSpacing: '-2px' }}>
            Wawasan Inovasi Terkini
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Artikel, laporan penelitian, dan tren terbaru seputar industri geospasial, teknologi, dan lingkungan.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Cari artikel atau topik..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#111] border border-[#2a2a2a] text-white text-sm placeholder-[#555] focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#1e1e1e]" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && search === '' && activeCategory === 'Semua' && (
            <div className="card-dark rounded-3xl overflow-hidden mb-16 group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-[#111] relative flex items-end p-8 border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
                  <div className="absolute inset-0 bg-circuit opacity-30" />
                  <span className="relative text-xs font-bold px-3 py-1 rounded-full bg-white text-black">
                    TERBARU
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">
                    {featured.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-gray-300 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{featured.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-xs text-gray-500 mt-auto">
                    <div className="flex items-center gap-1.5"><Calendar size={13} />{featured.date}</div>
                    <div className="flex items-center gap-1.5"><Clock size={13} />{featured.readTime} baca</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-[#111] text-gray-400 border-[#2a2a2a] hover:text-white hover:border-[#3a3a3a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article
                key={post.title}
                className="card-dark rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
              >
                <div className="h-40 bg-[#111] border-b border-[#2a2a2a] relative p-5 flex items-start">
                  <div className="absolute inset-0 bg-circuit opacity-30 pointer-events-none" />
                  <span className="relative text-[10px] font-bold px-2.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-600 border-t border-[#2a2a2a] pt-4 mt-auto">
                    <span className="flex items-center gap-1.5"><Calendar size={12} />{post.date}</span>
                    <span className="text-gray-400">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <Search size={40} className="mx-auto mb-4 opacity-30 text-[#2a2a2a]" />
              <p>Tidak ada artikel yang sesuai kriteria pencarian.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
