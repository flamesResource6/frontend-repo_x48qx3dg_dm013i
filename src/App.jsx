import Hero from './components/Hero'
import NavBar from './components/NavBar'
import VideoCarousel from './components/VideoCarousel'
import Training from './components/Training'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar />
      <Hero />
      <VideoCarousel />
      <Training />
      <footer className="py-10 text-center text-white/60">Made with neon vibes ✨</footer>
    </div>
  )
}

export default App
