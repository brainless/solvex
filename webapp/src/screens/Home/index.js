import React, { Fragment } from "react";

import { Hx } from "components/LayoutHelpers";
import {
  maxSectionWidth,
  sectionPadding,
  sectionMargin,
} from "components/styleDefaults";
import SmallBox from "components/Stay/SmallBox";
import SearchBox from "components/Search";

const sampleStays = [
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["sh_ktch", "wash_mc", "wifi", "telev", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["sh_ktch", "wash_mc", "wifi", "telev", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["sh_ktch", "wash_mc", "wifi", "telev", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["sh_ktch", "wash_mc", "wifi", "telev", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["sh_ktch", "wash_mc", "wifi", "telev", "bband"],
    ratePerNight: 39,
  },
];

const LatestStays = () => {
  return (
    <Fragment>
      <Hx size="2">Our latest stays</Hx>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
        {sampleStays.map((stay, i) => (
          <SmallBox key={`hm-lt-st-${i}`} stay={stay} />
        ))}
      </div>
    </Fragment>
  );
};

const WeekDiscount = () => {
  return (
    <Fragment>
      <Hx size="2">Discount on week stay</Hx>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
        {sampleStays.slice(0, 3).map((stay, i) => (
          <SmallBox key={`hm-lt-st-${i}`} stay={stay} />
        ))}
      </div>
    </Fragment>
  );
};

export default () => {
  return (
    <Fragment>
      <div className="flex flex-col" style={{ height: "calc(100vh / 2)" }}>
        <div className="flex-grow" />
        <div className="max-w-screen-xl mx-auto">
          <Hx size="1" isCentered>
            Book an amazing getaway
          </Hx>
          <SearchBox />
        </div>
        <div className="flex-grow" />
      </div>

      <div
        className={`${maxSectionWidth} mx-auto ${sectionPadding} ${sectionMargin}`}
      >
        <LatestStays />
      </div>

      <div
        className={`${maxSectionWidth} mx-auto ${sectionPadding} ${sectionMargin}`}
      >
        <WeekDiscount />
      </div>
    </Fragment>
  );
};
