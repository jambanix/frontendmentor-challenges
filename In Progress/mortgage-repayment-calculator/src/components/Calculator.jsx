import { Information } from "./Information";
import { Results } from "./Results";

export const Calculator = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 w-full max-w-[688px] lg:max-w-[1008px] lg:w-[1008px]">
      <section>
        <Information />
      </section>
      <section>
        <Results />
      </section>
    </div>
  )
};
