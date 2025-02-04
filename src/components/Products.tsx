import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";

export const Products = () => {
  return (
    <section className="py-11 container mx-auto px-4" id="products">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(products).slice(0, 6).map(([id, product]) => (
          <Link key={id} to={`/product/${id}/variants`}>
            <Card className="cursor-pointer transition-transform hover:scale-105 shadow-md">
              <CardContent className="p-4">
                <div className="w-full h-48 md:h-64 overflow-hidden rounded-md mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{product.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};