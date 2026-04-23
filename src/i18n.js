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
      },
      "features": {
        "label": "What We Do",
        "title": "Project Consultancy",
        "subtitle": "Labtech provides comprehensive consultancy services tailored to address complex challenges in spatial planning, technology, and sustainability.",
        "items": {
          "geospatial": "Geospatial & Engineering",
          "it": "Information Technology",
          "env": "Environment, Social, and Strategic Planning"
        }
      },
      "solutions": {
        "title": "Solutions",
        "items": {
          "site": "Site Selection",
          "asset": "Asset Management",
          "gis": "GIS & Remote Sensing",
          "env": "Environmental Impact"
        }
      },
      "stats": {
        "exp": "Years of Experience",
        "projects": "Projects Completed",
        "cities": "Cities Served",
        "team": "Expert Team"
      },
      "contact": {
        "label": "Contact",
        "title": "Fill out the form to connect with our experts.",
        "subtitle": "Our team will get back to you within 1 business day.",
        "form": {
          "name": "Full Name",
          "email": "Email Address",
          "service": "Service of Interest",
          "message": "Message",
          "placeholder_name": "Full Name",
          "placeholder_email": "email@company.com",
          "placeholder_service": "Select a service...",
          "placeholder_message": "Describe your needs...",
          "submit": "Send Message",
          "success": "Message Sent!",
          "success_sub": "We'll reach out within 1 business day."
        }
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
      },
      "features": {
        "label": "Apa yang Kami Lakukan",
        "title": "Konsultasi Proyek",
        "subtitle": "Labtech menyediakan layanan konsultasi komprehensif yang disesuaikan untuk mengatasi tantangan kompleks dalam perencanaan tata ruang, teknologi, dan keberlanjutan.",
        "items": {
          "geospatial": "Geospasial & Rekayasa",
          "it": "Teknologi Informasi",
          "env": "Lingkungan, Sosial, dan Perencanaan Strategis"
        }
      },
      "solutions": {
        "title": "Solusi",
        "items": {
          "site": "Pemilihan Lokasi",
          "asset": "Manajemen Aset",
          "gis": "GIS & Penginderaan Jauh",
          "env": "Dampak Lingkungan"
        }
      },
      "stats": {
        "exp": "Tahun Pengalaman",
        "projects": "Proyek Selesai",
        "cities": "Kota Dilayani",
        "team": "Tim Ahli"
      },
      "contact": {
        "label": "Kontak",
        "title": "Isi formulir untuk terhubung dengan ahli kami.",
        "subtitle": "Tim kami akan menghubungi Anda kembali dalam 1 hari kerja.",
        "form": {
          "name": "Nama Lengkap",
          "email": "Alamat Email",
          "service": "Layanan yang Diminati",
          "message": "Pesan",
          "placeholder_name": "Nama Lengkap",
          "placeholder_email": "email@perusahaan.com",
          "placeholder_service": "Pilih layanan...",
          "placeholder_message": "Deskripsikan kebutuhan Anda...",
          "submit": "Kirim Pesan",
          "success": "Pesan Terkirim!",
          "success_sub": "Kami akan menghubungi Anda dalam 1 hari kerja."
        }
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
