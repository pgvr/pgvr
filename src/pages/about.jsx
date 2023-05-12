import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import Image from 'next/future/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Patrick Göler von Ravensburg"
        description="I’m Patrick Göler von Ravensburg. I live in Munich, where I help to build the carbon accounting platform of the future."
        canonical="https://pgvr.dev/about"
        openGraph={{
          url: 'https://pgvr.dev/about',
          title: 'About – Patrick Göler von Ravensburg',
          description:
            'I’m Patrick Göler von Ravensburg. I live in Munich, where I help to build the carbon accounting platform of the future.',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Patrick, I live in Munich, where I help to build the carbon
              accounting platform of the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;d love to tell a great story about how I was 5 years old
                and already tinkering with computers. The reality is that I had
                no clue about programming until after high school. As soon as I
                got into university and my first job, I became really passionate
                about it and pursued it further.
              </p>
              <p>
                The thing that facinates me about software is how you can create
                value for youself and others, practically out of thin air.
                It&apos;s a bit like magic, given a laptop and an internet
                connection, anyone can learn about software development and
                start their own business.
              </p>
              <p>
                Nowadays, schools are starting to incorporate basic computer
                science into their curriculum. I&apos;m excited to see what kind
                of opportunities this will open up in the future and what the
                next company in the FAANG club will be.
              </p>
              <p>
                Today, I’m the co-founder of{' '}
                <a
                  className="font-bold"
                  href="https://productlane.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  Productlane
                </a>
                , where we build software to help companies do product
                discovery.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/patrick_gvr"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/pgvr"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/pgvr"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mail@pgvr.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mail@pgvr.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
