import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame, Search } from 'lucide-react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3">
          <div className="flex items-center gap-2 text-white">
            <Flame className="w-5 h-5 text-fuchsia-300" />
            <span className="font-semibold">Beb</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-white/90">
            <a href="#watch" className="hover:text-white">Watch</a>
            <a href="#training" className="hover:text-white">Training</a>
            <a href="#" className="hover:text-white inline-flex items-center gap-2"><Search className="w-4 h-4"/>Search</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="sm:hidden text-white">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="sm:hidden mt-2 mx-6 rounded-xl bg-white/10 backdrop-blur border border-white/15 text-white">
            <div className="p-4 space-y-2">
              <a href="#watch" className="block py-2">Watch</a>
              <a href="#training" className="block py-2">Training</a>
              <a href="#" className="block py-2">Search</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
