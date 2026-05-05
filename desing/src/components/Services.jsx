export default function Services() {

  const services = [
    { name: "Branding", icon: "🎨", desc: "Construcción de identidades visuales sólidas y memorables." },
    { name: "Diseño UI/UX", icon: "🖥️", desc: "Interfaces modernas enfocadas en experiencia de usuario." },
    { name: "Identidad Visual", icon: "✨", desc: "Sistemas gráficos completos para marcas profesionales." },
    { name: "Consultoría Creativa", icon: "🚀", desc: "Dirección estratégica para potenciar tu marca." },
    { name: "Contenido Digital", icon: "📱", desc: "Diseño de piezas visuales para redes y campañas." }
  ]

  return (
    <section 
      id="servicios"
      className="py-24 px-6 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Servicios <span className="text-red-500">Creativos</span>
          </h2>
          <p 
            className="max-w-2xl mx-auto opacity-70 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Soluciones de diseño enfocadas en construir marcas fuertes, modernas y memorables en entornos digitales y físicos.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[2rem] border text-center transition-all duration-500 hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: "var(--card)", 
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)"
              }}
            >
              {/* Fondo hover */}
              <div className="absolute inset-0 bg-red-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {s.icon}
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.name}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed opacity-60"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Indicador inferior */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-500 rounded-t-full transition-all duration-500 group-hover:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}