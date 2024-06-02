import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";

export type productProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type inputProp = {
  input: string;
  category: string | null;
};

export default function ProductsPage({ input, category }: inputProp) {
  const [products, setProducts] = useState<productProps[]>([]);

  const filteredProducts = !category
    ? products.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      )
    : products.filter((item) => item.category.includes(category));

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-full h-full  flex flex-wrap gap-4 items-center justify-center">
      {!products.length && (
        <div className="flex flex-wrap items-center justify-center gap-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {filteredProducts &&
        filteredProducts.length > 0 &&
        filteredProducts.map((item) => <ProductCard key={item.id} {...item} />)}
    </div>
  );
}
