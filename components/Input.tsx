import { FC } from "react";

type TInput = {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
};

const Input: FC<TInput> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md bg-neutral-700 text-white appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        className="absolute text-zinc-400 text-md transform duration-150 -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
