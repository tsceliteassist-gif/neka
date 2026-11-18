import { createFileRoute, Link } from "@tanstack/react-router";
import { ORG, VALUES, CONFERENCE } from "@/lib/site";
import { Section, Card, Notice, btn, btnOutline } from "@/components/site/ui";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Meet Nneka Hall | PAIL Institute" },
    { name: "description", content: "Meet Nneka Hall and discover compassionate, culturally grounded pregnancy and infant loss education through PAIL Institute." },
  ] }),
  component: Home,
});

const pathways = [
  { to: "/contact", title: "I'm Seeking Support", description: "Reach out about available resources and ways to connect." },
  { to: "/academy", title: "I'm Here to Learn", description: "Discover education and training opportunities." },
  { to: "/academy", title: "I'm a Professional", description: "Explore culturally grounded, trauma-informed learning." },
  { to: "/partnerships", title: "I Want to Partner", description: "Connect around community programs and institutional collaboration." },
] as const;

function Home() {
  return <div>
    <section className="bg-hero">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Welcome to {ORG.short}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary sm:text-6xl">Every Story Matters. Every Life Matters. Every Family Deserves Compassion.</h1>
          <p className="mt-6 max-w-2xl text-lg">Whether you're navigating loss, learning how to support others, or working to transform care in your community, there is a place for you here.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className={btn}>Meet Nneka Hall</Link>
            <Link to="/academy" className={btnOutline}>Explore Learning</Link>
          </div>
        </div>
        <div className="hidden md:block"><Logo size={180}/></div>
      </div>
    </section>
    <Section>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-secondary p-10 text-center">
          <p className="text-5xl" aria-hidden="true">🦋</p>
          <p className="mt-4 font-display text-2xl font-semibold text-primary">Meet Nneka Hall</p>
          <p className="mt-2 text-sm text-muted-foreground">Founder portrait and personal welcome forthcoming with Nneka's approval.</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The woman behind the mission</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary">A Mother's Love. A Daughter's Legacy. A Mission to Transform Care.</h2>
          <p className="mt-4">Nneka Hall's lived experience as a mother informs her commitment to compassionate, culturally grounded, trauma-informed education and community-rooted care.</p>
          <p className="mt-3">Through the Pregnancy and Infant Loss Institute, she is working to strengthen the way families are supported and professionals learn to respond with dignity.</p>
          <Link to="/about" className={`${btnOutline} mt-6`}>Read Nneka's Story</Link>
        </div>
      </div>
    </Section>
    <Section title="What brings you here?" tone="muted">
      <div className="grid gap-4 sm:grid-cols-2">
        {pathways.map(path => <Link key={path.title} to={path.to} className="block rounded-2xl border bg-card p-6 transition-shadow hover:shadow-soft"><h3 className="text-xl font-semibold text-primary">{path.title} →</h3><p className="mt-2 text-muted-foreground">{path.description}</p></Link>)}
      </div>
    </Section>
    <Section>
      <div className="grid gap-6 md:grid-cols-2"><Card title="Our mission">{ORG.mission}</Card><Card title="Our vision">{ORG.vision}</Card></div>
    </Section>
    <Section title="Our values" tone="muted">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{VALUES.map(value => <li key={value.title} className="rounded-2xl bg-card p-5"><h3 className="text-lg font-semibold text-primary">{value.title}</h3><p className="mt-1 text-muted-foreground">{value.text}</p></li>)}</ul>
    </Section>
    <Section title="Conferences & learning">
      <div className="rounded-3xl bg-blush p-8 text-blush-foreground">
        <p className="text-sm font-bold uppercase tracking-widest">{CONFERENCE.dates} · {CONFERENCE.time}</p>
        <h3 className="mt-2 text-3xl font-semibold">{CONFERENCE.name}</h3>
        <p className="mt-3">Featured speaker: {CONFERENCE.speaker} — “{CONFERENCE.talk}.”</p>
        <Link to="/events" className={`${btn} mt-6`}>Explore Events</Link>
      </div>
    </Section>
    <Section>
      <div className="space-y-5 text-center">
        <h2 className="font-display text-3xl font-semibold text-primary">We would be honored to hear from you.</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">For education, events, speaking and partnership inquiries, connect with PAIL Institute.</p>
        <a className={btn} href={`mailto:${ORG.email}`}>Email {ORG.email}</a>
        <Notice>PAIL Institute provides educational information, not medical or mental health treatment. For immediate emergencies, contact local emergency services.</Notice>
      </div>
    </Section>
  </div>;
}
