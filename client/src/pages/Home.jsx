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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const placeholders = {
    funding_total_usd: "5000000",
    funding_rounds: "3",
    years_active: "4.5",
    burn_rate: "1000000",
    revenue_growth: "2.5",
    category: "Apps"
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handlePredict = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const payload = {
        funding_total_usd: Number(form.funding_total_usd),
        funding_rounds: Number(form.funding_rounds),
        years_active: Number(form.years_active),
        burn_rate: Number(form.burn_rate),
        revenue_growth: Number(form.revenue_growth),
        category: form.category
      }

      const response = await predictFailure(payload)
      setResult(response)
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        "Failed to get prediction. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-10 pt-24 pb-24">
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
              value={value}
              placeholder={`${key.replaceAll("_", " ")} (e.g. ${placeholders[key]})`}
              onChange={handleChange}
              className="bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600"
            />
          ))}
        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          className="mt-8 bg-red-600 text-black px-8 py-3 font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Predict Failure"}
        </button>

        {error && (
          <p className="mt-6 text-red-500">
            {error}
          </p>
        )}

        {result && <PredictionResult data={result} />}
      </main>
    </div>
  )
}

