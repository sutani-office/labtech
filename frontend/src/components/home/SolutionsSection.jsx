import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[48px] font-bold text-[var(--text-primary)] tracking-tight">
            Solutions
          </h2>
        </div>

        {/* Mapid-style bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          
          {/* 1. Site Selection (Top Left) */}
          <div 
            className="lg:col-span-3 rounded-[24px] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden flex flex-col sm:flex-row relative group transition-all duration-300"
            style={{ minHeight: '260px' }}
            data-aos="fade-up" data-aos-delay="100"
          >
            <div className="p-8 sm:w-[50%] relative z-10 flex flex-col justify-center">
              <h3 className="text-[var(--text-primary)] font-medium text-[17px] mb-3">Site Selection</h3>
              <p className="text-[var(--text-secondary)] text-[13px] leading-[1.6]">
                Site selection is choosing the best locations for businesses or facilities based on factors like accessibility, demographics, and competition.
              </p>
            </div>
            <div className="sm:w-[60%] absolute right-0 top-0 bottom-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/80 to-transparent z-10" />
              <img src="/site_selection_map.png" alt="Site Selection Map" className="w-full h-full object-cover object-right opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* 2. Asset Management (Top Right) */}
          <div 
            className="lg:col-span-3 rounded-[16px] bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden flex flex-col sm:flex-row relative group transition-all duration-300"
            style={{ minHeight: '260px' }}
            data-aos="fade-up" data-aos-delay="200"
          >
            <div className="p-8 sm:w-[50%] relative z-10 flex flex-col justify-center">
              <h3 className="text-[var(--text-primary)] font-medium text-[17px] mb-3">Asset Management</h3>
              <p className="text-[var(--text-secondary)] text-[13px] leading-[1.6]">
                Centralizing property and asset data to create a unified system, while also improving asset operations for better management and performance.
              </p>
            </div>
            <div className="sm:w-[60%] absolute right-0 top-0 bottom-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
              <img src="/asset_management_map.png" alt="Asset Management Map" className="w-full h-full object-cover object-left-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* 3. Heatmap / Urban Analytics (Bottom Left) */}
          <div 
            className="lg:col-span-2 rounded-[24px] bg-[#0f0f0f] border border-[#1e1e1e] overflow-hidden relative group"
            style={{ minHeight: '380px' }}
            data-aos="fade-up" data-aos-delay="100"
          >
            <img src="/heatmap_grid.png" alt="Heatmap Grid" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
               <h3 className="text-white font-medium text-[17px] mb-2">Urban Analytics</h3>
               <p className="text-[#888] text-[13px]">Analyze data density and city movement patterns.</p>
            </div>
          </div>

          {/* 4. Efficient Data Collecting (Bottom Middle) */}
          <div 
            className="lg:col-span-2 rounded-[24px] bg-[#0f0f0f] border border-[#1e1e1e] overflow-hidden flex flex-col relative group"
            style={{ minHeight: '380px' }}
            data-aos="fade-up" data-aos-delay="200"
          >
            <div className="p-8 relative z-10 bg-[#111111]">
              <h3 className="text-white font-medium text-[17px] mb-3">Efficient Data Collecting</h3>
              <p className="text-[#888] text-[13px] leading-[1.6]">
                Streamlining data collection processes by integrating geospatial tagging and real-time visualization.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#111111] to-transparent z-10" />
              <img src="/efficient_data_map.png" alt="Efficient Data" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            </div>
          </div>

          {/* 5. IoT Data Integration (Bottom Right) */}
          <div 
            className="lg:col-span-2 rounded-[24px] bg-[#0f0f0f] border border-[#1e1e1e] overflow-hidden flex flex-col relative group"
            style={{ minHeight: '380px' }}
            data-aos="fade-up" data-aos-delay="300"
          >
            <div className="flex-1 relative overflow-hidden">
               <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#1b1b1b] to-transparent z-10" />
               <img src="/iot_data_map.png" alt="IoT Data Integration" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 relative z-10 bg-[#1b1b1b] border-t border-[#2a2a2a]">
              <h3 className="text-white font-medium text-[17px] mb-3">IoT Data Integration</h3>
              <p className="text-[#888] text-[13px] leading-[1.6]">
                Integrating IoT data to boost operational efficiency and enable predictive analytics for better decision-making.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
