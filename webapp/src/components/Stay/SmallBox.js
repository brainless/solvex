import React from "react";

import { Hx } from "components/LayoutHelpers";

export default ({ stay }) => {
  return (
    <div className="">
      <div className="rounded border h-64 bg-white px-3 py-2">
        <Hx size="5">{stay.name}</Hx>
      </div>
    </div>
  );
};
