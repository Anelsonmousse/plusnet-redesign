import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Our Network" };

const benefits = [
  {
    title: "Greater flexibility",
    text: "Having full control means reconfiguring the network, performing essential maintenance out of hours and reacting to problems is quick and easy – minimising the impact on you.",
  },
  {
    title: "Extra capacity",
    text: "We don’t overload our broadband service. We closely monitor network capacity and usage patterns, planning for and making investment in both extra bandwidth and network resilience. So, whenever customer numbers and demand for bandwidth-heavy applications increase we’re ready.",
  },
  {
    title: "Scalability",
    text: "We have a high-performance platform that’s easily expanded to cope with additional throughput.",
  },
];

export default function OurNetwork() {
  return (
    <>
      <PageHero
        eyebrow="Delivering the best broadband experience"
        title="About our network"
        subtitle="We’ve built one of the most advanced ISP networks in Nigeria. Unlike some of our competitors, we own and manage our broadband platform too, investing heavily in our network capacity and dynamic traffic management systems. That’s because we believe our customers deserve the best broadband experience possible."
      />

      <Section>
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Benefits</h2>
            <p className="mt-4 font-light leading-relaxed text-ink/80">
              Owning our network and having the backing of our certified
              industry partners, provides several key benefits for your
              business:
            </p>
            <ul className="mt-8 space-y-6">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold">{b.title}</h3>
                    <p className="mt-1 text-sm font-light leading-relaxed text-ink/80">
                      {b.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/network.png"
            alt="Plusnet network"
            width={512}
            height={512}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </Section>

      <Section tone="mist">
        <h2 className="text-3xl font-extrabold">
          Providing the best broadband experience
        </h2>
        <div className="prose-site mt-5 max-w-3xl font-light leading-relaxed text-ink/80">
          <p>
            Some providers operate a ‘best effort’ network. This ‘one size fits
            all’ approach treats all traffic equally and gives no guarantees to
            priority. The downside of this is that one bandwidth-intensive
            application can operate without problems – but to the detriment of
            other applications and users.
          </p>
          <p>Here’s how we deliver the best possible service:</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">
              QoS (Quality of Service) traffic management
            </h3>
            <div className="prose-site mt-4 text-sm font-light leading-relaxed text-ink/80">
              <p>
                We apply QoS traffic management on our network to provide a
                fair and quality service for all applications and customers.
                Traffic management has been given a bad reputation because
                it’s wrongly believed that its sole purpose is to slow down
                users, or certain types of traffic. However, the way we use it
                actually enhances your online experience.
              </p>
              <p>
                Our real-time traffic management systems don’t stop or
                deliberately block particular applications. Instead, they make
                sure your most important, time-sensitive activities get the
                highest priority. (Importantly we only apply traffic management
                whenever we see contention on our network, not all the time).
              </p>
              <p>
                We identify the type of activities on our network and apply
                priorities to them. This means we can decide to slow the lowest
                priority traffic first (the activity that’ll work most
                effectively on lower bandwidth like downloads/Peer-to-Peer) so
                this doesn’t affect a user’s experience.
              </p>
              <p>
                Because we know the speed of our customer’s lines, we can tell
                when they’re reaching their maximum capacity. We’re then able
                to make intelligent decisions based on these priorities,
                protecting their experience.
              </p>
              <p className="rounded-lg bg-mist p-4 italic">
                e.g. You’re running real-time applications like VoIP calls and
                video conferences when someone else in your office begins to
                run file transfers in the background. Thanks to traffic
                management, we can guarantee that your time-critical voice and
                video calls will be prioritised, so they’ll run smoothly. (The
                background file transfers will be slowed, taking a little
                longer to complete).
              </p>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Flexing our network under demand</h3>
            <div className="prose-site mt-4 text-sm font-light leading-relaxed text-ink/80">
              <p>
                When traffic volumes increase, we can flex our network, to cope
                with normal daily peaks and troughs. However, it’s also
                adaptable and resilient enough to handle unusual traffic
                demands, or even network failure.
              </p>
              <p>
                We have 3 network settings, each one designed to cope with a
                different level of demand:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Normal daily operation</li>
                <li>
                  High demand (e.g. streaming of planned sporting or
                  entertainment events)
                </li>
                <li>
                  Disaster situation (e.g. unexpected large scale network
                  failure or a major news event)
                </li>
              </ul>
              <p>
                The ability to flex to this extent gives us a great deal of
                agility – which gives our customers peace of mind. We can react
                to day-to-day demand, anticipate one-off high traffic events,
                plus handle critical situations as and when they happen,
                without impact to the quality of our service.
              </p>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">
              Offering unlimited broadband that’s traffic managed
            </h3>
            <div className="prose-site mt-4 text-sm font-light leading-relaxed text-ink/80">
              <p>
                Most customers won’t even notice that we apply traffic
                management on our network. That’s because it just makes things
                work – and that’s the point. As a business, that’s what you’ll
                want from an unlimited broadband service. You don’t want the
                frustration of not being able to make your important video
                call with a client, because someone else in the office is
                making a large download or P2P transfer.
              </p>
              <p>
                We think this sets us apart from the other providers. After
                all, what good is unlimited broadband if you can only use one
                application at once?
              </p>
            </div>
          </article>
        </div>
      </Section>

      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url(/images/background-1.jpg)" }}
      >
        <div className="absolute inset-0 bg-brand/85" />
        <div className="container-site relative flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Great Value Unlimited Broadband
          </h2>
          <Button href="/package-guide" variant="white">
            View packages
          </Button>
        </div>
      </section>
    </>
  );
}
