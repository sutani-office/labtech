import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, MapPin, Map, Laptop, Leaf, Sun, Moon, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const produkItems = [
  { title: 'LabGIS', desc: 'GIS-based spatial analysis, planning & management assets' },
  // { title: 'SIMAS', desc: 'Sistem Informasi Management Aset dan Inventaris Berbasis GIS' },
  // { title: 'LabTech Apps', desc: 'Industry-specific modular apps' },
  { title: 'GeoData', desc: 'Geospatial data catalog & API' },
]

const solusiServices = [
  {
    name: 'Geospatial & Engineering',
    desc: 'GIS, spatial planning, survey consulting & detail engineering design',
    icon: <Map size={18} className="text-white" />,
  },
  {
    name: 'Information Technology',
    desc: 'Web & software development, ERP, system integration & IT consulting',
    icon: <Laptop size={18} className="text-white" />,
  },
  {
    name: 'Environment, Social, and Strategic Planning',
    desc: 'AMDAL, KLHS, ESG strategy, carbon inventory & masterplan',
    icon: <Leaf size={18} className="text-white" />,
  },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [location])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggle = (name) => setActiveMenu(activeMenu === name ? null : name)

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || activeMenu
        ? 'bg-[var(--bg-nav)] border-b border-[var(--border-color)]'
        : 'bg-transparent'
        } backdrop-blur-md`}
    >
      {/* Top bar */}
      <div className="border-b border-white/[0.06] hidden lg:flex">
        <div className="container py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="nav-location">
              <MapPin size={12} className="text-teal-400" />
              Bandung, Indonesia
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-wider text-white/40">
            <Link to="/contact" className="hover:text-teal-400 transition-colors">Help Center</Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <Link to="/contact" className="hover:text-teal-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="flex items-center h-[68px] justify-between gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/labtech.png"
              alt="Labtech"
              className="h-9 w-auto"
              style={{ filter: theme === 'dark' ? 'invert(1) brightness(1)' : 'none', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {/* Produk */}
            <div className="relative">
              <button
                onClick={() => toggle('produk')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${activeMenu === 'produk' ? 'text-[var(--text-primary)] bg-[var(--bg-tertiary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
              >
                {t('nav.products')}
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === 'produk' ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === 'produk' && (
                <div className="absolute top-[calc(100%+12px)] left-0 w-[320px] bg-[#0e0e0e] border border-[#222] rounded-2xl shadow-2xl p-3 z-[200]">
                  <p className="text-[10px] text-[#6b7280] uppercase tracking-widest font-semibold px-3 pb-3 border-b border-[#1e1e1e] mb-2">Platform & Tools</p>
                  {produkItems.map((item) => (
                    <Link
                      key={item.title}
                      to="/products"
                      className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-[13px] font-semibold text-white">{item.title}</span>
                      <span className="text-[11.5px] text-[#6b7280] group-hover:text-[#9ca3af] transition-colors">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solusi - Mega Menu */}
            <div className="relative">
              <button
                onClick={() => toggle('solusi')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${activeMenu === 'solusi' ? 'text-[var(--text-primary)] bg-[var(--bg-tertiary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
              >
                {t('nav.solutions')}
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === 'solusi' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link to="/blog" className="px-3 py-2 rounded-lg text-[13.5px] font-medium text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">
              Blog & Insight
            </Link>

            {/* Program */}
            <div className="relative">
              <button
                onClick={() => toggle('program')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${activeMenu === 'program' ? 'text-white bg-white/10' : 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                  }`}
              >
                Program
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === 'program' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'program' && (
                <div className="absolute top-[calc(100%+12px)] left-0 w-[220px] bg-[#0e0e0e] border border-[#222] rounded-2xl shadow-2xl p-3 z-[200]">
                  <Link to="/about" className="block px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-[#d1d5db] hover:text-white transition-colors">Training</Link>
                  <Link to="/about" className="block px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-[#d1d5db] hover:text-white transition-colors">Komunitas</Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => toggle('resources')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${activeMenu === 'resources' ? 'text-white bg-white/10' : 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                  }`}
              >
                Resources
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'resources' && (
                <div className="absolute top-[calc(100%+12px)] left-0 w-[220px] bg-[#0e0e0e] border border-[#222] rounded-2xl shadow-2xl p-3 z-[200]">
                  {/* <Link to="/blog" className="block px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-[#d1d5db] hover:text-white transition-colors">Blog & Insight</Link> */}
                  <Link to="/contact" className="block px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-[#d1d5db] hover:text-white transition-colors">Help Center</Link>
                  <Link to="/contact" className="block px-3 py-2.5 rounded-xl hover:bg-white/5 text-[13px] text-[#d1d5db] hover:text-white transition-colors">Dokumentasi</Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]">
              <button
                onClick={() => changeLanguage('id')}
                className={`text-[11px] font-bold transition-colors ${i18n.language === 'id' ? 'text-teal-400' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
              >
                ID
              </button>
              <div className="w-[1px] h-3 bg-[var(--border-color)]" />
              <button
                onClick={() => changeLanguage('en')}
                className={`text-[11px] font-bold transition-colors ${i18n.language === 'en' ? 'text-teal-400' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
              >
                EN
              </button>
            </div>

            <Link
              to="/contact"
              className="px-6 py-2 rounded-full bg-teal-500 text-white text-[13px] font-bold hover:bg-teal-600 transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#9ca3af] hover:text-white"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ===== MEGA MENU: SOLUSI ===== */}
      {activeMenu === 'solusi' && (
        <div className="hidden lg:block border-t border-[#1e1e1e] bg-[#0a0a0a] shadow-2xl z-[200]">
          <div className="max-w-[1280px] mx-auto px-8 py-10">
            <div className="flex gap-16">
              {/* Left: Description */}
              <div className="w-[280px] flex-shrink-0 border-r border-[#1e1e1e] pr-12">
                <p className="text-[11px] text-[#6b7280] uppercase tracking-widest font-semibold mb-3">Solusi</p>
                <h3 className="text-white font-semibold text-[16px] leading-snug mb-4">
                  Solusi untuk Setiap Industri
                </h3>
                <p className="text-[#6b7280] text-[13px] leading-[1.7] mb-8">
                  Temukan bagaimana solusi Labtech membantu organisasi mengubah data spasial menjadi dampak nyata — mulai dari perencanaan hingga pengambilan keputusan.
                </p>
                <p className="text-[#6b7280] text-[12px] mb-3">Bingung harus mulai dari mana?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 py-2 rounded-full border border-[#444] text-[13px] text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>

              {/* Right: Services list */}
              <div className="flex-1">
                <div className="flex flex-col gap-3">
                  {solusiServices.map((item, idx) => (
                    <Link
                      key={idx}
                      to="/solutions"
                      className="flex items-start gap-4 px-5 py-4 rounded-xl border border-[#1e1e1e] bg-[#0e0e0e] hover:bg-[#141414] hover:border-[#2a2a2a] transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-xl border border-[#1e1e1e] bg-[#0a0a0a] flex items-center justify-center text-[18px] flex-shrink-0 group-hover:border-teal-500/30 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[13.5px] font-semibold text-white mb-1 group-hover:text-teal-300 transition-colors">{item.name}</div>
                        <div className="text-[12px] text-[#6b7280] leading-[1.6]">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0e0e0e] border-t border-[#1e1e1e] px-6 py-6 space-y-1">
          <Link to="/" className="block px-3 py-2.5 rounded-lg text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">Beranda</Link>
          <Link to="/products" className="block px-3 py-2.5 rounded-lg text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">Produk</Link>
          <Link to="/solutions" className="block px-3 py-2.5 rounded-lg text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">Solusi</Link>
          <Link to="/about" className="block px-3 py-2.5 rounded-lg text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">Tentang Kami</Link>
          <Link to="/blog" className="block px-3 py-2.5 rounded-lg text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">Blog & Insight</Link>
          <Link to="/contact" className="block px-3 py-2.5 rounded-lg text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors">Kontak</Link>
          <div className="flex gap-3 pt-4 border-t border-[#1e1e1e] mt-4">
            <Link to="/contact" className="flex-1 text-center px-4 py-2.5 rounded-full border border-[#444] text-[13px] font-medium text-white hover:bg-white/5 transition-colors">Book Demo</Link>
            <Link to="/contact" className="flex-1 text-center px-4 py-2.5 rounded-full bg-white text-[#0e0e0e] text-[13px] font-bold hover:bg-gray-100 transition-colors">Masuk</Link>
          </div>
        </div>
      )}
    </header>
  )
}
