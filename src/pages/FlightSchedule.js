import { React, useEffect, useState } from "react";
import arrow from "../../src/assets/logo/Arrow.svg";
import search from "../../src/assets/logo/search.svg";
import number from "../../src/assets/logo/Number.svg";
import logo from "../../src/assets/logo/logoBamboo.svg";
import Card from "../components/Card/Card";
import FlightDetail from "./smallModules/FlightDetail";
import TimeLine from "./smallModules/TimeLine";
import FlightDetailTab from "./smallModules/tabs/FlightDetailTab";
import FareInforTab from "./smallModules/tabs/FareInforTab";
import axios from "axios";
import { MinutesToHours } from "../utils/ConvertMinutesToHours";
import { FormatDateTime } from "../utils/FormatDateTimes";

function FlightSchedule() {
  const [flightDetailChecked, setFlightDetailChecked] = useState(true);
  const [fareInfoChecked, setfareInfoChecked] = useState(false);
  const [dataFetching, setDataFetching] = useState([]);
  const startDateData = dataFetching[0]?.StartDate;
  const endDateData = dataFetching[0]?.EndDate;
  const baseUrl = "https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a";
  const handleClick = (e) => {
    setFlightDetailChecked(true);
    setfareInfoChecked(false);
  };

  const handleClick1 = (e) => {
    setFlightDetailChecked(false);
    setfareInfoChecked(true);
  };

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      if (response.data.status === 200) {
        const data = response.data.Flights;
        setDataFetching(data);
      } else {
        setDataFetching([]);
      }
    });
  }, []);

  return (
    <div>
      <div className="w-screen">
        <div class="grid grid-cols-3 gap-10">
          <div class="p-4">
            <div className="flex gap-32">
              <div>
                <div className="text-blue-700 font-bold">DA NANG (DAD)</div>
                <div>Fri, 22 Mar, 2022</div>
              </div>
              <img src={arrow} />
              <div>
                <div className="text-blue-700 font-bold">HO CHI MINH (SGN)</div>
                <div>Fri, 22 Mar, 2022</div>
              </div>
            </div>
          </div>
          <div class="p-4 flex gap-10 items-center font-bold ">
            <p>Round-trip</p>
            <div class="border-l left-0 h-1/2"></div>
            <p className="flex">
              <p className="text-blue-700">02 </p> Adult{", "}
              <p className="text-blue-700">01 </p> children
            </p>
            <div class="border-l left-0 h-1/2"></div>
            <p>Business Class</p>
          </div>
          <div className="items-center flex justify-center">
            <button class="absolute text-2xl  p-2 bg-orange-600 text-white rounded-xl">
              <div className="flex gap-10">
                Search flights
                <img src={search} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-5 p-5 bg-slate-100">
        <div className="gap-5 col-span-3 flex items-center justify-end">
          <div>Filter</div>
          <select class="rounded-xl py-2 px-4 justify-items-end">
            <option>Transit</option>
            <option>Lựa chọn 2</option>
            <option>Lựa chọn 3</option>
          </select>
          <select class="rounded-xl py-2 px-4 justify-items-end">
            <option>Time</option>
            <option>Lựa chọn 2</option>
            <option>Lựa chọn 3</option>
          </select>
          <select class="rounded-xl py-2 px-4 justify-items-end">
            <option>Airline</option>
            <option>Lựa chọn 2</option>
            <option>Lựa chọn 3</option>
          </select>
          <select class="rounded-xl py-2 px-4 justify-items-end">
            <option>Low Price</option>
            <option>Lựa chọn 2</option>
            <option>Lựa chọn 3</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-slate-100">
        <div className="gap-5 col-span-3 flex">
          <div>
            {dataFetching.map((data, id) => {
              return (
                <div>
                  <Card>
                    <FlightDetail dataToBind={data} />
                    <div class="bg-white rounded-lg shadow-md">
                      <div className="tabs">
                        <input
                          type="radio"
                          name="tabs"
                          id="tab1"
                          className="tab-input mr-2"
                          onClick={(e) => handleClick(e)}
                        />
                        <label for="tab1" className="tab-label mr-10">
                          FLIGHT DETAIL
                        </label>

                        <input
                          type="radio"
                          name="tabs"
                          id="tab2"
                          className="tab-input  mr-2"
                          onClick={(e) => handleClick1(e)}
                        />
                        <label for="tab2" className="tab-label">
                          FARE INFO
                        </label>

                        {flightDetailChecked ? (
                          <div class="tab-content">
                            <FlightDetailTab data={data} />
                          </div>
                        ) : (
                          <div class="tab-content">
                            <FareInforTab data={data} />
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                  <div className="mt-5"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 ml-5 w-4/5 ">
          <Card>
            <div className="text-2xl">YOUR FLIGHTS</div>
            <div class=" h-0.5 bg-stone-100 mt-2"></div>
            <div className="mt-5 ">
              <div className=" items-center flex gap-3 text-2xl">
                <img
                  src={number}
                  className="bg-slate-700 h-10 w-10 rounded-full"
                />
                <div>
                  {/* <div>Fri, 11 Feb, 2022</div> */}
                  <div>
                    {startDateData
                      ? `${FormatDateTime(startDateData)[0]} ${
                          FormatDateTime(startDateData)[1]
                        }, ${FormatDateTime(startDateData)[2]}`
                      : FormatDateTime("2022-03-02T05:45:00")}
                  </div>
                  <div className="font-bold">Da Nang - Ho Chi Minh</div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3 text-2xl items-center ">
                <img src={logo} className="bg-slate-700 h-10 w-10 rounded-lg" />
                <div>
                  <div className="font-bold">Bamboo Airways</div>
                  <div className="text-blue-700 underline">Details</div>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium ml-8 mt-5">
              <div class="flex items-center">
                <div class="w-1/3 text-right text-gray-600 pr-2 mr-4 font-bold">
                  {startDateData
                    ? FormatDateTime(startDateData)[3]
                    : FormatDateTime("2022-03-02T05:45:00")}
                </div>
                <div class="w-1/2 text-right text-gray-600 pr-4 flex">
                  {MinutesToHours(dataFetching[0]?.Duration)}
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
            <div className="mt-5 flex flex-col items-center justify-center w-full">
              <button class="w-full h-12 px-6 text-blue-700 font-bold transition-colors duration-150 bg-slate-200 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Change departure flight
              </button>
            </div>
            <div class=" h-0.5 bg-stone-100 mt-5"></div>

            <div className="mt-5 ">
              <div className=" items-center flex gap-3 text-2xl">
                <img
                  src={number}
                  className="bg-slate-700 h-10 w-10 rounded-full"
                />
                <div>
                  <div>
                    {startDateData
                      ? `${FormatDateTime(startDateData)[0]} ${
                          FormatDateTime(startDateData)[1]
                        }, ${FormatDateTime(startDateData)[2]}`
                      : FormatDateTime("2022-03-02T05:45:00")}
                  </div>
                  <div className="font-bold">Ho Chi Minh - Da Nang</div>
                </div>
              </div>
            </div>
          </Card>
          <div className=" bg-yellow-50 p-5">
            <div className=" items-center flex gap-3 text-2xl">
              <div>
                <div>Subtotal</div>
                <div className="font-bold text-orange-400">1,322,000 vnd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSchedule;
