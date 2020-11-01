import React from "react";
import { Link } from "react-router-dom";

import { maxSectionWidth, sectionPadding } from "components/styleDefaults";

export default () => {
  return (
    <nav
      className="fixed top-0 w-full bg-white border-b border-gray-300 z-10"
      role="navigation"
      aria-label="main navigation"
    >
      <div
        className={`${maxSectionWidth} mx-auto ${sectionPadding} flex items-center`}
      >
        <div>
          <Link className="text-lg font-semibold" to="/">
            Home
          </Link>
        </div>

        <div className="block lg:inline-block lg:mt-0 p-4">&nbsp;</div>

        <div className="block lg:inline-block items-center flex-grow">
          <Link
            className={`font-medium text-lg text-white bg-green-600 px-4 py-1 rounded`}
            to="/stay"
          >
            Find a stay
          </Link>
        </div>

        <div className="block lg:inline-block items-center">
          <Link className={`text-lg`} to="/stay">
            My account
          </Link>
        </div>
      </div>
    </nav>
  );
};
