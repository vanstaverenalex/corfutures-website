export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a12] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-2xl flex items-center justify-center font-black text-3xl">CF</div>
            <div className="font-black text-3xl tracking-[-1px]">cor futures</div>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#hub" className="hover:text-[#a855f7] transition-colors">Trader Hub</a>
            <a href="#orbit" className="hover:text-[#a855f7] transition-colors">Orbit</a>
            <a href="#edge" className="hover:text-[#a855f7] transition-colors">Edge Program</a>
          </div>

          <button className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:bg-white/90 transition">
            Join Free
          </button>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl font-black tracking-[-4px] leading-none mb-6">
          Master the Markets.<br/>
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Trade with Purpose.</span>
        </h1>
        <p className="text-2xl text-white/70">The modern home for serious futures traders</p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-10 hover:border-[#a855f7] transition-all">
            <div className="uppercase text-xs tracking-widest text-[#a855f7]">FREE FOREVER</div>
            <h2 className="text-4xl font-bold mt-6">Trader Hub</h2>
            <p className="mt-8 text-white/70 text-lg">Community • Live trade rooms • Daily market outlooks • Lessons</p>
          </div>

          <div className="bg-[#111118] border-2 border-[#a855f7] rounded-3xl p-10 relative">
            <div className="absolute -top-4 right-8 bg-[#a855f7] text-black text-xs font-bold px-6 py-1 rounded-full">MOST POPULAR</div>
            <div className="uppercase text-xs tracking-widest text-[#a855f7]">MONTHLY</div>
            <h2 className="text-4xl font-bold mt-6">$57/mo</h2>
            <p className="mt-8 text-white/70 text-lg">Live coaching • Indicators • Strategies • Priority access</p>
          </div>

          <div className="bg-[#111118] border border-white/10 rounded-3xl p-10 hover:border-[#a855f7] transition-all">
            <div className="uppercase text-xs tracking-widest text-[#a855f7]">ONE-TIME</div>
            <h2 className="text-4xl font-bold mt-6">The Edge Program</h2>
            <p className="mt-8 text-white/70 text-lg">$297 self-paced • $497 with live coaching</p>
          </div>
        </div>

        <button className="mt-16 bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-12 py-6 rounded-3xl text-xl font-semibold hover:scale-105 transition-all">
          Join the Free Trader Hub →
        </button>
      </div>
    </main>
  );
}
