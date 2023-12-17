import { NextSeo } from 'next-seo'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Patrick Göler von Ravensburg"
        description="Software I use, hardware I use, and overall cool stuff I use."
        canonical="https://pgvr.dev/uses"
        openGraph={{
          url: 'https://pgvr.dev/uses',
          title: 'Uses – Patrick Göler von Ravensburg',
          description:
            'Software I use, hardware I use, and overall cool stuff I use.',
        }}
      />
      <SimpleLayout
        title="Software I use, hardware I use, and overall cool stuff I use."
        intro="Over the years I found what tools and gadgets work for me when it comes to productivity and quality of life. Let me know if you discovered something you like here."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M2 Max 32GB">
              It&apos;s a beast. I love it.
            </Tool>
            <Tool title="Some kind of 34 inch ultra wide">
              Having to windows next to each other with plenty of space is
              really nice for anything, but especially for frontend development.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              I keep coming back to this one. I tried a bunch of mechanical
              keyboards, but there&apos;s something about the Magic Keyboard
              that I really like.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Minimaldesksetups Desk Pad">
              If I&apos;m going to sit at my desk for most of the day, might as
              well make it comfortable right?
            </Tool>
            <Tool title="Light bar">
              An Amazon basics light bar for some nice indirect light.
            </Tool>
            <Tool title="Bose QC 35 II">
              I can wear these all day and they don&apos;t hurt my ears. Great
              noise cancelling and sound too.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code / Neovim">
              I love VS Code and I recently started to use/learn Vim keybindings
              in VS Code. Vim nerds will probably roll their eyes but I think
              it&apos;s a great way to get started. Now, I&apos;m trying to
              fully get into Neovim after I had a bunch of issues with VS Code
              and sluggish performance. Nvchad makes it really easy to get into.
            </Tool>
            <Tool title="iTerm2">
              This was part of some setup guide I followed years ago and have
              been using it ever since.
            </Tool>
            <Tool title="Dracula">
              I use the Dracula Pro theme for pretty much everything and
              that&apos;s what I like about it. You get themes for iTerm, Slack,
              Chrome, VS Code, Vim so that everything looks nice together.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years. Prisma Studio is great when working locally, but
              for everything more complex TablePlus is very nice.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma is great and I use it for everything from high- to low
              fidelity, logos, brainstorming during meetings and much more.
            </Tool>
            <Tool title="Tailwind UI">
              Tailwind UI is a paid component and template library for
              Tailwindcss. I have bought this on the same day it initially it
              released and it it&apos;s worth every cent.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              As a developer myself, it&apos;s a delight to see and use great
              software. Raycast definitely falls within that category. It&apos;s
              a snappy, extensive and feature rich spotlight replacement with a
              very developer friendly API so that you can easily create your own
              extensions.
            </Tool>
            <Tool title="Linear">
              Linear is magical. The Linear team has managed to make an issue
              tracking tool that you actually enjoy using. The attention to
              detail, polish and great design are some of the many things that
              stand out when using it.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
