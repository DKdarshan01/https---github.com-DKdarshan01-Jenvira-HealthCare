import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

// ⭐ Local image import (Method 3)
import heroImage from "../assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ✦ Premium Pharmaceutical Excellence Since 2010
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
               Health Solutions for a
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Distinguished Life
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300">
              Experience the pinnacle of pharmaceutical innovation. Our
              exclusive range of premium medications delivers unparalleled
              efficacy and refinement for the discerning individual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-2">
                Explore Collection
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 border-2 border-amber-500/50 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-colors">
                Contact Us
              </button>
            </div>

            {/* ICONS */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Award className="w-8 h-8 text-amber-500" />
                <div className="text-2xl text-amber-400">ISO</div>
                <div className="text-sm text-slate-400 text-center sm:text-left">
                  Certified
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <Shield className="w-8 h-8 text-amber-500" />
                <div className="text-2xl text-amber-400">FDA</div>
                <div className="text-sm text-slate-400 text-center sm:text-left">
                  Approved
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <Users className="w-8 h-8 text-amber-500" />
                <div className="text-2xl text-amber-400">50M+</div>
                <div className="text-sm text-slate-400 text-center sm:text-left">
                  Elite Clients
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 rounded-3xl blur-3xl"></div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative border-2 border-amber-500/30 rounded-3xl overflow-hidden">
                {/* ⭐ Local asset image */}
                <ImageWithFallback
                  src={heroImage}
                  alt="Pharmaceutical laboratory"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
            </motion.div>

            {/* Floating shapes */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl shadow-xl shadow-amber-500/50"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl shadow-purple-500/50"
              animate={{ rotate: [360, 0] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
