import { useNavigate } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function QuoteRequestPage() {
  const navigate = useNavigate();
  const { cartItems, submitQuoteRequest } = useQuote();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty', {
        description: 'Please add products to your cart before requesting a quote',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const quoteId = await submitQuoteRequest(formData);
      toast.success('Quote request submitted successfully!', {
        description: `Your quote ID is ${quoteId}`,
      });
      navigate(`/customer-dashboard?new=${quoteId}`);
    } catch (error) {
      toast.error('Failed to submit quote request', {
        description: 'Please try again later',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quote Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-6 shadow-2xl shadow-amber-500/10 sticky top-24">
              <h2 className="text-2xl text-white mb-6 flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-amber-400" />
                Quote Summary
              </h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-400">Your cart is empty</p>
                  <Button 
                    onClick={() => navigate('/')}
                    className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500"
                  >
                    Browse Products
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-slate-900/50 border border-amber-500/10 rounded-lg p-4"
                    >
                      <div className="flex gap-4">
                        <img 
                          src={item.image} 
                          alt={item.productName}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-white">{item.productName}</h4>
                          <p className="text-sm text-slate-400">{item.category}</p>
                          <p className="text-xs text-amber-400 mt-1">{item.dosage}</p>
                          <p className="text-sm text-slate-300 mt-2">Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-amber-500/20 pt-4">
                    <div className="flex justify-between text-white">
                      <span>Total Items:</span>
                      <span className="text-amber-400">
                        {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10">
              <h2 className="text-2xl text-white mb-6">Request Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-900 border-amber-500/30 text-white focus:border-amber-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-900 border-amber-500/30 text-white focus:border-amber-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-900 border-amber-500/30 text-white focus:border-amber-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-slate-300">Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-slate-900 border-amber-500/30 text-white focus:border-amber-500"
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-slate-300">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="bg-slate-900 border-amber-500/30 text-white focus:border-amber-500 min-h-24"
                    placeholder="Any special requirements or questions..."
                  />
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="text-sm text-amber-200">
                    By submitting this form, you agree to create an account with us for tracking your quote requests. 
                    You will receive email notifications about your quote status.
                  </p>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0}
                  className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-500/50 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
