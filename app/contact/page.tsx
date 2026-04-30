"use client";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Get in Touch</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Whether you're an investor, prospective tenant, partner, or just want to connect, we'd like to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Direct</h2>
          <p className="text-gray-700">info@brhus.com</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Based in</h2>
          <p className="text-gray-700">Texas</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900" placeholder="First name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900" placeholder="Last name" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <select className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white">
            <option value="">Select a topic...</option>
            <option>Industrial Investment</option>
            <option>Commercial Investment</option>
            <option>Residential</option>
            <option>Business Investment</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea rows={5} className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900" placeholder="Tell us about yourself or your inquiry..." />
        </div>
        <button type="submit" className="bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-700 transition-colors w-full md:w-auto">
          Send Message
        </button>
      </form>
    </div>
  );
}
