import { credentials } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { CredentialCard } from './CredentialCard'

export function Credentials() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="credentials">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">Education &amp; Credentials</div>
        <h2 className="section-title">Regulator-backed, not self-declared.</h2>
      </div>
      <div className="cred-grid reveal" ref={gridRef}>
        {credentials.map((c) => (
          <CredentialCard key={c.name} credential={c} />
        ))}
      </div>
    </section>
  )
}
