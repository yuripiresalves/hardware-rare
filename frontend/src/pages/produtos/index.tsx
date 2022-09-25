import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';

import axios from 'axios';

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
}

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    axios('http://localhost:3333/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <h2 className="text-3xl text-violet-600 font-bold py-8">
        Lista de produtos
      </h2>
      <div className="h-full grid grid-cols-2 xl:grid-cols-3 gap-24">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
