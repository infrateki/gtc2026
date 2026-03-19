'use client'

import { useState } from 'react'

const script = [
  {
    slide: 1,
    title: 'STRONG START (1 min)',
    text: `Gracias, Salomé. Gracias, Santos. Gracias, Luis.

Hoy... NO vamos a hablar de Hollywood BIM.

[PAUSA — deja que eso aterrice]

Soy Sergio Villanueva-Meyer. Fundador de INFRATEK LLC. Puerto Rico. Quince años en esta industria. Y en los últimos dos años, construí algo que no existía.

Hoy se los muestro.`
  },
  {
    slide: 2,
    title: 'WIIFM + CRONÓMETRO (2 min)',
    text: `¿Qué van a aprender en los próximos veintiocho minutos?

Van a ver, en tiempo real, cómo un equipo de agentes de inteligencia artificial trabaja para ustedes mientras yo hablo.

[INICIA EL CRONÓMETRO EN PANTALLA]

Hace cuánto tiempo un diagnóstico de proyecto tardaba treinta días? Hoy tarda treinta minutos. Y en algunos casos... dos minutos.

Mis agentes Dani y Debi están trabajando ahora mismo. Cuando llegue a la última diapositiva, les mostraré qué produjeron.`
  },
  {
    slide: 3,
    title: '¿QUÉ ESTÁ PASANDO? (3 min)',
    text: `Hace dos días — dos días antes de este congreso — Anthropic lanzó algo llamado Dispatch.

Dispatch te permite controlar un agente de IA desde tu teléfono. Le mandas un mensaje. El agente trabaja. Tú regresas al trabajo terminado.

Dario Amodei, el CEO de Anthropic, lleva años diciéndolo: los agentes son el futuro.

¿Y saben qué? Yo ya lo tenía. Lo hice con WhatsApp, con mis agentes Dani y Debi. Lo llamo INFRATEK.

[PAUSA]

¿Es seguro no jugar? ¿Están seguros que no están apostando al quedarse afuera de esto?

La pregunta no es "¿debemos usar IA?" La pregunta es: ¿podemos darnos el lujo de NO hacerlo?`
  },
  {
    slide: 4,
    title: 'EL PROBLEMA (5 min)',
    text: `Por tanto...

Si el mundo está moviéndose así de rápido, ¿qué significa eso para nuestra industria?

Cuántos de ustedes han pasado treinta días esperando un diagnóstico de un proyecto? Levanten la mano.

[PAUSA — mira al público]

Hoy eso tarda dos minutos. No estoy exagerando.

Cuántos han perdido una oportunidad porque no tenían la información a tiempo?

Cuántos siguen usando Excel para procesos que deberían estar automatizados?

No ha sido fácil el cambio. Yo mismo pasé años tratando de convencer a la industria de que había una mejor forma. La industria es lenta. Pero hoy... cualquiera puede hacerlo.`
  },
  {
    slide: 5,
    title: 'THE MEAT: AGENTES + WAGI (8 min ★)',
    text: `Les presento a mi equipo.

[SEÑALA CADA AGENTE]

Dani — mi Chief of Staff. Habla con ella por WhatsApp. En español o inglés. Veinticuatro horas al día.

Debi — mi lead de tecnología. Escribe código. Hace deploys. Trabaja mientras yo duermo.

Gabi — mi especialista en oportunidades. Monitorea SAM.gov todos los días. Me avisa cuando hay un contrato para nosotros.

Abu — mi CFO. Maneja las finanzas.

Awi — comunicaciones y contenido.

[PAUSA]

Ahora bien. Ellos necesitan un lugar donde trabajar. Un lugar donde leer documentos, escribir reportes, coordinar entre ellos.

Los humanos tienen ACC. Tienen Aconex. Tienen BIM360. Esas son plataformas para humanos.

Mis agentes tienen WAGI.

WAGI es el primer CDE diseñado para agentes, no para humanos. Ellos pueden leer y escribir en él veinticuatro siete, sin que yo les diga qué hacer.

Y el puente entre mis agentes y Autodesk Revit? Construí el primer servidor MCP del mundo para Revit. Veintidós herramientas. Siete categorías. Mis agentes pueden abrir, leer y modificar modelos BIM.`
  },
  {
    slide: 6,
    title: 'CLIMAX: ESTO ES LO QUE TENGO (5 min)',
    text: `Esto es lo más importante de todo lo que les voy a decir hoy.

[PAUSA LARGA]

Esto es lo que tengo.

Y tú también puedes tenerlo.

¿Conocen el cangrejo ermitaño? Lleva su casa donde va. Se adapta. Crece. Cambia de concha cuando la necesita.

Eso es INFRATEK para tu empresa. Tu agente lleva contigo todos tus proyectos, todos tus clientes, todas tus decisiones.

[LIVE DEMO — LA LLAMADA]

Ahora mismo, alguien del público va a pedirle algo a mis agentes.

[PIDE UN VOLUNTARIO O USA UN EJEMPLO PREPARADO]

Le decimos a Debi: construye esto. Y lo hace.

Juntos. En vivo. En este congreso. Ahora mismo.

[ESPERA EL RESULTADO]`
  },
  {
    slide: 7,
    title: 'PITCH (3 min)',
    text: `Bien. Entonces...

Build Your Own INFRATEK.

Tu CDE. Tu Jarvis. Tu webmaster. Tu monitor de SAM.gov. Tu CV inteligente. Tu propio curso.

A medida de la industria AEC latinoamericana.

No necesitan un departamento de TI. No necesitan millones de dólares. No necesitan a alguien de Silicon Valley.

Beta: noventa y nueve dólares al mes.

Pero más importante que el precio — los invito a ser parte de algo más grande.`
  },
  {
    slide: 8,
    title: 'LA INVITACIÓN (2 min)',
    text: `Creo — firmemente — que son muy pocos los jugadores en el mundo AEC-tech.

Y creo que esos jugadores pueden ser latinoamericanos.

El futuro de la construcción inteligente no se construye en Silicon Valley.

Se construye aquí. En Perú. En Latinoamérica. Con nosotros.

[PAUSA]

Y los invito a ser parte de este proyecto.`
  },
  {
    slide: 9,
    title: 'QR + CIERRE (1 min)',
    text: `[MUESTRA QR EN PANTALLA]

Escaneen esto. Es el acceso a la waitlist de INFRATEK.

Y antes de terminar —

[MUESTRA RESULTADO DE LOS AGENTES]

Mientras hablé treinta minutos... mis agentes diagnosticaron sus problemas reales.

Esto es lo que produjeron.

[PAUSA]

Gracias. 🙏`
  }
]

export default function TeleprompterPage() {
  const [current, setCurrent] = useState(0)
  const [fontSize, setFontSize] = useState(32)

  const slide = script[current]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Controls */}
      <div className="border-b border-zinc-800 p-3 flex items-center justify-between text-sm">
        <div className="flex gap-2">
          <button onClick={() => setFontSize(f => Math.max(20, f - 4))} className="px-3 py-1 bg-zinc-800 rounded">A-</button>
          <button onClick={() => setFontSize(f => Math.min(60, f + 4))} className="px-3 py-1 bg-zinc-800 rounded">A+</button>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-zinc-500">Slide {current + 1}/9</span>
          <span className="text-green-400 font-bold">{slide.title}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
            className="px-3 py-1 bg-zinc-800 rounded disabled:opacity-30">← Ant</button>
          <button onClick={() => setCurrent(c => Math.min(script.length - 1, c + 1))} disabled={current === script.length - 1}
            className="px-3 py-1 bg-zinc-800 rounded disabled:opacity-30">Sig →</button>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="flex gap-2 p-3 justify-center border-b border-zinc-900">
        {script.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-green-400' : 'bg-zinc-700'}`} />
        ))}
      </div>

      {/* Script */}
      <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <div className="whitespace-pre-line leading-relaxed text-zinc-100"
          style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}>
          {slide.text}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-zinc-800 p-4 flex gap-3">
        {script.map((s, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`text-xs px-2 py-1 rounded transition-colors ${i === current ? 'bg-green-600 text-white' : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
