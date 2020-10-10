import React, { Fragment } from "react";

import { Section, Hx } from "components/LayoutHelpers";

const features = {
  living: ["sh_ktch", "wash_mc"],
  internet: ["wifi", "telev", "bband"],
};

export default () => {
  return (
    <Fragment>
      <Hx size="3">Facilities</Hx>
    </Fragment>
  );
};
