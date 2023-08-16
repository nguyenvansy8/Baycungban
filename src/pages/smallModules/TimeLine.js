import React from "react";
import { MinutesToHours } from "../../utils/ConvertMinutesToHours";
import { FormatDateTime } from "../../utils/FormatDateTimes";

function TimeLine(data) {
  const startDateData = data.data?.StartDate;
  const endDateData = data.data?.EndDate;

  return (
    <div className="text-sm font-medium ml-8">
      <div class="flex items-center">
        <div class="w-1/3 text-right text-gray-600 pr-2 mr-4 font-bold">
          {startDateData
            ? FormatDateTime(startDateData)[3]
            : FormatDateTime("2022-03-02T05:45:00")}
        </div>
        <div class="w-1/2 text-right text-gray-600 pr-4 flex">
          {MinutesToHours(data.data?.Duration)}
        </div>
        <div class="w-1/4 text-left text-gray-600 pl-2 font-bold">
          {endDateData
            ? FormatDateTime(endDateData)[3]
            : FormatDateTime("2022-03-02T05:45:00")}
        </div>
      </div>
      <div class="flex justify-center mt-3">
        <div class="w-1/4 text-center text-gray-600 mt-3 font-bold  bg-slate-200 rounded-xl">
          DAD
        </div>
        <div class="w-1/2 h-1 bg-blue-700"></div>
        <div class="w-1/4 text-center text-gray-600 mt-3 font-bold bg-slate-200 rounded-xl">
          DAD
        </div>
      </div>
      <div class="flex justify-between mt-2"></div>
    </div>
  );
}

export default TimeLine;
