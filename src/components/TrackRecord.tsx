import { velocitySteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useBarReveal } from '../hooks/useBarReveal'

function VelocityStep({ role, date, height }: { role: string; date: string; height: number }) {
  const { ref, height: h } = useBarReveal(height)
  return (
    <div className="vstep">
      <div className="vbar" ref={ref} style={{ height: `${h}%` }} />
      <div className="vlabel">
        <div className="role">{role}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  )
}

export function TrackRecord() {
  const headRef = useReveal<HTMLDivElement>()
  const wrapRef = useReveal<HTMLDivElement>()
  const captionRef = useReveal<HTMLParagraphElement>()

  return (
    <section id="track">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">Career Velocity</div>
        <h2 className="section-title">Three years. Four titles.</h2>
      </div>
      <div className="velocity-wrap reveal" ref={wrapRef}>
        {velocitySteps.map((step) => (
          <VelocityStep key={step.role} {...step} />
        ))}
      </div>
      <p className="velocity-caption reveal" ref={captionRef}>
        Business Development Manager to global Head of Revenue in under three years, built on renewal strategy,
        regional expansion, and Tier 1 banking relationships, not tenure.
      </p>
    </section>
  )
}
