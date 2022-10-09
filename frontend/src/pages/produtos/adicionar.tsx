import type { NextPage } from 'next';
import { FormEvent } from 'react';
import { Input } from '../../components/Input';

const AddProduct: NextPage = () => {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    alert('Produto adicionado!');
  }
  return (
    <>
      <div className="flex items-center flex-col gap-3">
        <h1 className="text-violet-600 font-bold text-2xl py-8">
          Adicione um novo produto
        </h1>
        <form className="w-96 shadow-md p-8 rounded-lg flex flex-col gap-2">
          <Input label="Nome do produto" type="text" id="title" />
          <Input label="Preço" type="text" id="price" />
          <div className="flex flex-col gap-2">
            <label htmlFor="categoryId" className="text-violet-600">
              Categoria
            </label>
            <select
              name="categoryId"
              id="categoryId"
              className="outline outline-1 outline-zinc-300 rounded-sm p-2 text-zinc-900"
            >
              <option value="">Selecione</option>
              <option value="processador">Processador</option>
              <option value="phone">Fone</option>
            </select>
          </div>
          <Input label="Quantidade" type="number" id="quantity" />
          <Input label="Descrição" type="text" id="description" />
          <Input label="URL da imagem" type="text" id="imageUrl" />

          <button
            onClick={handleSubmit}
            className="bg-violet-500 p-3 text-white font-bold rounded-lg mt-4 hover:bg-violet-600 hover:transition-all"
          >
            Adicionar
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
