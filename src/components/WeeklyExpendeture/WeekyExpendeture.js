import React from "react";
import Bars from "./Bars";
import BottumSection from "./BottumSection";
import TopHeading from "./TopHeading";

const WeekyExpendeture = () => {
  const spends = [
    { day: "mon", amount: 24.42 },
    { day: "tue", amount: 67.42 },
    { day: "wed", amount: 78.23 },
    { day: "thr", amount: 12.21 },
    { day: "fri", amount: 24.42 },
    { day: "sat", amount: 52.24 },
    { day: "sun", amount: 64.42 },
  ];
  const total = spends.reduce((total, spend) => total + spend.amount, 0);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-16 bg-orange-100 md:px-96">
      <div className="w-full">
        <TopHeading total={total} />
        <BottumSection spends={spends} total={total} />
      </div>
    </div>
  );
};

export default WeekyExpendeture;
