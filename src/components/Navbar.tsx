import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          RentApp
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-primary">Home</a>
          <a href="#products" className="text-gray-600 hover:text-primary">Products</a>
          <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="/" className="text-lg">Home</a>
                <a href="#products" className="text-lg">Products</a>
                <a href="#contact" className="text-lg">Contact</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};