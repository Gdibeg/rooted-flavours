import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Navbar({
  search = "",
  setSearch = () => {},
  selectedCategory = "all",
  setSelectedCategory = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#8b4513] tracking-wide">
              Rooted Flavours
            </h1>
            <p className="text-xs text-gray-500">Traditional Taste, Modern Feel</p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <button
              type="button"
              onClick={() => handleCategoryClick("all")}
              className={`hover:text-orange-600 transition ${
                selectedCategory === "all" ? "text-orange-600 font-semibold" : ""
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleCategoryClick("sweets")}
              className={`hover:text-orange-600 transition ${
                selectedCategory === "sweets" ? "text-orange-600 font-semibold" : ""
              }`}
            >
              Sweets
            </button>

            <button
              type="button"
              onClick={() => handleCategoryClick("snacks")}
              className={`hover:text-orange-600 transition ${
                selectedCategory === "snacks" ? "text-orange-600 font-semibold" : ""
              }`}
            >
              Snacks
            </button>

            <button
              type="button"
              onClick={() => handleCategoryClick("pickles")}
              className={`hover:text-orange-600 transition ${
                selectedCategory === "pickles" ? "text-orange-600 font-semibold" : ""
              }`}
            >
              Pickles
            </button>
          </nav>

          <div className="flex items-center gap-4 text-gray-700">
            <div className="hidden md:flex items-center border rounded-lg px-3 py-1">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="ml-2 text-gray-400 hover:text-gray-700 transition"
                >
                  ✕
                </button>
              )}
            </div>

            <button type="button" className="hidden md:block hover:text-orange-600 transition">
              <User size={20} />
            </button>

            <Link to="/cart" className="hover:text-orange-600 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden hover:text-orange-600 transition"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-orange-100 py-4 space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none text-sm w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="ml-2 text-gray-400 hover:text-gray-700 transition"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-col gap-3 text-gray-700 font-medium">
              <button
                type="button"
                onClick={() => handleCategoryClick("all")}
                className={`text-left hover:text-orange-600 transition ${
                  selectedCategory === "all" ? "text-orange-600 font-semibold" : ""
                }`}
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => handleCategoryClick("sweets")}
                className={`text-left hover:text-orange-600 transition ${
                  selectedCategory === "sweets" ? "text-orange-600 font-semibold" : ""
                }`}
              >
                Sweets
              </button>

              <button
                type="button"
                onClick={() => handleCategoryClick("snacks")}
                className={`text-left hover:text-orange-600 transition ${
                  selectedCategory === "snacks" ? "text-orange-600 font-semibold" : ""
                }`}
              >
                Snacks
              </button>

              <button
                type="button"
                onClick={() => handleCategoryClick("pickles")}
                className={`text-left hover:text-orange-600 transition ${
                  selectedCategory === "pickles" ? "text-orange-600 font-semibold" : ""
                }`}
              >
                Pickles
              </button>

              <button
                type="button"
                className="text-left hover:text-orange-600 transition"
              >
                Account
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}