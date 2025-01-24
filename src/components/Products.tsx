import { products } from "@/data/products";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  return (
    <div id="products" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(products).map(([id, product]) => (
            <Card 
              key={id}
              className="group cursor-pointer overflow-hidden"
              onClick={() => navigate(`/product/${id}`)}
            >
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};