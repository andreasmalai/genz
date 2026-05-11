function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-purple-900 text-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex flex-col items-center gap-5">
        {/* Avatar */}
        <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-sky-400 shadow-lg shadow-fuchsia-500/40" />

        {/* Handle + bio */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold tracking-tight">@genz_handle</h1>
          <p className="text-xs text-slate-300">
            late night builds · crypto · vibes only
          </p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mt-2">
          <button className="w-full rounded-full bg-white/10 border border-white/15 py-3 text-sm font-medium hover:bg-white/20 active:scale-95 transition">
            Main link
          </button>
          <button className="w-full rounded-full bg-white/10 border border-white/15 py-3 text-sm font-medium hover:bg-white/20 active:scale-95 transition">
            Instagram
          </button>
          <button className="w-full rounded-full bg-white/10 border border-white/15 py-3 text-sm font-medium hover:bg-white/20 active:scale-95 transition">
            Spotify
          </button>
        </div>

        {/* Footer */}
        <p className="text-[10px] text-slate-400 mt-1">
          built on github pages · 2026
        </p>
      </div>
    </div>
  )
}

export default App