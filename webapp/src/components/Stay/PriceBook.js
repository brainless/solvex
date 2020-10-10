import React, { Fragment } from "react";

import { Button } from "components/LayoutHelpers";

export default () => {
  return (
    <Fragment>
      <div className="flex flex-cols">
        <span className="flex-1 text-gray-500 text-sm">Per night</span>
        <span className="">
          <span className="text-gray-600 pr-1">$</span>
          <span className="font-bold">9</span>
        </span>
      </div>

      <div className="flex flex-cols">
        <span className="flex-1 text-gray-500 text-sm">Service fees</span>
        <span className="">
          <span className="text-gray-600 pr-1">$</span>
          <span className="font-bold">9</span>
        </span>
      </div>

      <div className="flex flex-cols">
        <span className="flex-1 text-gray-500 text-sm">Weekly discount</span>
        <span className="">
          <span className="text-gray-600 pr-1">$</span>
          <span className="font-bold">9</span>
        </span>
      </div>

      <div className="my-3 flex flex-cols">
        <span className="flex-1 text-gray-500 text-sm">Book for</span>
        <span className="">
          <span className="font-bold pr-1">3</span>
          <span className="text-gray-600 pr-1">nights</span>
          <span className="text-sm font-medium underline text-blue-700 cursor-pointer">
            (edit)
          </span>
        </span>
      </div>

      <div className="flex flex-cols">
        <span className="flex-1 text-gray-500 text-sm">Taxes</span>
        <span className="">
          <span className="text-gray-600 pr-1">$</span>
          <span className="font-bold">3.7</span>
        </span>
      </div>

      <div className="flex flex-cols">
        <span className="flex-1 text-gray-500 text-sm">Total</span>
        <span className="">
          <span className="text-gray-600 pr-1">$</span>
          <span className="font-bold">39</span>
        </span>
      </div>

      <Button theme="success" size="lg" fullWidth margin="">
        Book now
      </Button>
    </Fragment>
  );
};
