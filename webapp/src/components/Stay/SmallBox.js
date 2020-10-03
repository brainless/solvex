import React from "react";

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
      <div className="rounded border bg-white px-3 py-2">
        <Hx size="5">{stay.name}</Hx>

        <div className="flex flex-row mt-2">
          <span>
            <StayType stayType={stay.stayType} />
          </span>
          <span className="flex-1 text-right py-1 font-medium text-gray-700">
            <span className="text-gray-500">US$</span> {stay.ratePerNight}
          </span>
        </div>

        <div className="bg-blue-200 w-full h-64"></div>

        <div className="mt-2 space-x-1 space-y-1">
          <Features features={stay.features} />
        </div>
      </div>
    </div>
  );
};
