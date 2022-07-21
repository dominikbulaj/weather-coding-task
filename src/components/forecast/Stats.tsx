import React from "react";
import { StatsData } from "../../types";
import Temperature from "./Temperature";

type Props = {
  data: StatsData;
};

const Stats = ({ data }: Props) => {
  return (
    <>
      <strong>Some temperature stats:</strong>
      <ul>
        <li>
          Min value: <Temperature temp={data.min} />
        </li>
        <li>
          Max value: <Temperature temp={data.max} />
        </li>
        <li>
          Mean (avg): <Temperature temp={data.mean} />
        </li>
        {/* <li>Mode value: {data.mode}</li> */}
      </ul>
    </>
  );
};

export default Stats;
