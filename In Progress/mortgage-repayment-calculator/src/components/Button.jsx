
export const Button = ({children, disabled, onClick}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`rounded-full bg-lime transition-all text-slate-900 max-w-[314px] h-12 hover:contrast-125 ${disabled ? "hidden" : "visible"}`}>{children}</button>
  )
}