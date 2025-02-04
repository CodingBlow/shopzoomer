import React from "react";
import { Card } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">About Hindustan Rent</h1>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Hindustan Rent, we bring convenience to your doorstep with customized solutions that fit your budget. Our service platform is designed to save your time, energy, and money while providing a hassle-free experience.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-primary">Services We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
            <li>AC on Rent</li>
            <li>Oil Room Heater (OFR) on Rent</li>
            <li>Home Appliance Repair and Service:
              <ul className="list-disc list-inside ml-6">
                <li>Refrigerator</li>
                <li>Geyser</li>
                <li>Washing Machine</li>
                <li>RO Water Purifier</li>
              </ul>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our platform enables customers to easily book services at their preferred time and location. We take pride in delivering high-quality, reliable service experiences to our valued customers.
          </p>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Service Coverage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We provide AC rental services throughout Gurgaon with:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
            <li>Free Delivery</li>
            <li>Free Installation</li>
            <li>Same-day Delivery</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Areas We Serve</h3>
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
