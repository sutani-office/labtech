import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files will be imported here or loaded via backend
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "products": "Products",
        "solutions": "Solutions",
        "about": "About Us",
        "contact": "Contact",
        "blog": "Blog & Insight"
      },
      "hero": {
        "badge": "Your Partner for Technical & Sustainability Consulting",
        "title": "Smart Engineering, Driven by GIS & IT Innovation",
        "subtitle": "Drive strategic planning and operational execution with location analytics, built for both enterprise systems and professional platforms.",
        "cta_talk": "Talk To Our Team",
        "cta_explore": "Explore Solutions"
      }
    }
  },
  id: {
    translation: {
      "nav": {
        "home": "Beranda",
        "products": "Produk",
        "solutions": "Solusi",
        "about": "Tentang Kami",
        "contact": "Kontak",
        "blog": "Blog & Insight"
      },
      "hero": {
        "badge": "Mitra Anda untuk Konsultasi Teknis & Keberlanjutan",
        "title": "Smart Engineering, Didorong oleh Inovasi GIS & IT",
        "subtitle": "Tingkatkan perencanaan strategis dan eksekusi operasional dengan analitik lokasi, dibangun untuk sistem perusahaan dan platform profesional.",
        "cta_talk": "Hubungi Tim Kami",
        "cta_explore": "Lihat Solusi"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
