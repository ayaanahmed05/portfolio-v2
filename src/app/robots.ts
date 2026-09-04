// src/app/robots.ts
import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/utils'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}