import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../data/productsData';

export function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const products = getAllProducts();

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(251,191,36,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(251,191,36,0.3),transparent_50%)]"></div>
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
            ✦ Our Collection ✦
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Exclusive Pharmaceutical Range
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Meticulously crafted formulations designed for the distinguished individual
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl overflow-hidden shadow-lg shadow-amber-500/10 h-full flex flex-col"
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  rotateX: hoveredIndex === index ? -5 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Luxury gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Product Image with luxury border */}
                <div className="relative h-48 sm:h-56 overflow-hidden border-b border-amber-500/20">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent ${product.color} opacity-30`}></div>
                  {/* Premium dosage badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-slate-950/90 backdrop-blur-sm border border-amber-500/30 rounded-full text-sm text-amber-400 shadow-lg">
                    {product.dosage}
                  </div>
                </div>

                <div className="p-6 space-y-3 relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl text-white">{product.name}</h3>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${product.color} text-white text-xs rounded-full self-start`}>
                    {product.category}
                  </div>
                  <p className="text-slate-400 text-sm flex-1">{product.description}</p>
                  
                  {/* Benefits - shown on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-2 border-t border-amber-500/20">
                      {product.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <button 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className={`w-full mt-4 px-4 py-2.5 bg-gradient-to-r ${product.color} text-white rounded-lg hover:shadow-lg transition-shadow text-sm`}
                  >
                    Discover More
                  </button>
                </div>

                {/* Luxury decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-3xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}