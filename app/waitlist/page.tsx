export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-lg w-full text-center space-y-6">
        <p className="text-green-400 text-sm uppercase tracking-widest">INFRATEK.AI · Beta</p>
        <h1 className="text-4xl font-black">Build Your Own<br /><span className="text-green-400">INFRATEK</span></h1>
        <p className="text-zinc-400 text-lg">La plataforma de IA para equipos AEC latinoamericanos. Tu agente. Tu CDE. Tu ventaja.</p>

        <div className="space-y-3 text-left">
          {['Tu CDE propio', 'Tu Jarvis personalizado', 'Tu monitor de oportunidades', 'Tu webmaster IA', 'Desde $99/mes en Beta'].map(item => (
            <div key={item} className="flex items-center gap-3 text-zinc-300">
              <span className="text-green-400">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 space-y-4">
          <input type="email" placeholder="tu@empresa.com"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500" />
          <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg transition-colors">
            Únete a la Waitlist →
          </button>
        </div>

        <p className="text-zinc-600 text-sm">
          INFRATEK LLC · infratek.ai · Puerto Rico 🇵🇷<br />
          GTC 2026 Lima · Marzo 2026
        </p>
      </div>
    </main>
  )
}
