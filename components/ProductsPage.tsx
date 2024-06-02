import axios from "axios";
import { useCallback, useEffect, useState } from "react";
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
};

export default function ProductsPage({ input }: inputProp) {
  const [products, setProducts] = useState<productProps[]>([]);
  console.log(products);
  const filteredProducts = useCallback(() => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
  }, [input]);

  const displayProducts = input !== "" ? filteredProducts() : products;
  console.log(displayProducts);

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
      {products &&
        products.length > 0 &&
        displayProducts.map((item) => <ProductCard key={item.id} {...item} />)}
    </div>
  );
}
