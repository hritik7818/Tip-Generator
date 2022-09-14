import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const Bars = ({ spends, total }) => {
  let maximum = spends.reduce((max, spend) => Math.max(max, spend.amount), 0);
  return (
    <div>
      <h3 className="py-7 text-3xl font-bold ">Spending - Last 7 days</h3>

      <div className="flex justify-evenly ">
        {spends.map((e, i) => {
          const flexValue = `flex-[${(e.amount / maximum).toFixed(1)}] `;
          console.log(flexValue);
          return (
            <div
              key={i}
              className="flex h-40 flex-col items-center justify-end cursor-pointer"
            >
              <Tooltip title={"$" + e.amount} placement="top">
                <div
                  style={{ flex: (e.amount / maximum).toFixed(1) }}
                  className={`w-10 ${
                    e.amount === maximum ? "bg-teal-700" : "bg-amber-600"
                  } rounded-lg`}
                ></div>
              </Tooltip>
              <h6>{e.day}</h6>
            </div>
          );
        })}
        {/* <div className="w-full h-2 flex-[.1] bg-red-600"></div> */}
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default Bars;
