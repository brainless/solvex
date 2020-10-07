import React, { Fragment } from "react";

import { Section, Hx } from "components/LayoutHelpers";

const host = {
  first_name: "Sarah",
  last_name: "Malor",
  img_src:
    "https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg",
  introduction:
    "Hi, I am Sarah and I will be your host if you choose to come" +
    " to our lovely family home. We live in a multi- storey apartment" +
    " complex. This listed apartment has its separate access." +
    " Hope to see you soon!",
};

export default () => {
  return (
    <Fragment>
      <Section>
        <Hx size="3">
          {host.first_name} {host.last_name}
        </Hx>
        <img
          class="my-4 h-16 w-16 rounded-full mx-auto"
          src={host.img_src}
        ></img>

        <p className="text-sm">{host.introduction}</p>
      </Section>
    </Fragment>
  );
};
