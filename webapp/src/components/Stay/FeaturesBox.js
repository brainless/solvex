import React, { Fragment } from "react";

import { featureLabelsEN } from "uiLabels/FeatureLabels";

const features = ["ktchn", "wash_mc", "wifi", "ledtv", "bband"];

const FeatureItem = ({ slug }) => (
  <div className="text-sm py-1">
    <i className="fas fa-bullseye pr-2" />
    {featureLabelsEN[slug]}
  </div>
);

export default () => {
  return (
    <Fragment>
      {features.map((x) => (
        <FeatureItem key={`ft-${x}`} slug={x} />
      ))}
    </Fragment>
  );
};
