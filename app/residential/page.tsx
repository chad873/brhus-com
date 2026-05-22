const projects = [
  {
    name: "Luxury Residential Portfolio",
    location: "Colorado & Southern California",
    details: "$50M+ in developed assets",
    desc: "Over $50M in luxury residential projects developed across Colorado luxury ski towns and Southern California.",
  },
  {
    name: "Carlsbad 56-Unit Construction",
    location: "Carlsbad, CA",
    details: "56 Units · New Construction",
    desc: "Estimating and project management services for a 56-unit apartment complex new construction.",
  },
  {
    name: "Oceanside 80-Unit Construction",
    location: "Oceanside, CA",
    details: "80 Units · New Construction",
    desc: "Estimating and project management services for an 80-unit apartment complex new construction.",
  },
  {
    name: "Temecula 76-Unit Remodel",
    location: "Temecula, CA",
    details: "76 Units · Renovation",
    desc: "Estimating and project management services for a 76-unit apartment complex remodel.",
  },
  {
    name: "San Diego 275-Unit Construction",
    location: "San Diego, CA",
    details: "275 Units · New Construction",
    desc: "Estimating and pre-construction services for a 275-unit apartment complex new construction.",
  },
];

export default function ResidentialPage() {
  return (
    <div className="bg-white">

      {/* ── Dark Hero ─────────────────────────────────────── */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Sector</p>
          <h1 className="font-serif text-5xl font-bold mb-6" style={{ color: "white" }}>Residential</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            From luxury single-family developments to large-scale multifamily construction, Bird Rock Holdings brings deep residential expertise built from years of hands-on development and construction management across California and Colorado.
          </p>
        </div>
      </section>

      {/* ── Track Record ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#1b4073] mb-6 pb-4 border-b border-gray-200">Track Record</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
            Over $50M in residential assets developed across California and Colorado. Bird Rock Holdings has provided development, estimating, and construction management services on multifamily and luxury single-family projects totaling hundreds of units.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.name} className="border border-gray-200 bg-white p-8 group hover:border-[#1b4073] transition-colors">
                <h3 className="font-serif font-bold text-[#1b4073] text-lg mb-1">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{p.location}</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">{p.details}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
