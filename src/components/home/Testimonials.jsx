import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ananya R.",
      text: "The sweets tasted homemade and fresh. The packaging was premium and delivery was quick.",
      role: "Happy Customer",
    },
    {
      name: "Rahul K.",
      text: "Loved the traditional feel with a modern shopping experience. The snack quality was excellent.",
      role: "Verified Buyer",
    },
    {
      name: "Meera S.",
      text: "Beautiful presentation, authentic taste, and really smooth ordering experience. Highly recommended.",
      role: "Returning Customer",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-orange-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition border border-orange-100"
            >
              <div className="flex gap-1 text-orange-500 mb-4">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                "{item.text}"
              </p>

              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}