import { useTheme } from "../context/ThemeContext"
import { BRAND_NAME, BRAND_EMOJI, BRAND_TAGLINE, COMPANY_INFO } from "../constants/branding"

export default function Footer() {

  return (
    <footer 
      className="pt-16 pb-8 px-6 transition-colors duration-500 border-t"
      style={{ 
        backgroundColor: "var(--background)", 
        borderColor: "var(--border)" 
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna Logo */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-red-500 to-purple-500">
              {BRAND_EMOJI} {BRAND_NAME}
            </h3>
            <p 
              className="text-sm leading-relaxed opacity-70"
              style={{ color: "var(--text-secondary)" }}
            >
              {BRAND_TAGLINE} creando experiencias visuales únicas e impactantes.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Recursos</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Portafolio</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Casos de Estudio</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Blog de Diseño</li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Servicios</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Branding</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Diseño UI/UX</li>
              <li className="hover:text-red-500 cursor-pointer transition-colors">Marketing Visual</li>
            </ul>
          </div>

          {/* Social */}
          <div>
  <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>
    Síguenos
  </h4>

  <div className="flex gap-4">
    {[
      {
        name: "X",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.244 2H21l-6.52 7.455L22 22h-6.8l-5.31-6.91L3.7 22H1l7.02-8.03L2 2h6.9l4.8 6.24L18.244 2zm-1.2 18h1.9L6.1 4H4.1l12.944 16z"/>
          </svg>
        )
      },
      {
        name: "Facebook",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>
          </svg>
        )
      },
      {
        name: "Instagram",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.8 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
        )
      },
      {
        name: "YouTube",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
        )
      },
      {
        name: "WhatsApp",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 11.9 11.9 0 0 0 1.6 17.7L0 24l6.4-1.6A11.9 11.9 0 0 0 12 24a12 12 0 0 0 8.5-20.5zM12 21.8a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.5A9.8 9.8 0 1 1 12 21.8zm5.4-7.2c-.3-.1-1.7-.8-2-.9s-.4-.1-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5a.6.6 0 0 0 0-.6c-.1-.2-.6-1.5-.8-2s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.3 5.3 0 0 0 1.1 2.7 12.2 12.2 0 0 0 4.6 4 10.7 10.7 0 0 0 1.6.6 3.9 3.9 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.2-.3-.3-.6-.4z"/>
          </svg>
        )
      }
    ].map((item, i) => (
      <div
        key={i}
        className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-110 border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          color: "var(--text-primary)"
        }}
        title={item.name}
      >
        {item.icon}
      </div>
    ))}
  </div>
</div>
        </div>

        {/* Línea final */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
            © 2026 {BRAND_NAME}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs opacity-50" style={{ color: "var(--text-secondary)" }}>
            <span className="hover:underline cursor-pointer">Privacidad</span>
            <span className="hover:underline cursor-pointer">Términos</span>
            <span className="hover:underline cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}