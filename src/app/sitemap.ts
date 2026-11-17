import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

// The site is a single page. Search engines ignore "#section" links,
// so only the page itself is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
