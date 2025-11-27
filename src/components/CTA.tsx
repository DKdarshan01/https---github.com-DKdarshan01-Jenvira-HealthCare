import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Luxury animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full">
              ✦ Get in Touch ✦
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Ready to Experience
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                Premium Healthcare?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300">
              Join our exclusive circle of distinguished healthcare providers and institutions. 
              Connect with our luxury healthcare consultants today.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm text-amber-400">Exclusive Hotline</div>
                  <div className="text-lg text-white">123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm text-amber-400">Concierge Email</div>
                  <div className="text-lg text-white">contact@jenvirahealthcare.com</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => navigate('/quote-request')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-2"
              >
                Request Premium Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/quote-request')}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-amber-500/50 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative border-2 border-amber-500/30 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY0MDA3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pharmacy healthcare"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
            </motion.div>
            
            {/* Luxury floating stats card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-500/30 text-white p-6 rounded-xl shadow-2xl shadow-amber-500/20 max-w-xs hidden sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-sm text-amber-400 mb-1">Trusted Globally</div>
              <div className="text-2xl text-white mb-1">50M+ Elite Customers</div>
              <div className="text-sm text-slate-400">Worldwide Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}