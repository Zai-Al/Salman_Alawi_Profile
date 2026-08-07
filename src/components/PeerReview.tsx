import { BookOpen } from 'lucide-react'
import { peerReviewJournals, peerReviewTotal } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

function TotalCount() {
  const { ref, value } = useCountUp(peerReviewTotal)
  return (
    <div className="pr-total-num" ref={ref}>
      {value}
    </div>
  )
}

function JournalCard({ journal, count }: { journal: string; count: number }) {
  const { ref, value } = useCountUp(count)
  return (
    <div className="pr-card">
      <div className="pr-icon">
        <BookOpen className="icon" />
      </div>
      <div className="pr-journal">{journal}</div>
      <div className="pr-count" ref={ref}>
        {value}
        <span> reviews</span>
      </div>
    </div>
  )
}

export function PeerReview() {
  const headRef = useReveal<HTMLDivElement>()
  const blockRef = useReveal<HTMLDivElement>()

  return (
    <section id="peer-review">
      <div className="section-head reveal" ref={headRef}>
        <div className="section-kicker">Academic Service</div>
        <h2 className="section-title">Certified Peer Reviewer — 3 International Journals</h2>
      </div>
      <div className="pr-block reveal" ref={blockRef}>
        <div className="pr-total">
          <TotalCount />
          <div className="pr-total-label">
            Manuscript reviews completed across three internationally indexed education journals.
          </div>
        </div>
        <div className="pr-grid">
          {peerReviewJournals.map((j) => (
            <JournalCard key={j.journal} {...j} />
          ))}
        </div>
      </div>
    </section>
  )
}
