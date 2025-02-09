import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "../images/hr logo copy.jpg"; // Replace with your actual logo path
import { Link } from "react-router-dom";

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
    className={`fixed top-0 w-full bg-[#0416c7] z-50 shadow-md transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 md:h-12 rounded-md" />
      </Link>
  
      <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-wrap justify-end flex-1">
        <Link
          to="/"
          className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/product/window-ac/variants"
          className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
        >
          Window AC
        </Link>
        <Link
          to="/product/split-ac/variants"
          className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
        >
          Split AC
        </Link>
        <Link
          to="/product/room-heater/variants"
          className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
        >
          Oil Heater
        </Link>
        <Link
          to="/maintenance"
          className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
        >
           Service & Repair
        </Link>
  
        <Link
          to="tel:+917419011361"
          className="flex items-center px-2 lg:px-3 py-2 text-sm lg:text-base text-white font-medium hover:bg-white hover:text-[#0416c7] rounded-md transition-colors duration-200"
        >
          <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
          <span className="hidden xl:inline">+917419011361</span>
        </Link>
  
        <Link
          to="https://wa.me/917419011361"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button
            variant="default"
            size="sm"
            className="bg-white text-[#0416c7] hover:bg-gray-100 text-sm lg:text-base whitespace-nowrap px-3 lg:px-4"
          >
            WhatsApp
          </Button>
        </Link>
      </div>
  
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <Menu className="h-5 w-5 text-[#0416c7]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#0416c7]">
            <div className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="text-base text-white hover:text-gray-200 font-medium">
                Home
              </Link>
              <Link to="/about-us" className="text-base text-white hover:text-gray-200 font-medium">
                About
              </Link>
              <Link to="/product/window-ac/variants" className="text-base text-white hover:text-gray-200 font-medium">
                Window AC
              </Link>
              <Link to="/product/split-ac/variants" className="text-base text-white hover:text-gray-200 font-medium">
                Split AC
              </Link>
              <Link to="/product/room-heater/variants" className="text-base text-white hover:text-gray-200 font-medium">
                Oil Heater
              </Link>
              <Link to="/maintenance" className="text-base text-white hover:text-gray-200 font-medium">
              Service & Repair
              </Link>
              <Link to="tel:+917419011361" className="text-base text-white hover:text-gray-200 font-medium flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +917419011361
              </Link>
              <Link
                to="https://wa.me/917419011361"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:text-gray-200 font-medium"
              >
                WhatsApp
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>
  
  );
};

