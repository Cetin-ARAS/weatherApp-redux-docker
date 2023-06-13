import { ChangeEvent } from "react";
import { optionCityType } from "../types";

type Props = {
  term: string;
  options: [];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  setCity: React.Dispatch<
    React.SetStateAction<optionCityType | null | undefined>
  >;
};

const Search = ({
  term,
  options,
  handleChange,
  handleSubmit,
  setCity,
}: Props): JSX.Element => {
  return (
    <div>
      <section>
        <h1 className="text-cyan-50 text-2xl mb-4">Weather App</h1>
        <div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter a place..."
              value={term}
              onChange={handleChange}
            />
            <button
              className="bg-red-500 bord text-cyan-50 rounded"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
          <ul>
            {options.length > 1 &&
              options.map((optionCity: optionCityType, index: number) => (
                <li key={index}>
                  <button onClick={() => setCity(optionCity)}>
                    {optionCity.name} {optionCity.country}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Search;
