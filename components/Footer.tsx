export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-white font-semibold text-lg mb-2">Bird Rock Holdings</p>
          <p className="text-sm">Acquiring and developing real assets across Texas and California.</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-white font-medium mb-1">Sectors</p>
          <a href="/industrial" className="hover:text-white transition-colors">Industrial</a>
          <a href="/commercial" className="hover:text-white transition-colors">Commercial</a>
          <a href="/residential" className="hover:text-white transition-colors">Residential</a>
          <a href="/investments" className="hover:text-white transition-colors">Investments</a>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-white font-medium mb-1">Company</p>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-sm">
          <p className="text-white font-medium mb-1">Contact</p>
          <p>info@brhus.com</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800 text-xs text-gray-600">
        © {new Date().getFullYear()} Bird Rock Holdings. All rights reserved.
      </div>
    </footer>
  );
}
