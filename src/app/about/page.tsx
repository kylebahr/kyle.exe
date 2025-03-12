import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Kyle Bahr. I live in New York City, where I design the future.',
}

export default function About() {
  return (
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
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Kyle, and I like games.
          </h1>
          <p><em>(But first, I like asking why anyone’s playing.)</em></p>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>Grew up in a small town on the shores of Lake Michigan, the kind of place where people spend their whole lives and don’t bother questioning why. I ask <strong>“why”</strong> a lot. Why things work the way they do. Why people follow certain rules but ignore others. Why some people win and others don’t.</p>

          <p>That last question has always stuck with me. As a kid, I played every sport I could—fiercely competitive, hated losing. Size didn’t matter much early on—we were all just scrawny kids running around. But by high school, that changed. Basketball and baseball? No problem. Football? Different story.</p>

          <p>Getting steamrolled in practice every day made that obvious. Two weeks in, I called it. Didn’t matter how competitive I was—physics won. So I switched to cross country. Not because I loved running, but because it was the only other option that season.</p>

          <p>Turns out, I was pretty good at it. Ran a 15:43 5K my freshman year, set the school record, and by the time I graduated, I was one of the top long-distance runners in the state. But this isn’t a story about running. It was never about running. <strong>It was about picking the right game</strong>.</p>

          <p>Some people think success is about effort. Grind harder, outwork everyone, hustle until your eyeballs bleed. But if the odds aren’t in your favor, effort just means you lose slower. You can sprint all you want, but if you’re running the wrong way, who cares?</p>

          <p>This is something I think about a lot. In finance, there’s a phrase: <strong>“What do you win if you win?”</strong> You see it everywhere. Some growth team slaps together a referral program, sign-ups explode, and for a second, it looks like a win—until they realize they just incentivized thousands of fake accounts. Or you dangle a giveaway to boost webinar signups, crush your target, and then find yourself with a lead list full of people who just wanted a free iPad.</p>

        <p>The best players—whether in business, finance, or life—don’t just grind harder. They play games that are actually worth winning.</p>

        <p><strong>Marketing is full of bad games.</strong> The default move is always <em>“more.”</em> More leads, more spend, more channels—because volume looks like progress. But <strong>what do you win if you win?</strong> A pipeline full of tire-kickers? A dashboard full of metrics that look nice in a slide deck but don’t move the business forward?</p>

        <p>A number of years back, early in my career, I remember hearing—or maybe reading—something that stuck with me: <strong>Revenue is the only KPI that matters to non-marketing people.</strong> Not impressions. Not webinar registrants. Not the number of times someone “liked” a post on LinkedIn. <strong>Revenue.</strong></p>

        <p>Anyway, these are just some of the ways I think about games, business, decision-making, and whatever else I’m overanalyzing at any given moment.</p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/thatkylebahr/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/kylebahr" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/kylebahr/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hey@kyle-bahr.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hey@kyle-bahr.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
