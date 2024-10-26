
export const Input = ({name, infoText, label, orientationRight=true, containerClassName=null}) => {

  const position = orientationRight ? "absolute right-0" : "absolute left-0"
  const iconBorder = orientationRight ? "rounded-r-lg border-r" : "rounded-l-lg border-l"

  return (
    <div className={`flex-col ${containerClassName}`}>
      <label className="text-slate-700" htmlFor={name}>{label}</label>
      <div className="flex relative">

        {/* Input */}
        <input type="number" name={name} id={name} className="basis-full appearance-none min-h-12 rounded-lg border border-slate-500"/>

        {/* Icon */}
        <div className={`${position} ${iconBorder} border-t border-b h-full w-fit border-slate-500 bg-slate-100 text-slate-900 flex items-center justify-center p-4`}><p>{infoText}</p></div>
      </div>
      
      <p>Error text</p>
    </div>
    
  )
}