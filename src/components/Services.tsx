import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: ArrowRight,
      title: "Free Repairs",
      description: "24/7 repair service included"
    },
    {
      icon: ArrowDown,
      title: "Free Delivery",
      description: "Doorstep delivery & installation"
    },
    {
      icon: ArrowUp,
      title: "Flexible Duration",
      description: "Rent from 1 to 12 months"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};