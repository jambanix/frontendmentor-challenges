import { useRef } from "react";

export const Option = ({ name, label, checked, onSelect }) => {

  const selected = useRef();

  const handleClick = () => onSelect(selected.current.name);

  return (
    <div className={`${checked ? "bg-lime grayscale-200" : ""} flex gap-2 w-full border border-slate-500 p-3`} onClick={handleClick}>
      <input
        className=""
        type="radio"
        name={name}
        id={name}
        checked={checked}
        ref={selected}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
