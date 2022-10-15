import type { NextPage } from "next";
import Link from "next/link";
import { Envelope, InstagramLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";

const Home: NextPage = () => {
  return (
    <>
      
     
      <div className="mb-16 rounded-3xl  w-fit px-44 mx-auto mt-20 bg-gradient-to-tr from-blue-900 via-purple-700 to-white"><h2 className="text-3xl text-white font-bold py-8 text-center">
        BEM VINDO A <br/>HARDWARE RARE
      </h2></div>



      <div className="flex flex-col max-w-xl mx-auto gap-4 justify-center h-full">
        <Link href="/login">
          <a className="outline-2 border border-violet-600 rounded-lg p-3 px-4 text-violet-600 hover:bg-violet-600 hover:text-white hover:transition-all hover:duration-300 text-center">
            Realizar Login
          </a>
        </Link>

        <Link href="/cadastro">
          <a className="outline-2 border border-violet-600 rounded-lg p-3 px-4 text-violet-600 hover:bg-violet-600 hover:text-white hover:transition-all hover:duration-300 text-center">
            Cadastre-se
          </a>
        </Link>
        <Link href="/produtos">
          <a className="bg-violet-500 p-3 text-white font-bold rounded-lg  hover:bg-violet-600 hover:transition-all text-center">
            Veja a nossa Loja
          </a>
          
        </Link>
        <div className=" flex mx-auto gap-4 text-violet-500 mt-10"> 
    <InstagramLogo size={24} />
    <TwitterLogo size={24} />
    <WhatsappLogo size={24} />
    <Envelope size={24} />
    </div>
      </div>
   
    </>
  );
};

export default Home;
