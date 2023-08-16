import { parseISO, format } from "date-fns";

export const FormatDateTime = (data) => {
  const inputDate = parseISO(data);
  const outputDateStr = format(inputDate, "d MMMM yyyy HH:mm");
  const result = outputDateStr.toString().split(" ");
  return result;
};
