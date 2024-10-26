import { forwardRef } from "react"
import { useState } from "react"


const regexValid = (text) => String(text).match("^[\.0-9]*$") ? true : false;


export const Input = forwardRef(function Input({name, infoText, label, onChange, orientationRight=true, containerClassName=null}, ref) {

  const position = orientationRight ? "absolute right-0" : "absolute left-0"
  const iconBorder = orientationRight ? "rounded-r-lg border-r" : "rounded-l-lg border-l"
  const inputPadding = !orientationRight ? "pl-12 pr-4" : "px-4"

  const [hasBeenChanged, setHasBeenChanged] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const invalidChange = (!isValid && hasBeenChanged);

  const handleChange = (event) => {
    let value = event.target.value
    const regex = regexValid(value);
    (regex && value !== "") ? setIsValid(true) : setIsValid(false);
    !hasBeenChanged && setHasBeenChanged(true);
    if (value === "" || !check) value = null;
    onChange({name:event.target.name, value:value});
  }

  return (
    <div className={`flex-col ${containerClassName}`}>
      <label className="text-slate-700" htmlFor={name}>{label}</label>
      <div className="flex relative">

        {/* Input */}
        <input ref={ref} type="text" inputMode="numeric" name={name} id={name} className={`basis-full min-h-12 rounded-lg border border-slate-500 w-full ${inputPadding}`} onChange={handleChange}/>

        {/* Icon */}
        <div className={`${position} ${iconBorder} border-t border-b h-full w-fit border-slate-500 bg-slate-100 text-slate-900 flex items-center justify-center p-4`}><p>{infoText}</p></div>
      </div>
      
      {invalidChange && <p>Error text</p>}
    </div>
  )})