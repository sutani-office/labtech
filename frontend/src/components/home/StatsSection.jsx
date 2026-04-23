import { useTranslation } from 'react-i18next'

const stats = (t) => [
  { value: '5+', label: t('stats.exp') },
  { value: '50+', label: t('stats.projects') },
  { value: '20+', label: t('stats.cities') },
  { value: '20+', label: t('stats.team') },
]

export default function StatsSection() {
  const { t } = useTranslation()
  const statsList = stats(t)

  return (
    <section className="section-xs border-y border-[var(--border-color)] bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:divide-x md:divide-[var(--border-color)]">
          {statsList.map((s) => (
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
