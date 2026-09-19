import type { Metadata } from "next";
import DarkCta from "@/components/DarkCta";
import DarkHero from "@/components/DarkHero";
import TornCard from "@/components/TornCard";

export const metadata: Metadata = { title: "Our Network" };

const heroTags = ["Owned & managed", "Traffic managed", "Built for business"];

const benefits = [
  {
    title: "Greater\nflexibility",
    text: "Having full control means reconfiguring the network, performing essential maintenance out of hours and reacting to problems is quick and easy – minimising the impact on you.",
  },
  {
    title: "Extra\ncapacity",
    text: "We don’t overload our broadband service. We closely monitor network capacity and usage patterns, planning for and investing in both extra bandwidth and network resilience. So, whenever customer numbers and demand for bandwidth-heavy applications increase, we’re ready.",
    featured: true,
  },
  {
    title: "Scalability",
    text: "We have a high-performance platform that’s easily expanded to cope with additional throughput.",
  },
];

const flexModes = [
  "Normal daily operation",
  "High demand (e.g. streaming of planned sporting or entertainment events)",
  "Disaster situation (e.g. unexpected large-scale network failure or a major news event)",
];

export default function OurNetwork() {
  return (
    <>
      <DarkHero
        label="Our network"
        lines={[
          { text: "One of Nigeria’s" },
          { text: "Most advanced", red: true, indent: "md:pl-[8%]" },
          { text: "ISP networks", mark: true, indent: "md:pl-[3%]" },
          { text: "Owned by us", red: true, indent: "md:pl-[14%]" },
        ]}
        intro="Unlike some of our competitors, we own and manage our broadband platform, investing heavily in our network capacity and dynamic traffic management systems. That’s because we believe our customers deserve the best broadband experience possible."
        tags={heroTags}
        figure
      />

      {/* Benefits — torn-edge cards */}
      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="text-xs font-light text-white/70">[Benefits]</p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
                Why owning
                <br />
                <span className="text-brand">our network</span>
                <br />
                matters
              </h2>
              <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/75">
                Owning our network and having the backing of our certified
                industry partners provides several key benefits for your
                business.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {benefits.map((b, i) => (
                <TornCard
                  key={b.title}
                  seed={13 + i * 24}
                  title={b.title}
                  text={b.text}
                  featured={b.featured}
                  raise={b.featured}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we deliver — ribbon headline + cards */}
      <section className="relative isolate overflow-hidden bg-black py-16 text-white md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden text-center text-[26vw] font-black leading-[0.8] tracking-tighter text-white/[0.03]"
        >
          QOS+
        </div>

        <div className="container-site relative">
          <p className="text-xs font-light text-white/70">[How we deliver]</p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
            Providing the best
            <br />
            <span className="text-brand">broadband experience</span>
          </h2>
        </div>

        <div className="container-site relative mt-8">
          <p className="max-w-3xl text-sm font-light leading-relaxed text-white/75 md:text-base">
            Some providers operate a ‘best effort’ network. This ‘one size fits
            all’ approach treats all traffic equally and gives no guarantees to
            priority. The downside is that one bandwidth-intensive application
            can operate without problems – but to the detriment of other
            applications and users. Here’s how we deliver the best possible
            service:
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-start">
            <article className="rounded-xl bg-white p-6 text-ink md:p-7">
              <p className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
                01
              </p>
              <h3 className="mt-6 text-lg font-medium">
                QoS traffic management
              </h3>
              <div className="prose-site mt-2 text-sm font-light leading-relaxed text-ink/70">
                <p>
                  We apply Quality of Service traffic management on our network
                  to provide a fair, quality service for all applications and
                  customers. Traffic management has a bad reputation because
                  it’s wrongly believed its sole purpose is to slow users down.
                  The way we use it actually enhances your online experience.
                </p>
                <p>
                  Our real-time systems don’t block particular applications.
                  Instead, they make sure your most important, time-sensitive
                  activities get the highest priority – and we only apply it
                  when we see contention on our network, not all the time.
                </p>
                <p>
                  We identify the type of activity and apply priorities, slowing
                  the lowest-priority traffic first (downloads, peer-to-peer) so
                  it doesn’t affect a user’s experience. Because we know the
                  speed of our customers’ lines, we can tell when they’re
                  reaching capacity and make intelligent decisions to protect
                  their experience.
                </p>
                <p className="rounded-lg bg-mist p-4 italic">
                  e.g. You’re on a VoIP call or video conference when someone in
                  your office starts a large file transfer. Your time-critical
                  voice and video calls are prioritised and run smoothly; the
                  background transfer takes a little longer to complete.
                </p>
              </div>
            </article>

            <article className="rounded-xl bg-brand-dark p-6 text-white md:p-7">
              <p className="text-4xl font-extrabold tracking-tight md:text-5xl">02</p>
              <h3 className="mt-6 text-lg font-medium">
                Flexing our network under demand
              </h3>
              <div className="prose-site mt-2 text-sm font-light leading-relaxed text-white/80">
                <p>
                  When traffic volumes increase, we flex our network to cope
                  with normal daily peaks and troughs. It’s also adaptable and
                  resilient enough to handle unusual demand, or even network
                  failure. We have three network settings, each designed for a
                  different level of demand:
                </p>
                <ul className="my-4 space-y-2">
                  {flexModes.map((m, i) => (
                    <li key={m} className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-xs font-bold text-white/60">
                        0{i + 1}
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  This agility gives our customers peace of mind. We react to
                  day-to-day demand, anticipate one-off high-traffic events and
                  handle critical situations as they happen – without impact to
                  the quality of our service.
                </p>
              </div>
            </article>

            <article className="rounded-xl bg-white p-6 text-ink md:p-7">
              <p className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
                03
              </p>
              <h3 className="mt-6 text-lg font-medium">
                Unlimited broadband that’s traffic managed
              </h3>
              <div className="prose-site mt-2 text-sm font-light leading-relaxed text-ink/70">
                <p>
                  Most customers won’t even notice that we apply traffic
                  management. That’s because it just makes things work – and
                  that’s the point. As a business, that’s what you want from an
                  unlimited broadband service: no frustration of a dropped
                  client video call because someone else is running a large
                  download or P2P transfer.
                </p>
                <p>
                  We think this sets us apart from other providers. After all,
                  what good is unlimited broadband if you can only use one
                  application at once?
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <DarkCta
        title="Great value"
        accent="unlimited broadband"
        actions={[{ label: "View packages", href: "/package-guide" }]}
      />
    </>
  );
}
