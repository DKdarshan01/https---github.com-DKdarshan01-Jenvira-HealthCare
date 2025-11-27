import { motion } from 'motion/react';
import { Shield, Microscope, Award, HeartPulse, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "FDA Approved",
    description: "All our products meet stringent FDA standards and regulations",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Microscope,
    title: "Research Excellence",
    description: "Developed through extensive clinical trials and scientific research",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Award,
    title: "Premium Certified",
    description: "Manufacturing facilities certified to international quality standards",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: HeartPulse,
    title: "Patient Focused",
    description: "Designed with patient safety and efficacy as top priorities",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Leaf,
    title: "Natural Excellence",
    description: "Utilizing the finest natural and synthetic compounds available",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Clock,
    title: "Rapid Action",
    description: "Advanced formulations for rapid relief and sustained benefits",
    color: "from-orange-500 to-amber-500"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Luxury pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.3),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full mb-4">
            ✦ Premium Advantages ✦
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why Choose Jenvira Healthcare?
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the perfect fusion of cutting-edge science and luxury healthcare
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: -5
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 p-8 rounded-2xl hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Luxury Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotateZ: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>

                {/* Luxury corner decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
