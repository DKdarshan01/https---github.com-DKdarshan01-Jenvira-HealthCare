import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { QuoteCart } from './QuoteCart';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/quote-request');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-amber-500/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* COMPANY NAME - NO LOGO */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div>
              <div className="text-base sm:text-xl tracking-wide">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" style={{ fontWeight: 700 }}>
                  JENVIRA HEALTHCARE
                </span>
              </div>
              <div className="text-xs text-amber-300/70">Premium Healthcare Solutions</div>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#home" className="text-amber-100 hover:text-amber-400 transition-colors">Home</a>
            <a href="/#products" className="text-amber-100 hover:text-amber-400 transition-colors">Products</a>
            <a href="/#about" className="text-amber-100 hover:text-amber-400 transition-colors">About</a>
            <button 
              onClick={() => navigate('/customer-dashboard')}
              className="text-amber-100 hover:text-amber-400 transition-colors"
            >
              My Quotes
            </button>
            <QuoteCart />
            <button 
              onClick={handleGetQuote}
              className="px-4 lg:px-6 py-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <QuoteCart />
            <button 
              className="p-2 text-amber-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <a href="/#home" onClick={() => setIsMenuOpen(false)} className="block text-amber-100 hover:text-amber-400 transition-colors">Home</a>
                <a href="/#products" onClick={() => setIsMenuOpen(false)} className="block text-amber-100 hover:text-amber-400 transition-colors">Products</a>
                <a href="/#about" onClick={() => setIsMenuOpen(false)} className="block text-amber-100 hover:text-amber-400 transition-colors">About</a>
                <button 
                  onClick={() => { navigate('/customer-dashboard'); setIsMenuOpen(false); }}
                  className="block w-full text-left text-amber-100 hover:text-amber-400 transition-colors"
                >
                  My Quotes
                </button>
                <button 
                  onClick={handleGetQuote}
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
                >
                  Get Quote
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}