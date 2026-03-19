const projects = [
  {
    name: "Commercial Project One",
    location: "Texas",
    details: "Placeholder SF · Placeholder Type",
    status: "Active",
    desc: "Generic description of a commercial real estate project. Lumen will write the actual copy here.",
  },
  {
    name: "Commercial Project Two",
    location: "California",
    details: "Placeholder SF · Placeholder Type",
    status: "Completed",
    desc: "Generic description of a commercial real estate project. Lumen will write the actual copy here.",
  },
  {
    name: "Commercial Project Three",
    location: "Texas",
    details: "Placeholder SF · Placeholder Type",
    status: "In Review",
    desc: "Generic description of a commercial real estate project. Lumen will write the actual copy here.",
  },
];

export default function CommercialPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Sector</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Commercial</h1>
        <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
          Bird Rock Holdings pursues commercial real estate opportunities in high-growth corridors across Texas and California. Our approach combines disciplined underwriting with hands-on asset management.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.name} className="border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">{p.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{p.location}</p>
            <p className="text-sm text-gray-600 mb-3">{p.details}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.desc}</p>
            <span className="inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1">{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
