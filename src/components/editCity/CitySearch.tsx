import React, { useState } from "react";
import useSelectCity from "../../hooks/useSelectCity";

const CitySearch = () => {
  const { city, setCity, cities, selectCityByIndex, error, loading } = useSelectCity();
  const [cityName, setCityName] = useState(city);

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  };

  const handleSearch = () => {
    setCity(cityName);
    selectCityByIndex(-1);
  };

  const handleCitySelect = (index: number) => {
    selectCityByIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <p className="py-2">For which city you want to see weather forecast?</p>
      <p>
        <input
          name="city"
          className="outline-none border-solid border-2 border-indigo-600 rounded-md px-2"
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          value={cityName}
        />{" "}
        <button name="citySearch" className="bg-gray-300 px-2 rounded-md" onClick={handleSearch}>
          🔎
        </button>
      </p>

      {cities.length > 0 && (
        <>
          <p className="text-md mt-5">
            There are more than one city with name: <span className="font-semibold">{city}</span>
          </p>
          <p className="text-gray-500">
            Please help us find correct one by clicking one of suggestions below or adjusting your search query
            accordingly
          </p>
          <p className="mt-5 text-md">Our suggestions:</p>
          <ul className="list-none">
            {cities.map((c, i) => (
              <li
                key={`${c.lat}_${c.lon}`}
                className="hover:text-blue-700 hover:cursor-pointer"
                onClick={() => handleCitySelect(i)}
              >
                - {c.name}, {c.state}, {c.country}{" "}
                <span className="text-xs text-gray-600">
                  (lat: {c.lat}, lon: {c.lon})
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      {cities.length === 0 && !error && !loading && city && (
        <p className="mt-5 text-md">
          Couldn't find city named:{" "}
          <em>
            <strong>{city}</strong>
          </em>
        </p>
      )}

      {error && (
        <p className="mt-5 text-md text-red-700">
          <>
            <strong>ERROR: </strong> {error}
          </>
        </p>
      )}
    </>
  );
};

export default CitySearch;
