import React, { useCallback, useEffect, useState } from "react";
import useSelectCity from "../../hooks/useSelectCity";
import CitySearch from "./CitySearch";
import LocationName from "./LocationName";

const EditCity = () => {
  const { selectedCity, setCity, selectCityByIndex } = useSelectCity();
  const [editing, setEditing] = useState(true);

  useEffect(() => {
    if (selectedCity?.name) {
      setEditing(false);
    }
  }, [selectedCity]);

  const handleEdit = useCallback(() => {
    setEditing(true);
    setCity("");
    selectCityByIndex(-1);
  }, [setCity, selectCityByIndex]);

  return <>{editing ? <CitySearch /> : <LocationName onEdit={handleEdit} />}</>;
};

export default EditCity;
