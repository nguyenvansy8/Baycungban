import React from "react";
import logo from "../../assets/logo/logoBamboo.svg";
import baggage from "../../assets/logo/Baggage.svg";
import meal from "../../assets/logo/meal.svg";
import TimeLine from "./TimeLine";

function FlightDetail(data) {
  const dataBinding = data.dataToBind;
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 space-x-16">
      <div className="text-sm font-medium flex items-center gap-2">
        <img src={logo} />
        <div className="text-2xl">Bamboo Airways</div>
      </div>
      <TimeLine data={dataBinding} />
      <div className="text-2xl font-medium">
        <div>
          <div className="flex gap-2">
            <img src={baggage} />
            <div className="flex">
              Baggage:
              <p className="text-blue-700 font-bold"> {dataBinding.Carryon}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={meal} />
            In-flight:{" "}
            <p className="text-blue-700 font-bold"> {dataBinding.FareType}</p>
          </div>
        </div>
      </div>
      <div className="text-2xl font-medium">
        <div>
          <div className="flex">{dataBinding.ChargeAdult} vnd</div>

          <div className="text-orange-400">{dataBinding.PriceAdult} vnd</div>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <button class="absolute text-2xl  p-2 bg-orange-600 text-white rounded-xl">
          <div className="flex gap-10">Choose</div>
        </button>
      </div>
    </div>
  );
}

export default FlightDetail;
