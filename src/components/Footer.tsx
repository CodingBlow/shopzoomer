import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RentApp</h3>
            <p className="text-gray-300">
              Premium appliances on rent with hassle-free service and
              maintenance.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/product/window-ac/variants"
                  className="text-gray-300 hover:text-white"
                >
                  Window AC
                </Link>
              </li>
              <li>
                <Link
                  to="/product/split-ac/variants"
                  className="text-gray-300 hover:text-white"
                >
                  Split AC
                </Link>
              </li>
              <li>
                <Link
                  to="/product/room-heater/variants"
                  className="text-gray-300 hover:text-white"
                >
                  Oil Heater
                </Link>
              </li>
              <li>
                <Link
                  to="/product/geyser/variants"
                  className="text-gray-300 hover:text-white"
                >
                  Geyser
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@rentapp.com</li>
              <li>Phone: +91 9306174774</li>
              <li>Address: 123 Rent Street, City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 RentApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
