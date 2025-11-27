import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface QuoteItem {
  productName: string;
  category: string;
  dosage: string;
  quantity: number;
  color: string;
  image: string;
}

export interface QuoteRequest {
  id: string;
  items: QuoteItem[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    notes?: string;
  };
  status: 'submitted' | 'reviewed' | 'approved' | 'rejected' | 'converted';
  submittedAt: string;
  updatedAt: string;
  adminNotes?: string;
  quotedPrice?: number;
  discount?: number;
  expiryDate?: string;
  terms?: string;
}

interface QuoteContextType {
  cartItems: QuoteItem[];
  addToCart: (item: Omit<QuoteItem, 'quantity'>) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
  clearCart: () => void;
  quoteRequests: QuoteRequest[];
  submitQuoteRequest: (customerInfo: QuoteRequest['customerInfo']) => Promise<string>;
  getQuoteRequest: (id: string) => QuoteRequest | undefined;
  updateQuoteStatus: (id: string, status: QuoteRequest['status'], adminNotes?: string) => void;
  updateQuoteDetails: (id: string, details: Partial<QuoteRequest>) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<QuoteItem[]>(() => {
    const saved = localStorage.getItem('quoteCart');
    return saved ? JSON.parse(saved) : [];
  });

  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('quoteRequests');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('quoteCart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('quoteRequests', JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  const addToCart = (item: Omit<QuoteItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.productName === item.productName);
      if (existing) {
        return prev.map(i => 
          i.productName === item.productName 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCartItems(prev => prev.filter(i => i.productName !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productName);
      return;
    }
    setCartItems(prev => 
      prev.map(i => i.productName === productName ? { ...i, quantity } : i)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const submitQuoteRequest = async (customerInfo: QuoteRequest['customerInfo']): Promise<string> => {
    const newRequest: QuoteRequest = {
      id: `QR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      items: [...cartItems],
      customerInfo,
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setQuoteRequests(prev => [newRequest, ...prev]);
    clearCart();
    
    // Simulate notification (in real app, this would be an API call)
    console.log('New quote request submitted:', newRequest);
    
    return newRequest.id;
  };

  const getQuoteRequest = (id: string) => {
    return quoteRequests.find(req => req.id === id);
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status'], adminNotes?: string) => {
    setQuoteRequests(prev => 
      prev.map(req => 
        req.id === id 
          ? { ...req, status, adminNotes, updatedAt: new Date().toISOString() }
          : req
      )
    );
  };

  const updateQuoteDetails = (id: string, details: Partial<QuoteRequest>) => {
    setQuoteRequests(prev => 
      prev.map(req => 
        req.id === id 
          ? { ...req, ...details, updatedAt: new Date().toISOString() }
          : req
      )
    );
  };

  return (
    <QuoteContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      quoteRequests,
      submitQuoteRequest,
      getQuoteRequest,
      updateQuoteStatus,
      updateQuoteDetails,
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within QuoteProvider');
  }
  return context;
}
