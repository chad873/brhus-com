import Link from "next/link";
import Image from "next/image";

const sectors = [
  {
    title: "Industrial",
    href: "/industrial",
    desc: "Ground-up industrial flex development and value-add acquisitions in Texas, with active projects in Houston and Corpus Christi.",
  },
  {
    title: "Commercial",
    href: "/commercial",
    desc: "Strategic commercial real estate investments across high-growth corridors in Texas, California, Arizona, and Colorado.",
  },
  {
    title: "Residential",
    href: "/residential",
    desc: "Luxury residential developments and large-scale multifamily projects across premium markets.",
  },
  {
    title: "Business Investments",
    href: "/investments",
    desc: "Investments in healthcare, construction, and other essential operating companies with durable cash flows.",
  },
];

const news = [
  {
    date: "Q2 2026",
    title: "Magnolia Business Park Breaks Ground in The Woodlands",
    href: "/industrial",
  },
  {
    date: "2025",
    title: "Bird Rock Holdings Acquires 68,536 SF Warehouse Portfolio in North Houston",
    href: "/industrial",
  },
  {
    date: "2025",
    title: "Woodlands Business Park Slated for Construction Start Q2 2027",
    href: "/industrial",
  },
];

export default function Home() {
  return (
    <div className="bg-white">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[85vh] min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1800&q=85"
            alt="Industrial development"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
              <h1 className="text-white font-serif text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl" style={{ color: "white" }}>
                Redefining Investment in Real Assets.
              </h1>
              <p className="text-gray-200 text-lg max-w-xl mb-8">
                Bird Rock Holdings acquires, develops, and operates industrial, commercial, and residential assets — and invests in businesses with lasting fundamentals. We are active across Texas, California, Arizona, and Colorado.
              </p>
              <Link
                href="/about"
                className="inline-block bg-black text-white text-sm px-6 py-3 hover:bg-[#1b4073] transition-colors font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Intro ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif text-3xl font-bold mb-5">About Bird Rock Holdings.</h2>
          <p className="text-gray-700 mb-4">
            Bird Rock Holdings is a Texas-based real estate and investment firm, specializing in industrial development, commercial acquisitions, residential development, and operating business investments.
          </p>
          <p className="text-gray-700 mb-8">
            Led by principal Chad Hart, we focus on markets with strong fundamentals and long-term growth potential — bringing a hands-on, operator-first approach to every investment we make.
          </p>
          <Link href="/about" className="inline-block bg-black text-white text-sm px-6 py-3 hover:bg-[#1b4073] transition-colors font-medium">
            Learn More →
          </Link>
        </div>

        {/* Big stat — Lovett style */}
        <div className="border-l-4 border-[#1b4073] pl-10 flex flex-col justify-center">
          <p className="font-serif text-7xl font-bold text-[#1b4073] leading-none mb-2">134K+</p>
          <p className="text-gray-500 text-sm uppercase tracking-widest">SF Completed &amp; Underway</p>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="font-serif text-4xl font-bold text-[#1b4073] leading-none mb-2">3</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Active Industrial Projects in Texas</p>
          </div>
        </div>
      </section>

      {/* ── Sectors ────────────────────────────────────────── */}
      <section className="bg-[#f7f6f3] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1b4073] text-xs uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-serif text-3xl font-bold mb-3">Areas We Specialize In.</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Bird Rock Holdings operates across four core investment sectors, each with a disciplined approach to acquisition, development, and long-term value creation.
          </p>
          <div className="border-t border-gray-300">
            {sectors.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group flex items-center justify-between py-6 border-b border-gray-300 hover:bg-white px-4 -mx-4 transition-colors`}
              >
                <div className="flex items-start gap-8">
                  <span className="text-xs text-gray-400 mt-1 w-6">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1b4073] group-hover:underline mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
                <span className="text-[#1b4073] text-2xl ml-6 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ─────────────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#1b4073] text-6xl font-serif leading-none mb-6">"</p>
          <blockquote className="text-white font-serif text-2xl md:text-3xl leading-relaxed mb-8">
            We are not simply focused on acquiring assets — we are focused on building lasting value in markets we believe in, with partners who share our commitment to excellence.
          </blockquote>
          <p className="text-gray-500 text-sm">— Chad Hart, Principal &amp; Founder, Bird Rock Holdings</p>
        </div>
      </section>

      {/* ── Featured Properties ────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1b4073] text-xs uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="font-serif text-3xl font-bold mb-10">Current Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Magnolia Business Park",
                location: "The Woodlands, TX",
                details: "31,150 SF · 3 Buildings · 16 Units",
                status: "Under Construction — Q2 2026",
                img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
              },
              {
                name: "Houston Existing Warehouses",
                location: "North Houston, TX",
                details: "68,536 SF · 4 Buildings · 5 Acres",
                status: "Lease-Up Phase",
                img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
              },
              {
                name: "Woodlands Business Park",
                location: "The Woodlands, TX",
                details: "35,000 SF · 4 Buildings · 18 Units",
                status: "Construction Start Q2 2027",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
              },
            ].map((p) => (
              <div key={p.name} className="border border-gray-200 group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">{p.status}</p>
                  <h3 className="font-serif font-bold text-[#1b4073] text-lg mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{p.location}</p>
                  <p className="text-sm text-gray-600">{p.details}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/industrial" className="inline-block border border-black text-black text-sm px-6 py-3 hover:bg-black hover:text-white transition-colors">
              Explore Our Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ── News ───────────────────────────────────────────── */}
      <section className="bg-[#f7f6f3] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1b4073] text-xs uppercase tracking-widest mb-2">Updates</p>
          <h2 className="font-serif text-3xl font-bold mb-10">In the News.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <Link key={n.title} href={n.href} className="group border-t-2 border-[#1b4073] pt-4">
                <p className="text-xs text-gray-400 mb-3">{n.date}</p>
                <h3 className="font-serif font-bold text-[#1b4073] text-lg leading-snug group-hover:underline mb-4">{n.title}</h3>
                <p className="text-sm text-black font-medium">Read More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in Touch ───────────────────────────────────── */}
      <section className="bg-[#1b4073] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Get in Touch.</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Whether you're an investor, prospective tenant, or partner — we'd like to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-900 transition-colors">
              Contact Us
            </Link>
            <Link href="/about" className="border border-white text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-[#1b4073] transition-colors">
              About Chad Hart
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
