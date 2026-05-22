const markets = [
  {
    name: "Texas",
    desc: "Our primary commercial market. We target value-add office, retail, and mixed-use assets in the greater Houston and Dallas-Fort Worth metro areas, where job growth and population expansion continue to drive demand.",
  },
  {
    name: "California",
    desc: "Strategic commercial acquisitions across Southern California, with a focus on coastal submarkets and established commercial corridors in San Diego, Orange County, and the greater LA basin.",
  },
  {
    name: "Arizona",
    desc: "Emerging market focus on Phoenix-metro commercial assets, where strong in-migration and business relocations are creating compelling acquisition opportunities.",
  },
  {
    name: "Colorado",
    desc: "Selective commercial investments in the Denver metro and mountain resort markets, targeting assets with durable income and long-term appreciation potential.",
  },
];

export default function CommercialPage() {
  return (
    <div className="bg-white">

      {/* ── Header ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Sector</p>
        <h1 className="font-serif text-4xl font-bold text-[#1b4073] mb-6">Commercial Real Estate</h1>
        <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
          Bird Rock Holdings pursues commercial real estate investments across high-growth corridors in Texas, California, Arizona, and Colorado. We focus on value-add acquisitions, mixed-use developments, and opportunistic purchases in markets with strong long-term fundamentals.
        </p>
      </section>

      {/* ── Focus Markets ────────────────────────────────── */}
      <section className="bg-[#f7f6f3] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#1b4073] mb-10">Focus Markets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {markets.map((m) => (
              <div key={m.name} className="border border-gray-300 bg-white p-8">
                <h3 className="font-serif font-bold text-[#1b4073] text-xl mb-3">{m.name}</h3>
                <p className="text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 p-10">
            <h2 className="font-serif text-2xl font-bold text-[#1b4073] mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              We approach commercial real estate with the same operator-first discipline we bring to industrial development. Every acquisition starts with a clear thesis — whether it&apos;s value-add repositioning, long-term core hold, or opportunistic purchase — and we underwrite conservatively to protect capital in all market conditions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
