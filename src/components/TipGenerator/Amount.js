import React from "react";

const Amount = ({ text, amount }) => {
  return (
    <div className="flex justify-between items center py-2">
      <div className="">
        <h4 className="text-white font-bold">{text}</h4>
        <h6 className="text-zinc-400 text-xs font-semibold">/ person</h6>
      </div>
      <h2 className="text-4xl text-[#2DAC9D] font-bold">${amount}</h2>
    </div>
  );
};

export default Amount;
