import { useState } from "react";
import { Button } from "./Button";
import { InputGroup } from "./Form/InputGroup";
import { RadioGroup } from "./Form/RadioGroup";

export const Settings = () => {
  const [repaymentType, setRepaymentType] = useState("repayment");

  const handleRepaymentTypeChange = (type) => setRepaymentType(type);

  return (
    <section className="bg-white flex flex-col p-4 gap-4 rounded-tl-xl rounded-bl-xl">
      {/* Form header */}
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-slate-900 font-bold text-xl">
          Mortgage Calculator
        </h1>
        <button className="bg-none h-fit w-fit underline text-slate-700 text-sm">
          Clear all
        </button>
      </header>

      <InputGroup />
      <RadioGroup repaymentType={repaymentType} onChange={handleRepaymentTypeChange}/>

      <Button>Calculate Repayments</Button>
    </section>
  );
};
