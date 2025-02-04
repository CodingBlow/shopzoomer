import React from "react";
import { Card } from "@/components/ui/card";

export const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Terms and Conditions</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Acceptance of Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              By accessing and using Hindustan Rent's services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding with any rental or service.
            </p>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Rental Terms</h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Minimum rental period is one month</li>
              <li>Security deposit is required for all rentals</li>
              <li>Monthly rent must be paid in advance</li>
              <li>Proper ID proof and address verification required</li>
              <li>Equipment must be used as per provided guidelines</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Payment Terms</h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>All payments must be made through approved payment methods</li>
              <li>Security deposit is refundable upon successful return of equipment</li>
              <li>Late payment fees will apply after due date</li>
              <li>Damage costs will be deducted from security deposit</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Service and Maintenance</h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Free installation and delivery included</li>
              <li>Regular maintenance provided at no extra cost</li>
              <li>24/7 customer support available</li>
              <li>Replacement guaranteed for major technical issues</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Cancellation and Returns</h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Minimum 15 days notice required for cancellation</li>
              <li>Partial refund available as per usage period</li>
              <li>Equipment must be returned in good condition</li>
              <li>Pickup service available for returns</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">User Responsibilities</h2>
          <div className="space-y-4 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Maintain equipment in good condition</li>
              <li>Report any issues promptly</li>
              <li>Allow scheduled maintenance visits</li>
              <li>Use equipment as per guidelines</li>
              <li>Prevent unauthorized access or modifications</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Liability</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Hindustan Rent is not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Damage due to improper use</li>
              <li>Personal injury during equipment use</li>
              <li>Loss of business or opportunities</li>
              <li>Damage from external factors</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>For any queries regarding these terms, contact us at:</p>
            <ul className="list-none space-y-2">
              <li>Email: Hindustanrent@gmail.com</li>
              <li>Phone: +91 74190 11361</li>
              <li>Address: Gurugram, Haryana</li>
            </ul>
          </div>
        </Card>

        <div className="text-center text-gray-600 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>These terms and conditions are subject to change without notice.</p>
        </div>
      </div>
    </div>
  );
};
