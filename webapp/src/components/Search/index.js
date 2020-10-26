import React from "react";

export default () => {
  const outerClasses = "bg-white px-3 py-2 border rounded";
  const inputClasses = "block w-full text-sm leading-6 focus:outline-none";

  return (
    <div className="my-4 grid grid-cols-2 gap-2 md:flex">
      <div className={`${outerClasses} md:flex-grow`}>
        <input
          name="place"
          type="text"
          className={inputClasses}
          placeholder="Where to go?"
        />
      </div>
      <div className={`${outerClasses} md:w-32`}>
        <input
          name="start"
          type="text"
          className={inputClasses}
          placeholder="When?"
        />
      </div>
      <div className={`${outerClasses} md:w-32`}>
        <input
          name="nights"
          type="number"
          className={inputClasses}
          placeholder="Nights"
        />
      </div>
      <div className={`${outerClasses} md:w-32`}>
        <input
          name="adults"
          type="number"
          className={inputClasses}
          placeholder="Adults"
        />
      </div>
    </div>
  );
};
