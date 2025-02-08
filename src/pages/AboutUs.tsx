import React from "react";
import { Card } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">About Hindustan Rent</h1>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We "Hindustan Rent" are available at your service to your home with all that you required within your as per budget. Hindustan Rent is not only hassle free but also saves your time, both energy and money.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Hindustan Rent is a platform offering a various of services at home. Customers use our freely platform to book services such as AC on Rent, Oil Room Heater (OFR) on Rent, Home Appliance repair and service such as Refrigerator, Geyser Washing Machine, RO Water Purifier etc.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            These services are delivered in the of their home and at a time of their choosing. We are promise our valuable customers a high quality, & reliable service experience.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We provide more than online rental & maintenance services. With our assured quality and fast services, you can say good-bye to all the hassles that come with buying and such as say hello to convenience.
          </p>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
            <li>AC on Rent</li>
            <li>Oil Room Heater (OFR) on Rent</li>
            <li>Home Appliance Repair and Service:
              <ul className="list-disc list-inside ml-6">
                <li>Refrigerator</li>
                <li>Geyser</li>
                <li>Washing Machine</li>
                <li>RO Water Purifier</li>
                <li>Window Air Conditioner</li>
                <li>Split Air Conditioner</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Service Features</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
            <li>Free Delivery</li>
            <li>Free Installation</li>
            <li>Same-day Delivery</li>
          </ul>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Areas We Serve</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="font-medium">Sectors:</p>
            <p className="text-sm">
              Sector 24, Sector 25, Sector 25A, Sector 26, Sector 26A, Sector 27, Sector 28, Sector 30, Sector 31, Sector 32, Sector 33, Sector 38, Sector 39, Sector 40, Sector 41, Sector 42, Sector 43, Sector 44, Sector 45, Sector 46, Sector 47, Sector 48, Sector 49, Sector 50, Sector 51, Sector 52, Sector 52A, Sector 53, Sector 54, Sector 55, Sector 56, Sector 57, Sector 58, Sector 59, Sector 60, Sector 61, Sector 62, Sector 63, Sector 63A, Sector 63B, Sector 64, Sector 65, Sector 66, Sector 67, Sector 67A, Sector 68, Sector 69, Sector 70, Sector 70A, Sector 71, Sector 72, Sector 73, Sector 74
            </p>

            <p className="font-medium">Additional Locations:</p>
            <p className="text-sm">
              Sikandarpur, South City DLF City, Sohna Road, Sushant Lok, Palam Vihar, MG Road, South City, Ardee City, Golf Course Road
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};