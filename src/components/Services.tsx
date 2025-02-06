import { useState, useEffect } from "react";
import { Menu, ShoppingCart, Wrench, Headset, ThumbsUp, BadgeCheck, CreditCard } from "lucide-react";
import styled from 'styled-components';

const AnimatedHeading = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #2d3748;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  animation: slideLeftRight 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;

  @keyframes slideLeftRight {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    25% {
      transform: translateX(15px);
      opacity: 0.8;
    }
    50% {
      transform: translateX(0);
      opacity: 1;
    }
    75% {
      transform: translateX(-15px);
      opacity: 0.8;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


export const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Free Repair and Maintenance",
    },
    {
      icon: Headset,
      title: "Online Support 24/7",
    },
    {
      icon: ThumbsUp,
      title: "100% Customer Satisfaction",
    },
    {
      icon: BadgeCheck,
      title: "Free Installation",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
    },
  ];

  return (
    <div className="py-5 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedHeading>
          We are offer to you Home Appliances on Rental service and Maintainance of appliances
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center border rounded-md p-4 shadow-sm">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <service.icon className="w-8 h-8 text-blue-600" />
              <h3 className="text-sm font-semibold text-gray-700">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
