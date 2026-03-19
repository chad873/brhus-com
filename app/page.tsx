import Link from "next/link";

const sectors = [
  {
    title: "Industrial",
    href: "/industrial",
    desc: "Ground-up industrial flex development and value-add acquisitions in the fastest-growing markets in Texas.",
  },
  {
    title: "Commercial",
    href: "/commercial",
    desc: "Strategic commercial real estate investments across high-growth corridors in Texas and California.",
  },
  {
    title: "Residential",
    href: "/residential",
    desc: "Luxury residential developments and multifamily projects across premium markets.",
  },
  {
    title: "Investments",
    href: "/investments",
    desc: "Business investments in healthcare, construction, and other high-value operating companies.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Bird Rock Holdings</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Building real value in real assets.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            We acquire, develop, and operate industrial, commercial, and residential assets — and invest in businesses with lasting fundamentals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
              About Chad Hart
            </Link>
            <Link href="/contact" className="border border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-500 mb-12 max-w-xl">
            Bird Rock Holdings operates across four core sectors, each with a disciplined approach to acquisition, development, and long-term value creation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((s) => (
              <Link key={s.href} href={s.href} className="group border border-gray-200 p-8 hover:border-gray-900 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:underline">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chad bio strip */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Principal</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Chad Hart</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Chad Hart is a real estate developer, investor, and entrepreneur with a track record across industrial development, commercial acquisitions, luxury residential, and business investment. Based in Texas, Chad is focused on building lasting value in high-growth markets.
            </p>
            <Link href="/about" className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in working together?</h2>
          <p className="text-gray-500 mb-8">Whether you're an investor, partner, or tenant — we'd like to hear from you.</p>
          <Link href="/contact" className="bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
