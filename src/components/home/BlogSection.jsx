import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    category: 'Geospatial',
    categoryColor: '#2dd4bf',
    title: 'Pemanfaatan GIS dalam Perencanaan Tata Ruang Berkelanjutan di Indonesia',
    excerpt: 'Bagaimana sistem informasi geografis membantu pemerintah daerah membuat keputusan berbasis data untuk perencanaan wilayah yang lebih efektif.',
    date: '18 Apr 2026',
    readTime: '6 min',
  },
  {
    category: 'Environment',
    categoryColor: '#4ade80',
    title: 'KLHS & AMDAL di Era Digital: Digitalisasi Proses Kajian Lingkungan',
    excerpt: 'Transformasi proses kajian lingkungan strategis menggunakan platform digital untuk efisiensi dan transparansi yang lebih baik.',
    date: '10 Apr 2026',
    readTime: '8 min',
  },
  {
    category: 'Technology',
    categoryColor: '#818cf8',
    title: 'Implementasi ERP untuk Efisiensi Operasional Perusahaan Konstruksi',
    excerpt: 'Studi kasus implementasi enterprise resource planning yang berhasil meningkatkan produktivitas operasional perusahaan konstruksi nasional.',
    date: '2 Apr 2026',
    readTime: '7 min',
  },
]

export default function BlogSection() {
  return (
    <section className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <span className="section-label">Insights</span>
            <h2 className="section-title">Latest Articles</h2>
          </div>
          <Link to="/blog" className="px-5 py-2.5 rounded-full border border-[var(--accent-color)] text-[var(--accent-color)] text-[14px] font-semibold hover:bg-[var(--accent-color)]/10 transition-all flex items-center gap-2">
            View All <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden group cursor-pointer hover:border-[var(--border-hover)] transition-all duration-300 rounded-2xl"
            >
              {/* Color bar */}
              <div className="h-[3px]" style={{ background: post.categoryColor }} />

              <div className="p-8">
                {/* Category tag */}
                <span
                  className="inline-block text-[11px] font-bold px-3 py-1.5 rounded-full mb-5 tracking-wide"
                  style={{ color: post.categoryColor, background: `${post.categoryColor}18` }}
                >
                  {post.category}
                </span>

                <h3 className="text-[var(--text-primary)] font-semibold text-[16px] leading-[1.5] mb-4 group-hover:text-teal-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-[14px] leading-[1.75] mb-6 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-5 text-[12px] text-[var(--text-muted)] border-t border-[var(--border-color)] pt-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime} read
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
