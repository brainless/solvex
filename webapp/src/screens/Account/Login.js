import React, { useState } from "react";

import { sectionPadding, sectionMargin } from "components/styleDefaults";
import { Hx } from "components/LayoutHelpers";

export default () => {
  // const [state, setState] = useState({
  //   formType: "login", // Or "register",
  //   email: "",
  //   password: "",
  //   confirm_password: "", // Only for register
  // });

  console.log("I am here");

  return (
    <div className={`w-full ${sectionPadding} ${sectionMargin} overflow-auto`}>
      <div className={`max-w-screen-sm mx-auto bg-white border rounded-lg`}>
        <div className="w-full p-4 border-gray-400 border-b">
          <Hx size="2">Login to SolveX BnB</Hx>
        </div>

        <div className="w-full p-4"></div>
      </div>
    </div>
  );
};
