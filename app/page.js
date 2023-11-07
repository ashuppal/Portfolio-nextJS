import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutMe />
        <Projects/>
      </div>
    </main>

  )
}
