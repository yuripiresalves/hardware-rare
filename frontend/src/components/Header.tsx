import Link from 'next/link';
import { Plus, ShoppingCartSimple, SignOut, User } from 'phosphor-react';

interface HeaderProps {
  isHome: boolean;
  isLogin: boolean;
  isRegister: boolean;
}
export function Header({ isHome, isLogin, isRegister }: HeaderProps) {
  return (
    <header className="h-20 p-4 shadow-md">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <a>
            <img className="w-28" src="/assets/hr-logo.png" alt="" />
          </a>
        </Link>
        {isHome || isLogin || isRegister ? (
          <Link href="/login">
            <a className="outline-2 flex gap-3 border border-violet-600 rounded-lg p-3 px-4 text-violet-600 hover:bg-violet-600 hover:text-white hover:transition-all hover:duration-300 text-center">
              Entrar <User size={24} />
            </a>
          </Link>
        ) : (
          <div className="flex items-center gap-8">
            <Link href="/carrinho">
              <a className="flex items-center gap-4 outline-2 border border-violet-600 rounded-lg p-3 px-4 text-violet-600 hover:bg-violet-600 hover:text-white hover:transition-all hover:duration-300">
                <ShoppingCartSimple size={24} />
                Ver carrinho
              </a>
            </Link>
            <div className="group relative">
              <a className="flex items-center gap-3 group cursor-pointer">
                <span className="text-violet-600">Yuri Alves</span>
                <img
                  className="w-10 h-10 rounded-full border-2 border-violet-600 box-content"
                  src="https://github.com/yuripiresalves.png"
                  alt=""
                />
              </a>
              <div className="hidden group-hover:block absolute right-0 -bottom-[170px] bg-white rounded-lg shadow-lg w-52 p-4 text-violet-500">
                <ul className="flex flex-col gap-4 ">
                  <li className="pb-4 border-b border-violet-200 hover:text-violet-600">
                    <Link href="/minha-conta">
                      <a className="flex items-center gap-2">
                        <User size={24} />
                        Minha conta
                      </a>
                    </Link>
                  </li>
                  <li className="pb-4 border-b border-violet-200 hover:text-violet-600">
                    <Link href="/produtos/adicionar">
                      <a className="flex items-center gap-2">
                        <Plus size={24} />
                        Adicionar produto
                      </a>
                    </Link>
                  </li>
                  <li className="text-rose-500 hover:text-rose-600">
                    <a href="/login" className="flex items-center gap-2">
                      <SignOut size={24} />
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
