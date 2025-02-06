import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
      <h1 className="text-3xl font-bold mb-8">Geyser Maintenance Service</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Our Maintenance Services</h2>
          <ul className="space-y-3 list-disc pl-5 text-gray-600">
            <li>Professional geyser repair and maintenance</li>
            <li>Experienced technicians</li>
            <li>Quick response time</li>
            <li>Genuine spare parts</li>
            <li>Warranty on service</li>
            <li>Affordable service charges</li>
            <li>Regular maintenance packages available</li>
          </ul>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Request Maintenance</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Describe the issue"
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Maintenance Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};