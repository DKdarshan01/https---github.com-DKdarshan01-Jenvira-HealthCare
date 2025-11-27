import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useQuote } from "../context/QuoteContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";

export function QuoteCart() {
  const { cartItems, removeFromCart, updateQuantity } = useQuote();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRequestQuote = () => {
    setIsOpen(false);
    navigate('/quote-request');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="relative border-amber-500/30 bg-slate-900/50 hover:bg-amber-500/10 text-amber-400"
        >
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-amber-500 text-slate-950 border-0"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-slate-950 border-amber-500/20 text-white w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-amber-400">Quote Cart</SheetTitle>
          <SheetDescription className="text-slate-400">
            Review your selected products before requesting a quote
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-slate-600 mb-4" />
              <p className="text-slate-400">Your quote cart is empty</p>
              <p className="text-sm text-slate-500 mt-2">Add products to request a quote</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div 
                    key={item.productName} 
                    className="bg-slate-900/50 border border-amber-500/20 rounded-lg p-4"
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
                        
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 border-amber-500/30 bg-slate-800 hover:bg-slate-700"
                            onClick={() => updateQuantity(item.productName, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3 text-amber-400" />
                          </Button>
                          <span className="text-white w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 border-amber-500/30 bg-slate-800 hover:bg-slate-700"
                            onClick={() => updateQuantity(item.productName, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3 text-amber-400" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 ml-auto hover:bg-red-500/20"
                            onClick={() => removeFromCart(item.productName)}
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-amber-500/20 pt-4">
                <Button 
                  onClick={handleRequestQuote}
                  className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-500/50"
                >
                  Request Quote ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}