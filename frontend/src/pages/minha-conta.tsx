import type { NextPage } from 'next';
import { CreditCard, Gear, Truck } from 'phosphor-react';
import { useState } from 'react';

const MyAccount: NextPage = () => {
  const [isShowingOrders, setIsShowingOrders] = useState(true);
  const [isShowingCards, setIsShowingCards] = useState(false);
  const [isShowingAccountSettings, setIsShowingAccountSettings] =
    useState(false);

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-violet-600 font-bold text-3xl py-8">Minha conta</h1>
        <div className="flex gap-3">
          <aside className="w-96 h-full shadow-md p-8 rounded-lg flex flex-col gap-2">
            <ul className="flex flex-col gap-4 text-xl">
              <li
                className={`transition-all hover:text-violet-500 w-fit ${
                  isShowingOrders && 'text-violet-500'
                }`}
              >
                <a
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setIsShowingOrders(true);
                    setIsShowingCards(false);
                    setIsShowingAccountSettings(false);
                  }}
                >
                  <Truck size={32} />
                  Acompanhar pedidos
                </a>
              </li>
              <li
                className={`transition-all hover:text-violet-500 w-fit ${
                  isShowingCards && 'text-violet-500'
                }`}
              >
                <a
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setIsShowingCards(true);
                    setIsShowingOrders(false);
                    setIsShowingAccountSettings(false);
                  }}
                >
                  <CreditCard size={32} />
                  Cartões cadastrados
                </a>
              </li>
              <li
                className={`transition-all hover:text-violet-500 w-fit ${
                  isShowingAccountSettings && 'text-violet-500'
                }`}
              >
                <a
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    setIsShowingAccountSettings(true);
                    setIsShowingOrders(false);
                    setIsShowingCards(false);
                  }}
                >
                  <Gear size={32} />
                  Cofigurações da conta
                </a>
              </li>
            </ul>
          </aside>
          {isShowingOrders ? (
            <div className="w-full h-[calc(100vh-320px)] shadow-md p-4 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold text-violet-500">
                Meus pedidos
              </h2>
              <div className="mt-8 flex flex-col gap-8 overflow-y-scroll">
                <div className="flex items-center justify-between shadow-md px-8 rounded-lg ring-1 ring-zinc-200">
                  <div className="flex items-center w-[80%] ">
                    <img
                      src="https://images.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg"
                      className=" h-40 w-40 object-fit"
                    />
                    <div className="ml-12 ">
                      <h4 className="text-md font-bold text-violet-500">
                        Processador AMD Ryzen 5 5600X, 3.7GHz (4.6GHz Max
                        Turbo), Cache 35MB, 6 Núcleos, 12 Threads, AM4
                      </h4>
                      <p>
                        R${' '}
                        <span className="font-bold text-zinc-700">
                          2.049,99
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-violet-500 p-4 rounded-lg font-bold text-white transition-all hover:bg-violet-600">
                      Ver pedido
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between shadow-md px-8 rounded-lg ring-1 ring-zinc-200">
                  <div className="flex items-center ">
                    <img
                      src="https://images.kabum.com.br/produtos/fotos/110896/memoria-corsair-para-mac-16gb-2x8gb-1600mhz-ddr3-c11-cmsa16gx3m2a1600c11_1590175116_gg.jpg"
                      className=" h-40 w-40 object-fit"
                    />
                    <div className="ml-12">
                      <h4 className="text-md font-bold text-violet-500">
                        Memória Corsair 16GB (2x8GB), 1600Mhz, DDR3, C11, para
                        Macbook
                      </h4>
                      <p>
                        R${' '}
                        <span className="font-bold text-zinc-700">499,99</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-violet-500 p-4 rounded-lg font-bold text-white transition-all hover:bg-violet-600">
                      Ver pedido
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between shadow-md px-8 rounded-lg ring-1 ring-zinc-200">
                  <div className="flex items-center ">
                    <img
                      src="https://images.kabum.com.br/produtos/fotos/276321/placa-mae-gigabyte-b660m-aorus-pro-intel-lga-1700-matx-ddr4-m-2-nvme-b660m-aorus-pro-ddr4_1643917278_gg.jpg"
                      className=" h-40 w-40 object-fit"
                    />
                    <div className="ml-12">
                      <h4 className="text-md font-bold text-violet-500">
                        Placa-Mãe
                      </h4>
                      <p>
                        R$ <span className="font-bold text-zinc-700">1219</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-violet-500 p-4 rounded-lg font-bold text-white transition-all hover:bg-violet-600">
                      Ver pedido
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between shadow-md px-8 rounded-lg ring-1 ring-zinc-200">
                  <div className="flex items-center ">
                    <div className="h-40 w-40">
                      <img
                        src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-12">
                      <h4 className="text-md font-bold text-violet-500">
                        Headseat
                      </h4>
                      <p>
                        R$ <span className="font-bold text-zinc-700">60</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="bg-violet-500 p-4 rounded-lg font-bold text-white transition-all hover:bg-violet-600">
                      Ver pedido
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : isShowingCards ? (
            <div className="w-full h-[calc(100vh-320px)] shadow-md p-4 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold text-violet-500">
                Meus cartões
              </h2>
              <div className="mt-8 flex flex-col gap-8">
                <div className="flex items-center justify-between shadow-md px-8 rounded-lg ring-1 ring-zinc-200">
                  <div className="flex items-center w-[80%] py-8">
                    <img
                      src="https://logosmarcas.net/wp-content/uploads/2020/05/Visa-Logo.png"
                      className="w-14"
                    />
                    <div className="ml-12 ">
                      <h4 className="text-md font-bold text-violet-500">
                        Cartão principal
                      </h4>
                    </div>
                  </div>
                  <div>
                    <button className="bg-violet-500 p-4 rounded-lg font-bold text-white transition-all hover:bg-violet-600">
                      Editar
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between shadow-md px-8 rounded-lg ring-1 ring-zinc-200">
                  <div className="flex items-center w-[80%] py-8">
                    <img
                      src="https://logospng.org/download/mastercard/logo-mastercard-1024.png"
                      className="w-14"
                    />
                    <div className="ml-12 ">
                      <h4 className="text-md font-bold text-violet-500">
                        Cartão virtual
                      </h4>
                    </div>
                  </div>
                  <div>
                    <button className="bg-violet-500 p-4 rounded-lg font-bold text-white transition-all hover:bg-violet-600">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : isShowingAccountSettings ? (
            <div className="w-full h-[calc(100vh-320px)] shadow-md p-4 rounded-lg flex flex-col">
              <h2 className="text-2xl font-bold text-violet-500">
                Configurações
              </h2>
              <div className="mt-8 flex flex-col gap-8">
                <ul>
                  <li className="py-2 text-lg border-b border-zinc-300 cursor-pointer transition-all hover:text-violet-500">
                    Editar foto
                  </li>
                  <li className="py-2 text-lg border-b border-zinc-300 cursor-pointer transition-all hover:text-violet-500">
                    Editar usuário
                  </li>
                  <li className="py-2 text-lg border-b border-zinc-300 cursor-pointer transition-all hover:text-violet-500">
                    Editar senha
                  </li>
                  <li className="py-2 text-lg border-b border-zinc-300 cursor-pointer transition-all hover:text-violet-500">
                    Editar endereços
                  </li>
                  <li className="py-2 text-lg cursor-pointer transition-all text-rose-500 hover:text-rose-600">
                    Excluir conta
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MyAccount;
