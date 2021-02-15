import React, { useEffect } from "react";

import { useGlobal } from "services";
import {
  maxSectionWidth,
  sectionPadding,
  sectionMargin,
} from "components/styleDefaults";
import { useHistory } from "react-router-dom";

export default () => {
  const currentUser = useGlobal((state) => state.currentUser);
  const history = useHistory();

  /* useEffect(() => {
    if (!currentUser.isAuthenticated) {
      history.push("/login");
    }
  }); */

  if (!currentUser) {
    return (
      <div
        className={`${maxSectionWidth} ${sectionPadding} ${sectionMargin} mx-auto`}
      >
        Loading
      </div>
    );
  }

  return (
    <div
      className={`${maxSectionWidth} ${sectionPadding} ${sectionMargin} mx-auto`}
    >
      <h3>Account</h3>
      <div className="overflow-auto clearfix">
        <div className="max-w-screen-sm lg:ml-64">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-500">First name</label>
              <span>Sumit</span>
            </div>
            <div>
              <label className="text-gray-500">Last name</label>
              <span>Datta</span>
            </div>

            <div>
              <label className="text-gray-500">Email</label>
              <span>sumitdas@fjkds.com</span>
            </div>
            <div>
              <label className="text-gray-500">Account access</label>
              <span>Password, Login with Google</span>
            </div>

            <div>
              <label className="text-gray-500">Created</label>
              <span>November 1, 2019</span>
            </div>
          </div>

          <label className="text-gray-500 mt-4">Address</label>
          <span>103 Kamalapur East, Dum Dum, Kolkata 700028, WB, India</span>
        </div>
      </div>
      <h3>Bookings</h3>
      <h3>Stays I manage</h3>
      <h3>Messages</h3>
    </div>
  );
};
