'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    duration: '1 min',
    title: 'STRONG START',
    content: (
      <>
        <div className="text-zinc-400 text-sm uppercase tracking-widest mb-4">GTC 2026 · Lima, Perú</div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
          De <span className="text-zinc-500 line-through">Hollywood BIM</span><br />
          <span className="text-green-400">a Agentes Inteligentes</span>
        </h1>
        <p className="text-xl text-zinc-400">Sergio Villanueva-Meyer · INFRATEK LLC</p>
        <div className="mt-8 text-zinc-600 text-sm">Gracias Salomé · Santos · Luis Ureta</div>
      </>
    )
  },
  {
    id: 2,
    duration: '2 min',
    title: 'WIIFM + LIVE DEMO STARTS',
    content: (
      <>
        <div className="text-green-400 text-sm uppercase tracking-widest mb-4">¿Qué vas a aprender hoy?</div>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Mientras hablo,<br />
          <span className="text-green-400">mis agentes trabajan.</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 text-left max-w-2xl">
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
            <div className="text-green-400 font-bold mb-1">DIAGNÓSTICO EXPRESS</div>
            <div className="text-zinc-400 text-sm">30 días comprimidos en 30 minutos</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
            <div className="text-green-400 font-bold mb-1">EN VIVO AHORA</div>
            <div className="text-zinc-400 text-sm">⏱️ El cronómetro empieza AQUÍ</div>
          </div>
        </div>
        <div className="mt-8 text-2xl font-bold text-yellow-400">⏱️ START</div>
      </>
    )
  },
  {
    id: 3,
    duration: '3 min',
    title: '¿QUÉ ESTÁ PASANDO?',
    content: (
      <>
        <div className="text-red-400 text-sm uppercase tracking-widest mb-4">Urgencia · Speed · Now</div>
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
          Hace <span className="text-green-400">2 días</span>,<br />
          Anthropic lanzó Dispatch.
        </h2>
        <div className="space-y-3 text-left max-w-2xl">
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex items-start gap-3">
            <span className="text-2xl">🤖</span>
            <div><div className="font-bold text-white">Darío Amodei (Anthropic CEO)</div><div className="text-zinc-400 text-sm">El movimiento de IA responsable que construye el futuro</div></div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <div><div className="font-bold text-white">Claude Dispatch</div><div className="text-zinc-400 text-sm">Controlas un agente de IA desde tu teléfono. Texto → trabajo terminado.</div></div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 border border-green-900 flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div><div className="font-bold text-green-400">YO ya lo tenía</div><div className="text-zinc-400 text-sm">WhatsApp → Dani → Debi. Lo llamo INFRATEK.</div></div>
          </div>
        </div>
        <div className="mt-6 text-3xl font-black text-red-400">¿Es seguro NO jugar?</div>
      </>
    )
  },
  {
    id: 4,
    duration: '5 min',
    title: 'BEAT 1: EL PROBLEMA',
    content: (
      <>
        <div className="text-yellow-400 text-sm uppercase tracking-widest mb-4">Therefore… → La industria AEC</div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          ¿<span className="text-green-400">Qué tan rápido</span><br />
          podemos ir?
        </h2>
        <div className="space-y-4 text-left max-w-2xl text-lg text-zinc-300">
          <p>📅 <strong>30 días</strong> para un diagnóstico de proyecto. Hoy: <strong className="text-green-400">2 minutos.</strong></p>
          <p>📊 Manual processes que deberían estar automatizados</p>
          <p>🔍 Oportunidades perdidas por falta de inteligencia en tiempo real</p>
          <p>🏗️ La industria AEC usa tecnología de hace 15 años</p>
        </div>
        <div className="mt-8 text-xl font-bold text-zinc-400 italic">
          "No ha sido fácil el cambio. Pero cualquiera puede hacerlo."
        </div>
      </>
    )
  },
  {
    id: 5,
    duration: '8 min ★',
    title: 'THE MEAT: WAGI + AGENTS',
    content: (
      <>
        <div className="text-green-400 text-sm uppercase tracking-widest mb-4">★ The Main Course ★</div>
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          El equipo que trabaja<br />
          <span className="text-green-400">mientras tú duermes</span>
        </h2>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {[
            { name: 'DANI', role: 'Chief of Staff', color: 'text-blue-400' },
            { name: 'DEBI', role: 'Tech Lead', color: 'text-green-400' },
            { name: 'GABI', role: 'BD / Ventas', color: 'text-yellow-400' },
            { name: 'ABU', role: 'CFO', color: 'text-purple-400' },
            { name: 'AWI', role: 'Comms', color: 'text-pink-400' },
          ].map(a => (
            <div key={a.name} className="bg-zinc-900 rounded-xl p-3 text-center border border-zinc-800">
              <div className={`font-black text-lg ${a.color}`}>{a.name}</div>
              <div className="text-zinc-500 text-xs">{a.role}</div>
            </div>
          ))}
        </div>
        <div className="bg-zinc-900 rounded-xl p-4 border border-green-800 text-left max-w-2xl">
          <div className="text-green-400 font-bold mb-1">WAGI — CDE para Agentes</div>
          <div className="text-zinc-400 text-sm">ACC/Aconex = para humanos. WAGI = para agentes. Operan 24/7, sin intervención humana.</div>
        </div>
        <div className="mt-4 bg-zinc-900 rounded-xl p-4 border border-zinc-700 text-left max-w-2xl">
          <div className="text-white font-bold mb-1">MCP para Autodesk Revit</div>
          <div className="text-zinc-400 text-sm">El primero del mundo. 22 tools, 7 categorías. El bridge entre IA y herramientas de construcción.</div>
        </div>
      </>
    )
  },
  {
    id: 6,
    duration: '5 min',
    title: 'BEAT 3: CLIMAX',
    content: (
      <>
        <div className="text-white text-sm uppercase tracking-widest mb-4">Esto es lo más importante</div>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          <span className="text-green-400">Esto es lo que tengo.</span><br />
          <span className="text-zinc-400">Y tú también puedes.</span>
        </h2>
        <div className="text-xl text-zinc-300 max-w-2xl text-left space-y-3">
          <p>🐚 <strong className="text-green-400">CONCH (El Carrucho)</strong> — Tu agente AEC. Lleva su casa donde va.</p>
          <p>🏗️ Build your own <strong>tool / agent / script / UNICORN</strong></p>
          <p>💬 <strong>"La llamada"</strong> — Alguien del público pide algo. Lo armamos AHORA.</p>
        </div>
        <div className="mt-8 text-2xl font-black text-yellow-400">
          ¿Juntos? En vivo. En este congreso. 🇵🇪
        </div>
      </>
    )
  },
  {
    id: 7,
    duration: '3 min',
    title: 'CIERRE / PITCH',
    content: (
      <>
        <div className="text-green-400 text-sm uppercase tracking-widest mb-4">Tú también puedes</div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          <span className="text-white">Build Your Own</span><br />
          <span className="text-green-400">INFRATEK.AI</span>
        </h2>
        <div className="grid grid-cols-3 gap-3 max-w-2xl mb-6 text-sm">
          {['Tu CDE', 'Tu Jarvis', 'Tu Webmaster', 'Tu SAM.gov', 'Tu Resume', 'Tu Curso'].map(item => (
            <div key={item} className="bg-zinc-900 rounded-lg p-3 text-center border border-zinc-800 text-zinc-300">{item}</div>
          ))}
        </div>
        <div className="text-zinc-400 text-lg">A medida de la <strong className="text-white">AEC Latinoamericana</strong></div>
        <div className="mt-4 text-2xl font-bold">Beta: <span className="text-green-400">$99/mes</span> <span className="text-zinc-600">→ Únete a la waitlist</span></div>
      </>
    )
  },
  {
    id: 8,
    duration: '2 min',
    title: 'LA INVITACIÓN',
    content: (
      <>
        <div className="text-zinc-400 text-sm uppercase tracking-widest mb-8">El rallying cry</div>
        <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8">
          El futuro de la construcción<br />
          se construye <span className="text-green-400">AQUÍ</span><br />
          <span className="text-zinc-500">— no en Silicon Valley</span>
        </h2>
        <p className="text-xl text-zinc-300">
          Y los invito a ser parte<br />
          de este proyecto.
        </p>
        <div className="mt-6 text-3xl">🇵🇪🦄</div>
      </>
    )
  },
  {
    id: 9,
    duration: '1 min',
    title: 'QR + CIERRE',
    content: (
      <>
        <div className="text-zinc-400 text-sm uppercase tracking-widest mb-6">Únete a la revolución AEC</div>
        <div className="bg-white rounded-2xl p-6 inline-block mb-6">
          <div className="text-black text-center">
            <div className="text-2xl font-black mb-1">infratek.ai</div>
            <div className="w-40 h-40 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-600 text-sm">QR CODE</div>
            <div className="text-sm mt-2 text-zinc-600">Waitlist → Beta</div>
          </div>
        </div>
        <div className="text-xl font-bold text-green-400">⏱️ STOP</div>
        <p className="text-zinc-400 mt-4">Mientras hablé, mis agentes diagnosticaron sus problemas.<br />
        <span className="text-white font-bold">¿Quieren ver el resultado?</span></p>
        <div className="mt-6 text-4xl font-black">Gracias. 🙏</div>
      </>
    )
  }
]

export default function SlidesPage() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent(c => Math.min(slides.length - 1, c + 1)), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const slide = slides[current]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Slide */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        {slide.content}
      </div>

      {/* Controls */}
      <div className="border-t border-zinc-800 p-4 flex items-center justify-between text-sm">
        <button onClick={prev} disabled={current === 0}
          className="px-4 py-2 bg-zinc-800 rounded-lg disabled:opacity-30 hover:bg-zinc-700 transition-colors">
          ← Anterior
        </button>
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">{slide.id}/9</span>
          <span className="text-green-400 font-bold">{slide.duration}</span>
          <span className="text-zinc-400">{slide.title}</span>
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-green-400' : 'bg-zinc-700'}`} />
            ))}
          </div>
        </div>
        <button onClick={next} disabled={current === slides.length - 1}
          className="px-4 py-2 bg-zinc-800 rounded-lg disabled:opacity-30 hover:bg-zinc-700 transition-colors">
          Siguiente →
        </button>
      </div>
    </div>
  )
}
