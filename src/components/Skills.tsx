import type { CSSProperties } from 'react'
import { academicSkills, commercialSkills, languages } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Skills() {
  const headRef = useReveal<HTMLDivElement>()
  const clustersRef = useReveal<HTMLDivElement>()
  const panelRef = useReveal<HTMLDivElement>()

  return (
    <section id="skills">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">Skills</div>
        <h2 className="section-title">The same competencies, read two ways.</h2>
      </div>
      <div className="skill-clusters reveal" ref={clustersRef}>
        <div className="cluster commercial">
          <h4>Commercial Competencies</h4>
          <div className="chip-row">
            {commercialSkills.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="cluster academic">
          <h4>Teaching Subjects</h4>
          <div className="chip-row">
            {academicSkills.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="language-panel reveal float-parallax" data-parallax="0.10" ref={panelRef}>
        <div className="language-head">
          <div>
            <h3>Language Fluency</h3>
            <span>Clear and presentation-ready for professional and academic settings.</span>
          </div>
        </div>
        <div className="lang-row">
          {languages.map((l) => (
            <div className="lang-card" key={l.name}>
              <div className="lang-top">
                <b>{l.name}</b>
                <span className="lang-level">{l.level}</span>
              </div>
              <div className="lang-bar">
                <div className="lang-fill" style={{ '--level': `${l.fill}%` } as CSSProperties} />
              </div>
              <div className="lang-note">{l.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
