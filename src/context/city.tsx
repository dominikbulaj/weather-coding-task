import React, { createContext, useMemo, useState } from "react";
import type { City, CityContextInterface } from "../types";

const defaultValue: CityContextInterface = {
  city: undefined,
  setCity: () => null,
};
const CityContext = createContext(defaultValue);

const CityContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState<City | undefined>(undefined);

  const value = useMemo(
    () => ({
      city,
      setCity,
    }),
    [city]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

export { CityContextProvider as default, CityContext };
