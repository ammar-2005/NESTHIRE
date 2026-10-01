import { useLayoutEffect } from 'react'

/**
 * Reusable: plays every `.anim-onview` element's animations when it scrolls
 * into view. Put this file in src/hooks/ and call useAnimOnView() once per page.
 */
export default function useAnimOnView(selector = '.anim-onview', options = {}) {
  useLayoutEffect(() => {
    const els = document.querySelectorAll(selector)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach((el) => el.classList.add('is-inview'))
      return
    }

    const root = document.documentElement
    root.classList.add('anim-ready')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px', ...options }
    )
    els.forEach((el) => io.observe(el))

    // anim-ready stays on <html> so other components using the hook keep working
    return () => io.disconnect()
  }, [selector])
}