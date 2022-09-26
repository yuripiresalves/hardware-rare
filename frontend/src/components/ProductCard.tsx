interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
}

export function ProductCard({ id, imageUrl, title, price }: ProductCardProps) {
  return (
    <div className="w-96 h-96 flex flex-col justify-between border rounded-lg overflow-hidden justify-self-center">
      <div className="w-full h-60">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4">
        <strong
          title={title}
          className="text-violet-500 text-center  px-4 truncate"
        >
          {title}
        </strong>
        <span className="text-center text-zinc-500">
          R$ <strong className="text-zinc-700">{price}</strong>
        </span>
        <a
          href={`/produtos/${id}`}
          className="bg-violet-500  font-bold text-white flex justify-center items-center py-3 hover:bg-violet-600 hover:transition-all"
        >
          Ver detalhes
        </a>
      </div>
    </div>
  );
}
