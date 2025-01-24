import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section className="py-16 container mx-auto px-4" id="products">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(products).map(([id, product]) => (
          <div key={id} className="space-y-4">
            <Card 
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedProduct(selectedProduct === id ? null : id)}
            >
              <CardContent className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>

            {selectedProduct === id && (
              <div className="grid gap-4">
                {Object.keys(product.variants).map((variant) => (
                  <Card key={variant} className="border border-primary/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{variant}</h4>
                      <p className="text-sm text-gray-600">
                        Starting from ₹{Math.min(...Object.values(product.variants[variant]))}/month
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link to={`/product/${id}?variant=${variant}`}>
                        <Button>Rent Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};