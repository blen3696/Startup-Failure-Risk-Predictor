import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import GridBackground from "../components/layout/GridBackground"
import PredictionResult from "../components/PredictionResult"
import { predictFailure } from "../api/predict"

export default function Home() {
  const [form, setForm] = useState({
    funding_total_usd: "",
    funding_rounds: "",
    years_active: "",
    burn_rate: "",
    revenue_growth: "",
    category: "Apps"
  })

  const [result, setResult] = useState(null)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handlePredict = async () => {
    const payload = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, isNaN(v) ? v : Number(v)])
    )

    const res = await predictFailure(payload)
    setResult(res)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-10 pt-24">
        <h1 className="text-6xl font-bold leading-tight">
          Predict. Analyze. <span className="text-red-600">Survive.</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          AI-powered startup failure prediction using funding history,
          burn rate, growth metrics, and operational lifespan.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-6">
          {Object.entries(form).map(([key, value]) => (
            <input
              key={key}
              name={key}
              placeholder={key.replaceAll("_", " ")}
              value={value}
              onChange={handleChange}
              className="bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600"
            />
          ))}
        </div>

        <button
          onClick={handlePredict}
          className="mt-8 bg-red-600 text-black px-8 py-3 font-semibold hover:opacity-90 transition"
        >
          Predict Failure
        </button>

        {result && <PredictionResult data={result} />}
      </main>
    </div>
  )
}
