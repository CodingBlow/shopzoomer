import { useState, useEffect } from "react";
import { Menu, ShoppingCart, Wrench, Headset, ThumbsUp, BadgeCheck, CreditCard } from "lucide-react";
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
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full shadow-md" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-primary font-medium">Home</a>
          <a href="#products" className="text-gray-700 hover:text-primary font-medium">Products</a>
          <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
          <Button variant="outline" size="icon" className="hover:bg-gray-100">
            <ShoppingCart className="h-5 w-5" />
          </Button>
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
              <div className="flex flex-col space-y-6 mt-8">
                <a href="/" className="text-lg text-gray-800 hover:text-primary font-medium">Home</a>
                <a href="#products" className="text-lg text-gray-800 hover:text-primary font-medium">Products</a>
                <a href="#contact" className="text-lg text-gray-800 hover:text-primary font-medium">Contact</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Free Repair and Maintenance",
    },
    {
      icon: Headset,
      title: "Online Support 24/7",
    },
    {
      icon: ThumbsUp,
      title: "100% Customer Satisfaction",
    },
    {
      icon: BadgeCheck,
      title: "Free Installation",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
    },
  ];

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-bold mb-6">Home Appliances On Rent In Gurgaon - Appliance Rental Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center border rounded-md p-4 shadow-sm">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <service.icon className="w-8 h-8 text-blue-600" />
              <h3 className="text-sm font-semibold text-gray-700">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};