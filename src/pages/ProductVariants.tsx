
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MaintenanceDialog } from "@/components/MaintenanceDialog";

export const ProductVariants = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id as keyof typeof products];
  const maintenanceProducts = ["geyser", "washing-machine", "refrigerator"];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-2xl font-bold mb-8">{product.name} Variants</h1>
      <div className="flex flex-wrap -mx-2">
        {Object.entries(product.variants).map(([variant, data]) => {
          const prices = Object.entries(data).filter(([key]) => key !== 'image');
          const minPrice = Math.min(...prices.map(([_, price]) => Number(price)));
          return (
            <div key={variant} className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4">
              <Card className="hover:scale-105 transition-transform flex flex-col items-center justify-between h-full">
                <CardContent className="p-3 flex flex-col items-center">
                  <div className="w-full flex items-center justify-center h-52">
                    <img
                      src={data.image}
                      alt={`${product.name} ${variant}`}
                      className="object-contain rounded-md h-full"
                    />
                  </div>
                  <h3 className="text-base font-medium mt-3 mb-1">{variant}</h3>
                  <p className="text-sm text-gray-600">
                    Starting from ₹{minPrice}
                  </p>
                </CardContent>
                <CardFooter className="p-2 w-full">
                  {maintenanceProducts.includes(id as string) ? (
                    <MaintenanceDialog productName={product.name} />
                  ) : (
                    <Link to={`/product/${id}/buy?variant=${variant}`} className="w-full">
                      <Button className="w-full text-xs py-1">
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
