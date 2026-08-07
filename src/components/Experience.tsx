import { timeline } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Experience() {
  const headRef = useReveal<HTMLDivElement>()
  const tlRef = useReveal<HTMLDivElement>()

  return (
    <section>
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">Experience</div>
        <h2 className="section-title">One continuous career, in full.</h2>
      </div>
      <div className="tl reveal" ref={tlRef}>
        {timeline.map((item) => (
          <div className="tl-item" key={item.role + item.meta}>
            <div className="tl-dot" />
            <div className="tl-role">{item.role}</div>
            <div className="tl-org">{item.org}</div>
            <div className="tl-meta">{item.meta}</div>
            <ul className="tl-bullets">
              {item.bullets.map((b, i) => (
                <li data-rel={b.rel} key={i}>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
