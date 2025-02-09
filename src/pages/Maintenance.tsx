
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import {
  FiTool,
  FiUserCheck,
  FiShield,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Maintenance = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    appliance: "",
    issue: "",
    image: null as File | null,
  });

  const appliances = [
    "Window Air Conditioner",
    "Split Air Conditioner",
    "Refrigerator",
    "Washing Machine",
    "Room Heater",
    "Geyser",
    "Ro Water Purifier",
    "Inverter",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.phone || !formData.address || !formData.appliance || !formData.issue) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
  
    let message = `
Maintenance Request:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Appliance: ${formData.appliance}
Issue Description: ${formData.issue}
    `;
  
    // Create a WhatsApp intent with both image and text
    if (formData.image) {
      const reader = new FileReader();
      reader.onload = function() {
        const imageData = reader.result as string;
        
        // Open WhatsApp web with the image and text
        const whatsappUrl = `https://api.whatsapp.com/send?phone=917419011361&text=${encodeURIComponent(message)}&image=${encodeURIComponent(imageData)}`;
        window.open(whatsappUrl, '_blank');
      };
      reader.readAsDataURL(formData.image);
    } else {
      // If no image, just send the text
      window.open(
        `https://wa.me/917419011361?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }

    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      address: "",
      appliance: "",
      issue: "",
      image: null,
    });

    toast({
      title: "Success",
      description: "Your maintenance request has been sent successfully!",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Maintenance Services
        </h1>
        <p className="text-xl text-gray-600">
          Hindustan Rent is always committed to serve the customers by providing
          the most affordable services
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <FiTool className="text-blue-600" /> Why Choose Us?
              </h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FiUserCheck className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold">Certified Technicians</p>
                  <p className="text-sm text-gray-600">Skilled professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiShield className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold">90-Day Warranty</p>
                  <p className="text-sm text-gray-600">
                    On all parts & services
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiClock className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold">24/7 Availability</p>
                  <p className="text-sm text-gray-600">Emergency services</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiDollarSign className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold">Transparent Pricing</p>
                  <p className="text-sm text-gray-600">No hidden charges</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">AC Services</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  AC Jet Service
                  <Badge variant="outline" className="bg-blue-50 text-blue-600">
                    ₹599
                  </Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>
                    Expert Engineer for better cooling and lower power
                    consumption
                  </li>
                  <li>Cleaning of the area post service</li>
                  <li>
                    Cleaning of AC filters, cooling coil, drain tray and other
                    parts
                  </li>
                  <li>Gas pressure check, if required</li>
                  <li>
                    Pre and post service check of AC controls and functioning
                  </li>
                  <li>
                    Cleaning of the outdoor unit with water jet for split AC
                  </li>
                  <li className="text-sm text-red-500">
                    Note: Installation, un-installation and cost of spare parts
                    not covered
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  AC Gas Refilling
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-600"
                  >
                    ₹1999-2499
                  </Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Gas charging including repairs for minor leakages</li>
                  <li>Repair of gas leakage</li>
                  <li>Cost of gas charging included</li>
                  <li>Checking of AC controls and functioning</li>
                  <li>Cleaning of the area post service</li>
                  <li className="text-sm text-red-500">
                    Note: Cost of spare parts, installation & uninstallation not
                    covered
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  AC AMC Advanced (1 Year)
                  <Badge
                    variant="outline"
                    className="bg-purple-50 text-purple-600"
                  >
                    ₹3199
                  </Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>2 maintenance services using power jet</li>
                  <li>Unlimited gas charging, if required</li>
                  <li>All electrical and electronic parts covered</li>
                  <li>Unlimited breakdown support</li>
                  <li>Free transportation for repairs</li>
                  <li>Service charge coverage for a year</li>
                  <li>Only for ACs less than 5 years old</li>
                  <li className="text-sm text-red-500">
                    Note: Cooling coil, condenser coil, installation &
                    un-installation not covered
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">
                Other Appliance Services
              </h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  Refrigerator Repair
                  <Badge variant="outline">₹599</Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Thorough inspection & repairs</li>
                  <li>Service charge for inspection and repair</li>
                  <li>Complete cleaning of components</li>
                  <li>Temperature setting & defrost</li>
                  <li>Pre and post service check</li>
                  <li className="text-sm text-red-500">
                    Note: Cost of spare parts not covered
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  Washing Machine Repair
                  <Badge variant="outline">₹599</Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Cleaning of drum and components</li>
                  <li>Removal of debris and foreign objects</li>
                  <li>Pre and post service check</li>
                  <li>Assembly and installation</li>
                  <li>Thorough functionality testing</li>
                  <li className="text-sm text-red-500">
                    Note: Spare parts, chemical cleaning, and relocation not
                    covered
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardHeader>
              <h2 className="text-2xl font-semibold">
                Regular Maintenance Benefits
              </h2>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg text-center">
                <FiCheckCircle className="mx-auto text-green-600 text-xl mb-2" />
                <p>Improve Cooling</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <FiDollarSign className="mx-auto text-green-600 text-xl mb-2" />
                <p>Reduce Electricity Bills</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <FiClock className="mx-auto text-green-600 text-xl mb-2" />
                <p>Increase Lifespan</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <FiShield className="mx-auto text-green-600 text-xl mb-2" />
                <p>Minimize Breakdowns</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-100 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Schedule Service
              </h2>
              <p className="text-gray-600">
                Fill the form and our expert will contact you within 30 minutes
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="block text-sm font-medium mb-2">
                    Service Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Enter your complete address"
                  />
                </div>
                <div>
                  <Label htmlFor="appliance" className="block text-sm font-medium mb-2">
                    Select Appliance
                  </Label>
                  <Select
                    value={formData.appliance}
                    onValueChange={(value) =>
                      setFormData({ ...formData, appliance: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an appliance" />
                    </SelectTrigger>
                    <SelectContent>
                      {appliances.map((appliance) => (
                        <SelectItem key={appliance} value={appliance}>
                          {appliance}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="issue" className="block text-sm font-medium mb-2">
                    Issue Description
                  </Label>
                  <Input
                    id="issue"
                    value={formData.issue}
                    onChange={(e) =>
                      setFormData({ ...formData, issue: e.target.value })
                    }
                    placeholder="Describe the issue with your appliance"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="image"
                    className="block text-sm font-medium mb-2"
                  >
                    Upload Image (Optional)
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                  />
                  {formData.image && (
                    <p className="text-sm text-green-600">
                      ✓ Image selected: {formData.image.name}
                    </p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
              >
                Request Service Now
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Or call us directly:</p>
              <a
                href="tel:+917419011361"
                className="text-blue-600 font-semibold hover:underline"
              >
                +91 74190 11361
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center py-8 bg-gray-50 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Trusted by 5,000+ Happy Customers
        </h3>
        <div className="flex justify-center gap-6 text-gray-600">
          <span>✓ 24/7 Support</span>
          <span>✓ Same-day Service</span>
          <span>✓ 90-Day Warranty</span>
        </div>
      </div>
    </div>
  );
};
