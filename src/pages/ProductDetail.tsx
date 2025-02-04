import { useParams, useNavigate } from "react-router-dom";
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
import { sendToTelegram } from "@/utils/telegram";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [showCalendar, setShowCalendar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      case "room-heater":
        return [
          "Power Consumption: 1000W-2500W",
          "Safety Features: Tip-over protection",
          "Adjustable Thermostat: Yes",
          "Heat Settings: Multiple",
          "Portable Design: Yes",
          "Quick Heating: Instant warmth",
          "Warranty: 1 Year Manufacturer",
        ];
      case "geyser":
        return [
          "Capacity: 15L-20L",
          "Heating Element: Copper",
          "Safety Features: Multiple",
          "Temperature Control: Yes",
          "Installation: Free",
          "Energy Rating: 5 Star",
          "Warranty: 2 Years",
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
      case "washing-machine":
        return [
          "Wash Programs: Multiple",
          "Energy Efficiency: High",
          "Water Level Settings: Yes",
          "Spin Speed: Adjustable",
          "Child Lock: Available",
          "Digital Display: Yes",
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

  const sendToTelegram = async (orderData: any): Promise<boolean> => {
    const botToken = "7890027454:AAH9eCTnijNXPuR701y0NfdcrEw6lfuIfqk";
    const chatId = "1684000886";

    // Format the message using emojis
    const message =
      `🛍️ *New Order Received* 🛍️\n\n` +
      `📦 *Product:* ${orderData.product}\n` +
      `📅 *Duration:* ${orderData.duration} months\n` +
      `🔢 *Quantity:* ${orderData.quantity}\n` +
      `💰 *Total Price:* ${orderData.totalPrice}\n` +
      `📅 *Delivery Date:* ${orderData.deliveryDate}\n\n` +
      `👤 *Customer Name:* ${orderData.name}\n` +
      `📞 *Customer Phone:* ${orderData.phone}\n` +
      `🏠 *Customer Address:* ${orderData.address}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown", // Specify Markdown formatting
        }),
      });

      const data = await response.json();

      return data.ok; // Return whether the message was sent successfully
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      return false;
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
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left side - Product Image */}
              <div>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8/12 h-auto rounded-lg shadow-md hover:animate-zoom"
                  />
                </div>
              </div>

              {/* Right side - Buying Options */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                  <div className="space-y-6">
                    <Select
                      value={selectedMonth}
                      onValueChange={handleMonthChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select duration (months)" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(Object.values(product.variants)[0]).map(
                          ([month, price]: [string, number]) => (
                            <SelectItem key={month} value={month}>
                              {month} months - ₹{price}/month
                            </SelectItem>
                          )
                        )}
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
                        onChange={(e) =>
                          handleQuantityChange(parseInt(e.target.value) || 1)
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Delivery Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !deliveryDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {deliveryDate ? (
                              format(deliveryDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={deliveryDate}
                            onSelect={setDeliveryDate}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {totalPrice > 0 && (
                      <div className="text-2xl font-bold text-primary">
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
                </div>
              </div>
            </div>

            {/* Product Description and Details */}
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description">
                  <AccordionTrigger className="text-xl font-semibold">
                    Description of Hindustan Rent
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Star Rating</h3>
                      <p>3, 4 & 5 Star as per stock availability</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Product Condition</h3>
                      <p>Its used but looks like new condition, it will be in Excellent working condition.</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Brand</h3>
                      <p>All products will be branded as per market. Brand and Color may vary as per stock availability.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment">
                  <AccordionTrigger className="text-xl font-semibold">
                    Payment Policy
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="space-y-2">
                      <p>The Rent, Security deposit amount and other charges has to be paid in full at the time of installation/delivery of products.</p>
                      
                      <h3 className="font-semibold mt-4">Mode of Payment</h3>
                      <p>Accepted as Online Google Pay, Phonepe, UPI, Net banking and Cash etc.</p>
                      
                      <h3 className="font-semibold mt-4">Security Deposit</h3>
                      <p>Security deposit Rs. 2,000/-(refundable) will be extra and it will be returned back at the time of pickup.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documentation">
                  <AccordionTrigger className="text-xl font-semibold">
                    Documentation Required
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Aadhar card submission must for everyone</li>
                      <li>Any two from: Govt ID card, Bank statement, Company name, GST number, DL Selfie etc</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery">
                  <AccordionTrigger className="text-xl font-semibold">
                    Delivery & Pickup Policy
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Delivery</h3>
                      <p>Customer or their representative must be present at the agreed date and time for getting Items checked in good condition.</p>
                      
                      <h3 className="font-semibold mt-4">Pick-Up</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Customer must inform us minimum 3 Days prior to pick-up</li>
                        <li>Pick-up date and time will be mutually decided</li>
                        <li>Customer must be present during the handover/return</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="maintenance">
                  <AccordionTrigger className="text-xl font-semibold">
                    Maintenance Policy
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Repair and Maintenance of products will be on "Hindustan rent" with free of Cost during the entire season/rented time</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="terms">
                  <AccordionTrigger className="text-xl font-semibold">
                    General Terms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>It is not allowed to shift the rented item to another location</li>
                      <li>Customer cannot transfer "Hindustan rent" Items to another person</li>
                      <li>Electric sub meter charge Rs. 1,000/-, if required</li>
                      <li>Extra Copper piping charge Rs. 300/- per feet if need extra as per guide</li>
                      <li>Electric power Requirement: AC 240V, with pre installed power plug of 16 Amp is must near AC installation location</li>
                      <li>Stabilizer rental will be extra Rs.1,000/-, If required</li>
                      <li>All the Electricity part and electrical fitting as well as wooden/other work would be done at Customer's end only</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                <label className="block text-sm font-medium mb-2">
                  Address
                </label>
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