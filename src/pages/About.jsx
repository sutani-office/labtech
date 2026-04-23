import { Users, Target, Award, Lightbulb, Globe, Heart, ChevronRight } from 'lucide-react'

const team = [
  { name: 'Ahmad Fauzi, M.T.', role: 'CEO & Co-Founder', avatar: 'AF' },
  { name: 'Dr. Sari Dewi, Ph.D', role: 'CTO & Co-Founder', avatar: 'SD' },
  { name: 'Rizky Pratama, M.Kom', role: 'Head of Product', avatar: 'RP' },
  { name: 'Lina Mariana, MBA', role: 'Head of Marketing', avatar: 'LM' },
  { name: 'Doni Setiawan, S.T.', role: 'Lead Engineer', avatar: 'DS' },
  { name: 'Nia Rahmawati, M.Si', role: 'Lab Specialist', avatar: 'NR' },
]

const values = [
  { icon: <Lightbulb size={20} />, title: 'Inovasi Tanpa Henti', desc: 'Kami terus mendorong batas teknologi untuk menghadirkan solusi spasial dan teknologi yang relevan dengan kebutuhan masa depan.' },
  { icon: <Award size={20} />, title: 'Kualitas Terbaik', desc: 'Setiap solusi kami diuji ketat sebelum rilis, memastikan reliabilitas dan performa kelas dunia.' },
  { icon: <Heart size={20} />, title: 'Pelanggan Utama', desc: 'Keberhasilan klien adalah keberhasilan kami. Dukungan penuh dari konsultasi hingga after-sales.' },
  { icon: <Globe size={20} />, title: 'Dampak Nasional', desc: 'Berkontribusi nyata pada kemajuan riset dan industri Indonesia melalui teknologi terdepan.' },
]

export default function About() {
  return (
    <main className="pt-[112px]">
      {/* Hero */}
      <section className="section bg-circuit relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">Tentang Kami</span>
          <h1 className="section-title mb-6">
            Mendorong Kemajuan Inovasi Indonesia
          </h1>
          <p className="text-[#6b7280] text-[17px] leading-[1.8] max-w-2xl mx-auto">
            PT. Labtech Inovasi Indonesia didirikan dengan misi menghadirkan teknologi dan solusi spasial kelas dunia untuk institusi di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section border-t border-[#1a1a1a]" style={{ background: '#090909' }}>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/25 text-teal-400 bg-teal-500/8 text-[12px] font-semibold tracking-wide mb-8">
              Cerita Kami
            </div>
            <h2 className="text-[36px] sm:text-[42px] font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-1px' }}>
              Dedikasi untuk Solusi Teknologi Terintegrasi
            </h2>
            <div className="space-y-5 text-[#6b7280] text-[15px] leading-[1.8]">
              <p>Labtech lahir dari visi untuk mengintegrasikan teknologi geospatial dan informasi guna menyelesaikan masalah kompleks di berbagai industri — mulai dari pemerintahan, infrastruktur, hingga manajemen lingkungan.</p>
              <p>Dipimpin oleh tenaga ahli berpengalaman, kami membangun platform yang dirancang khusus untuk kebutuhan Indonesia — menggabungkan pemetaan spasial cerdas dengan sistem manajemen yang kuat.</p>
              <p>Hari ini, Labtech telah melayani berbagai klien strategis dan terus berinovasi untuk membawa teknologi GIS dan AI ke garis depan pengambilan keputusan.</p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="space-y-0">
            {[
              { year: '2019', event: 'Labtech didirikan, fokus awal pada solusi pemetaan dasar' },
              { year: '2020', event: 'Ekspansi layanan ke Enterprise IT Solutions' },
              { year: '2022', event: 'Peluncuran modul Environmental Assessment (AMDAL & KLHS)' },
              { year: '2024', event: 'Mencapai lebih dari 100+ klien institusi pemerintah dan swasta' },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full border border-[#1e1e1e] bg-[#111] flex items-center justify-center text-teal-400 text-[12px] font-bold flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-[#1e1e1e] mt-2" />}
                </div>
                <div className="pb-10 pt-2">
                  <div className="text-white text-[15px] font-semibold mb-2">{item.year}</div>
                  <div className="text-[#6b7280] text-[14px] leading-[1.7]">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-t border-[#1a1a1a]" style={{ background: '#0e0e0e' }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label">Nilai-Nilai Kami</span>
            <h2 className="section-title">Prinsip Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-dark text-center">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold text-[16px] mb-3">{v.title}</h3>
                <p className="text-[#6b7280] text-[14px] leading-[1.75]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section border-t border-[#1a1a1a]" style={{ background: '#090909' }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label">Tim Kami</span>
            <h2 className="section-title">Tim Kepemimpinan</h2>
            <p className="text-[#6b7280] text-[16px] mt-4">Para ahli di balik inovasi Labtech</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((member) => (
              <div key={member.name} className="card-dark text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-white font-bold text-[18px] mx-auto mb-5 transition-colors group-hover:bg-teal-500/10 group-hover:border-teal-500/30 group-hover:text-teal-400">
                  {member.avatar}
                </div>
                <div className="text-white text-[13px] font-semibold leading-tight mb-2">{member.name}</div>
                <div className="text-[#6b7280] text-[11px] font-medium">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
