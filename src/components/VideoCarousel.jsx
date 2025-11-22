import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Loader2 } from 'lucide-react'
import { getJSON } from '../utils/api'

export default function VideoCarousel() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [active, setActive] = useState(0)

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const data = await getJSON('/api/videos')
        if (mounted) setVideos(data)
      } catch (e) {
        setError('Unable to load videos. Click to seed demo content.')
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const seed = async () => {
    try {
      await fetch(`${window.location.origin.replace('3000','8000')}/api/seed`, { method: 'POST' })
      const data = await getJSON('/api/videos')
      setVideos(data)
      setError('')
    } catch (e) {
      setError('Seeding failed')
    }
  }

  return (
    <section id="watch" className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Trending now</h2>
          {error && (
            <button onClick={seed} className="text-sm text-fuchsia-300 hover:text-fuchsia-200 underline">{error}</button>
          )}
        </div>

        {loading ? (
          <div className="h-40 grid place-items-center text-fuchsia-200/80">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-x-auto no-scrollbar pb-4">
              <div className="flex gap-4 min-w-full">
                {videos.map((v, i) => (
                  <motion.div key={v.id}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative w-72 shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer`}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="aspect-video w-full bg-gradient-to-tr from-fuchsia-600/40 to-cyan-600/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="flex items-center gap-2 text-white/90">
                        <Play className="w-4 h-4 opacity-80" />
                        <span className="text-xs uppercase tracking-wider opacity-80">{v.category || 'video'}</span>
                      </div>
                      <h3 className="mt-1 text-white font-semibold leading-snug line-clamp-2">{v.title}</h3>
                      <p className="mt-1 text-sm text-white/70 line-clamp-2">{v.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
