import { Settings } from "./Settings";
import { Results } from "./Results";
import { useState } from "react";

const calculateMortgage = (mortgageAmount, mortgageTerm, mortgageRate, repayment) => {
 
}

export const Calculator = () => {

  const [result, setResult] = useState();

  const handleCalc = ({mortgageAmount, mortgageTerm, mortgageRate, repayment}) => {
    const x = calculateMortgage(mortgageAmount, mortgageTerm, mortgageRate, repayment)
  }

  return (
    <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 w-full max-w-[688px] lg:max-w-[1008px] lg:w-[1008px] bg-white rounded-xl">
      <Settings handleCalc={handleCalc}/>
      <Results result={null} />
    </div>
  );
};
