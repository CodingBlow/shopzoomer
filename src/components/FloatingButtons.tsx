import { Phone, WhatsApp } from "lucide-react";
import { Button } from "./ui/button";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <a
        href="https://wa.me/918744982935"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <WhatsApp className="h-6 w-6" />
        </Button>
      </a>
      <a
        href="tel:+918744982935"
        className="transition-transform hover:scale-110"
      >
        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
};