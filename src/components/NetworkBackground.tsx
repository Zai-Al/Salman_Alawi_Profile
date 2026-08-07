import { useMemo } from 'react'

// Deterministic LCG, matching the original inline script so the pattern is stable across renders.
function buildNetwork() {
  let seed = 7
  function rand() {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  const seedCount = 22
  const pts = Array.from({ length: seedCount }, () => ({ x: rand() * 900, y: rand() * 380 }))
  const dots = pts.map((p) => ({ cx: p.x, cy: p.y, r: 1.4 + rand() * 1.3 }))
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = []
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x
      const dy = pts[i].y - pts[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 105) lines.push({ x1: pts[i].x, y1: pts[i].y, x2: pts[j].x, y2: pts[j].y })
    }
  }
  return { dots, lines }
}

export function NetworkBackground() {
  const { dots, lines } = useMemo(buildNetwork, [])

  return (
    <svg className="hero-bg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#e7c883" strokeWidth={1}>
        {lines.map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        ))}
      </g>
      <g id="netDots" fill="#e7c883">
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />
        ))}
      </g>
    </svg>
  )
}
