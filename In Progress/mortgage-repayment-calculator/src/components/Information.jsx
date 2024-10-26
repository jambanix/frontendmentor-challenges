import { Input } from "./Input"

export const Information = () => {
  return (
  <div className="bg-white flex flex-col p-4 gap-4">
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <h1>Mortgage Calculator</h1>
        <button className="bg-none h-fit w-fit underline text-slate-700 text-sm">Clear all</button>
      </header>
      <fieldset className="grid grid-cols-1 sm:grid-cols-2">
        <Input containerClassName="sm:col-span-2" name="mortgageAmount" label="Mortgage Amount" infoText="£" orientationRight={false}/>
      </fieldset>
  </div>
  )
}