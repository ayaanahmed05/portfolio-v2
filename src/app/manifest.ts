import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ayaan Ahmed — Portfolio',
    short_name: 'Ayaan Ahmed',
    description: 'Software Engineer and Developer Portfolio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
  }
}