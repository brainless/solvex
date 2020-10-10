import React, { Fragment } from "react";

import { Section, Hx } from "components/LayoutHelpers";
import HostBox from "./HostBox";
import FeaturesBox from "./FeaturesBox";
import Carousel from "./Carousel";
import PriceBook from "./PriceBook";

const stay = {
  id: 82627,
  name: "Happy home on the hill",
  roomCount: 3,
  stayType: "whole_house",
  totalHeadCount: 5,
  features: ["sh_ktch", "wash_mc", "wifi", "telev", "bband"],
  ratePerNight: 39,
};

export default () => {
  return (
    <Fragment>
      <Section>
        <Hx size="1">{stay.name}</Hx>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-3">
            <Carousel />
            <FeaturesBox />
          </div>

          <div className="col-span-1 p-2 bg-white border rounded">
            <HostBox />
            <div className="mt-12" />
            <PriceBook />
          </div>
        </div>
      </Section>
    </Fragment>
  );
};
