
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const MaintenanceDialog = ({ productName }: { productName: string }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    issue: "",
    image: null as File | null,
  });
  const [open, setOpen] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.phone || !formData.address || !formData.issue) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
  
    let message = `
${productName} Maintenance Request:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Issue Description: ${formData.issue}
    `;
  
    if (formData.image) {
      const reader = new FileReader();
      reader.onload = function() {
        const imageData = reader.result as string;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=917419011361&text=${encodeURIComponent(message)}&image=${encodeURIComponent(imageData)}`;
        window.open(whatsappUrl, '_blank');
      };
      reader.readAsDataURL(formData.image);
    } else {
      window.open(
        `https://wa.me/917419011361?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }

    setFormData({
      name: "",
      phone: "",
      address: "",
      issue: "",
      image: null,
    });
    
    setOpen(false);
    
    toast({
      title: "Success",
      description: "Your maintenance request has been sent successfully!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">Maintenance</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{productName} Maintenance Request</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="address">Service Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="issue">Issue Description</Label>
            <Input
              id="issue"
              value={formData.issue}
              onChange={(e) =>
                setFormData({ ...formData, issue: e.target.value })
              }
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="image">Upload Image (Optional)</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1"
            />
            {formData.image && (
              <p className="text-sm text-green-600 mt-1">
                ✓ Image selected: {formData.image.name}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
