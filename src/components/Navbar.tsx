import { useState, useEffect } from "react";
import { Menu, Phone, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "../images/hr logo copy.jpg";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white z-50 shadow-md border-b transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 shadow-md" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/"
            className="px-4 py-2 text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Home
          </a>
          <a
            href="product/window-ac/variants"
            className="px-4 py-2 text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Window AC On Rent
          </a>
          <a
            href="/product/split-ac/variants"
            className="px-4 py-2 text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Split AC On Rent
          </a>
          <a
            href="/product/room-heater/variants"
            className="px-4 py-2 text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Oil Heater On Rent
          </a>
          <a
            href="/product/geyser/variants"
            className="px-4 py-2 text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Geyser On Rent
          </a>
        
          {/* Phone */}
          <a
            href="tel:+918744982935"
            className="flex items-center px-4 py-2 text-gray-700 font-medium hover:text-primary"
          >
            <Phone className="h-5 w-5 mr-2" />
            +91-8744982935
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918744982935"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm" className="bg-green-500 text-white">
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="hover:bg-gray-100">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <a
                  href="/"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Home
                </a>
                <a
                  href="#window-ac"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Window AC On Rent
                </a>
                <a
                  href="#split-ac"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Split AC On Rent
                </a>
                <a
                  href="#heater"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Oil Heater On Rent
                </a>
                <a
                  href="#geyser"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Geyser On Rent
                </a>
                <a
                  href="#sell-ac"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Sell Your Old AC
                </a>
                <a
                  href="tel:+918744982935"
                  className="text-lg text-gray-800 hover:text-primary font-medium"
                >
                  Call: +91-8744982935
                </a>
                <a
                  href="https://wa.me/918744982935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-600 hover:text-green-800 font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
