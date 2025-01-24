import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { sendToTelegram } from "@/utils/telegram";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products[id as keyof typeof products];

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

  if (!product) return <div>Product not found</div>;

  const getProductSpecifications = () => {
    switch (id) {
      case "window-ac":
        return [
          "Energy Rating: 5 Star",
          "Cooling Capacity: Suitable for rooms up to 150 sq ft",
          "Anti-bacterial Filter: Yes",
          "Auto Restart: Yes",
          "Sleep Mode: Available",
          "Remote Control: LCD Display",
          "Warranty: 1 Year Comprehensive",
        ];
      case "split-ac":
        return [
          "Inverter Technology: Yes",
          "Energy Rating: 5 Star",
          "Cooling Capacity: As per tonnage",
          "4-Way Swing: Available",
          "Anti-virus Protection: Yes",
          "Wi-Fi Enabled: Optional",
          "Warranty: 1 Year Comprehensive",
        ];
      case "refrigerator":
        return [
          "Energy Rating: 4 Star",
          "Frost Free Technology",
          "Multiple Air Vents",
          "Toughened Glass Shelves",
          "LED Lighting",
          "Door Lock: Available",
          "Warranty: 1 Year Comprehensive",
        ];
      default:
        return [
          "Energy Efficient",
          "Premium Build Quality",
          "Advanced Features",
          "Smart Controls",
          "Warranty Coverage",
        ];
    }
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    const price = Object.values(product.variants)[0][month];
    setTotalPrice(price * quantity);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (selectedMonth) {
      const price = Object.values(product.variants)[0][selectedMonth];
      setTotalPrice(price * newQuantity);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      product: product.name,
      duration: selectedMonth,
      quantity,
      totalPrice,
      deliveryDate: deliveryDate?.toLocaleDateString(),
      ...formData,
    };

    const sentToTelegram = await sendToTelegram(orderData);

    if (sentToTelegram) {
      toast({
        title: "Success",
        description: "Your order has been placed successfully!",
      });
    } else {
      toast({
        title: "Warning",
        description: "Order placed but notification failed to send.",
        variant: "destructive",
      });
    }
    
    setShowForm(false);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-lg hover:animate-zoom"
                />
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                
                <div className="space-y-4">
                  <Select value={selectedMonth} onValueChange={handleMonthChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration (months)" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(Object.values(product.variants)[0]).map(([month, price]) => (
                        <SelectItem key={month} value={month}>
                          {month} months - ₹{price}/month
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div>
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <Input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Delivery Date</label>
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

                  <Button 
                    onClick={() => {
                      if (!selectedMonth || !deliveryDate) {
                        toast({
                          title: "Error",
                          description: "Please select all required options",
                          variant: "destructive",
                        });
                        return;
                      }
                      setShowForm(true);
                    }} 
                    className="w-full"
                  >
                    Proceed to Order
                  </Button>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {getProductSpecifications().map((spec, index) => (
                      <li key={index} className="text-gray-600">{spec}</li>
                    ))}
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
      </main>
      <Footer />
    </div>
  );
};