
export const Input = ({infoText, label, orientationRight=true}) => {

  const position = orientationRight ? "absolute right-0" : "absolute left-0"

  return (
    <>
      <label>
        <p>{label}</p>
        <div className="flex relative"></div>
        <input type="number" name="" id="" className="basis-full"/>
        <div className={`${position}`}><p>{infoText}</p></div>
        <p>Error text</p>
      </label>
    </>
  )
}