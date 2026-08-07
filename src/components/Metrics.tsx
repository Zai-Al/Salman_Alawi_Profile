import { metrics, type Metric } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

function MetricCard({ icon: Icon, target, prefix = '', suffix = '', label }: Metric) {
  const { ref, value } = useCountUp(target)
  return (
    <div className="metric-card">
      <div className="metric-ring">
        <Icon className="icon" />
      </div>
      <div className="metric-num" ref={ref}>
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

export function Metrics() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section>
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">By The Numbers</div>
        <h2 className="section-title">What the last three roles actually moved.</h2>
      </div>
      <div className="metric-grid reveal" ref={gridRef}>
        {metrics.map((m, i) => (
          <MetricCard key={i} {...m} />
        ))}
      </div>
    </section>
  )
}
