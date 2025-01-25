import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductVariants = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id as keyof typeof products];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-2xl font-bold mb-8">{product.name} Variants</h1>
      {/* Flexbox layout */}
      <div className="flex flex-wrap -mx-2"> {/* Removes horizontal gap */}
        {Object.entries(product.variants).map(([variant, prices]) => {
          const minPrice = Math.min(...Object.values(prices).map(price => Number(price)));
          return (
            <div key={variant} className="w-full md:w-1/3 lg:w-1/4 px-2 mb-4"> {/* Smaller card widths */}
              <Card className="hover:scale-105 transition-transform flex flex-col items-center justify-between">
                <CardContent className="p-3 flex flex-col items-center"> {/* Centered content */}
                  <div className="w-full flex items-center justify-center h-52"> {/* Increased image size */}
                    <img
                      src={product.image}
                      alt={`${product.name} ${variant}`}
                      className="object-contain rounded-md h-full" /* Centered and larger image */
                    />
                  </div>
                  <h3 className="text-base font-medium mt-3 mb-1">{variant}</h3> {/* Smaller font */}
                  <p className="text-sm text-gray-600"> {/* Smaller text */}
                    Starting from ₹{minPrice}/month
                  </p>
                </CardContent>
                <CardFooter className="p-2">
                  <Link to={`/product/${id}/buy?variant=${variant}`} className="w-full">
                    <Button className="w-full text-xs py-1"> {/* Smaller button */}
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
};
