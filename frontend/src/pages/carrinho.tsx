import type { NextPage } from 'next';
import { Barcode, CreditCard, Trash } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';


const Car: NextPage = () => {
    const [quantity, setQuantity] = useState(1);

  return (
    <>
        <h2 className="text-3xl text-violet-600 font-bold py-8">
            Carrinho de compras
        </h2>

        <div className="h-full grid grid-cols-2 xl:grid-cols-2">
            <div className="flex flex-col gap-14">
                <div>
                    <h3 className='font-bold mb-6 text-zinc-800'>02 itens</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-11"> 
                            <div className="flex gap-2 items-center">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div className="w-28 h-28">
                                    <img src="https://images.kabum.com.br/produtos/fotos/276321/placa-mae-gigabyte-b660m-aorus-pro-intel-lga-1700-matx-ddr4-m-2-nvme-b660m-aorus-pro-ddr4_1643917278_gg.jpg" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-zinc-800">Placa-Mãe</h4>
                                    <p className="text-xs ml-2 text-zinc-500" >Categoria: Gamer</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <div className="flex gap-2">
                                        Quantidade 
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div>
                                        Valor unitário <span className="text-violet-500 font-bold ">R$ 1219,00 </span>
                                    </div>
                                    <button>
                                    <Trash size={24} className="text-rose-500 hover:text-rose-700 transition-all duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-11">
                            <div className="flex gap-2 items-center">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <div className="w-28 h-28">
                                    <img src="https://images.kabum.com.br/produtos/fotos/110896/memoria-corsair-para-mac-16gb-2x8gb-1600mhz-ddr3-c11-cmsa16gx3m2a1600c11_1590175116_gg.jpg" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-zinc-800">Memória Corsair 16GB (2x8GB), 1600Mhz, DDR3, C11, para Macbook</h4>
                                    <p className="text-xs ml-2 text-zinc-500" >Categoria: Gamer</p>
                                </div>
                                <div className="flex gap-2 text-xs items-center">
                                    <div className="flex gap-2">
                                        Quantidade 
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div>
                                        Valor unitário <span className="text-violet-500 font-bold ">R$ 499,99 </span>
                                    </div>
                                    <button>
                                    <Trash size={24} className="text-rose-500 hover:text-rose-700 transition-all duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className='grid grid-cols-2 xl:grid-cols-3 max-w-[80%] gap-3 '>
                        <div className="flex flex-col border  border-zinc-500 rounded items-center justify-center py-1 cursor-pointer hover:border-violet-500">
                            <CreditCard size={32}/>
                            Cartão
                        </div>
                        <div className="flex flex-col  border  border-zinc-500 rounded items-center justify-center py-1 cursor-pointer hover:border-violet-500">
                        <Barcode size={32} />
                        Boleto
                        </div>
                        <div className="flex flex-col  border  border-violet-500 rounded items-center justify-center py-1 cursor-pointer">
                            <img src='/assets/pix.svg' className='h-8' />Pix
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center max-w-[80%]">
                        <img src='/assets/qr-code.svg' className='w-64' />
                        <p>Escanei o QR Code acima para pagar</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  gap-8 max-w-[60%] justify-self-end">
                <p>Endereço de envio:</p>
                <div className='flex gap-5 py-5 px-8 border border-violet-500 rounded-md items-center w-fit'>
                    <p >
                        Rua dos Bobos, Número 0 <br/>
                        Formiga - Minas Gerais <br/>
                        42069-123 <br/>
                    </p>
                    <div >
                        <button className="font-bold justify-center rounded  text-white items-center py-3 px-4 bg-red-600 hover:transition-all">
                            Editar
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Opções de frete:</p>
                    <div className='flex gap-3 items-center'>
                        <input type='radio' name="frete" />
                        <p className='font-bold text-zinc-800'>SEDEX - R$ 19,00</p>
                        <p className='text-xs  text-zinc-500'>até 5 dias uteis</p>
                    </div>
                    <hr className='w-[70%]'/>
                    <div className='flex gap-3 items-center'>
                        <input type='radio' name="frete" />
                        <p className='font-bold text-zinc-800'>PAC - R$ 7,50</p>
                        <p className='text-xs  text-zinc-500'>até 17 dias uteis</p>
                    </div>
                </div>

                <p className='font-bold text-lg'>
                    Total: <span className='text-3xl text-green-500'>R$ 1719,00</span>
                </p>
                <div>

                </div>
            </div>
        </div>
    </>
  );
};

export default Car;
