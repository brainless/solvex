import React from "react";

export default ({
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
