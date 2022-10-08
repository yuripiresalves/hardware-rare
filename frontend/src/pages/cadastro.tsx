import type { NextPage } from 'next';
import { FormEvent } from 'react';
import { Input } from '../components/Input';

const Register: NextPage = () => {
  function handleSubmit(event: FormEvent){
    event.preventDefault()
    alert('Cadastro feito!')
  }
  return (
    <>
      <div className='flex items-center flex-col gap-3'>
        <h1 className='text-violet-600 font-bold text-2xl'>Faça seu cadastro!</h1>
        <form className='w-96 shadow-md p-8 rounded-lg flex flex-col gap-2'>
            <Input label="Nome completo" type="text" id="name"/>
            <Input label="E-mail" type="email" id="email"/>
            <Input label="Número de telefone" type="text" id="phone"/>
            <Input label="CPF" type="text" id="cpf"/>
            <Input label="Senha" type="password" id="password"/>
            <Input label="Confirme sua senha" type="password" id="passwordconfirm"/>
            <button onClick={handleSubmit} className='bg-violet-500 p-3 text-white font-bold rounded-lg mt-4 hover:bg-violet-600 hover:transition-all'>Cadastrar</button>
        </form> 
      </div>  
    </>
  );
};

export default Register;