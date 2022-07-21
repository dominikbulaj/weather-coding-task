import React from "react";
import { isToday, isTomorrow, parseISO, getDay } from "date-fns";

type Props = {
  date: string;
};
const DateFriendly = ({ date }: Props) => {
  const dateObj = parseISO(date);

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let header = "";
  if (isToday(dateObj)) {
    header = "Today";
  } else if (isTomorrow(dateObj)) {
    header = "Tomorrow";
  } else {
    header = dayNames[getDay(dateObj)];
  }

  return (
    <p>
      <strong>{header}</strong>
      <br />
      <small>{date}</small>
    </p>
  );
};

export default DateFriendly;
