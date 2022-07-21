import React from "react";
import useSelectCity from "../../hooks/useSelectCity";

type Props = {
  children?: React.ReactNode;
  onEdit: () => void;
};

const LocationName = ({ onEdit }: Props) => {
  const { selectedCity } = useSelectCity();

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onEdit();
  };

  return (
    <>
      {selectedCity?.name && (
        <div className="inline-flex">
          Displaying 5 day weather forecast for:&nbsp;
          <em>
            <strong>{[selectedCity.name, selectedCity.state, selectedCity.country].filter(Boolean).join(", ")}</strong>
          </em>
          &nbsp;
          <button onClick={handleEditClick} className="bg-gray-300 px-2 rounded-md">
            EDIT
          </button>
        </div>
      )}
    </>
  );
};

export default LocationName;
