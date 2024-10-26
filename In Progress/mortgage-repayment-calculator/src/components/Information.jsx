import { Input } from "./Input"
import { Option } from "./Option"

export const Information = () => {
  return (
  <section className="bg-white flex flex-col p-4 gap-4 rounded-tl-xl rounded-bl-xl">

      {/* Form header */}
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-slate-900 font-bold text-xl">Mortgage Calculator</h1>
        <button className="bg-none h-fit w-fit underline text-slate-700 text-sm">Clear all</button>
      </header>

      {/* Input group */}
      <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input containerClassName="sm:col-span-2" name="mortgageAmount" label="Mortgage Amount" infoText="£" orientationRight={false}/>
        <Input containerClassName="sm:col-start-1" name="mortgageTerm" label="Mortgage Term" infoText="years" />
        <Input containerClassName="sm:col-start-2" name="mortgageRate" label="Interest Rate" infoText="%" />
      </fieldset>

      {/* Options group */}
      <fieldset className="flex flex-col w-full sm:col-span-2">
        <label htmlFor="">Mortgage Type</label>
        <Option label="Repayment"></Option>
        <Option label="Interest Only" />
      </fieldset>
  </section>
  )
}