import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  label: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: string;
}

export default function Input({
  id,
  label,
  value,
  type = "text",
  onChange,
  error,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 shadow-sm">
        <input
          type={type}
          id={id}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300"
          value={value}
          onChange={onChange}
        />
      </div>
      <small className="text-red-500 font-mono">{error}</small>
    </div>
  );
}
