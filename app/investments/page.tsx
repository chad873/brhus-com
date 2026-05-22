const investments = [
  {
    name: "Healthcare / Hospice",
    category: "Healthcare",
    desc: "Investments in hospice and home health care operations. Focused on high-quality patient care businesses with durable cash flows and mission-driven operations.",
  },
  {
    name: "Construction Services",
    category: "Construction",
    desc: "Strategic investments in construction services businesses, including structural steel, crane & rigging, and specialty contracting operations.",
  },
];

export default function InvestmentsPage() {
  return (
    <div className="bg-white">

      {/* ── Dark Hero ─────────────────────────────────────── */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Sector</p>
          <h1 className="font-serif text-5xl font-bold mb-6" style={{ color: "white" }}>Private Investments</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Beyond real estate, Bird Rock Holdings invests in operating businesses with strong fundamentals, recurring cash flows, and long-term growth potential. Our focus areas include healthcare services, construction services, and other essential industries.
          </p>
        </div>
      </section>

      {/* ── Investment Cards ─────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {investments.map((inv) => (
              <div key={inv.name} className="border border-gray-200 bg-white p-8 group hover:border-[#1b4073] transition-colors">
                <span className="inline-block text-xs bg-[#1b4073] text-white px-3 py-1 mb-4 uppercase tracking-wide">{inv.category}</span>
                <h3 className="font-serif font-bold text-[#1b4073] text-xl mb-3">{inv.name}</h3>
                <p className="text-gray-600 leading-relaxed">{inv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────── */}
      <section className="bg-[#f7f6f3] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 p-10">
            <p className="text-gray-600 max-w-2xl leading-relaxed text-lg">
              We invest in businesses we understand — with operators we trust, in industries we know firsthand. Bird Rock Holdings&apos; investment approach stems from decades of hands-on experience in construction, healthcare, and real estate. We look for recurring cash flows, defensible market positions, and management teams with skin in the game.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
