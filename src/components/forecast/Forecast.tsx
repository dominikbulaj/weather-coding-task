import React from "react";
import { ForecastItem } from "../../types";
import DateFriendly from "./DateFriendly";
import TableCell from "./TableCell";
import Temperature from "./Temperature";

type Props = {
  days: number;
  data: ForecastItem[];
};

const Forecast = ({ days, data }: Props) => {
  return (
    <table className="border-collapse table-auto w-full text-sm border border-slate-400 my-5">
      <thead>
        <tr>
          <TableCell rowSpan={2} className="text-base bg-slate-200 p-4">
            Day
          </TableCell>
          <TableCell colSpan={3} className="text-base bg-slate-200 p-2">
            Temperature
          </TableCell>
          <TableCell rowSpan={2} className="text-base bg-slate-200 p-4">
            Humidity
          </TableCell>
        </tr>
        <tr>
          <TableCell className="text-sm bg-slate-200 p-2">Morning</TableCell>
          <TableCell className="text-sm bg-slate-200 p-2">Night</TableCell>
          <TableCell className="text-sm bg-slate-200 p-2">Day</TableCell>
        </tr>
      </thead>
      <tbody>
        {data.map((dataRow: ForecastItem) => {
          return (
            <tr key={dataRow.date} className="hover:bg-sky-100">
              <TableCell className="text-base p-2">
                <DateFriendly date={dataRow.date} />
              </TableCell>
              <TableCell className="text-base p-2">
                <Temperature temp={dataRow.temp.morning} />
              </TableCell>
              <TableCell className="text-base p-2">
                <Temperature temp={dataRow.temp.day} />
              </TableCell>
              <TableCell className="text-base p-2">
                <Temperature temp={dataRow.temp.night} />
              </TableCell>
              <TableCell className="text-base p-2">{dataRow.humidity}%</TableCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Forecast;
