import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 min-h-screen">
        <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

        {cartItems.length === 0 ? (
  <div className="text-center py-24 bg-orange-50 rounded-2xl border border-orange-100">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      Your cart is empty
    </h2>
    <p className="text-gray-600 mb-6">
      Looks like you haven’t added any delicious items yet.
    </p>
    <button
      onClick={() => window.history.back()}
      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition"
    >
      Continue Shopping
    </button>
  </div>
) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-6 border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-orange-600 font-bold">₹{item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 rounded-md border hover:bg-gray-100 text-lg"
                      >
                        -
                      </button>

                      <span className="font-medium text-lg">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 rounded-md border hover:bg-gray-100 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold mb-3">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-medium hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t pt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}