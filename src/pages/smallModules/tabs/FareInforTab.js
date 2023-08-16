import React from "react";
import logo from "../../../assets/logo/logoBamboo.svg";

function FareInforTab(data) {
  const dataFareInforTab = data.data;

  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div class="space-y-5">
          <div className="font-bold text-xl">CONDITIONS</div>
          <div className="flex gap-3 text-2xl items-center ">
            <img src={logo} className="bg-slate-700 h-10 w-10 rounded-lg" />
            <div>
              <div className="font-bold">Bamboo Airways</div>
              <div className="text-sm">
                {dataFareInforTab.FlightNumber} . {dataFareInforTab.GroupClass}
              </div>
            </div>
          </div>
          <div className="text-sm font-medium ml-8">
            <div class="flex items-center">
              <div class=" text-right text-gray-600 pr-2 mr-10 font-bold ">
                {dataFareInforTab.RelatedFlights[0]?.StartPoint}
                <div className="text-blue-700 font-thin">
                  {dataFareInforTab.GroupClass}
                </div>
              </div>
              <div class="w-1/3 text-gray-600 flex"></div>
              <div class="text-left text-gray-600 pl-2 font-bold">
                {dataFareInforTab.RelatedFlights[0]?.EndPoint}
              </div>
            </div>
            <div class="flex justify-start pl-20">
              <div class="w-2/6 h-1 bg-blue-700"></div>
            </div>
            <div className="mt-5">Non - Refundable</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl">PRICE DETAILS</div>
          <div>
            <div className="grid grid-cols-2">
              <div className="space-y-3">
                <div>Adult Basic fare (x1)</div>
                <div>Tax</div>
                <div>Regular Total Price</div>
                <div className="text-orange-400">Save</div>
              </div>
              <div className="space-y-3">
                <div>{dataFareInforTab.PriceAdult} vnd</div>
                <div>{dataFareInforTab.TaxAdult} vnd</div>
                <div>{dataFareInforTab.PriceAdult} vnd</div>
                <div>-4.000 vnd</div>
              </div>
            </div>
            <div class=" h-0.5 w-2/3 bg-stone-200 mt-2"></div>
            <div className="flex">
              <div>You pay</div>
              {": "}
              <div className="text-red-600 font-bold">
                {dataFareInforTab.PriceAdult + dataFareInforTab.TaxAdult} vnd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FareInforTab;
