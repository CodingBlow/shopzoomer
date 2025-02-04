import {
  useParams,
  useNavigate,
  useSearchParams,
  Link,
} from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const selectedVariant = searchParams.get("variant");
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

  const variantImage = selectedVariant
    ? product.variants[selectedVariant]?.image
    : product.image;

  const similarProducts = Object.entries(products)
    .filter(([productId]) => productId !== id)
    .slice(0, 3);

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

  const sendToWhatsApp = (orderData: any): boolean => {
    const phoneNumber = "917050068050"; 

    const message =
      `🛍️ New Order Received 🛍️\n\n` +
      `📦 Product: ${orderData.product}\n` +
      `📅 Duration: ${orderData.duration} months\n` +
      `🔢 Quantity: ${orderData.quantity}\n` +
      `💰 Total Price: ${orderData.totalPrice}\n` +
      `📅 Delivery Date: ${orderData.deliveryDate}\n\n` +
      `👤 Customer Name: ${orderData.name}\n` +
      `📞 Customer Phone: ${orderData.phone}\n` +
      `🏠 Customer Address: ${orderData.address}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    return true;
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

    const sentToWhatsApp = sendToWhatsApp(orderData);

    if (sentToWhatsApp) {
      toast({
        title: "Success",
        description:
          "Your order has been placed successfully! Redirecting to WhatsApp...",
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
              <div>
                <div className="relative">
                  <img
                    src={variantImage}
                    alt={product.name}
                    className="w-90 h-auto rounded-lg shadow-md hover:animate-zoom"
                  />
                </div>
              </div>

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

            <div className="mt-12">
              <Accordion
                type="single"
                collapsible
                defaultValue="description"
                className="w-full"
              >
                <AccordionItem value="description">
                  <AccordionTrigger className="text-xl font-semibold">
                    Description of Hindustan Rent
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Star Rating</h3>
                      <p>{product.description.starRating}</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Product Condition</h3>
                      <p>{product.description.condition}</p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Brand</h3>
                      <p>{product.description.brand}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment">
                  <AccordionTrigger className="text-xl font-semibold">
                    Payment Policy
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="space-y-2">
                      <p>{product.description.payment}</p>

                      <h3 className="font-semibold mt-4">Mode of Payment</h3>
                      <p>{product.description.paymentMode}</p>

                      <h3 className="font-semibold mt-4">Security Deposit</h3>
                      <p>{product.description.securityDeposit}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documentation">
                  <AccordionTrigger className="text-xl font-semibold">
                    Documentation Required
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {product.description.documentation.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
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
                      <p>{product.description.delivery}</p>

                      <h3 className="font-semibold mt-4">Pick-Up</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {product.description.pickup.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="maintenance">
                  <AccordionTrigger className="text-xl font-semibold">
                    Maintenance Policy
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{product.description.maintenance}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="terms">
                  <AccordionTrigger className="text-xl font-semibold">
                    General Terms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {product.description.terms.map((term, index) => (
                        <li key={index}>{term}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProducts.map(([productId, similarProduct]) => (
              <Link key={productId} to={`/product/${productId}/variants`}>
                <Card className="cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="p-4">
                    <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                      <img
                        src={similarProduct.image}
                        alt={similarProduct.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">
                      {similarProduct.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
