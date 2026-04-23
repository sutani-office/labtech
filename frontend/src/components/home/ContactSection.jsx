import { useState } from 'react'
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  return (
    <section id="contact" className="section bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Contact</span>
          <h2 className="section-title mb-5">
            Fill out the form to connect with our experts.
          </h2>
          <p className="text-[var(--text-muted)] text-[16px]">
            Our team will get back to you within 1 business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Column */}
          <div className="flex flex-col gap-4">
            {[
              { icon: <Phone size={18} />, label: 'Phone', value: '(+62) 851-2122-0747' },
              { icon: <Mail size={18} />, label: 'Email', value: 'connect@labtech.co.id' },
              { icon: <MapPin size={18} />, label: 'Office', value: 'Bandung, Jawa Barat' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-5 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[12px] text-[var(--text-muted)] mb-1 font-medium uppercase tracking-wide">{c.label}</p>
                  <p className="text-[15px] text-[var(--text-primary)] font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-colors duration-300">
            {sent ? (
              <div className="flex flex-col items-center justify-center p-16 gap-5 text-center">
                <CheckCircle size={52} className="text-teal-400" />
                <h3 className="text-[22px] font-bold text-[var(--text-primary)]">Message Sent!</h3>
                <p className="text-[var(--text-muted)] text-[15px]">We'll reach out within 1 business day.</p>
                <button onClick={() => setSent(false)} className="text-teal-400 text-[14px] underline mt-2 hover:text-teal-300 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="p-10">
                <h3 className="text-white font-semibold text-[18px] mb-2">Kirim Pesan</h3>
                <p className="text-[#6b7280] text-[14px] mb-8">Isi formulir dan kami akan menghubungi Anda sesegera mungkin.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[12px] text-[#6b7280] font-semibold mb-2.5 uppercase tracking-wide">Nama Lengkap *</label>
                    <input
                      type="text" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Nama Lengkap"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-[#6b7280] font-semibold mb-2.5 uppercase tracking-wide">Alamat Email *</label>
                    <input
                      type="email" required value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="email@perusahaan.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[12px] text-[#6b7280] font-semibold mb-2.5 uppercase tracking-wide">Layanan yang Diminati</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Pilih layanan...</option>
                    <option>Geospatial & Engineering</option>
                    <option>Information Technology</option>
                    <option>Environment, Social & Strategic Planning</option>
                    <option>Konsultasi Umum</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-[12px] text-[#6b7280] font-semibold mb-2.5 uppercase tracking-wide">Pesan *</label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Deskripsikan kebutuhan Anda..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-[#0e0e0e] font-bold text-[15px] hover:bg-gray-100 transition-colors flex items-center justify-center gap-2.5"
                >
                  <Send size={16} />
                  Kirim Pesan Sekarang
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
