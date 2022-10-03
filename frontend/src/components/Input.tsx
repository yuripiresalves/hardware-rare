interface InputProps{
    label:string;
    id:string;
    type:string;
}
export function Input(props:InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-violet-600">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        className="outline outline-1 outline-zinc-300 rounded-sm p-2 text-zinc-900"
      />
    </div>
  );
}
