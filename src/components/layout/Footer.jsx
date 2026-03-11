export default function Footer() {
  return (
    <footer className="bg-[#2c1810] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-orange-300 mb-3">Rooted Flavours</h2>
          <p className="text-sm text-gray-300 leading-6">
            Bringing authentic Indian sweets, snacks, and traditional flavors
            with a modern shopping experience.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sweets</li>
            <li>Snacks</li>
            <li>Pickles</li>
            <li>Gift Boxes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Contact</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">
            Get updates on new arrivals and festive specials.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black bg-white outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-4">
        © 2026 Rooted Flavours. All rights reserved.
      </div>
    </footer>
  );
}