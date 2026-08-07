import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, threshold = 0.4) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const duration = 1100
          const start = performance.now()
          function tick(now: number) {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(entry.target)
        })
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, threshold])

  return { ref, value }
}
