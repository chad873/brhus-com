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
  {
    name: "Business Investment — Placeholder",
    category: "Other",
    desc: "Generic placeholder for additional business investments. Lumen will write the actual copy here.",
  },
];

export default function InvestmentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Sector</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Investments</h1>
        <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
          Beyond real estate, Bird Rock Holdings invests in operating businesses with strong fundamentals, recurring cash flows, and long-term growth potential. Our focus areas include healthcare, construction, and other essential services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {investments.map((inv) => (
          <div key={inv.name} className="border border-gray-200 p-6">
            <span className="inline-block text-xs bg-gray-100 text-gray-600 px-3 py-1 mb-4">{inv.category}</span>
            <h3 className="font-semibold text-gray-900 text-lg mb-3">{inv.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{inv.desc}</p>
          </div>
        ))}
      </div>

      {/* Philosophy strip */}
      <section className="mt-20 bg-gray-50 p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Investment Philosophy</h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          We invest in businesses we understand, with operators we trust, in markets we believe in. Generic placeholder copy — Lumen will replace this with the real story.
        </p>
      </section>
    </div>
  );
}
