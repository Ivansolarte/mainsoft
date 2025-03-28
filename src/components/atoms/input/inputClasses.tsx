
import { InputProps } from "../../../types/interface.input";

export const InputClasses = ({
  name,
  value,
  onChange,
  classes,
  placeholder,
  type,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500 p-1 ${classes}`}
      placeholder={placeholder}
    />
  );
};
