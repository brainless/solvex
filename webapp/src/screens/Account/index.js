import React, { useEffect } from "react";

import { useGlobal } from "services";
import { sectionPadding, sectionMargin } from "components/styleDefaults";
import { useHistory } from "react-router-dom";

export default () => {
  const currentUser = useGlobal((state) => state.currentUser);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser.isAuthenticated) {
      history.push("/login");
    }
  });

  if (!currentUser) {
    return (
      <div
        className={`max-w-screen-sm ${sectionPadding} ${sectionMargin} border`}
      >
        Loading
      </div>
    );
  }

  return (
    <div
      className={`max-w-screen-sm ${sectionPadding} ${sectionMargin} border`}
    >
      Loading
    </div>
  );
};
