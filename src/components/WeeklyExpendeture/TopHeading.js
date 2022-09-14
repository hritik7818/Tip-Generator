import React from "react";

const TopHeading = () => {
  return (
    <div className="flex justify-between items-center rounded-xl py-7 px-8 bg-amber-600 text-white">
      <div className="">
        <h3 className="text-xl">My balance</h3>
        <h4 className="text-3xl font-bold">$897.78</h4>
      </div>
      <svg
        width="72"
        height="48"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  );
};

export default TopHeading;
