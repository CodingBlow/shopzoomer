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
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
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
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [locationError, setLocationError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const selectedVariant = searchParams.get("variant");
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products[id as keyof typeof products];

  const [selectedMonth, setSelectedMonth] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerMonth, setPricePerMonth] = useState(0);

  // Get security deposit based on variant
  const getSecurityDeposit = () => {
    if (!product || !selectedVariant) return "";

    if (typeof product.description.securityDeposit === "string") {
      return product.description.securityDeposit;
    }

    return (
      product.description.securityDeposit[
        selectedVariant as keyof typeof product.description.securityDeposit
      ] || ""
    );
  };

  // Calculate minimum price
  const getMinimumPrice = () => {
    if (!product) return 0;

    // Use selected variant or first variant
    const variant = selectedVariant
      ? product.variants[selectedVariant]
      : Object.values(product.variants)[0];

    const prices = Object.entries(variant)
      .filter(([key]) => key !== "image" && key !== "Per")
      .map(([_, price]) => Number(price));

    return Math.min(...prices);
  };
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

  // Update the handleMonthChange function
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    // Use the selected variant's price instead of first variant
    const price = selectedVariant
      ? product.variants[selectedVariant][month]
      : Object.values(product.variants)[0][month];
    setPricePerMonth(price);
    setTotalPrice(price * quantity);
  };

  // Update the handleQuantityChange function
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (selectedMonth) {
      // Use the selected variant's price instead of first variant
      const price = selectedVariant
        ? product.variants[selectedVariant][selectedMonth]
        : Object.values(product.variants)[0][selectedMonth];
      setPricePerMonth(price);
      setTotalPrice(price * newQuantity);
    }
  };

  // Update the getDurationOptions function
  const getDurationOptions = () => {
    // Use the selected variant's options instead of first variant
    const variant = selectedVariant
      ? product.variants[selectedVariant]
      : Object.values(product.variants)[0];

    return Object.keys(variant)
      .filter((key) => key !== "image" && key !== "Per")
      .map((month) => ({
        value: month,
        label: isNaN(Number(month))
          ? month // Keep full text for special cases like "Full Season"
          : `${month} months`, // Add "months" suffix for numeric values
      }));
  };

  const isGeyser = id === "geyser";

  const handleImageHover = (isHovered: boolean) => {
    setIsImageZoomed(isHovered);
  };
  const getLocation = () => {
    return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setLocation(coords);
            resolve(coords);
          },
          (error) => {
            const errorMessage = `Unable to retrieve your location: ${error.message}`;
            setLocationError(errorMessage);
            reject(errorMessage);
          }
        );
      }
    });
  };

  const handleWhatsAppShare = async () => {
    if (
      !selectedMonth ||
      !deliveryDate ||
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const coords = await getLocation();
      const googleMapsLink = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;

      const message = `
  New Order Request:
  Product: ${product.name}
  Duration: ${selectedMonth} months
  Quantity: ${quantity}
  Total Price: ₹${totalPrice}
  Security Deposit: ${getSecurityDeposit()}
  Delivery Date: ${format(deliveryDate, "PPP")}
  Location: ${googleMapsLink}
  
  Customer Details:
  Name: ${formData.name}
  Phone: ${formData.phone}
  Address: ${formData.address}
      `;

      window.open(
        `https://wa.me/917419011361?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } catch (error) {
      const message = `
  New Order Request:
  Product: ${product.name}
  Duration: ${selectedMonth} months
  Quantity: ${quantity}
  Total Price: ₹${totalPrice}
  Selected Variant: ${selectedVariant}
  Security Deposit: ${getSecurityDeposit()}
  Delivery Date: ${format(deliveryDate, "PPP")}
  
  Customer Details:
  Name: ${formData.name}
  Phone: ${formData.phone}
  Address: ${formData.address}
  
  Note: Could not retrieve location - ${error}
      `;

      window.open(
        `https://wa.me/917419011361?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <Card className="overflow-hidden shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <div
                  className={cn(
                    "transition-transform duration-300 ease-out",
                    isImageZoomed ? "scale-125" : "scale-100"
                  )}
                  onMouseEnter={() => handleImageHover(true)}
                  onMouseLeave={() => handleImageHover(false)}
                >
                  <img
                    src={variantImage}
                    alt={product.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Column - Product Details and Form */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2 text-gray-900">
                    {product.name}
                  </h1>
                  {selectedVariant && (
                    <p className="text-lg text-gray-700 font-medium">
                      Selected Variant: {selectedVariant}
                    </p>
                  )}
                  {!selectedMonth && !isGeyser && (
                    <p className="text-lg text-primary font-semibold mb-4">
                      Starting from ₹{getMinimumPrice()}
                    </p>
                  )}
                </div>

                {!isGeyser ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Select
                          value={selectedMonth}
                          onValueChange={handleMonthChange}
                        >
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Duration" />
                          </SelectTrigger>
                          <SelectContent>
                            {getDurationOptions().map(({ value, label }) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <Input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) =>
                            handleQuantityChange(parseInt(e.target.value) || 1)
                          }
                          placeholder="Quantity"
                          className="w-full bg-white"
                        />
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal bg-white ${
                              !deliveryDate ? "text-muted-foreground" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {deliveryDate
                              ? format(deliveryDate, "PPP")
                              : "Select delivery date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={deliveryDate}
                            onSelect={(date) => {
                              setDeliveryDate(date);
                              setOpen(false); // Close popover after selecting date
                            }}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {pricePerMonth > 0 && (
                      <div className="bg-gray-50 p-6 rounded-lg space-y-3 border-l-4 border-primary">
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">Total Price:</p>
                          <p className="text-2xl font-bold text-primary">
                            ₹{totalPrice}
                          </p>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <p className="text-gray-600">Security Deposit:</p>
                          <p className="text-lg font-medium text-gray-800">
                            {getSecurityDeposit()}{" "}
                            <span className="text-sm text-gray-500">
                              (refundable)
                            </span>
                          </p>
                        </div>
                      </div>
                    )}

                    {showForm ? (
                      <div className="space-y-4">
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <Input
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                        <Input
                          placeholder="Delivery Address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                        />
                        <div className="text-sm text-gray-500">
                          <p>
                            We'll try to automatically detect your location to
                            ensure better service.
                          </p>
                          <p>Please allow location access when prompted.</p>
                        </div>
                        <Button
                          onClick={handleWhatsAppShare}
                          className="w-full py-6 text-lg font-semibold"
                        >
                          Send Request on WhatsApp
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => {
                          if (!selectedMonth || !deliveryDate) {
                            toast({
                              title: "Error",
                              description:
                                "Please select duration and delivery date",
                              variant: "destructive",
                            });
                            return;
                          }
                          setShowForm(true);
                        }}
                        className="w-full py-6 text-lg font-semibold"
                      >
                        Request Now
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-semibold mb-4">
                      Maintenance Service
                    </h3>
                    <p className="text-gray-700 mb-4">
                      This product is available for maintenance service only.
                      Please contact us for maintenance requests.
                    </p>
                    <Button
                      onClick={() => {
                        const message =
                          "Hi, I would like to request maintenance service for a geyser.";
                        window.open(
                          `https://wa.me/917050068050?text=${encodeURIComponent(
                            message
                          )}`,
                          "_blank"
                        );
                      }}
                      className="w-full py-6 text-lg font-semibold"
                    >
                      Request Maintenance
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <Accordion
                type="multiple"
                defaultValue={[
                  "description",
                  "payment",
                  "documentation",
                  "delivery",
                  "maintenance",
                  "terms",
                ]}
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
                      <p>{getSecurityDeposit()}</p>
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
                <Card className="cursor-pointer transition-transform hover:scale-105 bg-white">
                  <CardContent className="p-4">
                    <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                      <img
                        src={similarProduct.image}
                        alt={similarProduct.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {similarProduct.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
