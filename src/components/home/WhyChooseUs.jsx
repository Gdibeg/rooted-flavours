import { Leaf, Truck, ShieldCheck, Utensils } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: "Fresh Ingredients",
      text: "We use carefully sourced ingredients to ensure authentic taste and quality."
    },
    {
      icon: <Utensils size={32} />,
      title: "Authentic Recipes",
      text: "Inspired by traditional preparation methods passed down generations."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      text: "Quick and reliable shipping so your treats arrive fresh."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Premium Quality",
      text: "Every item is crafted with care and attention to detail."
    }
  ];

  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">
          <p className="text-orange-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why people love Rooted Flavours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center text-orange-500 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {feature.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}