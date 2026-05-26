export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a12] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center font-black text-3xl">CF</div>
            <div>
              <span className="font-black text-3xl tracking-tighter">cor futures</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#hub" className="hover:text-purple-400 transition-colors">Trader Hub</a>
            <a href="#orbit" className="hover:text-purple-400 transition-colors">Orbit</a>
            <a href="#edge" className="hover:text-purple-400 transition-colors">Edge Program</a>
          </div>
          
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition">
            Join Free
          </button>
        </div>
      </nav>

      <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-black tracking-[-3px] leading-none mb-6">
          Master the Markets.<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Trade with Purpose.</span>
        </h1>
        
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          The modern home for serious futures traders
        </p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* Trader Hub */}
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all">
            <div className="text-purple-400 text-sm font-bold tracking-widest">FREE FOREVER</div>
            <h2 className="text-4xl font-bold mt-4">Trader Hub</h2>
            <p className="mt-6 text-white/70">Community • Live rooms • Daily market outlooks • Lessons</p>
          </div>

          {/* Orbit */}
          <div className="bg-[#111118] border border-purple-500 rounded-3xl p-8 relative">
            <div className="absolute -top-3 right-8 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
            <div className="text-purple-400 text-sm font-bold tracking-widest">MONTHLY</div>
            <h2 className="text-4xl font-bold mt-4">$57/mo</h2>
            <p className="mt-6 text-white/70">Live coaching • Advanced tools • Strategies • Priority access</p>
          </div>

          {/* Edge Program */}
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all">
            <div className="text-purple-400 text-sm font-bold tracking-widest">ONE-TIME</div>
            <h2 className="text-4xl font-bold mt-4">The Edge Program</h2>
            <p className="mt-6 text-white/70">$297 self-paced • $497 with live coaching</p>
          </div>
        </div>

        <button className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-3xl text-lg font-semibold hover:scale-105 transition">
          Join the Free Trader Hub →
        </button>
      </div>
    </main>
  );
}
