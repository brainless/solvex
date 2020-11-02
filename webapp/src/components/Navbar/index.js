import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { maxSectionWidth, sectionPadding } from "components/styleDefaults";

export default () => {
  const stayMatch = useRouteMatch({
    path: "/stay/:stayId/:slug",
    strict: true,
  });

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
          <input
            type="text"
            className="px-3 leading-7 rounded border border-gray-500 focus:outline-none focus:bg-yellow-100"
            placeholder="Where are you going?"
          />
        </div>

        <div className="block lg:inline-block items-center">
          {stayMatch && stayMatch.url && (
            <Link
              className="inline-block font-semibold bg-green-400 text-gray-700 px-3 leading-7 rounded mr-4"
              to="/stay"
            >
              Book this stay
            </Link>
          )}
          <Link
            className="inline-block text-sm bg-gray-300 px-3 leading-7 rounded"
            to="/account"
          >
            <i className="far fa-user pr-1" />
            My account
          </Link>
        </div>
      </div>
    </nav>
  );
};
