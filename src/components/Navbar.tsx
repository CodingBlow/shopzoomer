import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
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
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 md:h-12 shadow-md" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <a
            href="/"
            className="px-2 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Home
          </a>
          <a
            href="product/window-ac/variants"
            className="px-2 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Window AC
          </a>
          <a
            href="/product/split-ac/variants"
            className="px-2 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Split AC
          </a>
          <a
            href="/product/room-heater/variants"
            className="px-2 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Oil Heater
          </a>
          <a
            href="/product/geyser/variants"
            className="px-2 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-primary font-medium border rounded-md hover:border-primary"
          >
            Geyser
          </a>
        
          {/* Phone */}
          <a
            href="tel:+918744982935"
            className="flex items-center px-2 lg:px-4 py-2 text-sm lg:text-base text-gray-700 font-medium hover:text-primary"
          >
            <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
            <span className="hidden lg:inline">+91-8744982935</span>
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918744982935"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="sm" className="bg-green-500 text-white text-sm lg:text-base">
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
                  className="text-base text-gray-800 hover:text-primary font-medium"
                >
                  Home
                </a>
                <a
                  href="/product/window-ac/variants"
                  className="text-base text-gray-800 hover:text-primary font-medium"
                >
                  Window AC
                </a>
                <a
                  href="/product/split-ac/variants"
                  className="text-base text-gray-800 hover:text-primary font-medium"
                >
                  Split AC
                </a>
                <a
                  href="/product/room-heater/variants"
                  className="text-base text-gray-800 hover:text-primary font-medium"
                >
                  Oil Heater
                </a>
                <a
                  href="/product/geyser/variants"
                  className="text-base text-gray-800 hover:text-primary font-medium"
                >
                  Geyser
                </a>
                <a
                  href="tel:+918744982935"
                  className="text-base text-gray-800 hover:text-primary font-medium flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91-8744982935
                </a>
                <a
                  href="https://wa.me/918744982935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-green-600 hover:text-green-800 font-medium"
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