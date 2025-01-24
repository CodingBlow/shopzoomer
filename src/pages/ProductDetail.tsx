import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products[id as keyof typeof products];
  const selectedVariant = searchParams.get("variant") || "";

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

  if (!product || !selectedVariant) return <div>Product not found</div>;

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const price = product.variants[selectedVariant][month];
    setTotalPrice(price * quantity);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (selectedMonth) {
      const price = product.variants[selectedVariant][selectedMonth];
      setTotalPrice(price * newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!selectedMonth || !deliveryDate) {
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
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <Card>
        <CardContent className="p-6 space-y-6">
          <h1 className="text-3xl font-bold">{product.name} - {selectedVariant}</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Select value={selectedMonth} onValueChange={handleMonthChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration (months)" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(product.variants[selectedVariant]).map(([month, price]) => (
                    <SelectItem key={month} value={month}>
                      {month} months - ₹{price}/month
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Quantity
                </label>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                />
              </div>

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

              {totalPrice > 0 && (
                <div className="text-xl font-bold">
                  Total Price: ₹{totalPrice}
                </div>
              )}

              <Button onClick={handleAddToCart} className="w-full">
                Add to Cart
              </Button>
            </div>

            <div>
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
          </div>
        </CardContent>
      </Card>

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