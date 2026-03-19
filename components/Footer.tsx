import Link from "next/link";

const navLinks = [
  { label: "The Firm", href: "/" },
  { label: "Industrial", href: "/industrial" },
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Investments", href: "/investments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10">
        {/* Brand */}
        <div>
          <p className="font-serif font-bold text-white text-xl mb-4">Bird Rock Holdings</p>
          <p className="text-sm leading-relaxed">
            Acquiring and developing real assets across industrial, commercial, residential, and business investment sectors in Texas, California, Arizona, and Colorado.
          </p>
          <p className="text-sm mt-4">
            <a href="mailto:info@brhus.com" className="text-white hover:underline">info@brhus.com</a>
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4 font-medium">Navigation</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Markets */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4 font-medium">Headquarters</p>
          <p className="text-sm">Texas</p>
          <p className="text-sm mt-2 text-gray-500">Operating in TX · CA · AZ · CO</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-2">
        <p>© {new Date().getFullYear()} Bird Rock Holdings LLC. All rights reserved.</p>
        <p>Privacy Policy · Terms of Use</p>
      </div>
    </footer>
  );
}
