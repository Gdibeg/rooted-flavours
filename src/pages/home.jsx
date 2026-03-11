import { useState } from "react";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import StorySection from "../components/home/StorySection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import NewsletterCTA from "../components/home/NewsletterCTA";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <section className="text-center py-20">
          <p className="text-orange-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Welcome to Rooted Flavours
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Traditional sweets and snacks with a richer, cleaner modern experience
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Explore authentic flavors, handcrafted festive delights, and premium
            quality treats designed for a beautiful online shopping experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Shop Now
            </button>

            <button
              onClick={() => setSelectedCategory("all")}
              className="border border-gray-300 hover:border-orange-500 px-6 py-3 rounded-lg font-medium transition"
            >
              Explore Categories
            </button>
          </div>
        </section>

        <Categories setSelectedCategory={setSelectedCategory} />
        <FeaturedProducts
          search={search}
          selectedCategory={selectedCategory}
        />
        <StorySection />
        <WhyChooseUs />
        <Testimonials />
        <NewsletterCTA />
      </main>

      <Footer />
    </div>
  );
}