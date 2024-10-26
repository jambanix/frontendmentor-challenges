import { useRef} from "react"
import { Option } from "../Option"

export const RadioGroup = ({repaymentType, onChange}) => {


  return (
    <fieldset className="flex flex-col gap-2 w-full sm:col-span-2">
        <label htmlFor="">Mortgage Type</label>
        <Option
          label="Repayment"
          checked={repaymentType === "repayment"}
          onSelect={onChange}
          name="repayment"
        ></Option>
        <Option
          onSelect={onChange}
          label="Interest Only"
          checked={repaymentType === "interest"}
          name="interest"
        />
      </fieldset>
  )
}