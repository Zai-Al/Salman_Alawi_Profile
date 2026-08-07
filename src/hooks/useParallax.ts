import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const heroBg = document.querySelector<HTMLElement>('.hero-bg')
    const heroSkyline = document.querySelector<HTMLElement>('.skyline')
    const heroSection = document.querySelector<HTMLElement>('.hero')
    const parallaxBlocks = document.querySelectorAll<HTMLElement>('[data-parallax]')
    let ticking = false

    function updateParallax() {
      const y = window.scrollY
      const heroHeight = heroSection ? heroSection.offsetHeight : 600
      if (y < heroHeight + 200) {
        if (heroBg) heroBg.style.transform = `translateY(${y * 0.18}px)`
        if (heroSkyline) heroSkyline.style.transform = `translateY(${y * 0.09}px)`
      }
      parallaxBlocks.forEach((block) => {
        const speed = parseFloat(block.getAttribute('data-parallax') || '0')
        const rect = block.getBoundingClientRect()
        const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2
        const translate = Math.max(-18, Math.min(18, centerOffset * speed * -0.035))
        block.style.transform = `translateY(${translate}px)`
      })
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateParallax()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
