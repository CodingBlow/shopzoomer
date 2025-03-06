import { Card } from "@/components/ui/card";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Get In Touch With Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl" />
              <div>
                <p className="font-medium text-gray-700">Email Address</p>
                <a
                  href="mailto:Hindustanrent@gmail.com"
                  className="text-primary hover:underline"
                >
                  Hindustanrent@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-primary text-xl" />
              <div>
                <p className="font-medium text-gray-700">Contact Numbers</p>
                <a
                  href="tel:+917419011361"
                  className="block hover:text-primary"
                >
                  +91 74190 11361
                </a>
                <a
                  href="tel:+917419011364"
                  className="block hover:text-primary"
                >
                  +91 74190 11364
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-primary text-xl" />
              <div>
                <p className="font-medium text-gray-700">WhatsApp</p>
                <a
                  href="https://wa.me/917419011361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  +91 74190 11361
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <div>
                <p className="font-medium text-gray-700">Location</p>
                <p>Gurugram, Haryana</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Business Hours
          </h2>
          <div className="flex items-start gap-3">
            <FaClock className="text-primary text-xl mt-1" />
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">Monday - Saturday</p>
                <p>9:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Sunday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
