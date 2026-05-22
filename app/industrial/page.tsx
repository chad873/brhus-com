import Image from "next/image";

const currentProjects = [
  {
    name: "Magnolia Business Park",
    location: "The Woodlands, TX",
    details: "31,150 SF · 3 Buildings · 16 Units",
    type: "Ground-up industrial flex",
    status: "Under Construction, Q2 2026 delivery",
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  },
  {
    name: "Houston Existing Warehouses",
    location: "1720 FM 1960 Rd, North Houston, TX",
    details: "68,536 SF · 4 Buildings · 5 Acres",
    type: "Value-add acquisition, lease-up phase",
    status: "Lease-up · Target stabilization 2027",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    name: "Corpus Business Park",
    location: "Corpus Christi, TX",
    details: "80 Acres · 400,000+ SF · 60+ Industrial Lots",
    type: "Industrial business park — hotel, gas station & retail parcels",
    status: "In Development",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    name: "Woodlands Business Park",
    location: "The Woodlands, TX",
    details: "35,000 SF · 4 Buildings · 18 Units",
    type: "Ground-up industrial flex",
    status: "Construction start Q2 2027",
    img: "https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80",
  },
];

const completedProjects = [
  {
    name: "Del Mar Parking Garage Solar",
    location: "Del Mar, CA",
    type: "Industrial · Structural Steel",
    desc: "Structural steel services for adding solar structure to the top of an existing parking structure.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
  },
  {
    name: "Mission Valley Parking Garage Solar Structure",
    location: "Mission Valley, CA",
    type: "Industrial · Structural Steel",
    desc: "Structural steel services provided for adding solar structure to the top of an existing parking garage.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    name: "Calexico Border Wall Construction",
    location: "Calexico, CA",
    type: "Industrial · Crane & Rigging",
    desc: "Crane & rigging services awarded for 2.5 miles of border wall construction.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
];

export default function IndustrialPage() {
  return (
    <div className="bg-white">

      {/* ── Dark Hero ─────────────────────────────────────── */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Sector</p>
          <h1 className="font-serif text-5xl font-bold mb-6" style={{ color: "white" }}>Industrial</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Bird Rock Holdings develops and acquires industrial flex assets in Texas, with active projects in The Woodlands, Houston, and Corpus Christi. Our focus is on ground-up development, value-add acquisitions, and long-term asset stabilization in the fastest-growing Texas submarkets.
          </p>
        </div>
      </section>

      {/* ── Current Projects ──────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#1b4073] mb-10 pb-4 border-b border-gray-200">Current Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProjects.map((p) => (
              <div key={p.name} className="border border-gray-200 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">{p.status}</p>
                  <h3 className="font-serif font-bold text-[#1b4073] text-base mb-1">{p.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{p.location}</p>
                  <p className="text-xs text-gray-600 mb-1">{p.details}</p>
                  <p className="text-xs text-gray-500">{p.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Completed Projects ────────────────────────────── */}
      <section className="bg-[#f7f6f3] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#1b4073] mb-10 pb-4 border-b border-gray-300">Past Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {completedProjects.map((p) => (
              <div key={p.name} className="border border-gray-200 group overflow-hidden bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black text-white text-xs px-3 py-1 uppercase tracking-wide">Completed</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">{p.type}</p>
                  <h3 className="font-serif font-bold text-[#1b4073] text-base mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{p.location}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
