import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';

const specifications = [
  "Clinical-grade accuracy: ±2% margin of error",
  "Battery life: Up to 72 hours continuous use",
  "Wireless connectivity: Bluetooth 5.0 & WiFi",
  "Display: 5-inch high-resolution touchscreen",
  "Data storage: 10,000+ patient records",
  "Integration: Compatible with major EHR systems"
];

export function ProductDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwbW9kZXJufGVufDF8fHx8MTc2Mzk5NjM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Medical equipment"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full">
              Technical Specifications
            </div>
            <h2 className="text-4xl text-gray-900">
              Precision Engineering Meets Medical Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Our device is built with the highest standards of medical technology, incorporating advanced sensors and intelligent software to deliver accurate, reliable results every time.
            </p>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">{spec}</p>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Download Full Specifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
