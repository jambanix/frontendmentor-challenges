import { Information } from "./Layout/Information";
import { Results } from "./Layout/Results";

export const Calculator = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 w-full">
      <section>
        <Information />
      </section>
      <section>
        <Results />
      </section>
    </div>
  )
};
