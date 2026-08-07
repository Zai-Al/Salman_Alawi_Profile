import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Projects() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="projects">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">Selected Work</div>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="proj-grid reveal" ref={gridRef}>
        {projects.map((p) => (
          <div className="proj-card" data-rel={p.rel} key={p.name}>
            <span className="proj-tag">{p.tag}</span>
            <div className="proj-name">{p.name}</div>
            <div className="proj-meta">{p.meta}</div>
            <div className="proj-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
