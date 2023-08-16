import React from "react";
import logo from "../../../assets/logo/logoBamboo.svg";
import { MinutesToHours } from "../../../utils/ConvertMinutesToHours";
import { FormatDateTime } from "../../../utils/FormatDateTimes";

function FlightDetailTab(data) {
  const dataFlightDetailTab = data.data;
  const startDateData = dataFlightDetailTab?.StartDate;
  const endDateData = dataFlightDetailTab?.EndDate;

  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div class="p-4">
          <div className="flex gap-10">
            <div className="">
              <div>
                <div className="text-xl font-bold">
                  {startDateData
                    ? FormatDateTime(startDateData)[3]
                    : FormatDateTime("2022-03-02T05:45:00")}
                </div>
                <div>
                  {startDateData
                    ? `${FormatDateTime(startDateData)[0]} ${
                        FormatDateTime(startDateData)[1]
                      }`
                    : FormatDateTime("2022-03-02T05:45:00")}
                </div>
              </div>
              <div>
                <div className="mt-5">
                  {MinutesToHours(dataFlightDetailTab?.Duration)}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold mt-5">
                  {endDateData
                    ? FormatDateTime(endDateData)[3]
                    : FormatDateTime("2022-03-02T05:45:00")}
                </div>
                <div>
                  {endDateData
                    ? `${FormatDateTime(endDateData)[0]} ${
                        FormatDateTime(endDateData)[1]
                      }`
                    : FormatDateTime("2022-03-02T05:45:00")}
                </div>
              </div>
            </div>
            <ol class="relative border-l border-blue-700 dark:border-blue-700">
              <li class="mb-16 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-blue-700"></div>
                <time class="text-xl font-bold leading-none text-gray-400 dark:text-gray-500">
                  {dataFlightDetailTab.RelatedFlights[0]?.StartPoint}
                </time>
                <div>Da Nang Airport</div>
              </li>
              <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-4 -left-1.5 border border-white dark:border-blue-700 dark:bg-blue-700"></div>
                <time class="mt-10 text-xl leading-none text-gray-400 dark:text-gray-500 font-bold">
                  {dataFlightDetailTab.RelatedFlights[0]?.EndPoint}
                </time>
                <div>Tansonnhat Intl</div>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className="flex gap-3 text-2xl items-center ">
            <img src={logo} className="bg-slate-700 h-10 w-10 rounded-lg" />
            <div>
              <div className="font-bold">Bamboo Airways</div>
              <div className="text-sm">
                {dataFlightDetailTab.FlightNumber} .{" "}
                {dataFlightDetailTab.GroupClass}
              </div>
            </div>
          </div>
          <div className="bg-slate-200 rounded-3xl">
            <div className="grid grid-cols-2 p-5">
              <div className="space-y-3">
                <div>
                  Baggage{" "}
                  <b className="text-blue-700">{dataFlightDetailTab.Carryon}</b>
                </div>
                <div>
                  In-flight{" "}
                  <b className="text-blue-700">
                    {dataFlightDetailTab.FareType}
                  </b>
                </div>
                <div>
                  In-flight{" "}
                  <b className="text-blue-700">
                    {dataFlightDetailTab.FareType}
                  </b>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  Aircraft{" "}
                  <b className="text-blue-700">
                    {dataFlightDetailTab.FlightNumber}
                  </b>
                </div>
                <div>
                  Seat layout{" "}
                  <b className="text-blue-700">
                    {dataFlightDetailTab.RelatedFlights[0]?.SeatClass}
                  </b>
                </div>
                <div>
                  Seat pitch
                  <b className="text-blue-700">29 inches (standard)</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailTab;
