import { useState } from 'react'
import { BRAND_NAME, BRAND_EMOJI } from '../constants/branding'

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) return "El correo es requerido"
    if (!emailRegex.test(email)) return "Email inválido"
    if (!password || password.length < 6) return "Contraseña mínimo 6 caracteres"
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      localStorage.setItem('admin_auth', 'true')
      localStorage.setItem('admin_email', email)

      onLoginSuccess()
    } catch (err) {
      setError('Error en el acceso. Intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* decorativos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">

        <div
          className="rounded-3xl backdrop-blur-xl p-8 border shadow-2xl"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)"
          }}
        >

          {/* HEADER */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{BRAND_EMOJI}</div>
            <h1
              className="text-3xl font-extrabold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {BRAND_NAME} Studio
            </h1>
            <p style={{ color: "var(--text-secondary)" }} className="text-sm">
              Acceso al panel creativo
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div
              className="mb-6 p-4 rounded-2xl text-sm border"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgba(239, 68, 68, 0.3)",
                color: "#ef4444"
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Correo del estudio
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="studio@nova.com"
                className="w-full px-4 py-3 rounded-xl border"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)"
                }}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Clave de acceso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)"
                }}
                disabled={loading}
              />
              <p className="text-xs mt-2 opacity-60"
                style={{ color: "var(--text-secondary)" }}
              >
                Demo: acceso libre para desarrollo
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Ingresando...
                </>
              ) : (
                "🔐 Acceder al Studio"
              )}
            </button>

          </form>

          {/* INFO */}
          <div
            className="mt-6 p-4 rounded-xl text-xs text-center"
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.08)",
              color: "var(--text-secondary)"
            }}
          >
            Panel interno del estudio creativo. Acceso restringido a diseñadores y administradores.
          </div>

        </div>

        <div className="text-center mt-6 text-xs opacity-50"
          style={{ color: "var(--text-secondary)" }}
        >
          Sistema interno de {BRAND_NAME}
        </div>

      </div>
    </div>
  )
}