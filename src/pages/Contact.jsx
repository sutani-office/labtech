import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Clock, Globe, ChevronRight } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', org: '', product: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="pt-[112px]">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-circuit relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="px-5 py-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-sm text-gray-300 flex items-center gap-3">
              <MessageSquare size={14} /> Hubungi Kami
              <span className="flex items-center gap-1 text-teal-400">
                <ChevronRight size={14} />
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight" style={{ letterSpacing: '-2px' }}>
            Konsultasi dengan Tim Kami
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Ceritakan kebutuhan teknologi dan spasial Anda, tim konsultan kami siap membantu merumuskan solusi terbaik.
          </p>
        </div>
      </section>

      <section className="py-20 pb-32 md:py-24 md:pb-40 border-t border-[#1e1e1e]" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white mb-6 tracking-tight">Informasi Kontak</h2>

              {[
                {
                  icon: <Phone size={18} />,
                  title: 'Telepon & WhatsApp',
                  lines: ['(+62) 21-xxxx-xxxx', '(+62) 812-xxxx-xxxx'],
                  sub: 'Senin – Jumat, 08.00 – 17.00 WIB',
                  href: 'tel:+6221xxxxxxxx',
                },
                {
                  icon: <Mail size={18} />,
                  title: 'Email',
                  lines: ['info@labtech.co.id', 'support@labtech.co.id'],
                  sub: 'Balasan dalam 1×24 jam kerja',
                  href: 'mailto:info@labtech.co.id',
                },
                {
                  icon: <MapPin size={18} />,
                  title: 'Kantor Pusat',
                  lines: ['Jl. Sudirman No. 123, Lt. 15', 'Jakarta Selatan 12190'],
                  sub: 'Dekat Stasiun Dukuh Atas',
                  href: '#',
                },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="flex gap-4 card-dark rounded-2xl p-5 hover:border-[#3a3a3a] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-[#2a2a2a] bg-[#111] flex items-center justify-center flex-shrink-0 text-teal-400 group-hover:bg-[#1a1a1a]">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{c.title}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-gray-300 text-sm font-medium">{l}</p>
                    ))}
                    <p className="text-gray-500 text-xs mt-1">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="card-dark rounded-2xl p-8 md:p-10">
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight">Kirim Pesan</h2>
                <p className="text-gray-400 text-sm mb-8">Isi formulir dan kami akan menghubungi Anda sesegera mungkin.</p>

                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <CheckCircle size={48} className="text-teal-400 mb-2" />
                    <h3 className="text-2xl font-bold text-white tracking-tight">Pesan Terkirim!</h3>
                    <p className="text-gray-400 text-sm max-w-sm">
                      Terima kasih telah menghubungi kami. Tim konsultan kami akan segera merespon melalui email atau telepon.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-4 text-sm text-teal-400 hover:text-white underline transition-colors"
                    >
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">Nama Lengkap *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Nama Lengkap"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">Alamat Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="email@perusahaan.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">Nama Institusi / Perusahaan</label>
                        <input
                          type="text"
                          value={form.org}
                          onChange={(e) => setForm({ ...form, org: e.target.value })}
                          placeholder="PT / Instansi"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:outline-none focus:border-teal-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">Layanan yang Diminati</label>
                        <select
                          value={form.product}
                          onChange={(e) => setForm({ ...form, product: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-[#2a2a2a] text-gray-300 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                        >
                          <option value="">Pilih layanan...</option>
                          <option>Geospatial & Engineering</option>
                          <option>Information Technology</option>
                          <option>Environment & ESG</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">Pesan Anda *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Deskripsikan kebutuhan Anda..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#111] border border-[#2a2a2a] text-white text-sm placeholder-[#444] focus:outline-none focus:border-teal-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-white text-[#111] font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Kirim Pesan Sekarang
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
