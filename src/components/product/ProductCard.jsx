import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 group border border-gray-100">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />
        </Link>

        {product.tag && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-orange-600 transition">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-3">
          <p className="text-orange-600 font-bold text-lg">₹{product.price}</p>
          {product.rating && (
            <p className="text-sm text-gray-600">⭐ {product.rating}</p>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-xl font-medium transition ${
            added
              ? "bg-green-600 text-white"
              : "bg-[#3b1f12] hover:bg-[#5a2f1d] text-white"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}