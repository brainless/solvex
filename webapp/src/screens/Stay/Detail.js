import React, { Fragment } from "react";

import {
  maxSectionWidth,
  sectionPadding,
  sectionMargin,
} from "components/styleDefaults";
import HostBox from "components/Stay/HostBox";
import FeaturesBox from "components/Stay/FeaturesBox";
import Carousel from "components/Stay/Carousel";
import PriceBook from "components/Stay/PriceBook";

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
      <Carousel />

      <div
        className={`w-full ${sectionPadding} ${sectionMargin} bg-white overflow-auto`}
      >
        <div className={`${maxSectionWidth} mx-auto`}>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="col-span-5">
              <h1>{stay.name}</h1>

              <h2>Introduction</h2>
              <p className="py-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                mollis nunc sed id semper risus in hendrerit. Dictumst quisque
                sagittis purus sit.
                <br />
                <br />
                Sapien nec sagittis aliquam malesuada bibendum arcu vitae
                elementum curabitur. Porta nibh venenatis cras sed felis eget
                velit aliquet. Sit amet venenatis urna cursus eget nunc
                scelerisque viverra mauris. Ultricies mi quis hendrerit dolor
                magna. Aliquet bibendum enim facilisis gravida. Faucibus in
                ornare quam viverra orci sagittis eu.
                <br />
                <br />
                Phasellus egestas tellus rutrum tellus pellentesque eu
                tincidunt. Odio ut sem nulla pharetra. Ac tortor vitae purus
                faucibus ornare. In eu mi bibendum neque egestas.
              </p>

              <hr className="border-gray-300 my-8" />

              <h2>Facilities</h2>
              <FeaturesBox />

              <hr className="border-gray-300 my-8" />

              <h2>Location</h2>
              <p className="py-1">
                Sapien nec sagittis aliquam malesuada bibendum arcu vitae
                elementum curabitur. Porta nibh venenatis cras sed felis eget
                velit aliquet. Sit amet venenatis urna cursus eget nunc
                scelerisque viverra mauris. Ultricies mi quis hendrerit dolor
                magna. Aliquet bibendum enim facilisis gravida. Faucibus in
                ornare quam viverra orci sagittis eu.
              </p>

              <hr className="border-gray-300 my-8" />

              <h2>Reviews</h2>
            </div>

            <div className="col-span-2">
              <div className="px-4 py-3 bg-white border rounded">
                <HostBox />

                <hr className="my-8" />
                <PriceBook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
