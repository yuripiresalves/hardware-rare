import { ShoppingCartSimple } from 'phosphor-react';

export function Header() {
  return (
    <header className="flex items-center justify-between h-20 container mx-auto p-4 2xl:px-20 shadow-md">
      <a href="/produtos">
        <img className="w-28" src="/assets/hr-logo.png" alt="" />
      </a>

      <div className="flex items-center gap-8">
        <a
          className="flex items-center gap-4 outline-2 border border-violet-600 rounded-lg p-3 px-4 text-violet-600 hover:bg-violet-600 hover:text-white hover:transition-all hover:duration-300"
          href=""
        >
          <ShoppingCartSimple size={24} />
          Ver carrinho
        </a>
        <a href="" className="flex items-center gap-3">
          <span className="text-violet-600">Minha conta</span>
          <img
            className="w-10 h-10 rounded-full border-2 border-violet-600 box-content"
            src="https://github.com/yuripiresalves.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
}
