import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: React.ReactNode | React.ReactNode[] // Now accepts JSX too
  event: string
  cta?: string // Make cta optional
  href?: string // Make href optional
}) {
  return (
    <Card as="article">
      {/* Only render the link if href exists */}
      {href ? (
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
      ) : (
        <Card.Title as="h3">{title}</Card.Title>
      )}
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>

      <Card.Description>
        {Array.isArray(description) ? (
          <ul className="list-disc list-outside pl-5 space-y-2">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          description
        )}
      </Card.Description>

      {/* Only render CTA if cta exists */}
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Worklog',
  description:
    'Here’s what I’ve worked on and why it mattered.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Here’s what I’ve worked on and why it mattered."
      intro="This isn’t just a resume—it’s a track record of building, fixing, and making things happen. Some big wins, some hard lessons, all progress."
    >
      <div className="space-y-20">
        <SpeakingSection title="InfoTrack">
          <Appearance
            href="https://www.infotrack.com/"
            title="Director of Marketing"
            description={[
              "Launched and drove marketing for a new business unit, generating 16,000+ orders from 1,200+ law firms in year one—carving out market share in a competitive legal tech space.",
              "Built the supply side of a two-sided legal marketplace, assembling a network of 500+ process servers to meet law firm demand."
            ]}
            event="2022 — Present"
            cta="Company website"
          />
        </SpeakingSection>
        <SpeakingSection title="ServeManager">
          <Appearance
            href="https://www.servemanager.com/"
            title="Director of Marketing"
            description={[
              "Grew MRR from $58.6K to $138.3K (+136%) by turning demand gen, retention, PPC, and pricing into revenue engines—leveraging product-led growth to compound gains.",
              "Boosted CLTV/CAC from 2.88 → 4.34 by identifying a high-churn, low-value segment and shifting focus to premium subscribers—optimizing product, onboarding, sales, and marketing to drive retention.",
              "Scaled an early-stage eFiling product into a $10K+/month revenue stream in 36 months, driving adoption through paid search, SEO, partnerships, email, and webinars in a competitive space."
            ]}
            event="2019 — 2022"
            cta="Company website"
          />
        </SpeakingSection>
        <SpeakingSection title="Slow Money Institute">
          <Appearance
            title="Director of Marketing"
            description={[
              "Expanded deal flow from $30M (<250 deals) to $100M (1,000+ deals) in six years by growing a decentralized network of investment clubs, crowdfunding initiatives, and high-impact events.",
              "Increased event revenue from $320K to $525K (+34% in paid attendees) year-over-year by capitalizing on Facebook’s underpriced attention—engineering high-ROI paid + organic campaigns to drive reach and ticket sales."
            ]}
            event="2016 — 2019"
          />
          <Appearance
            href="https://slowmoney.org/"
            title="Growth Marketing Manager"
            description={[
              <>
                Revamped our nonprofit’s web presence, replacing an outdated tech stack with a modern, high-performance platform—enhancing SEO, engagement, and conversion flow while personally leading design, development, and content. 
                {" "}
                <a 
                  href="https://slowmoney.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border-b border-zinc-500 text-zinc-700 dark:text-zinc-300 dark:border-zinc-400 hover:border-zinc-700 dark:hover:border-zinc-200"
                >
                  Visit site
                </a>
                .
              </>,
              "Launched a bi-annual publication from scratch, overseeing content, design, and distribution to establish it as a fundraising + movement-building tool—expanding reach, deepening engagement, and strengthening donor relationships."
            ]}
            event="2013 — 2016"
            cta="Company website"
          />
        </SpeakingSection>
        <SpeakingSection title="The Get-By Years">
          <Appearance
            title="Interim CEO of My Own Survival"
            description={[
              "Graduated into the Great Financial Crisis, so I went all-in on online poker—8-tabling Sit & Go's for 12 hours a day until the U.S. shut it down.",
              "With that door closed, I traded screens for slopes and spent a season as a snowboard instructor in Breckenridge.",
              "Stuck around for the summer and picked up a marketing gig with a whitewater rafting company.",
              "Eventually, I swapped mountain air for Miami heat, taking a Digital Strategist role and learning the agency side of marketing (while also learning that humidity isn’t for me).",
              "Colorado pulled me back, where I landed at a startup marketing agency, got deep into digital media, and started building the skills that would shape the rest of my career."
            ]}
            event="2010 — 2013"
          />
        </SpeakingSection>
        <SpeakingSection title="Education">
          <Appearance
            title="University of Minnesota"
            description={[
              "Bachelor of Science in Sport Marketing",
              <em key="emphasis">Emphasis in Entrepreneurial Management</em>
            ]}
            event="2006 — 2010"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
