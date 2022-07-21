import React from "react";

type Props = {
  temp?: number | string;
};
const Temperature = ({ temp }: Props) => {
  if (!temp) {
    return <>{"-"}</>;
  }

  return <>{temp}&deg;C</>;
};

export default Temperature;
