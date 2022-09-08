const title = 'Patrick Göler von Ravensburg – Software Engineer'
const description =
  "My name is Patrick Göler von Ravensburg and I'm a Software Engineer, disc golfer and space enthusiast"

const SEO = {
  title,
  description,
  canonical: 'https://pgvr.dev',
  openGraph: {
    type: 'website',
    locale: 'en_DE',
    url: 'https://pgvr.dev',
    title,
    description,
    images: [
      {
        url: 'https://pgvr.dev/banner.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@patrick_gvr',
    site: '@patrick_gvr',
    cardType: 'summary_large_image',
  },
}

export default SEO
