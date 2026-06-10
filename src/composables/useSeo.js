import { useHead } from '@unhead/vue'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.iesantarosatarapoto.edu.pe'
const SITE_NAME = 'I.E. Santa Rosa'
const DEFAULT_DESCRIPTION =
  'Institución Educativa Santa Rosa — Tarapoto, San Martín. Formando estudiantes con valores, excelencia académica y compromiso con el futuro.'
const OG_IMAGE = `${SITE_URL}/og-image.png`

export function useSeo({ title, description = DEFAULT_DESCRIPTION, path = '/', image = OG_IMAGE } = {}) {
  const fullTitle = title ? `${title} | ${SITE_NAME} — Tarapoto` : `${SITE_NAME} — Educación de Calidad en Tarapoto`
  const canonical = `${SITE_URL}${path}`

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: canonical },
    ],
  })
}
