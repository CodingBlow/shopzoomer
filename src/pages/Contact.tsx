import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> Hindustanrent@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 7419011361
            </p>
            <p>
              <strong>Address:</strong> Gurugram
            </p>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
          <div className="space-y-2">
            <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
            <p>Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </Card>
      </div>
    </div>
  );
};