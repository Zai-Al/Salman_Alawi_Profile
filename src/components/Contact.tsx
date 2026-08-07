import { Mail } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { LinkedInIcon } from './LinkedInIcon'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="contact" style={{ borderTop: 'none' }}>
      <div className="sting reveal" ref={ref}>
        <p className="line">Same ten years. Same result.</p>
        <div className="sting-underline" aria-hidden="true" />
        <div className="sting-actions">
          <a className="btn btn-primary" href="mailto:salman_alawi@hotmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="icon" />
            Email Salman
          </a>
          <a className="btn btn-ghost" href="https://www.linkedin.com/in/salman-alawi-58a9b0a1/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
