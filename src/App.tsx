import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { ProductDetail } from "./pages/ProductDetail";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductVariants } from "./pages/ProductVariants";
import { Contact } from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { FloatingButtons } from "./components/FloatingButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:id/variants" element={<ProductVariants />} />
              <Route path="/product/:id/buy" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;