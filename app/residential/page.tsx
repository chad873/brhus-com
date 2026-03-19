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
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Sector</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Residential</h1>
        <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
          From luxury single-family developments to large-scale multifamily construction, Bird Rock Holdings brings deep residential expertise across California and beyond.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">{p.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{p.location}</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">{p.details}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
