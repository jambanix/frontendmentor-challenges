
import { Input } from "../Input"

export const InputGroup = () => {
  return (
    <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          containerClassName="sm:col-span-2"
          name="mortgageAmount"
          label="Mortgage Amount"
          infoText="£"
          orientationRight={false}
        />
        <Input
          containerClassName="sm:col-start-1"
          name="mortgageTerm"
          label="Mortgage Term"
          infoText="years"
        />
        <Input
          containerClassName="sm:col-start-2"
          name="mortgageRate"
          label="Interest Rate"
          infoText="%"
        />
      </fieldset>
  )
}