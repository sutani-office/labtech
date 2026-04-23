export default function ClientsSection() {
  const logoCount = 24
  const logos = Array.from({ length: logoCount }, (_, i) => `/logo-client/${i + 1}.svg`)
  const doubled = [...logos, ...logos]

  return (
    <section className="py-14 border-y border-[var(--border-color)] bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      <div className="flex gap-20 animate-marquee whitespace-nowrap items-center">
        {doubled.map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={src}
              alt={`Client ${i + 1}`}
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ maxHeight: '40px' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
