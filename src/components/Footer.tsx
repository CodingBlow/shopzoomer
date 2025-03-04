import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/hr logo copy.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <p className="text-gray-300 mt-4">
              We offer service for AC rent and maintenance in all over Gurgaon
              with free delivery, free installation and same-day delivery.
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
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
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
                  to="/maintenance"
                  className="text-gray-300 hover:text-white"
                >
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: Hindustanrent@gmail.com</li>
              <li>Phone: +91 7419011361</li>
              <li>Phone: +91 7419011362</li>
              <li>Address: Sikandarpur Ghosi ,H -Block, DLF Phase -122002</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-gray-300">
          <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
          <p className="text-sm leading-relaxed">
            Our Service areas include: Sector 24, Sector 25, Sector 25A, Sector
            26, Sector 26A, Sector 27, Sector 28, Sector 30, Sector 31, Sector
            32, Sector 33, Sector 38, Sector 39, Sector 40, Sector 41, Sector
            42, Sector 43, Sector 44, Sector 45, Sector 46, Sector 47, Sector
            48, Sector 49, Sector 50, Sector 51, Sector 52, Sector 52A, Sector
            53, Sector 54, Sector 55, Sector 56, Sector 57, Sector 58, Sector
            59, Sector 60, Sector 61, Sector 62, Sector 63, Sector 63A, Sector
            63B, Sector 64, Sector 65, Sector 66, Sector 67, Sector 67A, Sector
            68, Sector 69, Sector 70, Sector 70A, Sector 71, Sector 72, Sector
            73, Sector 74, Sector 77, Sector 78, Sector 79A, Sector 79B, Sector
            80, Sikandarpur, South City DLF City, Sohna Road, Sushant Lok, Palam
            Vihar, MG Road, South City, Ardee City, Golf Course Road, Manesar.
          </p>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Hindustan Rent. All rights reserved.</p>
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
