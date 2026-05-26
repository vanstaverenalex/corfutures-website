export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a12] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-2xl flex items-center justify-center font-black text-3xl shadow-lg">CF</div>
            <div className="font-black text-3xl tracking-[-1px]">cor futures</div>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#hub" className="hover:text-[#a855f7]">Trader Hub</a>
            <a href="#orbit" className="hover:text-[#a855f7]">Orbit</a>
            <a href="#edge" className="hover:text-[#a855f7]">Edge Program</a>
          </div>

          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-white/90">
            Join Free
          </button>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl font-black tracking-[-4px] leading-none">
            Master the Markets.<br/>
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Trade with Purpose.</span>
          </h1>
          <p className="mt-6 text-2xl text-white/70">The modern futures trading community</p>
        </div>

        {/* Cards */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-[#111118] border border-white/10 rounded-3xl p-8 hover:border-[#a855f7] transition-all">
            <div className="uppercase text-xs tracking-widest text-[#a855f7]">FREE FOREVER</div>
            <h2 className="text-4xl font-bold mt-6">Trader Hub</h2>
            <p className="mt-6 text-white/70">Community • Live trade rooms • Daily market outlooks • Lessons</p>
          </div>

          <div className="bg-[#111118] border border-[#a855f7] rounded-3xl p-8 relative">
            <div className="absolute -top-3 right-8 bg-[#a855f7] text-black text-xs font-bold px-5 py-1 rounded-full">MOST POPULAR</div>
            <div className="uppercase text-xs tracking-widest text-[#a855f7]">MONTHLY</div>
            <h2 className="text-4xl font-bold mt-6">$57/mo</h2>
            <p className="mt-6 text-white/70">Live coaching • Indicators • Strategies • Priority access</p>
          </div>

          <div className="bg-[#111118] border border-white/10 rounded-3xl p-8 hover:border-[#a855f7] transition-all">
            <div className="uppercase text-xs tracking-widest text-[#a855f7]">ONE-TIME</div>
            <h2 className="text-4xl font-bold mt-6">The Edge Program</h2>
            <p className="mt-6 text-white/70">$297 self-paced • $497 with live coaching</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-12 py-5 rounded-3xl text-xl font-semibold hover:scale-105 transition">
            Join the Free Trader Hub →
          </button>
        </div>
      </div>
    </main>
  );
}
