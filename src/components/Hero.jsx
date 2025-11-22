import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-start justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-200/80">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" /> Live
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Beb Stream
          </h1>
          <p className="mt-3 text-fuchsia-100/90 text-base sm:text-lg max-w-xl">
            A playful, vibrant streaming experience with a built-in training hub. Dive into neon vibes and buttery animations.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#watch" className="px-5 py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold transition-colors">Start watching</a>
            <a href="#training" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Training</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
