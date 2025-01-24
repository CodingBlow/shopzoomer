import { useParams, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const product = products[id as keyof typeof products];

  const [selectedVariant, setSelectedVariant] = useState(searchParams.get("variant") || "");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedVariant && selectedMonth && product) {
      const basePrice = product.variants[selectedVariant][selectedMonth];
      setTotalPrice(basePrice * quantity);
    }
  }, [selectedVariant, selectedMonth, quantity, product]);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedVariant || !selectedMonth || !deliveryDate) {
      toast({
        title: "Error",
        description: "Please select all required options",
        variant: "destructive",
      });
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Success",
      description: "Your order has been placed successfully!",
    });
    
    setShowForm(false);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const getProductDescription = () => {
    const descriptions: Record<string, string> = {
      "window-ac": "Energy-efficient window AC perfect for small to medium rooms. Includes installation and regular maintenance.",
      "split-ac": "Premium split AC with advanced cooling technology and low noise operation. Professional installation included.",
      "room-heater": "Instant heating solution with multiple heat settings and safety features.",
      "geyser": "Quick heating geyser with temperature control and energy-saving mode.",
      "refrigerator": "Spacious refrigerator with multiple compartments and power-saving technology.",
      "washing-machine": "Efficient washing machine with multiple wash programs and water-saving features."
    };
    return descriptions[id as string] || product.description;
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-zoom-in"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{getProductDescription()}</p>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(product.variants).map((variant) => (
                      <SelectItem key={variant} value={variant}>
                        {variant}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedVariant && (
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration (months)" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(product.variants[selectedVariant]).map((month) => (
                        <SelectItem key={month} value={month}>
                          {month} months - ₹{product.variants[selectedVariant][month]}/month
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Delivery Date
                  </label>
                  <Calendar
                    mode="single"
                    selected={deliveryDate}
                    onSelect={setDeliveryDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                </div>

                {totalPrice > 0 && (
                  <div className="text-xl font-bold">
                    Total Price: ₹{totalPrice}
                  </div>
                )}

                <Button onClick={handleAddToCart} className="w-full">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-5 space-y-2">
            <li>Energy Rating: 5 Star</li>
            <li>Power Consumption: Efficient</li>
            <li>Warranty: Included with free repairs</li>
            <li>Installation: Free installation included</li>
            {id === "window-ac" && (
              <>
                <li>Cooling Capacity: Suitable for rooms up to 150 sq ft</li>
                <li>Anti-bacterial Filter: Yes</li>
              </>
            )}
            {id === "split-ac" && (
              <>
                <li>Inverter Technology: Yes</li>
                <li>Remote Control: LCD Display with Night Glow</li>
              </>
            )}
            {id === "room-heater" && (
              <>
                <li>Safety Cut-off: Automatic</li>
                <li>Heat Settings: Multiple</li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Order</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <Input
                required
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};