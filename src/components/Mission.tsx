import { icons, type ModeCopy } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const { database: Database, creditCard: CreditCard, network: Network, target: Target } = icons

export function Mission({ copy }: { copy: ModeCopy }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="mission">
      <div className="mission reveal" ref={ref}>
        <div className="mission-title">
          What I&apos;m building right now, at <b>Lune</b>
        </div>
        <p className="mission-text">{copy.mission}</p>
        <div className="mission-icons">
          <div className="mi">
            <div className="mi-icon"><Database className="icon" /></div>
            <div className="mi-label">Data Enrichment</div>
          </div>
          <div className="mi">
            <div className="mi-icon"><CreditCard className="icon" /></div>
            <div className="mi-label">Card-Linked Offers</div>
          </div>
          <div className="mi">
            <div className="mi-icon"><Network className="icon" /></div>
            <div className="mi-label">Merchant Network</div>
          </div>
          <div className="mi">
            <div className="mi-icon"><Target className="icon" /></div>
            <div className="mi-label">Measurable ROI</div>
          </div>
        </div>
      </div>
    </section>
  )
}
