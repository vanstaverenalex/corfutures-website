export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-8xl font-black tracking-tighter mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          CorFutures
        </h1>
        <p className="text-3xl text-white/70 mb-12">Master the markets. Trade with purpose.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Trader Hub */}
          <div className="bg-[#111118] p-8 rounded-3xl border border-white/10">
            <div className="text-purple-400 text-sm tracking-widest mb-4">FREE</div>
            <h2 className="text-4xl font-bold mb-6">Trader Hub</h2>
            <p className="text-white/70">Community • Lessons • Live rooms</p>
          </div>

          {/* Orbit */}
          <div className="bg-[#111118] p-8 rounded-3xl border border-purple-500/50 relative">
            <div className="absolute -top-3 right-6 bg-purple-600 text-white text-xs px-4 py-1 rounded-full">MOST POPULAR</div>
            <div className="text-purple-400 text-sm tracking-widest mb-4">MONTHLY</div>
            <h2 className="text-4xl font-bold mb-6">$57/mo</h2>
            <p className="text-white/70">Live coaching + tools + strategies</p>
          </div>

          {/* Edge Program */}
          <div className="bg-[#111118] p-8 rounded-3xl border border-white/10">
            <div className="text-purple-400 text-sm tracking-widest mb-4">ONE-TIME</div>
            <h2 className="text-4xl font-bold mb-6">The Edge Program</h2>
            <p className="text-white/70">$297 or $497 with coaching</p>
          </div>
        </div>

        <button className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-2xl text-xl font-semibold">
          Join the Free Trader Hub
        </button>
      </div>
    </div>
  );
}
