import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-20 text-center text-lg">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="rounded-2xl overflow-hidden shadow bg-white">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/700x500?text=Product+Image";
          }}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        {product.tag && (
          <p className="text-orange-500 font-semibold mb-3">{product.tag}</p>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-2xl font-bold text-orange-600">
            ₹{product.price}
          </span>

          {product.rating && (
            <span className="text-gray-600">⭐ {product.rating}</span>
          )}
        </div>

        <p className="text-gray-600 leading-8 mb-8">
          This product is crafted using authentic ingredients and
          traditional preparation methods to deliver rich flavor and
          premium quality in every bite.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-fit bg-[#3b1f12] hover:bg-[#5a2f1d] text-white px-8 py-4 rounded-xl font-medium transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}