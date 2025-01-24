export const Hero = () => {
  return (
    <div className="relative h-70vh mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Rent Premium Appliances
          </h1>
          <p className="text-xl mb-8">
            Get high-quality appliances on rent with free maintenance and support
          </p>
          <a 
            href="#products"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg inline-block"
          >
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
};