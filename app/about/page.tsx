export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Principal</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Chad Hart</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Real estate developer, entrepreneur, and investor focused on building lasting value across industrial, commercial, and residential assets.
        </p>
      </div>

      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
        <p>
          Chad Hart is the founder and principal of Bird Rock Holdings, a Texas-based real estate and investment firm. With a background spanning industrial development, large-scale residential construction, commercial acquisitions, and business investment, Chad brings a hands-on, operator-first approach to every deal.
        </p>
        <p>
          Chad's career began in construction — managing large-scale residential and commercial builds across Southern California. Over time, he transitioned into development and investment, building a portfolio that spans industrial flex assets in Texas, multifamily projects, and operating businesses in healthcare and construction services.
        </p>
        <p>
          Today, Chad is focused on the Texas industrial market — developing ground-up industrial flex product and acquiring value-add assets in the fastest-growing submarkets in the state.
        </p>
        <p>
          Generic placeholder paragraph — Lumen will write the real bio here. This is just scaffolding to give the page structure and layout.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
        {[
          { stat: "$50M+", label: "Residential assets developed" },
          { stat: "3", label: "Active industrial projects" },
          { stat: "TX & CA", label: "Primary markets" },
        ].map((s) => (
          <div key={s.label} className="border border-gray-200 p-8">
            <p className="text-3xl font-bold text-gray-900 mb-2">{s.stat}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
