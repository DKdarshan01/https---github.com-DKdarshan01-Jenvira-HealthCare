import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { toast } from 'sonner@2.0.3';

const statusConfig = {
  submitted: {
    icon: Clock,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    label: 'Submitted',
  },
  reviewed: {
    icon: AlertCircle,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    label: 'Under Review',
  },
  approved: {
    icon: CheckCircle,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    label: 'Approved',
  },
  rejected: {
    icon: XCircle,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    label: 'Rejected',
  },
  converted: {
    icon: Package,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    label: 'Converted to Order',
  },
};

export function CustomerDashboard() {
  const navigate = useNavigate();
  const { quoteRequests } = useQuote();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const newQuoteId = searchParams.get('new');
    if (newQuoteId) {
      toast.success('Quote request created!', {
        description: 'Track your quote status below',
      });
    }
  }, [searchParams]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl text-white mb-2">Customer Dashboard</h1>
          <p className="text-slate-400 mb-8">Track and manage your quote requests</p>

          {quoteRequests.length === 0 ? (
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500/20">
              <CardContent className="py-12 text-center">
                <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 mb-4">No quote requests yet</p>
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500"
                >
                  Browse Products
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {quoteRequests.map((request, index) => {
                const config = statusConfig[request.status];
                const StatusIcon = config.icon;

                return (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500/20 overflow-hidden">
                      <CardHeader className="border-b border-amber-500/20">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-white text-xl mb-2">
                              Quote #{request.id}
                            </CardTitle>
                            <p className="text-sm text-slate-400">
                              Submitted: {formatDate(request.submittedAt)}
                            </p>
                            <p className="text-sm text-slate-400">
                              Updated: {formatDate(request.updatedAt)}
                            </p>
                          </div>
                          <Badge className={`${config.bg} ${config.border} ${config.color} border flex items-center gap-2 w-fit`}>
                            <StatusIcon className="w-4 h-4" />
                            {config.label}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Customer Info */}
                          <div className="space-y-3">
                            <h4 className="text-amber-400">Customer Information</h4>
                            <div className="bg-slate-900/50 border border-amber-500/10 rounded-lg p-4 space-y-2 text-sm">
                              <div>
                                <span className="text-slate-500">Name:</span>
                                <span className="text-white ml-2">{request.customerInfo.name}</span>
                              </div>
                              <div>
                                <span className="text-slate-500">Email:</span>
                                <span className="text-white ml-2">{request.customerInfo.email}</span>
                              </div>
                              <div>
                                <span className="text-slate-500">Phone:</span>
                                <span className="text-white ml-2">{request.customerInfo.phone}</span>
                              </div>
                              <div>
                                <span className="text-slate-500">Address:</span>
                                <span className="text-white ml-2">{request.customerInfo.address}</span>
                              </div>
                              {request.customerInfo.notes && (
                                <div className="pt-2 border-t border-amber-500/10">
                                  <span className="text-slate-500 block mb-1">Notes:</span>
                                  <span className="text-white">{request.customerInfo.notes}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Items */}
                          <div className="space-y-3">
                            <h4 className="text-amber-400">Requested Items ({request.items.length})</h4>
                            <div className="space-y-2">
                              {request.items.map((item, idx) => (
                                <div 
                                  key={idx}
                                  className="bg-slate-900/50 border border-amber-500/10 rounded-lg p-3 flex gap-3"
                                >
                                  <img 
                                    src={item.image}
                                    alt={item.productName}
                                    className="w-16 h-16 object-cover rounded"
                                  />
                                  <div className="flex-1">
                                    <p className="text-white text-sm">{item.productName}</p>
                                    <p className="text-xs text-slate-400">{item.category}</p>
                                    <p className="text-xs text-amber-400 mt-1">
                                      {item.dosage} × {item.quantity}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Quote Details (if approved) */}
                        {(request.status === 'approved' || request.status === 'converted') && (
                          <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-2">
                            <h4 className="text-green-400">Quote Details</h4>
                            {request.quotedPrice && (
                              <div className="text-white">
                                <span className="text-slate-400">Quoted Price:</span>
                                <span className="text-2xl ml-2">${request.quotedPrice.toFixed(2)}</span>
                                {request.discount && request.discount > 0 && (
                                  <span className="text-green-400 text-sm ml-2">
                                    ({request.discount}% discount applied)
                                  </span>
                                )}
                              </div>
                            )}
                            {request.expiryDate && (
                              <p className="text-sm text-slate-400">
                                Valid until: {formatDate(request.expiryDate)}
                              </p>
                            )}
                            {request.terms && (
                              <p className="text-sm text-slate-300 mt-2">{request.terms}</p>
                            )}
                          </div>
                        )}

                        {/* Admin Notes */}
                        {request.adminNotes && (
                          <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                            <h4 className="text-amber-400 mb-2">Admin Notes</h4>
                            <p className="text-slate-300 text-sm">{request.adminNotes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
