import React from "react";

export const Section = ({
  size = "md",
  maxWidth = "max-w-screen-lg",
  children,
}) => {
  // The size controls the padding
  const sizeClass = {
    xs: "p-4",
    sm: "p-5",
    md: "p-6",
    "": "p-6",
    lg: "p-8",
    xl: "p-10",
    "2xl": "p-12",
  };

  return (
    <section>
      <div className={`${maxWidth} ${sizeClass[size]} m-auto`}>{children}</div>
    </section>
  );
};

export const Hx = ({ size = "3", children }) => {
  const sizeClass = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-md",
  };

  return React.createElement(
    `h${size}`,
    {
      className: `font-medium text-gray-700 ${sizeClass[size]}`,
    },
    children
  );
};

export const Button = ({
  label,
  fullWidth = false,
  size = "md",
  theme = "primary",
  active = false,
  disabled = false,
  padding = "px-3",
  margin = "mx-1",
  rounded = "rounded",
  attributes,
  children,
}) => {
  let classes = `inline-block text-sm font-semibold leading-loose shadow hover:shadow-sm focus:outline-none ${rounded} ${padding} ${margin}`;
  if (fullWidth) {
    classes = classes + " w-full";
  }
  if (theme === "primary") {
    classes =
      classes + " bg-blue-400 text-gray-800 hover:bg-blue-700 hover:text-white";
  } else if (theme === "success") {
    classes =
      classes +
      " bg-green-400 text-gray-700 hover:bg-green-700 hover:text-white";
  } else if (theme === "secondary") {
    classes =
      classes + " bg-gray-300 text-gray-700 hover:bg-gray-700 hover:text-white";
  } else if (theme === "info") {
    classes =
      classes +
      (active ? " bg-yellow-400" : " bg-yellow-200") +
      " text-gray-700 hover:bg-yellow-700 hover:text-white";
  } else if (theme === "link") {
    classes = "inline-block font-semibold underline";
  }

  if (["sm", "md", "lg"].includes(size)) {
    classes = classes + ` text-${size}`;
  } else {
    classes = classes + " text-md";
  }

  return (
    <button className={classes} {...attributes} disabled={disabled}>
      {label}
      {children}
    </button>
  );
};
