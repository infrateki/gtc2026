'use client'

import { useState, useEffect, useCallback } from 'react'

// ─── SLIDE DATA ─────────────────────────────────────────────────────────────
const slides = [
  { id: 1, label: 'Intro' },
  { id: 2, label: 'Demo' },
  { id: 3, label: 'Urgencia' },
  { id: 4, label: 'Problema' },
  { id: 5, label: 'WAGI' },
  { id: 6, label: 'Tú puedes' },
  { id: 7, label: 'Pitch' },
  { id: 8, label: 'Llamado' },
  { id: 9, label: 'Cierre' },
]

// ─── SLIDE CONTENT ──────────────────────────────────────────────────────────
function Slide1() {
  return (
    <div className="slide-content">
      <div className="eyebrow">GTC 2026 · Lima, Perú</div>
      <h1 className="hero-text" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
        Hoy{' '}
        <span className="strike">NO</span>{' '}
        vamos a hablar<br />
        de Hollywood BIM.
      </h1>
      <p className="subtext">Sergio Villanueva-Meyer · INFRATEK LLC</p>
    </div>
  )
}

function Slide2() {
  return (
    <div className="slide-content">
      <div className="eyebrow accent">En vivo · Ahora</div>
      <h1 className="hero-text" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>
        El reloj corre.<br />
        <span className="text-accent">Mis agentes</span><br />
        trabajan.
      </h1>
      <div className="stat-badge">⏱️ START</div>
    </div>
  )
}

function Slide3() {
  return (
    <div className="slide-content">
      <div className="eyebrow urgent">Urgencia · Speed · Now</div>
      <h1 className="hero-text" style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}>
        Hace <span className="text-accent">3 días</span>,<br />
        Anthropic lanzó Dispatch.
      </h1>
      <div className="question-callout">¿Es seguro NO jugar?</div>
    </div>
  )
}

function Slide4() {
  return (
    <div className="slide-content">
      <div className="eyebrow">Lima, 1998.</div>
      <div className="mega-stat">3 SEMANAS</div>
      <h2 className="mid-text">para un dato que tarda</h2>
      <div className="mega-stat" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', color: '#00ff88' }}>30 segundos</div>
    </div>
  )
}

function Slide5() {
  const agents = [
    { name: 'DANI', role: 'Chief of Staff', color: '#60a5fa' },
    { name: 'DEBI', role: 'Tech Lead', color: '#00ff88' },
    { name: 'GABI', role: 'BD / Ventas', color: '#fbbf24' },
    { name: 'ABU', role: 'CFO', color: '#c084fc' },
    { name: 'AWI', role: 'Comms', color: '#f472b6' },
  ]
  return (
    <div className="slide-content">
      <h1 className="hero-text" style={{ fontSize: 'clamp(4rem, 12vw, 11rem)', letterSpacing: '-0.02em' }}>
        WAGI
      </h1>
      <p className="subtext" style={{ marginBottom: '2rem' }}>El primer CDE para agentes, no para humanos</p>
      <div className="agents-row">
        {agents.map(a => (
          <div key={a.name} className="agent-chip" style={{ borderColor: a.color + '44' }}>
            <span className="agent-name" style={{ color: a.color }}>{a.name}</span>
            <span className="agent-role">{a.role}</span>
          </div>
        ))}
      </div>
      <div className="tag-line">+ Primer MCP para Revit</div>
    </div>
  )
}

function Slide6() {
  return (
    <div className="slide-content">
      <h1 className="hero-text" style={{ fontSize: 'clamp(2.2rem, 6vw, 5.5rem)' }}>
        Cualquiera puede construir<br />
        sus propias herramientas.
      </h1>
      <div className="divider" />
      <p className="subtext large">No necesitas Silicon Valley.</p>
    </div>
  )
}

function Slide7() {
  const cards = ['Tu CDE', 'Tu Jarvis', 'Tu Monitor', 'Tu Webmaster', 'Tu CV', 'Tu Curso']
  return (
    <div className="slide-content">
      <h1 className="hero-text" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', marginBottom: '2.5rem' }}>
        Build Your Own <span className="text-accent">INFRATEK</span>
      </h1>
      <div className="cards-grid">
        {cards.map(c => (
          <div key={c} className="card">{c}</div>
        ))}
      </div>
      <div className="price-tag">Beta: <span className="text-accent">$99/mes</span></div>
    </div>
  )
}

function Slide8() {
  return (
    <div className="slide-content">
      <h1 className="hero-text" style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}>
        El futuro de la construcción<br />
        se construye{' '}
        <span className="text-accent">AQUÍ</span>
      </h1>
      <p className="subtext muted" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', marginTop: '1rem' }}>
        — no en Silicon Valley
      </p>
      <div style={{ fontSize: '4rem', marginTop: '2rem' }}>🇵🇪</div>
    </div>
  )
}

function Slide9() {
  return (
    <div className="slide-content">
      <h1 className="hero-text" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', marginBottom: '1.5rem' }}>
        Gracias 🙏
      </h1>
      <p className="subtext large" style={{ marginBottom: '2rem' }}>infratek.ai</p>
      <div className="qr-box">
        <div className="qr-inner" />
        <p style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '0.5rem' }}>infratek.ai/waitlist</p>
      </div>
    </div>
  )
}

const SLIDE_COMPONENTS = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9]

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function SlidesPage() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent(c => Math.min(slides.length - 1, c + 1)), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const SlideComponent = SLIDE_COMPONENTS[current]
  const slide = slides[current]

  return (
    <>
      <style>{`
        /* ── RESET & BASE ─────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          height: 100%;
          background: #000;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
        }

        /* ── LAYOUT ────────────────────────────────── */
        .slide-wrapper {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          background: #000;
        }

        .slide-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 6vw;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid texture */
        .slide-area::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ── SLIDE CONTENT ─────────────────────────── */
        .slide-content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          max-width: 1100px;
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── TYPOGRAPHY ────────────────────────────── */
        .eyebrow {
          font-size: clamp(0.65rem, 1.5vw, 0.9rem);
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #71717a;
          margin-bottom: 0.75rem;
        }
        .eyebrow.accent { color: #00ff88; }
        .eyebrow.urgent { color: #f87171; }

        .hero-text {
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
        }

        .text-accent { color: #00ff88; }

        .strike {
          text-decoration: line-through;
          color: #52525b;
        }

        .subtext {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 400;
          color: #a1a1aa;
          margin-top: 1rem;
        }
        .subtext.large {
          font-size: clamp(1.3rem, 3vw, 2rem);
          color: #d4d4d8;
          font-weight: 500;
        }
        .subtext.muted { color: #52525b; }

        .mid-text {
          font-size: clamp(1.2rem, 3vw, 2.2rem);
          font-weight: 500;
          color: #a1a1aa;
          margin: 0.5rem 0;
        }

        .mega-stat {
          font-size: clamp(4rem, 12vw, 10rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #fff;
        }

        /* ── SPECIAL ELEMENTS ──────────────────────── */
        .stat-badge {
          display: inline-block;
          margin-top: 2rem;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #fbbf24;
          border: 2px solid #fbbf2444;
          border-radius: 999px;
          padding: 0.4em 1.2em;
        }

        .question-callout {
          margin-top: 2.5rem;
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #f87171;
        }

        .divider {
          width: 60px;
          height: 2px;
          background: #00ff88;
          border-radius: 2px;
          margin: 1.5rem 0;
        }

        /* ── AGENTS ROW ────────────────────────────── */
        .agents-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .agent-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid;
          border-radius: 12px;
          padding: 0.6rem 1rem;
          background: rgba(255,255,255,0.03);
          min-width: 80px;
        }

        .agent-name {
          font-size: clamp(0.85rem, 2vw, 1.1rem);
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .agent-role {
          font-size: 0.65rem;
          color: #71717a;
          margin-top: 0.2rem;
        }

        .tag-line {
          margin-top: 1.5rem;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: #71717a;
          border: 1px solid #27272a;
          border-radius: 999px;
          padding: 0.35em 1em;
        }

        /* ── CARDS GRID ────────────────────────────── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          width: 100%;
          max-width: 660px;
          margin: 0 auto;
        }

        .card {
          background: rgba(255,255,255,0.04);
          border: 1px solid #27272a;
          border-radius: 14px;
          padding: 1rem;
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          font-weight: 600;
          color: #d4d4d8;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
        }

        .card:hover {
          border-color: #00ff8844;
          background: rgba(0,255,136,0.05);
        }

        .price-tag {
          margin-top: 1.5rem;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 700;
          color: #a1a1aa;
        }

        /* ── QR BOX ─────────────────────────────────── */
        .qr-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-inner {
          width: clamp(100px, 18vw, 160px);
          height: clamp(100px, 18vw, 160px);
          background: #fff;
          border-radius: 12px;
        }

        /* ── BOTTOM BAR ────────────────────────────── */
        .bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 2rem;
          border-top: 1px solid #18181b;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(12px);
          flex-shrink: 0;
        }

        .nav-btn {
          background: #18181b;
          border: 1px solid #27272a;
          color: #a1a1aa;
          border-radius: 8px;
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.15s;
        }
        .nav-btn:hover:not(:disabled) {
          background: #27272a;
          color: #fff;
          border-color: #3f3f46;
        }
        .nav-btn:disabled {
          opacity: 0.2;
          cursor: default;
        }

        .slide-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.75rem;
        }

        .slide-counter {
          color: #52525b;
          font-variant-numeric: tabular-nums;
        }

        .slide-label {
          color: #71717a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.7rem;
        }

        .dots {
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #27272a;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }
        .dot.active {
          background: #00ff88;
          width: 18px;
          border-radius: 3px;
        }
        .dot:hover:not(.active) {
          background: #52525b;
        }
      `}</style>

      <div className="slide-wrapper">
        {/* Main slide area */}
        <div className="slide-area" key={current}>
          <SlideComponent />
        </div>

        {/* Bottom controls */}
        <div className="bottom-bar">
          <button className="nav-btn" onClick={prev} disabled={current === 0}>
            ← Anterior
          </button>

          <div className="slide-info">
            <span className="slide-counter">{slide.id} / {slides.length}</span>
            <span className="slide-label">{slide.label}</span>
            <div className="dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>

          <button className="nav-btn" onClick={next} disabled={current === slides.length - 1}>
            Siguiente →
          </button>
        </div>
      </div>
    </>
  )
}
