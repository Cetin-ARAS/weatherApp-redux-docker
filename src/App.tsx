import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
import { useSelector } from "react-redux";

const App = () => {
  const forecast = useSelector((state: any) => state.forecast.forecast);
  const { term, options, handleChange, handleSubmit, setCity } = useForecast();

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-sky-500 to-gray-300 h-[100vh] w-full">
      {forecast ? (
        <Forecast />
      ) : (
        <Search
          term={term}
          options={options}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setCity={setCity}
        />
      )}
    </div>
  );
};

export default App;
