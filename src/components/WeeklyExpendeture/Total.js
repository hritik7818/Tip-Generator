import React from "react";

const Total = () => {
  return (
    <div className="py-6 flex justify-between items-end">
      <div className="">
        <h6 className="text-sm text-zinc-500">Total this month</h6>
        <h2 className="text-5xl font-bold">$238.23</h2>
      </div>
      <div className="flex flex-col items-end">
        <h6 className="font-bold">+2.4%</h6>
        <h6 className="text-sm text-zinc-500">from last month</h6>
      </div>
    </div>
  );
};

export default Total;
