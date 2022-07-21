import React from "react";
import useWeatherData from "../../hooks/useWeatherData";
import Forecast from "./Forecast";
import Stats from "./Stats";

const ForecastIndex = () => {
  const { data, loading, error } = useWeatherData();

  return (
    <>
      {!error && !loading && data?.forecast && data?.stats && (
        <>
          <Forecast days={5} data={data.forecast} />
          <Stats data={data.stats} />
        </>
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

export default ForecastIndex;
