import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { getJSON } from '../utils/api'

export default function Training() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const data = await getJSON('/api/trainings')
        if (mounted) setItems(data)
      } catch (e) {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  return (
    <section id="training" className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Training Hub</h2>
          <p className="mt-2 text-fuchsia-200/90">Bite-sized lessons to level up your streaming mastery.</p>
        </div>

        {loading ? (
          <div className="h-40 grid place-items-center text-fuchsia-200/80">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t, idx) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{t.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{t.summary}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-300 shrink-0" />
                </div>
                {t.steps?.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc pl-5">
                    {t.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
