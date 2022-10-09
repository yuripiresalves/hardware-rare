import type { NextPage } from 'next';
import { CreditCard, Gear, Truck } from 'phosphor-react';

const MyAccount: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-violet-600 font-bold text-3xl py-8">Minha conta</h1>
        <div className="w-96 shadow-md p-8 rounded-lg flex flex-col gap-2">
          <ul className="flex flex-col gap-4 text-xl">
            <li className="transition-all hover:text-violet-500 w-fit">
              <a href="#" className="flex items-center gap-4">
                <Truck size={32} />
                Acompanhar pedidos
              </a>
            </li>
            <li className="hover:text-violet-500 w-fit">
              <a href="#" className="flex items-center gap-4">
                <CreditCard size={32} />
                Cartões cadastrados
              </a>
            </li>
            <li className="hover:text-violet-500 w-fit">
              <a href="#" className="flex items-center gap-4">
                <Gear size={32} />
                Cofigurações da conta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
