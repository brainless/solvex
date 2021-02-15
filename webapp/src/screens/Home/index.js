import React, { Fragment } from "react";

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
    features: ["ktchn", "wash_mc", "wifi", "ledtv", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktchn", "wash_mc", "wifi", "ledtv", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktchn", "wash_mc", "wifi", "ledtv", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktchn", "wash_mc", "wifi", "ledtv", "bband"],
    ratePerNight: 39,
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktchn", "wash_mc", "wifi", "ledtv", "bband"],
    ratePerNight: 39,
  },
];

const LatestStays = () => {
  return (
    <Fragment>
      <h2>Our latest stays</h2>

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
      <h2>Discount on week stay</h2>

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
          <h1>Book an amazing getaway</h1>
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
