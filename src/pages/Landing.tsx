import React from "react";
import EditCity from "../components/editCity/Index";
import Forecast from "../components/forecast/Index";
import usePageTitle from "../hooks/usePageTitle";

const Landing = () => {
  const pageTitle = usePageTitle();

  return (
    <>
      <h1 className="text-lg font-semibold">{pageTitle}</h1>
      <EditCity />
      <Forecast />
    </>
  );
};

export default Landing;
