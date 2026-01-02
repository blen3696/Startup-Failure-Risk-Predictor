export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-3 text-xl font-bold">
        <div className="w-9 h-9 bg-red-600 text-black flex items-center justify-center">
          S
        </div>
        StartupRisk
      </div>

      <button className="bg-red-600 text-black px-6 py-2 text-sm font-semibold hover:opacity-90 transition">
        LOGIN_ACCESS
      </button>
    </nav>
  )
}
