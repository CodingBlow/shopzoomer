import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { FiTool, FiUserCheck, FiShield, FiClock, FiDollarSign, FiCheckCircle } from "react-icons/fi";

export const Maintenance = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address || !formData.issue) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const message = `
Maintenance Request:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Issue Description: ${formData.issue}
    `;

    window.open(`https://wa.me/917419011361?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Maintenance Services</h1>
        <p className="text-xl text-gray-600">Hindustan Rent is always committed to serve the customers by providing the most affordable services</p>
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
                  <p className="text-sm text-gray-600">On all parts & services</p>
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
                  <Badge variant="outline" className="bg-blue-50 text-blue-600">₹599</Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Expert Engineer for better cooling and lower power consumption</li>
                  <li>Cleaning of the area post service</li>
                  <li>Cleaning of AC filters, cooling coil, drain tray and other parts</li>
                  <li>Gas pressure check, if required</li>
                  <li>Pre and post service check of AC controls and functioning</li>
                  <li>Cleaning of the outdoor unit with water jet for split AC</li>
                  <li className="text-sm text-red-500">Note: Installation, un-installation and cost of spare parts not covered</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  AC Gas Refilling
                  <Badge variant="outline" className="bg-green-50 text-green-600">₹1999-2499</Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>Gas charging including repairs for minor leakages</li>
                  <li>Repair of gas leakage</li>
                  <li>Cost of gas charging included</li>
                  <li>Checking of AC controls and functioning</li>
                  <li>Cleaning of the area post service</li>
                  <li className="text-sm text-red-500">Note: Cost of spare parts, installation & uninstallation not covered</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-green-600" />
                  AC AMC Advanced (1 Year)
                  <Badge variant="outline" className="bg-purple-50 text-purple-600">₹3199</Badge>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>2 maintenance services using power jet</li>
                  <li>Unlimited gas charging, if required</li>
                  <li>All electrical and electronic parts covered</li>
                  <li>Unlimited breakdown support</li>
                  <li>Free transportation for repairs</li>
                  <li>Service charge coverage for a year</li>
                  <li>Only for ACs less than 5 years old</li>
                  <li className="text-sm text-red-500">Note: Cooling coil, condenser coil, installation & un-installation not covered</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Other Appliance Services</h2>
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
                  <li className="text-sm text-red-500">Note: Cost of spare parts not covered</li>
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
                  <li className="text-sm text-red-500">Note: Spare parts, chemical cleaning, and relocation not covered</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Regular Maintenance Benefits</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Service</h2>
              <p className="text-gray-600">Fill the form and our expert will contact you within 30 minutes</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Address</label>
                  <Input
                    placeholder="Full address with landmark"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Details</label>
                  <Input
                    placeholder="Describe appliance and issue"
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                Request Service Now
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Or call us directly:</p>
              <a href="tel:+917419011361" className="text-blue-600 font-semibold hover:underline">
                +91 74190 11361
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center py-8 bg-gray-50 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Trusted by 5,000+ Happy Customers</h3>
        <div className="flex justify-center gap-6 text-gray-600">
          <span>✓ 24/7 Support</span>
          <span>✓ Same-day Service</span>
          <span>✓ 90-Day Warranty</span>
        </div>
      </div>
    </div>
  );
};
