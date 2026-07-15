import { useEffect, useState } from "react";
import productsData from "../data/products.json";
import type { Product } from "../features/bundle/types";



const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(productsData);
    setLoading(false);
  }, []);

  return {
    products,
    loading,
  };
};

export default useProducts;