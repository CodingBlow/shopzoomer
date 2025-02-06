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
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { TermsAndConditions } from "./pages/TermsAndCondition";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";


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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        

      </Routes>
      <Footer />
      <FloatingButtons />
      <Toaster />
    </Router>
  );
}

export default App;