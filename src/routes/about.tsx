import { createFileRoute } from "@tanstack/react-router";
import { ORG, VALUES } from "@/lib/site";
import { PageHero, Section, Card } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Meet Nneka Hall | PAIL Institute" }, { name: "description", content: "Learn about Nneka Hall, founder of Pregnancy and Infant Loss Institute, and her mission to transform compassionate care." }] }),
  component: About,
});

function About() {
  return <>
    <PageHero eyebrow="Meet our founder" title="Meet Nneka Hall">
      A Mother's Love. A Daughter's Legacy. A Mission to Transform Care.
    </PageHero>
    <Section>
      <div className="mx-auto max-w-3xl space-y-5">
        <h2 className="font-display text-3xl font-semibold text-primary">The woman behind PAIL Institute</h2>
        <p>For Nneka Hall, pregnancy and infant loss advocacy is more than a profession. Her lived experience as a mother informs a commitment to compassionate, culturally grounded, trauma-informed education and community-rooted care.</p>
        <p>Through the Pregnancy and Infant Loss Institute, Nneka works toward a future where families receive dignity and culturally relevant support, and professionals have the education needed to respond with compassion.</p>
        <p className="rounded-2xl bg-secondary p-5 text-sm text-muted-foreground">Nneka's personal photographs, detailed biography, professional credentials, and family story will be published only after her review and approval.</p>
      </div>
    </Section>
    <Section title="The mission and vision" tone="muted">
      <div className="grid gap-6 md:grid-cols-2"><Card title="Mission">{ORG.mission}</Card><Card title="Vision">{ORG.vision}</Card></div>
    </Section>
    <Section title="Our guiding values">
      <div className="grid gap-5 sm:grid-cols-2">{VALUES.map(v => <div key={v.title}><h3 className="font-semibold text-primary">{v.title}</h3><p className="text-muted-foreground">{v.text}</p></div>)}</div>
    </Section>
  </>;
}
