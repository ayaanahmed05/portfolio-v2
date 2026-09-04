// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

import { SITE_URL } from '@/lib/utils'

// Safe date parser to handle "May 12th, 2025" style strings
function parsePublicationDate(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString()
  const cleaned = dateStr.replace(/(st|nd|rd|th)/g, '')
  const parsed = new Date(cleaned)
  return isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Static routes
  const staticRoutes = ['', '/projects', '/experience', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
  }))

  // Dynamic blog routes
  const blogPosts = getBlogPosts()
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parsePublicationDate(post.publishedAt),
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}