export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a12] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center font-black text-3xl">CF</div>
            <div className="font-black text-3xl tracking-tighter">cor futures</div>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#hub" className="hover:text-purple-400">Trader Hub</a>
            <a href="#orbit" className="hover:text-purple-400">Orbit</a>
            <a href="#edge" className="hover:text-purple-400">Edge Program</a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-7xl md:text-8xl font-black tracking-[-4px] bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Master the Markets
        </h1>
        <p className="mt-6 text-2xl text-white/70">Futures Trading Community &amp; Education</p>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Trader Hub */}
          <div className="bg-[#111118] p-10 rounded-3xl border border-white/10">
            <div className="text-purple-400 text-sm tracking-widest">FREE FOREVER</div>
            <h2 className="text-4xl font-bold mt-4">Trader Hub</h2>
            <p className="mt-6 text-white/70">Community • Live rooms • Daily lessons • Real traders only</p>
          </div>

          {/* Orbit */}
          <div className="bg-[#111118] p-10 rounded-3xl border border-purple-500/50 relative">
            <div className="absolute -top-4 right-6 bg-purple-600 px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
            <div className="text-purple-400 text-sm tracking-widest">MONTHLY</div>
            <h2 className="text-4xl font-bold mt-4">$57/mo</h2>
            <p className="mt-6 text-white/70">Live coaching • Indicators • Strategies • Priority access</p>
          </div>

          {/* Edge Program */}
          <div className="bg-[#111118] p-10 rounded-3xl border border-white/10">
            <div className="text-purple-400 text-sm tracking-widest">ONE-TIME PAYMENT</div>
            <h2 className="text-4xl font-bold mt-4">The Edge Program</h2>
            <p className="mt-6 text-white/70">$297 self-paced • $497 with live coaching</p>
          </div>
        </div>

        <button className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-12 py-6 rounded-3xl text-xl font-semibold">
          Join the Free Trader Hub →
        </button>
      </div>
    </main>
  );
}
