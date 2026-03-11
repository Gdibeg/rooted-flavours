export default function StorySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1517244683847-7456b63c5969"
            alt="Traditional food preparation"
            className="w-full h-[420px] object-cover"
          />
        </div>

        <div>
          <p className="text-orange-600 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Our Story
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Rooted in tradition, crafted for today
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            Rooted Flavours brings together the warmth of handmade sweets,
            festive snacks, and timeless family recipes in a modern online
            shopping experience.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Every product is inspired by authentic preparation, rich ingredients,
            and the joy of sharing traditional taste with family and friends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow border border-orange-100">
              <h3 className="text-2xl font-bold text-[#3b1f12]">25+</h3>
              <p className="text-sm text-gray-600 mt-1">Signature items</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow border border-orange-100">
              <h3 className="text-2xl font-bold text-[#3b1f12]">100%</h3>
              <p className="text-sm text-gray-600 mt-1">Traditional inspiration</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow border border-orange-100">
              <h3 className="text-2xl font-bold text-[#3b1f12]">Fresh</h3>
              <p className="text-sm text-gray-600 mt-1">Made with care</p>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}