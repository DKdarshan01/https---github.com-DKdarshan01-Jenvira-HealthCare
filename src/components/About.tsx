import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Award, Globe, Microscope, Users } from 'lucide-react';

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Microscope, value: "200+", label: "Research Projects" },
  { icon: Users, value: "50M+", label: "Distinguished Clients" }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.4),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative border-2 border-amber-500/30 rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJ8ZW58MXx8fHwxNzY0MDA2MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medical research laboratory"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>
            {/* Luxury floating certification card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/30 p-6 rounded-2xl shadow-2xl shadow-amber-500/20 max-w-xs hidden sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <div className="text-sm text-amber-400">Premium Certified</div>
                  <div className="text-white">ISO 9001:2015</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full">
              About Jenvira Healthcare
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
              Pioneering the Best Healthcare Innovation
            </h2>
            <p className="text-lg text-slate-300">
              Jenvira Healthcare represents the apex of pharmaceutical excellence. Our commitment to 
              developing innovative healthcare solutions transcends the ordinary, offering our 
              distinguished clientele the finest in medical advancement.
            </p>
            <p className="text-lg text-slate-300">
              With unwavering dedication to quality, safety, and efficacy, we maintain the highest 
              international standards. Each formulation undergoes rigorous testing in our 
              state-of-the-art facilities, ensuring exceptional results that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <stat.icon className="w-8 h-8 text-amber-500 mb-3" />
                  <div className="text-2xl sm:text-3xl text-amber-400">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
