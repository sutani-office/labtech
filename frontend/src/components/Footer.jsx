import { Link } from 'react-router-dom'
import { Phone, Mail, ArrowRight } from 'lucide-react'

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-300">

      {/* Newsletter bar */}
      <div className="border-b border-[var(--border-color)]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-12">
            <div>
              <h3 className="text-[var(--text-primary)] font-semibold text-[18px] mb-2">Stay Updated</h3>
              <p className="text-[var(--text-muted)] text-[14px]">Get the latest insights on geospatial and technology.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email..."
                className="flex-1 sm:w-72 px-5 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] text-[14px] placeholder-[var(--text-muted)] focus:outline-none focus:border-teal-500 transition-colors"
              />
              <button className="btn-teal flex-shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main links grid */}
      {/* <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h4 className="text-[#9ca3af] text-[12px] font-semibold uppercase tracking-widest mb-6">Produk Kami</h4>
            <ul className="space-y-4">
              {['LabTech Platform', 'LabTech Insight', 'LabTech Apps', 'LabTech Maps'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-[14px] text-[#d1d5db] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#9ca3af] text-[12px] font-semibold uppercase tracking-widest mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              {[
                { label: 'Cerita Kami', to: '/about' },
                { label: 'Lokasi', to: '/about' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[14px] text-[#d1d5db] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#9ca3af] text-[12px] font-semibold uppercase tracking-widest mb-6">Program</h4>
            <ul className="space-y-4">
              {['Location Analytics', 'WebGIS Development', 'Komunitas', 'Kerjasama', 'Corporate Training'].map(item => (
                <li key={item}>
                  <Link to="/solutions" className="text-[14px] text-[#d1d5db] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#9ca3af] text-[12px] font-semibold uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 mb-10">
              {['Data Publikasi', 'Data Katalog', 'Artikel', 'Catatan Rilis', 'Produk Tutorial'].map(item => (
                <li key={item}>
                  <Link to="/blog" className="text-[14px] text-[#d1d5db] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[#9ca3af] text-[12px] font-semibold uppercase tracking-widest mb-6">Komunitas dan Dukungan</h4>
            <ul className="space-y-4">
              {['Pusat Bantuan', 'Dokumentasi', 'Kebijakan Privasi'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-[14px] text-[#d1d5db] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}

      {/* Bottom bar */}
      <div className="border-t border-[var(--border-color)]">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="tel:+6285121220747" className="flex items-center gap-2.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <Phone size={15} />
                (+62) 851-2122-0747
              </a>
              <a href="mailto:connect@labtech.id" className="flex items-center gap-2.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <Mail size={15} />
                connect@labtech.id
              </a>
            </div>

            {/* Right: socials + copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex gap-3">
                {[
                  { icon: <TwitterIcon />, href: '#' },
                  { icon: <InstagramIcon />, href: '#' },
                  { icon: <YoutubeIcon />, href: '#' },
                  { icon: <LinkedinIcon />, href: '#' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="text-[13px] text-[#4b5563]">© 2026 · PT. Labtech Inovasi Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
