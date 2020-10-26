import React from "react";
import { Link } from "react-router-dom";

import { Hx } from "components/LayoutHelpers";

const StayType = ({ stayType }) => {
  if (stayType === "whole_house") {
    return (
      <span className="text-sm font-medium text-gray-600 px-2 py-1 bg-gray-200 rounded">
        Entire apartment
      </span>
    );
  }
};

const Features = ({ features }) => {
  const featuresArray = [];
  for (const feature of features) {
    let text = "";

    if (feature === "sh_ktch") {
      text = "Shared kitchen";
    } else if (feature === "wash_mc") {
      text = "Washing machine";
    } else if (feature === "wifi") {
      text = "WiFi";
    } else if (feature === "telev") {
      text = "Television";
    } else if (feature === "bband") {
      text = "Broadband";
    }
    featuresArray.push(
      <span
        key={`ft-${feature}`}
        className="inline-block text-xs leading-loose font-medium text-gray-600 px-2 bg-gray-200 rounded"
      >
        {text}
      </span>
    );
  }

  return featuresArray;
};

export default ({ stay }) => {
  return (
    <div>
      <div className="rounded border bg-white">
        <div className="relative bg-blue-200 w-full h-64">
          <div className="absolute w-full bottom-0 pt-16 px-2 bg-gradient-to-b from-transparent to-gray-500">
            <div className="flex flex-row mt-2">
              <span>
                <StayType stayType={stay.stayType} />
              </span>

              <span className="flex-1 text-right py-1 font-semibold text-white">
                <span className="text-gray-200 font-normal">US$</span>{" "}
                {stay.ratePerNight}
              </span>
            </div>
          </div>
        </div>

        <div className="p-2">
          <Hx size="5">
            <Link to={`/stay/${stay.id}`}>{stay.name}</Link>
          </Hx>

          <div className="mt-2 space-x-1 space-y-1">
            <Features features={stay.features} />
          </div>
        </div>
      </div>
    </div>
  );
};
