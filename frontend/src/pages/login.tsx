import type { NextPage } from 'next';
import Link from 'next/link';
import { Input } from '../components/Input';

const Login: NextPage = () => {
  return (
    <>
      <div className='flex items-center flex-col gap-3'>
        <h1 className='text-violet-600 font-bold text-2xl'>Login</h1>
        <form className='w-96 shadow-md p-8 rounded-lg flex flex-col gap-2'>
            <Input label="E-mail" type="email" id="email"/>
            <Input label="Senha" type="password" id="password"/>
            <Link href="/produtos">
                <a className='bg-violet-500 p-3 text-white font-bold rounded-lg mt-4 hover:bg-violet-600 hover:transition-all text-center'>Acessar</a>
            </Link>
            <Link href="/cadastro">
                <a className='outline-2 border border-violet-600 rounded-lg p-3 px-4 text-violet-600 hover:bg-violet-600 hover:text-white hover:transition-all hover:duration-300 text-center'>Cadastre-se</a>
            </Link>
        </form> 
      </div>  
    </>
  );
};

export default Login;