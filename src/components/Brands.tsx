export const Brands = () => {
  const brands = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted Brands</h2>
        <div className="flex space-x-12 animate-slide-left">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};