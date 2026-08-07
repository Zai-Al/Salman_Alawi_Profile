import { useEffect, useRef, useState } from 'react'

export function useBarReveal(targetHeight: number, threshold = 0.4) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeight(targetHeight)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [targetHeight, threshold])

  return { ref, height }
}
