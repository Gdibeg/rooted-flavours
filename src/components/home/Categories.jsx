export default function Categories({ setSelectedCategory = () => {} }) {
  const categories = [
    {
      name: "Traditional Sweets",
      value: "sweets",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },
    {
      name: "Crispy Snacks",
      value: "snacks",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    },
    {
      name: "Homestyle Pickles",
      value: "pickles",
      img: "https://images.unsplash.com/photo-1604908554168-3c3e7b4b7c1d",
    },
    {
      name: "Festive Gift Boxes",
      value: "all",
      img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className="group cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-xl transition text-left"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4 text-center bg-white">
                <h3 className="font-semibold text-lg">{cat.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}