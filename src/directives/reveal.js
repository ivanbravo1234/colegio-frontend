export default {
  mounted(el, binding) {
    const delay = typeof binding.value === 'number' ? binding.value : 0
    const direction = binding.arg || 'up'

    el.classList.add('reveal-base', `reveal-from-${direction}`)
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
  },
}
