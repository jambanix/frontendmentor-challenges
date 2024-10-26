import { useState } from "react";
import { Button } from "./Button";
import { InputGroup } from "./Form/InputGroup";
import { RadioGroup } from "./Form/RadioGroup";

const emptyForm = {
  mortgageAmount: null,
  mortgageTerm: null,
  mortgageRate: null
}

export const Settings = ({handleCalc}) => {
  const [repaymentType, setRepaymentType] = useState("repayment");
  const [inputOptions, setInputOptions] = useState(emptyForm);

  const handleRepaymentTypeChange = (type) => setRepaymentType(type);
  const formValid = Object.values(inputOptions).every(option => option !== null);

  const handleChange = (input) => {
    let {name, value} = input
    if (value !== null) value = Number(value);
    setInputOptions(prev => ({...prev, [name]: value}))
  }

  const handleReset = () => {
    setInputOptions(emptyForm);
    console.log(inputOptions);
  }

  const handleClick = () => {handleCalc({...inputOptions, repayment: repaymentType})}

  return (
    <section className="bg-white flex flex-col p-4 gap-4 rounded-tl-xl rounded-bl-xl overflow-hidden">
      {/* Form header */}
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-slate-900 font-bold text-xl">
          Mortgage Calculator
        </h1>
        <button className="bg-none h-fit w-fit underline text-slate-700 text-sm" onClick={handleReset}>
          Clear all
        </button>
      </header>

      <InputGroup values={inputOptions} onChange={handleChange}/>
      <RadioGroup repaymentType={repaymentType} onChange={handleRepaymentTypeChange}/>

      <Button onClick={handleClick} disabled={!formValid}>Calculate Repayments</Button>
    </section>
  );
};
