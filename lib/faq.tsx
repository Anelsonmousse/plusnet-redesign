import type { ReactNode } from "react";

export type Faq = { q: string; a: ReactNode };

const H = ({ children }: { children: ReactNode }) => (
  <h4 className="mt-5 font-bold text-ink">{children}</h4>
);
const UL = ({ items }: { items: string[] }) => (
  <ul className="mt-2 list-disc space-y-1.5 pl-5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export const faqs: Faq[] = [
  {
    q: "What speed can I get?",
    a: (
      <>
        <p>
          When you sign up with us, move home/office, or change your package,
          we’ll give you an estimate of the speed you should be getting. For
          example, we might say you could get ’16 to 18Mbps’. This is an
          estimate of your ‘line speed’ or ‘sync speed’ and the actual speed
          you get should fall somewhere within this range. It’s what your
          broadband and router is capable of if everything’s working at its
          best.
        </p>
        <p>
          Line speed can change over time and you may find that it can change
          each time you re-boot your router. The distance from your home to the
          exchange or cabinet will affect it, and temporary factors like severe
          weather can degrade the quality of the line.
        </p>
        <p>
          Your line speed will always be higher than your actual
          (‘throughput’) broadband speed, because it’s far less liable to
          signal interference than the wireless connection within your home.
          This is why if you run a speed test over Wi-Fi you’ll find that the
          speed test results will always be less than your line speed.
        </p>
        <p>
          You can check what your current speed estimates are by logging into
          our Selfcare Centre.
        </p>
      </>
    ),
  },
  {
    q: "What's the difference between standard and fibre broadband speeds?",
    a: (
      <>
        <H>Standard broadband speed</H>
        <p>You can get up to 17Mbps, but the actual speed you’ll get is affected by:</p>
        <UL
          items={[
            "how far you are from the telephone exchange – the further away you are, the slower it’ll be",
            "the quality of your phone line – if it’s in poor condition, it won’t be as fast",
            "the type of broadband available where you live – in some places the lines don’t support speeds of up to 17Mbps, so you might only be able to get speeds of up to 7.5Mbps.",
          ]}
        />
        <H>Fibre broadband speed</H>
        <p>You can get up to 76Mb, but the actual speed you’ll get is affected by:</p>
        <UL
          items={[
            "how far you are from the green cabinet – the further away you are, the slower it’ll be",
            "the quality of your phone line – if it’s in poor condition, it won’t be as fast",
            "the package you chose – Up to 38Mbps packages are available and, depending on your line speed estimate, you might be able to upgrade to Unlimited Fibre Extra which provides speeds of up to 76Mbps.",
          ]}
        />
      </>
    ),
  },
  {
    q: "Have I found the best home for my router?",
    a: (
      <>
        <p>
          This can be a bit tricky, because there’s two things you need to keep
          in mind. Where’s best for both your broadband and your Wi-Fi signal.
          Here are some tips to help you decide.
        </p>
        <H>Best for your broadband signal</H>
        <p>
          First of all, find your master telephone socket. This is the best
          socket to connect your router to. It’s usually closest to where the
          telephone line comes into your home or office. You don’t have to
          connect your router to this one. But you’ll get the best broadband
          performance from it, especially if you have a poor quality or long
          line.
        </p>
        <p>
          If you find your broadband works just as well in other sockets, go
          ahead and use them instead. But if you’re having problems, like
          connection dropping regularly, use the master socket whilst you’re
          sorting it out.
        </p>
        <H>Best for Wi-Fi signal</H>
        <p>For the strongest connection, it’s best to put your router:</p>
        <UL
          items={[
            "out in an open space in your home or office, that’s not on the floor",
            "close to your computer (somewhere central in your home or office is best)",
            "away from any thick walls, metal objects or electrical appliances",
          ]}
        />
        <p>Don’t worry if you can’t do them all, but do as many as you can.</p>
      </>
    ),
  },
  {
    q: "What are the basics for staying safe online?",
    a: (
      <>
        <p>
          Follow these simple rules to immediately reduce the risk of falling
          foul of anything nasty on the Internet.
        </p>
        <UL
          items={[
            "Always keep your software and apps up to date.",
            "Don’t install any software or apps unless you trust where they’ve come from.",
            "Run regular anti-virus and anti-malware scans on your computer or device.",
            "Use passwords that aren’t easy for people to guess and don’t share them with anyone.",
            "Don’t connect to a Wi-Fi network that isn’t secured.",
            "Be very wary of pop-ups that appear on your screen when you’re browsing online.",
            "Never reply to an email that asks for your password, bank account details or personal information – we’ll never ask you for these in an email and neither will your bank.",
            "Be suspicious of calls from people who want access to your computer. If you’re in any doubt, hang up and call the company they claim to be, using a number that you’ve found through one of their official channels.",
            "Don’t use websites that offer illegal film and music downloads – those downloads might be free, but they often come with malware or viruses.",
            "Remember people aren’t always who they say they are – it’s easy to pretend to be someone else online.",
            "Bear in mind that if something sounds too good to be true, it probably is.",
          ]}
        />
      </>
    ),
  },
  {
    q: "What security protection should I have?",
    a: (
      <>
        <p>
          Prevention is better than cure. So keep the bad things at bay by
          making sure your network’s secure and your devices are protected.
        </p>
        <H>Anti-virus protection</H>
        <p>
          Get the latest anti-virus software. It’ll come included with later
          versions of Windows (7 and above). For added peace of mind, consider
          getting Plusnet Protect, which is our anti-virus protection. Then run
          regular scans to make sure everything’s as it should be.
        </p>
        <p>
          If you’ve got a Plusnet email address, you can enable anti-virus
          protection for your emails.
        </p>
        <H>Firewall</H>
        <p>
          All our routers have the firewall enabled by default. If you’re using
          a non-Plusnet router, make sure the firewall’s switched on. You can
          also switch on your broadband firewall.
        </p>
        <H>Some more things you can do</H>
        <UL
          items={[
            "Use an ad-blocker. Some online adverts contain links to malicious software that try to infect your computer.",
            "When banking or shopping, look for the padlock symbol or ‘https://’ in your browser’s address bar. It means you’re using a secure connection, so what you’re doing isn’t being snooped on.",
            "Don’t connect things like USB sticks to your computer unless you know and trust where they’ve come from.",
            "Back up your important files and settings. Then if the worst does happen, you’ll be able to get back the things that are important to you.",
          ]}
        />
      </>
    ),
  },
  {
    q: "How can I make sure my children are safe when they're online?",
    a: (
      <>
        <p>
          It’s not unusual for children and teenagers to know more than adults
          when it comes to using computers and the Internet. But the threat of
          things like online bullying and grooming is very real. Children don’t
          often realise these dangers.
        </p>
        <p>Here’s our advice for keeping them out of harm’s way when they’re online.</p>
        <UL
          items={[
            "There’s no substitute for supervision. Take an interest in what your children are doing online, even if you don’t understand it at first.",
            "Keep the computer in a room where the whole family are, not their bedrooms. Don’t allow small children to play on devices with Internet access.",
            "Teach your children from a young age that they mustn’t give out personal information online. That includes their name, address, school, phone number, or photos of themselves.",
            "Children know not to talk to strangers in the street, so make sure they know not to send messages to strangers online either. If someone is bothering them, tell them that they must let you know straightaway.",
            "Have set times when your children are allowed to go online and times when they can’t. Some routers let you set time limits so that specific devices can’t connect to the Internet at certain times. Check your manual for how to do that.",
            "Agree with your children what sites they can and can’t visit. A lot of websites, like YouTube, have sections designed especially for children.",
            "Bookmark or set up easy-to-access shortcuts to the websites you’re happy for them to use.",
            "Social networks usually have a minimum age limit. Facebook’s is 13. If you have a teenager who’s using social media, make sure they know how to check their privacy settings.",
            "Switch on Plusnet SafeGuard. No parental controls service guarantees complete protection for your child, but it can add an extra layer of protection when you’re not supervising them.",
            "Remember, it’s not just computers that can connect to the Internet these days. Your children could be using mobile phones, games consoles and even TVs to get online.",
          ]}
        />
      </>
    ),
  },
];
