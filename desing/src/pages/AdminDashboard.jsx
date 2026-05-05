import { useState } from 'react'
import { BRAND_NAME, BRAND_EMOJI } from '../constants/branding'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard({ onLogout }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('proyectos')
  const [loading, setLoading] = useState(false)

  // PROYECTOS STATE
  const [projectForm, setProjectForm] = useState({
    name: '',
    type: 'branding',
    description: '',
    client: '',
    image: ''
  })

  const [projects, setProjects] = useState([
    { id: 1, name: 'Identidad Visual Nova', type: 'branding', client: 'Studio X', status: '✅ Activo' }
  ])

  // PRODUCTOS / SERVICIOS STATE
  const [serviceForm, setServiceForm] = useState({
    name: '',
    price: '',
    description: '',
    category: 'Branding',
    image: ''
  })

  const [services, setServices] = useState([
    { id: 1, name: 'Branding Corporativo', price: 500, category: 'Branding' }
  ])

  // CONTACTOS STATE
  const [messages] = useState([
    { id: 1, name: 'Cliente', email: 'cliente@correo.com', message: 'Quiero cotizar un logo', date: '2026-05-04', status: '📩 Nuevo' }
  ])

  const handleProjectChange = (e) => {
    const { name, value } = e.target
    setProjectForm(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (e) => {
    const { name, value } = e.target
    setServiceForm(prev => ({ ...prev, [name]: value }))
  }

  const handleAddProject = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 800))
      setProjects([
        ...projects,
        {
          id: Date.now(),
          ...projectForm
        }
      ])
      setProjectForm({ name: '', type: 'branding', description: '', client: '', image: '' })
    } finally {
      setLoading(false)
    }
  }

  const handleAddService = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 800))
      setServices([
        ...services,
        {
          id: Date.now(),
          ...serviceForm,
          price: parseFloat(serviceForm.price)
        }
      ])
      setServiceForm({ name: '', price: '', description: '', category: 'Branding', image: '' })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    localStorage.removeItem('admin_email')
    onLogout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ backgroundColor: "var(--nav-bg)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{BRAND_EMOJI}</span>
            <div>
              <h1 className="text-2xl font-extrabold"
                style={{ color: "var(--text-primary)" }}
              >
                {BRAND_NAME} Studio
              </h1>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Panel creativo de gestión
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg font-medium"
            style={{
              backgroundColor: "rgba(239,68,68,0.1)",
              color: "#ef4444",
              border: "1px solid rgba(239,68,68,0.3)"
            }}
          >
            🚪 Salir
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { id: 'proyectos', label: '🎨 Proyectos' },
            { id: 'servicios', label: '🧩 Servicios' },
            { id: 'mensajes', label: '📩 Mensajes' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 border-b-2 font-medium ${
                activeTab === tab.id ? 'text-red-500 border-red-500' : 'opacity-60'
              }`}
              style={{
                color: activeTab === tab.id ? "var(--accent)" : "var(--text-primary)"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PROYECTOS */}
        {activeTab === 'proyectos' && (
          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl border"
              style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
            >
              <h2 className="text-xl font-bold mb-6">Nuevo Proyecto</h2>

              <form onSubmit={handleAddProject} className="space-y-4">
                <input name="name" placeholder="Nombre del proyecto"
                  onChange={handleProjectChange}
                  value={projectForm.name}
                  className="w-full p-2 rounded-lg border"
                />
                <input name="client" placeholder="Cliente"
                  onChange={handleProjectChange}
                  value={projectForm.client}
                  className="w-full p-2 rounded-lg border"
                />
                <textarea name="description" placeholder="Descripción"
                  onChange={handleProjectChange}
                  value={projectForm.description}
                  className="w-full p-2 rounded-lg border"
                />

                <button className="w-full py-2 rounded-lg text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Agregar
                </button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-4">
              {projects.map(p => (
                <div key={p.id}
                  className="p-4 rounded-xl border flex justify-between"
                  style={{ backgroundColor: "var(--card)" }}
                >
                  <div>
                    <h3 className="font-bold">{p.name}</h3>
                    <p className="text-sm opacity-70">{p.client}</p>
                  </div>
                  <span>{p.status}</span>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* SERVICIOS */}
        {activeTab === 'servicios' && (
          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl border"
              style={{ backgroundColor: "var(--card)" }}
            >
              <h2 className="text-xl font-bold mb-6">Nuevo Servicio</h2>

              <form onSubmit={handleAddService} className="space-y-4">
                <input name="name" placeholder="Nombre"
                  value={serviceForm.name}
                  onChange={handleServiceChange}
                  className="w-full p-2 border rounded-lg"
                />
                <input name="price" placeholder="Precio"
                  value={serviceForm.price}
                  onChange={handleServiceChange}
                  className="w-full p-2 border rounded-lg"
                />
                <textarea name="description" placeholder="Descripción"
                  value={serviceForm.description}
                  onChange={handleServiceChange}
                  className="w-full p-2 border rounded-lg"
                />

                <button className="w-full py-2 rounded-lg text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Agregar
                </button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-4">
              {services.map(s => (
                <div key={s.id}
                  className="p-4 border rounded-xl flex justify-between"
                  style={{ backgroundColor: "var(--card)" }}
                >
                  <div>
                    <h3 className="font-bold">{s.name}</h3>
                    <p className="text-sm opacity-70">{s.category}</p>
                  </div>
                  <span>${s.price}</span>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* MENSAJES */}
        {activeTab === 'mensajes' && (
          <div className="space-y-4">
            {messages.map(m => (
              <div key={m.id}
                className="p-6 border rounded-xl"
                style={{ backgroundColor: "var(--card)" }}
              >
                <h3 className="font-bold">{m.name}</h3>
                <p className="text-sm opacity-70">{m.email}</p>
                <p className="mt-2">{m.message}</p>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  )
}