
import { Input } from "../Input"
import { useRef } from "react";

export const InputGroup = ({onChange, values}) => {

  const inputText = useRef();
  const handleChange = (event) => onChange(event);

  
  

  return (
    <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          containerClassName="sm:col-span-2"
          name="mortgageAmount"
          label="Mortgage Amount"
          infoText="£"
          orientationRight={false}
          onChange={handleChange}
          ref={inputText}
          value={values.mortgageAmount}
        />
        <Input
          containerClassName="sm:col-start-1"
          name="mortgageTerm"
          label="Mortgage Term"
          infoText="years"
          onChange={handleChange}
          ref={inputText}
          value={values.mortgageTerm}
        />
        <Input
          containerClassName="sm:col-start-2"
          name="mortgageRate"
          label="Interest Rate"
          infoText="%"
          onChange={handleChange}
          ref={inputText}
          value={values.mortgageRate}
        />
      </fieldset>
  )
}