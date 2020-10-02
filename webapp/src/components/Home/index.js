import React from "react";

import { Section, Hx } from "components/LayoutHelpers";
import SmallBox from "components/Stay/SmallBox";

const sampleStays = [
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktch", "wamc", "wifi", "fibr", "inet"],
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktch", "wamc", "wifi", "fibr", "inet"],
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktch", "wamc", "wifi", "fibr", "inet"],
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktch", "wamc", "wifi", "fibr", "inet"],
  },
  {
    id: 82627,
    name: "Happy home on the hill",
    roomCount: 3,
    stayType: "whole_house",
    totalHeadCount: 5,
    features: ["ktch", "wamc", "wifi", "fibr", "inet"],
  },
];

const LatestStays = () => {
  return (
    <Section>
      <Hx size="1">Our latest stays</Hx>

      <div className="grid grid-cols-3 gap-3">
        {sampleStays.map((stay, i) => (
          <SmallBox key={`hm-lt-st-${i}`} stay={stay} />
        ))}
      </div>
    </Section>
  );
};

export default () => {
  return <LatestStays />;
};
