export default function NewsletterCTA() {
  return (
    <section className="py-24 bg-[#3b1f12] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">

        <p className="uppercase tracking-[0.2em] text-orange-300 text-sm font-semibold mb-4">
          Stay Updated
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the Rooted Flavours community
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          Get updates on new sweets, festive specials, and exclusive offers
          delivered straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg text-black w-full sm:w-80"
          />

          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}