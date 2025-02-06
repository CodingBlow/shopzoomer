import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Brands } from "@/components/Brands";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Products />
      <Brands />
    </div>
  );
};

export default Index;