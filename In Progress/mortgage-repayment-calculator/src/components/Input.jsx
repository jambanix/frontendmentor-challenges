
export const Input = ({name, infoText, label, orientationRight=true, containerClassName=null}) => {

  const position = orientationRight ? "absolute right-0" : "absolute left-0"
  console.log("Position is " + position)

  return (
    <div className={`flex-col ${containerClassName}`}>
      <label htmlFor={name}>{label}</label>
      <div className="flex relative">
        <input type="number" name={name} id={name} className="basis-full appearance-none"/>
        <div className={`${position} h-full w-5 bg-slate-300 flex items-center justify-center`}><p>{infoText}</p></div>
      </div>
      
      <p>Error text</p>
    </div>
    
  )
}