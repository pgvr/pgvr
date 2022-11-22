import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

const rewrites = async () => [
  {
    destination: 'https://cdn.splitbee.io/sb.js',
    source: '/sb.js',
  },
  {
    destination: 'https://hive.splitbee.io/:slug',
    source: '/sb-api/:slug',
  },
  {
    destination: 'https://taito-analytics.vercel.app/:path*',
    source: '/taito/:path*',
  },
]

const redirects = async () => {
  return [
    {
      source: '/blog/:path*',
      destination: '/articles/:path*',
      permanent: true,
    },
  ]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  rewrites,
  redirects,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
