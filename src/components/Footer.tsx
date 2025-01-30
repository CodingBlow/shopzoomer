import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/hr logo copy.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Hindustan Rent Logo" className="h-12 mb-4" />
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
              <li>Email: Hindustanrent@gmail.com</li>
              <li>Phone: +91 7419011361</li>
              <li>Address: Gurugram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Hindustan Rent. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.zuridox.com"
              className="text-green-800 hover:underline"
            >
              Zuridox
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
