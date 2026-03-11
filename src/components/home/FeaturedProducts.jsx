import products from "../../data/products";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts({
  search = "",
  selectedCategory = "all",
}) {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <p className="text-orange-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">
        Our Specials
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Featured Products
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
        Handpicked sweets, snacks, and festive treats crafted to bring a
        rich traditional taste with a premium modern feel.
      </p>
    </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}