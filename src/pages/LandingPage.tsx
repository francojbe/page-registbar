import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import LightRays from '../components/LightRays';

function LandingPage() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Background Blobs (Soft Gradient Shapes) */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.jpg" alt="RegistBar Logo" style={{ width: 40, height: 40, borderRadius: '12px', objectFit: 'cover' }} />
          RegistBar
        </div>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">Cómo Funciona</a>
          <a href="#services" className="nav-link">Beneficios</a>
          <a href="#pricing" className="nav-link">Precios</a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/beta" className="nav-link" style={{ fontWeight: '600', color: 'var(--color-accent)' }}>Beta Cerrada</Link>
          <button className="btn-primary" style={{ opacity: 0.5, cursor: 'not-allowed' }} disabled>Próximamente</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ overflow: 'hidden' }}>
        {/* Light Rays Effect */}
        {/* Light Rays Effect */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#7c3aed" /* Purple accent matches brand */
            raysSpeed={0.5}
            lightSpread={0.7}
            rayLength={1.2}
            pulsating={true}
            followMouse={true}
            mouseInfluence={0.03}
            className="opacity-10 mix-blend-multiply"
          />
          {/* Gradient overlay to fade rays into white background at bottom */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,1) 100%)',
            zIndex: 1
          }}></div>
        </div>

        <div className="hero-content" style={{ position: 'relative', zIndex: 20 }}>
          {/* Left: Content */}
          <div className="hero-left">
            <h1>Tu aliado financiero en el salón.</h1>

            <div className="hero-features-list">
              <div className="hero-feature-item">
                <span className="check-icon">✓</span> Separación automática de comisiones
              </div>
              <div className="hero-feature-item">
                <span className="check-icon">✓</span> Escáner de gastos con IA
              </div>
              <div className="hero-feature-item">
                <span className="check-icon">✓</span> Garantía de privacidad
              </div>
            </div>

            <div className="store-badges">
              {/* Placeholders for App Store buttons */}
              <div className="badge" style={{ opacity: 0.5, cursor: 'not-allowed' }} title="Próximamente">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.7 13.9C17.7 12 19 11 19 11C18 9.5 16.5 9.5 16 9.5C14.5 9.5 13.8 10.4 13.8 10.4C13.8 10.4 12.8 9.5 11.5 9.5C10.2 9.5 8.9 10.5 8.9 10.5C8.9 10.5 6 12.5 6 17C6 20.8 9 24 9 24C9 24 10 25.2 11.2 25.2C12.4 25.2 12.6 24 12.6 24C12.6 24 13 25.2 14.1 25.2C15.2 25.2 16.3 24 16.3 24C16.3 24 19.3 20.2 19.3 17.5C19.3 17.4 17.7 16.6 17.7 13.9ZM14.8 7.5C15.4 6.8 15.5 5.8 15.5 5.8C15.5 5.8 14.5 5.8 13.8 6.5C13.2 7.2 13 8.3 13 8.3C13 8.3 14 8.4 14.8 7.5Z" /></svg>
                <div>
                  <div style={{ fontSize: '0.6rem' }}>Download on the</div>
                  <div style={{ fontWeight: 'bold' }}>Apple Store</div>
                </div>
              </div>
              <div className="badge" style={{ background: '#fff', color: '#000', border: '1px solid #ddd', opacity: 0.5, cursor: 'not-allowed' }} title="Próximamente">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 20.5V3.5L12 11.8L5 20.5Z" fill="#2196F3" /><path d="M12 12L5 3.5L16.4 10.5L12 12Z" fill="#FFC107" /><path d="M12 11.8L16.4 13.5L5 20.5L12 11.8Z" fill="#4CAF50" /><path d="M16.4 13.5L20.4 11.8C21.2 11.4 21.2 10.8 20.4 10.5L16.4 8.8L12 12L16.4 13.5Z" fill="#F44336" /></svg>
                <div>
                  <div style={{ fontSize: '0.6rem' }}>Get it from</div>
                  <div style={{ fontWeight: 'bold' }}>Google Play</div>
                </div>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                </div>
                <div className="stat-value">5 Mil+</div>
                <div className="stat-label">Descargas</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon" style={{ color: '#fbbf24' }}>
                  ★
                </div>
                <div className="stat-value">4.9 (2k)</div>
                <div className="stat-label">Valoraciones</div>
              </div>
            </div>
          </div>

          {/* Right: Hand Image & Floating Cards */}
          {/* Right: Hand Image & Floating Cards */}
          <div className="hero-image-container">
            <div className="phone-frame hero-main-img">
              <img src="/screen-home.png" alt="App Preview" />
            </div>

            {/* Floating Card 1: Chat Style Notification */}
            <div className="floating-card float-1">
              <div className="avatar-small" style={{ background: '#bfdbfe' }}></div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#1e3a8a' }}>Ahorro Semanal</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>¡Has superado tu meta!</div>
              </div>
            </div>

            {/* Floating Card 2: Income Alert */}
            <div className="floating-card float-2">
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>+$150.000</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Ganancia Líquida hoy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="feature-split">
        <div className="feature-img-wrapper">
          <div className="phone-frame stylist-img" style={{ border: 'none', boxShadow: 'none', background: 'transparent' }}>
            <img src="/screen-profile.png" alt="Happy Stylist" style={{ borderRadius: '32px', boxShadow: 'var(--shadow-soft)' }} />
          </div>
          {/* Decorative circle behind */}
          <div style={{
            position: 'absolute', top: -20, left: -20, width: 100, height: 100, borderRadius: '50%',
            background: 'var(--color-bg-secondary)', zIndex: -1
          }}></div>
        </div>

        <div className="feature-right">
          <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
            Por qué lo simple es mejor
          </div>
          <h2>Inteligente y accesible para todos</h2>

          <div className="simple-feature-list">

            <div className="simple-feature-item">
              <div className="feature-icon-circle purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="sf-content">
                <h3>Siempre disponible</h3>
                <p>Olvida el papel. Registra tus cortes en segundos entre cliente y cliente, desde cualquier lugar.</p>
              </div>
            </div>

            <div className="simple-feature-item">
              <div className="feature-icon-circle peach">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <div className="sf-content">
                <h3>Claridad Total</h3>
                <p>Entiende por fin cuánto ganas realmente después de pagar el sillón y los insumos.</p>
              </div>
            </div>

            <div className="simple-feature-item">
              <div className="feature-icon-circle purple" style={{ background: '#e0f2fe', color: '#0ea5e9' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="sf-content">
                <h3>Tus Reportes Listos</h3>
                <p>Genera reportes PDF profesionales para bancos o arriendos con un solo clic.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <span className="section-label">Flujo de Trabajo Simplificado</span>
          <h2>Tu contabilidad lista en 3 pasos</h2>
          <p>
            Hemos eliminado la complejidad. RegistBar hace el trabajo pesado por ti cada vez que terminas un servicio.
          </p>
        </div>

        <div className="hiw-content">
          <div className="hiw-screens-grid">
            {/* Step 1 */}
            <div className="step-screen-container">
              <div className="step-number">1</div>
              <div className="phone-frame">
                <img src="/screen-service.png" alt="Paso 1: Registrar" />
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Registra tu Corte</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem' }}>
                  Ingresa el valor total. Solo te tomará 10 segundos entre cliente y cliente.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-screen-container">
              <div className="step-number">2</div>
              <div className="phone-frame">
                <img src="/screen-scanner.png" alt="Paso 2: Escanear" />
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>IA en Acción</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem' }}>
                  Sube fotos de tus boletas de insumos. La IA extrae los montos automáticamente.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-screen-container">
              <div className="step-number">3</div>
              <div className="phone-frame">
                <img src="/screen-home.png" alt="Paso 3: Ganancia" />
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tu Ganancia Real</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem' }}>
                  Visualiza tu "Ingreso Líquido" al instante. Sin sorpresas a fin de mes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Grid Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <span className="section-label">Todo en una App</span>
          <h2>Potencia tu carrera profesional</h2>
          <p>Herramientas diseñadas específicamente para el ecosistema beauty.</p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <h3>Finanzas Inteligentes</h3>
            <p>Distingue automáticamente entre ventas brutas e ingreso líquido. Tu dinero real, siempre claro.</p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
            </div>
            <h3>Balance y Metas</h3>
            <p>Define objetivos de ahorro para tus vacaciones o equipamiento nuevo. Visualiza tu progreso diario.</p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
            <h3>Agenda Integrada</h3>
            <p>Sincroniza tus citas y bloquea horas. Evita las confusiones y maximiza tu ocupación.</p>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            </div>
            <h3>Reportes PDF</h3>
            <p>Exporta cartolas mensuales profesionales. Ideales para demostrar ingresos ante arrendadores o bancos.</p>
          </div>

          {/* Card 5 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>Seguridad Total</h3>
            <p>Acceso biométrico (Huella/FaceID) y encriptación de datos. Tu información financiera es privada.</p>
          </div>

          {/* Card 6 */}
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </div>
            <h3>Personalización</h3>
            <p>Adapta la App a tu estilo. Elige entre temas visuales y configura tus propios porcentajes de comisión.</p>
          </div>
        </div>
      </section>
      {/* Scroll to Top Button */}

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${showScroll ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default LandingPage
