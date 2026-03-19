const currentProjects = [
  {
    name: "Magnolia Business Park",
    location: "The Woodlands, TX",
    details: "31,150 SF · 3 Buildings · 16 Units",
    type: "Ground-up industrial flex",
    status: "Under Construction — Q2 2026 delivery",
  },
  {
    name: "Houston Existing Warehouses",
    location: "North Houston, TX",
    details: "68,536 SF · 4 Buildings · 5 Acres",
    type: "Value-add acquisition",
    status: "Lease-up phase · Target stabilization 2028",
  },
  {
    name: "Woodlands Business Park",
    location: "The Woodlands, TX",
    details: "35,000 SF · 4 Buildings · 18 Units",
    type: "Ground-up industrial flex",
    status: "Construction start Q2 2027",
  },
];

const pastProjects = [
  {
    name: "Del Mar Parking Garage Solar",
    location: "Del Mar, CA",
    desc: "Structural steel services for adding solar structure to the top of an existing parking structure.",
  },
  {
    name: "Mission Valley Parking Garage Solar",
    location: "Mission Valley, CA",
    desc: "Structural steel services for adding solar structure to the top of an existing parking garage.",
  },
  {
    name: "Calexico Border Wall Construction",
    location: "Calexico, CA",
    desc: "Crane & rigging services awarded for 2.5 miles of border wall construction.",
  },
];

export default function IndustrialPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Sector</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Industrial</h1>
        <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
          Bird Rock Holdings develops and acquires industrial flex assets in Texas — with active projects in Houston and Corpus Christi. Our focus is on ground-up development, value-add acquisitions, and long-term asset stabilization.
        </p>
      </div>

      {/* Current Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">Current Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {currentProjects.map((p) => (
            <div key={p.name} className="border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{p.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{p.location}</p>
              <p className="text-sm text-gray-600 mb-1">{p.details}</p>
              <p className="text-sm text-gray-600 mb-3">{p.type}</p>
              <span className="inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1">{p.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Past Projects */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">Past Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pastProjects.map((p) => (
            <div key={p.name} className="border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{p.location}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
