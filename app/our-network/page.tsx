import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroFigure from "@/components/HeroFigure";
import { tornEdge } from "@/lib/torn";

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

const edges = [13, 37, 61].map((s) => tornEdge(s));

export default function OurNetwork() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="container-site relative pb-16 pt-10 md:pt-12 lg:pb-20">
          <div className="flex items-start justify-between text-xs font-light text-white/70">
            <span>[Our network]</span>
            <span className="rounded-md border border-white/40 px-1.5 py-1 text-[10px] leading-none tracking-wider">
              NG
            </span>
          </div>

          <h1 className="mt-6 text-[9vw] font-extrabold uppercase leading-[1] tracking-tight sm:text-[6.5vw] lg:text-[4.4rem]">
            <span className="block">One of Nigeria’s</span>
            <span className="block text-brand md:pl-[8%]">Most advanced</span>
            <span className="block md:pl-[3%]">
              ISP networks{" "}
              <span className="inline-flex h-[0.9em] w-[1.6em] items-center justify-center rounded-full bg-brand align-middle">
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-[0.8em] w-[0.8em] brightness-0 invert"
                />
              </span>
            </span>
            <span className="block text-brand md:pl-[14%]">Owned by us</span>
          </h1>

          <div className="relative mt-8 max-w-xl md:mt-10">
            <p className="text-sm font-light leading-relaxed text-white/80 md:text-base">
              Unlike some of our competitors, we own and manage our broadband
              platform, investing heavily in our network capacity and dynamic
              traffic management systems. That’s because we believe our
              customers deserve the best broadband experience possible.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {heroTags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/40 px-5 py-2.5 text-xs font-medium backdrop-blur-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Figure pinned bottom-right on larger screens */}
          <div className="pointer-events-none absolute bottom-0 right-[4%] hidden lg:block">
            <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(224,43,32,0.28),transparent_65%)]" />
            <HeroFigure className="relative h-[30rem] w-auto" />
          </div>
        </div>
      </section>

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
                <div
                  key={b.title}
                  style={{ clipPath: edges[i] }}
                  className={`flex flex-col px-6 pb-8 pt-9 ${
                    b.featured
                      ? "bg-brand-dark text-white sm:-mt-8 sm:pb-12"
                      : "bg-white text-ink"
                  }`}
                >
                  <h3
                    className={`whitespace-pre-line text-xl font-extrabold leading-tight ${
                      b.featured ? "text-white" : "text-brand-dark"
                    }`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm font-light leading-relaxed ${
                      b.featured ? "text-white/85" : "text-ink/75"
                    }`}
                  >
                    {b.text}
                  </p>
                </div>
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

      {/* CTA */}
      <section className="border-t border-white/10 bg-black py-16 text-white md:py-20">
        <div className="container-site flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="text-3xl font-extrabold uppercase leading-[1] tracking-tight md:text-4xl">
            Great value
            <br />
            <span className="text-brand">unlimited broadband</span>
          </h2>
          <Link
            href="/package-guide"
            className="rounded-md bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-brand hover:text-white"
          >
            View packages
          </Link>
        </div>
      </section>
    </>
  );
}
