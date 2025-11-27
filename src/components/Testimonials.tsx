import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief of Cardiology, Metropolitan Hospital",
    content: "This device has revolutionized how we monitor our cardiac patients. The real-time alerts have helped us prevent several critical incidents. It's become an indispensable part of our ICU.",
    rating: 5
  },
  {
    name: "Dr. James Chen",
    role: "Emergency Medicine Physician",
    content: "The accuracy and reliability are outstanding. Setup was incredibly simple, and the interface is intuitive enough that our entire staff was comfortable using it within days.",
    rating: 5
  },
  {
    name: "Linda Rodriguez, RN",
    role: "Head Nurse, St. Mary's Medical Center",
    content: "From a nursing perspective, this product has streamlined our workflow significantly. Patient data is always accessible, and the multi-user access means better coordination across shifts.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what medical professionals are saying about our product.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div>
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
