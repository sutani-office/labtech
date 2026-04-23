const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Cities Served' },
  { value: '20+', label: 'Expert Team' },
]

export default function StatsSection() {
  return (
    <section className="section-xs border-y border-[var(--border-color)] bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:divide-x md:divide-[var(--border-color)]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-8 px-6">
              <div
                className="text-[48px] font-bold text-[var(--text-primary)] mb-3"
                style={{ letterSpacing: '-2px', lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div className="text-[13px] text-[var(--text-muted)] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
