import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/productsData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, ShoppingCart, Check, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useQuote } from '../context/QuoteContext';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useQuote();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center py-20">
          <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-3xl text-white mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-amber-500 to-orange-500">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productName: product.name,
      category: product.category,
      dosage: product.dosage,
      color: product.color,
      image: product.image,
    });
    toast.success(`${product.name} added to quote cart!`, {
      description: 'Continue shopping or request a quote',
    });
  };

  const allImages = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
                <div className="relative h-96 sm:h-[500px]">
                  <img
                    src={allImages[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent ${product.color} opacity-20`}></div>
                </div>
              </div>
              
              {/* Image Thumbnails */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-amber-500 ring-2 ring-amber-500/50' 
                          : 'border-amber-500/20 hover:border-amber-500/50'
                      }`}
                    >
                      <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <Badge className={`bg-gradient-to-r ${product.color} text-white border-0 mb-4`}>
                {product.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl text-white mb-2">{product.name}</h1>
              <p className="text-xl text-slate-400">{product.description}</p>
            </div>

            <div className="flex items-center gap-4 py-4 border-y border-amber-500/20">
              <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-sm text-amber-400">Dosage</p>
                <p className="text-xl text-white">{product.dosage}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">About This Product</h3>
              <p className="text-slate-300 leading-relaxed">{product.fullDescription}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl text-white">Key Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 bg-slate-800/50 border border-amber-500/20 rounded-lg p-3">
                    <Check className={`w-5 h-5 bg-gradient-to-r ${product.color} text-white rounded-full p-1 flex-shrink-0`} />
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-white">Detailed Benefits</h3>
              <div className="space-y-3">
                {product.detailedBenefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-800/30 border border-amber-500/10 rounded-lg p-4">
                    <h4 className="text-amber-400 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 bg-slate-800/30 border border-amber-500/20 rounded-xl p-6">
              <div>
                <h4 className="text-white mb-2">Ingredients</h4>
                <p className="text-sm text-slate-400">{product.ingredients}</p>
              </div>
              <div>
                <h4 className="text-white mb-2">Dosage Instructions</h4>
                <p className="text-sm text-slate-400">{product.dosageInstructions}</p>
              </div>
              <div>
                <h4 className="text-amber-400 mb-2">Warnings</h4>
                <p className="text-sm text-slate-400">{product.warnings}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button 
                onClick={handleAddToCart}
                className={`flex-1 bg-gradient-to-r ${product.color} text-white hover:shadow-lg hover:shadow-amber-500/50 transition-all`}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Quote Cart
              </Button>
              <Button 
                onClick={() => navigate('/quote-request')}
                variant="outline"
                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
