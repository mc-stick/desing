import { useEffect, useState } from "react"
// import { fetchSupabaseData } from "../lib/supabase"
import v1 from "../assets/video/v1.mp4"
import v2 from "../assets/video/v2.mp4"
import v3 from "../assets/video/v3.mp4"
import v4 from "../assets/video/v4.mp4"
import v5 from "../assets/video/v5.mp4"
import v6 from "../assets/video/v6.mp4"

export default function Proyectos() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(false)

  const videos = [
    { id: 1, src: v1, type: "video" },
    { id: 2, src: v2, type: "video" },
    { id: 3, src: v3, type: "video" },
    { id: 4, src: v4, type: "video" },
    { id: 5, src: v5, type: "video" },
    { id: 6, src: v6, type: "video" },
  ]

  const mockProjects = [
    {
      id: 1,
      name: "Rigging new",
      type: "rigging",
      complexity: "media",
      duration: "2 semanas",
      description: "Identidad visual moderna y versátil",
      status: "Completado",
      disponible: true,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766"
    },
    {
      id: 2,
      name: "UI App Zen",
      type: "ui",
      complexity: "alta",
      duration: "3 semanas",
      description: "Diseño limpio enfocado en experiencia de usuario",
      status: "Completado",
      disponible: true,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
    },
    {
      id: 3,
      name: "Social Media Kit",
      type: "marketing",
      complexity: "baja",
      duration: "1 semana",
      description: "Contenido visual atractivo para redes sociales",
      status: "Completado",
      disponible: true,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    }
  ]

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      try {
        setProjects(mockProjects.filter(p => p.disponible === true))
      } catch (error) {
        console.error('Error cargando proyectos:', error)
        setProjects(mockProjects)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const filtered = filter === "all" ? projects : projects.filter(p => p.type === filter)

  return (
    <section
      id="adopcion"
      className="p-12 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h2
            className="text-4xl font-extrabold mb-4 tracking-tight transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            Nuestros Proyectos
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group rounded-3xl overflow-hidden p-[2px] transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Borde gradiente animado */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card interna (glass effect) */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: "var(--card)",
                  backdropFilter: "blur(12px)"
                }}
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay oscuro elegante */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>

                {/* Glow inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Badge decorativo */}
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  🎬 {video.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        {/* <div className="flex justify-center gap-4 mb-10">
          {["All", "Modeling ", "Rigging", "Drawing"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 border ${
                filter === type 
                  ? "bg-red-600 text-white border-red-600 shadow-lg scale-105" 
                  : "opacity-70 hover:opacity-100"
              }`}
              style={{ 
                backgroundColor: filter === type ? "var(--accent)" : "var(--card)",
                borderColor: "var(--border)",
                color: filter === type ? "#fff" : "var(--text-primary)"
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div> */}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}

        {/* Grid */}
        {/* {!loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map(p => (
              <div
                key={p.id}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow)",
                  border: "1px solid var(--border)"
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white uppercase tracking-widest border border-white/30">
                    {p.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3
                      className="font-bold text-2xl transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {p.name}
                    </h3>
                    <span className="text-sm font-medium px-2 py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                      {p.duration}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-6 h-10 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.description}
                  </p>

                  <button
                    className="w-full py-3 rounded-2xl font-bold tracking-wide transition-all duration-300 transform group-hover:shadow-lg active:scale-95"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "#ffffff"
                    }}
                  >
                    Ver proyecto
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}*/}
      </div> 
    </section>
  )
}