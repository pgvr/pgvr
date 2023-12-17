import { SimpleLayout } from '@/components/SimpleLayout'
import { NextSeo } from 'next-seo'
import Image from 'next/future/image'

import basket from '@/images/photography/basket.jpg'
import bridge from '@/images/photography/bridge.jpg'
import cactus from '@/images/photography/cactus.jpg'
import coast from '@/images/photography/coast.jpg'
import dog from '@/images/photography/dog.jpg'
import eagle from '@/images/photography/eagle.jpg'
import green from '@/images/photography/green.jpg'
import guitar from '@/images/photography/guitar.jpg'
import ham from '@/images/photography/ham.jpg'
import man from '@/images/photography/man.jpg'
import path from '@/images/photography/path.jpg'
import rock from '@/images/photography/rock.jpg'
import sea from '@/images/photography/sea.jpg'
import smoke from '@/images/photography/smoke.jpg'
import sun from '@/images/photography/sun.jpg'
import tree from '@/images/photography/tree.jpg'
import tulips from '@/images/photography/tulips.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const photos = [
  {
    image: coast,
  },
  {
    image: path,
  },
  {
    image: bridge,
  },
  {
    image: basket,
  },
  {
    image: cactus,
  },
  {
    image: rock,
  },
  {
    image: tree,
  },
  {
    image: dog,
  },
  {
    image: eagle,
  },
  {
    image: green,
  },
  {
    image: guitar,
  },
  {
    image: ham,
  },
  {
    image: man,
  },
  {
    image: sea,
  },
  {
    image: smoke,
  },
  {
    image: sun,
  },
  {
    image: tulips,
  },
]

const imageClasses =
  'cursor-zoom-in rounded-md shadow-lg ring-2 ring-zinc-100 ring-offset-4 transition hover:scale-[103%] active:scale-100 dark:ring-zinc-300/20 dark:ring-offset-zinc-900'

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects - Patrick Göler von Ravensburg"
        description="Photos"
        canonical="https://pgvr.dev/photos"
        openGraph={{
          url: 'https://pgvr.dev/photos',
          title: 'Photos – Patrick Göler von Ravensburg',
          description: 'Some shots I have taken along the way.',
        }}
      />
      <SimpleLayout
        title="Photos"
        intro="Some shots I have taken along the way."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="block space-y-16 sm:hidden">
            {photos.map((photo, i) => (
              <div key={i}>
                <Zoom>
                  <Image src={photo.image} alt="" className={imageClasses} />
                </Zoom>
                {photo.caption && (
                  <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden space-y-16 sm:block lg:hidden">
            {photos.slice(0, photos.length / 2).map((photo, i) => (
              <div key={i}>
                <Zoom>
                  <Image src={photo.image} alt="" className={imageClasses} />
                </Zoom>
                {photo.caption && (
                  <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden space-y-16 sm:block lg:hidden">
            {photos.slice(photos.length / 2).map((photo, i) => (
              <div key={i}>
                <Zoom>
                  <Image src={photo.image} alt="" className={imageClasses} />
                </Zoom>
                {photo.caption && (
                  <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden space-y-16 lg:block">
            {photos.slice(0, photos.length / 3).map((photo, i) => (
              <div key={i}>
                <Zoom>
                  <Image src={photo.image} alt="" className={imageClasses} />
                </Zoom>
                {photo.caption && (
                  <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden space-y-16 lg:block">
            {photos
              .slice(photos.length / 3, (photos.length / 3) * 2)
              .map((photo, i) => (
                <div key={i}>
                  <Zoom>
                    <Image src={photo.image} alt="" className={imageClasses} />
                  </Zoom>
                  {photo.caption && (
                    <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                      {photo.caption}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="hidden space-y-16 lg:block">
            {photos.slice((photos.length / 3) * 2).map((photo, i) => (
              <div key={i}>
                <Zoom>
                  <Image src={photo.image} alt="" className={imageClasses} />
                </Zoom>
                {photo.caption && (
                  <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ul>
      </SimpleLayout>
    </>
  )
}
