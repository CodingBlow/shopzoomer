import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductVariants = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id as keyof typeof products];
  const maintenanceProducts = ["geyser", "washing-machine", "refrigerator"];

  if (!product) return <div className="container mx-auto px-4 py-16 mt-16 text-center text-xl text-red-600">Product not found</div>;

  // Check if the product is split-ac
  if (id === "split-ac") {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center">{product.name}</h1>
        <div className="flex justify-center">
          <Card className="max-w-md w-full border border-gray-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">Out of Stock</h2>
              <p className="text-gray-600 mb-6">
                We’re sorry, our Split AC units are currently unavailable. Please check back soon or explore other cooling options.
              </p>
              <Link to="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                  Browse Other Products
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Check if the product is window-ac and handle 1.0 TON variant
  if (id === "window-ac") {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8">{product.name} Variants</h1>
        <div className="flex flex-wrap -mx-2">
          {Object.entries(product.variants).map(([variant, data]) => {
            // Show Out of Stock for 1.0 TON variant
            if (variant === "1.0 TON") {
              return (
                <div key={variant} className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
                  <Card className="flex flex-col items-center justify-between h-full border border-gray-200 shadow-lg">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="w-full flex items-center justify-center h-52">
                        <img
                          src={data.image}
                          alt={`${product.name} ${variant}`}
                          className="object-contain rounded-md h-full"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mt-4 mb-2">{variant}</h3>
                      <p className="text-red-600 font-medium">Out of Stock</p>
                    </CardContent>
                    <CardFooter className="p-3 w-full">
                      <Link to="/" className="w-full">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                          Browse Other Products
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              );
            }

            // Render other variants normally
            const prices = Object.entries(data).filter(([key]) => key !== "image");
            const minPrice = Math.min(...prices.map(([_, price]) => Number(price)));
            return (
              <div key={variant} className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
                <Card className="hover:scale-105 transition-transform flex flex-col items-center justify-between h-full shadow-md">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="w-full flex items-center justify-center h-52">
                      <img
                        src={data.image}
                        alt={`${product.name} ${variant}`}
                        className="object-contain rounded-md h-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mt-4 mb-2">{variant}</h3>
                    <p className="text-sm text-gray-500">
                      Starting from ₹{minPrice}
                    </p>
                  </CardContent>
                  <CardFooter className="p-3 w-full">
                    <Link to={`/product/${id}/buy?variant=${variant}`} className="w-full">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                        Rent Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Render other products normally
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl font-bold mb-8">{product.name} Variants</h1>
      <div className="flex flex-wrap -mx-2">
        {Object.entries(product.variants).map(([variant, data]) => {
          const prices = Object.entries(data).filter(([key]) => key !== "image");
          const minPrice = Math.min(...prices.map(([_, price]) => Number(price)));
          return (
            <div key={variant} className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
              <Card className="hover:scale-105 transition-transform flex flex-col items-center justify-between h-full shadow-md">
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="w-full flex items-center justify-center h-52">
                    <img
                      src={data.image}
                      alt={`${product.name} ${variant}`}
                      className="object-contain rounded-md h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mt-4 mb-2">{variant}</h3>
                  {!maintenanceProducts.includes(id as string) && (
                    <p className="text-sm text-gray-500">
                      Starting from ₹{minPrice}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="p-3 w-full">
                  {maintenanceProducts.includes(id as string) ? (
                    <Link to="/maintenance" className="w-full">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                        Maintenance
                      </Button>
                    </Link>
                  ) : (
                    <Link to={`/product/${id}/buy?variant=${variant}`} className="w-full">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                        Rent Now
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
