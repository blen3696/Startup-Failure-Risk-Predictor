import { motion } from "framer-motion"

export default function PredictionResult({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 border border-white/10 p-6 bg-black/40"
    >
      <h3 className="text-xl font-semibold">
        Failure Probability
      </h3>

      <p className="text-4xl font-bold mt-2 text-red-500">
        {(data.failure_probability * 100).toFixed(1)}%
      </p>

      <p className="text-gray-400 mt-2">
        Risk Level: <span className="text-white">{data.risk_level}</span>
      </p>
    </motion.div>
  )
}
