import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-2">
          <p className="text-zinc-400 text-sm uppercase tracking-widest">GTC 2026 · Lima, Perú · 20 Marzo</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            De Hollywood BIM<br />
            <span className="text-green-400">a Agentes Inteligentes</span>
          </h1>
          <p className="text-zinc-400 text-lg">Sergio Villanueva-Meyer · INFRATEK LLC</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/slides"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Ver Presentación →
          </Link>
          <Link
            href="/teleprompter"
            className="border border-zinc-600 hover:border-zinc-400 text-white px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Teleprompter
          </Link>
          <Link
            href="/waitlist"
            className="border border-green-600 hover:border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Únete a INFRATEK
          </Link>
        </div>

        <div className="pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            INFRATEK LLC · infratek.ai · Puerto Rico 🇵🇷
          </p>
        </div>
      </div>
    </main>
  )
}
