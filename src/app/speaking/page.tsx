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
              "Led marketing for a new business unit, driving 16,000+ orders from 1,200+ law firms in year one—establishing traction in a competitive legal tech space.",
              "Scaled the supply side of a two-sided legal marketplace, building a managed network of 500+ process servers to fulfill law firm demand—automating logistics through a centralized tech layer.",
              "Winning over investors and press with aesthetics."
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
              "Scaled MRR from $58.6K → $138.3K (+136%) by driving demand gen, retention, product-led growth, PPC, and pricing optimizations.",
              "Increased CLTV/CAC from 2.88 → 4.34 by analyzing subscriber segmentation and uncovering a high-churn, low-value user base. Led a company-wide shift to focus on premium subscribers, optimizing product, onboarding, sales, and marketing for stickier, higher-LTV customers.",
              "Scaled a new eFiling product from $0 → $10K+ monthly revenue in 36 months through paid search, SEO, partnerships, email, and webinars—winning market share in a competitive space."
            ]}
            event="2019 — 2022"
            cta="Company website"
          />
        </SpeakingSection>
        <SpeakingSection title="Slow Money Institute">
          <Appearance
            title="Director of Marketing"
            description={[
              "Scaled deal flow from $30M (<250 deals) → $100M (1,000+ deals) in 6 years as part of a small leadership team, driving growth through events, decentralized investment clubs, and crowdfunding.",
              "Grew paid attendees (+34%) and event revenue ($320K → $525K) year-over-year by capitalizing on Facebook’s underpriced attention—engineering high-ROI paid + organic campaigns to maximize reach and ticket sales.",
              "Winning over investors and press with aesthetics."
            ]}
            event="2016 — 2019"
          />
          <Appearance
            href="https://slowmoney.org/"
            title="Growth Marketing Manager"
            description={[
              <>
                Rebuilt our nonprofit’s website end-to-end, replacing an outdated tech stack with a modern, high-performance platform—personally owning design, development, and content. 
                {" "}
                <a href="https://slowmoney.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  Visit site
                </a>.
              </>,
              "Led editorial and production for a bi-annual publication, managing content, design, and distribution while coordinating scores of unique contributors per issue. Positioned it as a fundraising + movement-building tool, expanding engagement and brand reach."
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
