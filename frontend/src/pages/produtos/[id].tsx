import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ShoppingCartSimple } from 'phosphor-react';

import axios from 'axios';

interface ProductProps {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  quantity: string;
  category: { id: string; title: string };
}

interface Product {
  product: ProductProps;
}

const ProductDetails: NextPage<Product> = ({ product }: Product) => {
  return (
    <div className="flex gap-28 justify-center pt-10">
      <div className="w-[512px] h-[512px] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className=" w-[512px] flex flex-col gap-8">
        <h2 className="text-4xl font-bold text-violet-500">{product.title}</h2>
        <p className="text-zinc-500 ">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl text-violet-500">
            R$ <strong className="">{product.price}</strong>
          </span>
          <span className="text-zinc-500 text-sm">
            Estoque: {product.quantity}
          </span>
        </div>
        <button className="flex items-center justify-center gap-4 bg-violet-500 p-4 text-white font-bold rounded-lg hover:bg-violet-600 hover:transition-all">
          <ShoppingCartSimple size={24} weight="bold" />
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3333/products');
  const products: ProductProps[] = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios(`http://localhost:3333/products/${params?.id}`);
  const product: Product = res.data;

  return { props: { product } };
};

export default ProductDetails;
