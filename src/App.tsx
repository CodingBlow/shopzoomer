import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import { ProductVariants } from "./pages/ProductVariants";
import { ProductDetail } from "./pages/ProductDetail";
import { Maintenance } from "./pages/Maintenance";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { FloatingButtons } from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:id/variants" element={<ProductVariants />} />
        <Route path="/product/:id/buy" element={<ProductDetail />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <Toaster />
    </Router>
  );
}

export default App;