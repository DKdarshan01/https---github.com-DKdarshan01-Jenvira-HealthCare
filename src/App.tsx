import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { QuoteRequestPage } from "./pages/QuoteRequestPage";
import { CustomerDashboard } from "./pages/CustomerDashboard";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <Router>
      <QuoteProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/quote-request" element={<QuoteRequestPage />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          </Routes>
          <Footer />
          <Toaster 
            position="top-right"
            theme="dark"
            toastOptions={{
              style: {
                background: 'rgb(15 23 42)',
                border: '1px solid rgba(251, 191, 36, 0.2)',
                color: 'rgb(248 250 252)',
              },
            }}
          />
        </div>
      </QuoteProvider>
    </Router>
  );
}