import { Pill, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl shadow-lg shadow-amber-500/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Pill className="w-6 h-6 text-slate-950" />
                </div>
              </div>
              <div>
                <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">JENVIRA HEALTHCARE</div>
                <div className="text-xs text-amber-400/70">Premium Excellence</div>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Leading the best pharmaceutical company delivering innovative healthcare solutions to distinguished clientele worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-900 border border-amber-500/20 rounded-lg flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500/40 transition-all">
                <Facebook className="w-5 h-5 text-amber-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-amber-500/20 rounded-lg flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500/40 transition-all">
                <Twitter className="w-5 h-5 text-amber-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-amber-500/20 rounded-lg flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500/40 transition-all">
                <Linkedin className="w-5 h-5 text-amber-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-amber-500/20 rounded-lg flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500/40 transition-all">
                <Instagram className="w-5 h-5 text-amber-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Premium Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cardiovascular Elite</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Metabolic Premium</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Therapeutic Luxury</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Immunity Prestige</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Complete Collection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Research & Innovation</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Quality Excellence</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Premium Certifications</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Elite Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Concierge Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Exclusive FAQs</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Product Information</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Safety Standards</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              &copy; 2025 Jenvira Healthcare Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
          <p className="text-amber-400/70 text-xs text-center mt-4">
            ✦ FDA Approved | ISO 9001:2015 Certified | GMP Compliant ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
