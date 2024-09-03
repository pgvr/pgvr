import { NextSeo } from 'next-seo'
import WoImage from '@/images/wo.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'

export default function Uses() {
  return (
    <>
      <NextSeo
        nofollow
        noindex
        title="Wo - Patrick Göler von Ravensburg"
        description="So findest du mich"
        canonical="https://pgvr.dev/wo"
        openGraph={{
          url: 'https://pgvr.dev/wo',
          title: 'Wo – Patrick Göler von Ravensburg',
          description: 'So findest du mich',
        }}
      />
      <SimpleLayout title="🏡" intro="So findest du mich.">
        <div className="flex flex-col space-y-20">
          <a
            target="_blank"
            href="https://maps.app.goo.gl/w2KdBrRop4FvKiNu9"
            className="text-2xl font-medium text-zinc-800 hover:underline dark:text-zinc-100"
            rel="noreferrer"
          >
            🚗 Parken ↗︎
          </a>
          <a
            target="_blank"
            href="https://maps.app.goo.gl/wqodK5qyK35d7eiH8"
            className="text-2xl font-medium text-zinc-800 hover:underline dark:text-zinc-100"
            rel="noreferrer"
          >
            🏠 Wohnung ↗︎
          </a>
          <div className="max-w-sm">
            <Zoom>
              <Image src={WoImage} alt="Location" />
            </Zoom>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
