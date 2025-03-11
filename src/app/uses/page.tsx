import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the tools I use to stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a list of the stuff that actually helps."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
          My old Intel MacBook had opinions about how many tabs I should open. This one lets me run 50, plus Excel and Spotify, without breaking a sweat.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”.
          </Tool>
          <Tool title="Apple Magic Keyboard with Touch ID">
          Nothing flashy—just works.
          </Tool>
          <Tool title="Apple Magic Mouse">
          Once you get used to it, everything else feels clunky.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
          If I’m going to slouch in the worst ergonomic position imaginable most of the day, this is the chair that lets me get away with it.
          </Tool>
          <Tool title="Deskhaus Apex Pro">
          And when I finally decide to stand, this is the desk that doesn’t make it a hassle. No wobble, no fuss—just up, down, done.
          </Tool>
          <Tool title="Klipsch ProMedia 2.1 THX">
          Good speakers make everything better. If I’m at my desk, these are on.
          </Tool>
          <Tool title="Audio-Technica ATH-M50x">
          When the house gets loud, these make sure I don’t notice.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Dev tools">
          <Tool title="Cursor">
          I held onto Atom for as long as I could. Went to VS Code like everyone else, then switched to Cursor for the AI.
          </Tool>
          <Tool title="Tailwind CSS">
          Spent years overthinking class names and writing way too much CSS. Tailwind fixed both—just build and move on.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
          Thought it was just for design—turns out, it’s for everything.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Marketing">
          <Tool title="Zurb Foundation for Emails">
          This actually makes email dev bearable—even keeps Outlook in check.
          </Tool>
          <Tool title="Semrush">
          The data’s good. The data’s also… debatable. Use accordingly.
          </Tool>
          <Tool title="Sendgrid">
          It doesn’t try to do too much. Just send the emails.
          </Tool>
          <Tool title="Trello">
          Keeps projects organized without turning into a second job.
          </Tool>
          <Tool title="ChatGPT & Claude">
          It's 2025—AI should be the default. ChatGPT for speed, Claude for depth.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Mobile">
          <Tool title="GrapheneOS">
          Privacy-focused, secure, and stripped of everything unnecessary.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
