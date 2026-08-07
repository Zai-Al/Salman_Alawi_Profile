import { useEffect, useState } from 'react'
import { copy, type Mode } from './data/content'
import { useParallax } from './hooks/useParallax'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Mission } from './components/Mission'
import { TrackRecord } from './components/TrackRecord'
import { Metrics } from './components/Metrics'
import { Experience } from './components/Experience'
import { Credentials } from './components/Credentials'
import { PeerReview } from './components/PeerReview'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [mode, setMode] = useState<Mode>('commercial')

  useEffect(() => {
    document.body.classList.remove('mode-commercial', 'mode-academic')
    document.body.classList.add(`mode-${mode}`)
  }, [mode])

  useParallax()

  const modeCopy = copy[mode]

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <main>
        <Hero copy={modeCopy} />
        <div className="wrap">
          <Mission copy={modeCopy} />
          <TrackRecord />
          <Metrics />
          <Experience />
          <Credentials />
          <PeerReview />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
