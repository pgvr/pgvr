import { NextSeo } from 'next-seo'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <NextSeo
        title="You’re subscribed - Patrick Göler von Ravensburg"
        description="Thanks for subscribing to my newsletter."
        canonical="https://pgvr.dev/thank-you"
        openGraph={{
          url: 'https://pgvr.dev/thank-you',
          title: 'You’re subscribed – Patrick Göler von Ravensburg',
          description: 'Thanks for subscribing to my newsletter.',
        }}
      />

      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
