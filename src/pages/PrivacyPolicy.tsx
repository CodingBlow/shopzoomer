import React from "react";
import { Card } from "@/components/ui/card";

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Information We Collect</h2>
          <div className="space-y-4 text-gray-700">
            <p>When you use our services, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Delivery address</li>
              <li>Phone number and email address</li>
              <li>Service preferences and history</li>
              <li>Payment information</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">How We Use Your Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your rental requests</li>
              <li>Communicate about services and updates</li>
              <li>Improve our service quality</li>
              <li>Send important notifications about your rentals</li>
              <li>Provide customer support</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Information Security</h2>
          <div className="space-y-4 text-gray-700">
            <p>We implement security measures to protect your personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Secure data storage systems</li>
              <li>Limited access to personal information</li>
              <li>Regular security assessments</li>
              <li>Encrypted data transmission</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Information Sharing</h2>
          <div className="space-y-4 text-gray-700">
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Delivery partners for service fulfillment</li>
              <li>Payment processors for transactions</li>
              <li>Service providers who assist our operations</li>
            </ul>
            <p className="mt-4">We never sell your personal information to third parties.</p>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Your Rights</h2>
          <div className="space-y-4 text-gray-700">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request data correction</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data deletion</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Us</h2>
          <div className="space-y-4 text-gray-700">
            <p>For privacy-related inquiries, contact us at:</p>
            <ul className="list-none space-y-2">
              <li>Email: Hindustanrent@gmail.com</li>
              <li>Phone: +91 74190 11361</li>
              <li>Address: Gurugram, Haryana</li>
            </ul>
          </div>
        </Card>

        <div className="text-center text-gray-600 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
