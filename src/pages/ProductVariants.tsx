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
      <h1 className="text-3xl font-bold mb-8">{product.name} Variants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(product.variants).map(([variant, prices]) => {
          const minPrice = Math.min(...Object.values(prices));
          return (
            <Card key={variant} className="hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={`${product.name} ${variant}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{variant}</h3>
                <p className="text-gray-600">
                  Starting from ₹{minPrice}/month
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Link to={`/product/${id}/buy?variant=${variant}`} className="w-full">
                  <Button className="w-full">Rent Now</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};