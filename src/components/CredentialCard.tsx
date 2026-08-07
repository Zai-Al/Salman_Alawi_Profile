import { useEffect, useRef, useState } from 'react'
import type { Credential } from '../data/content'

export function CredentialCard({ credential }: { credential: Credential }) {
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const frontRef = useRef<HTMLDivElement | null>(null)
  const backRef = useRef<HTMLDivElement | null>(null)

  const syncHeight = () => {
    const card = cardRef.current
    const front = frontRef.current
    const back = backRef.current
    if (!card || !front || !back) return
    const targetHeight = Math.max(248, front.scrollHeight, back.scrollHeight) + 2
    card.style.height = `${targetHeight}px`
  }

  useEffect(() => {
    syncHeight()
    window.addEventListener('resize', syncHeight)
    return () => window.removeEventListener('resize', syncHeight)
  }, [])

  useEffect(() => {
    // Re-measure after the flip transition affects layout.
    const id = setTimeout(syncHeight, 0)
    return () => clearTimeout(id)
  }, [flipped])

  return (
    <div
      ref={cardRef}
      className={`cred-card${flipped ? ' flipped' : ''}`}
      data-rel={credential.rel}
      data-flipped={flipped ? 'true' : 'false'}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((f) => !f)
        }
      }}
    >
      <div className="cred-inner">
        <div className="cred-face front" ref={frontRef}>
          <div>
            <span className="cred-tag">{credential.tag}</span>
            <div className="cred-name">{credential.name}</div>
            <div className="cred-org">{credential.org}</div>
          </div>
          <div className="cred-flip-hint">Tap for detail</div>
        </div>
        <div className="cred-face back" ref={backRef}>
          <div className="cred-detail">{credential.detail}</div>
        </div>
      </div>
    </div>
  )
}
