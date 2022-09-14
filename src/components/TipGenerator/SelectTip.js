import React from "react";
import { useState } from "react";
import { useDataLayerValue } from "./../../Context/DataContext";

const SelectTip = () => {
  const [showInput, setShowInput] = useState(false);
  const [customInput, setCustomInput] = useState("Custom");
  const [{ tipPercent }, dispatch] = useDataLayerValue();
  return (
    <div>
      <h4 className="font-bold text-zinc-500">Select Tip %</h4>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <button
          className={`${
            tipPercent === 5 ? "bg-[#32bdad]" : "bg-[#01464B]"
          } text-white font-medium p-3 text-xl rounded-md hover:bg-[#26b2bc]`}
          onClick={() => dispatch({ type: "setTipPercent", payload: 5 })}
        >
          5%
        </button>
        <button
          className={`${
            tipPercent === 10 ? "bg-[#32bdad]" : "bg-[#01464B]"
          } text-white font-medium p-3 text-xl rounded-md hover:bg-[#26b2bc]`}
          onClick={() => dispatch({ type: "setTipPercent", payload: 10 })}
        >
          10%
        </button>
        <button
          className={`${
            tipPercent === 15 ? "bg-[#32bdad]" : "bg-[#01464B]"
          } text-white font-medium p-3 text-xl rounded-md hover:bg-[#26b2bc]`}
          onClick={() => dispatch({ type: "setTipPercent", payload: 15 })}
        >
          15%
        </button>
        <button
          className={`${
            tipPercent === 25 ? "bg-[#32bdad]" : "bg-[#01464B]"
          } text-white font-medium p-3 text-xl rounded-md hover:bg-[#26b2bc]`}
          onClick={() => dispatch({ type: "setTipPercent", payload: 25 })}
        >
          25%
        </button>
        <button
          className={`${
            tipPercent === 50 ? "bg-[#32bdad]" : "bg-[#01464B]"
          } text-white font-medium p-3 text-xl rounded-md hover:bg-[#26b2bc]`}
          onClick={() => dispatch({ type: "setTipPercent", payload: 50 })}
        >
          50%
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowInput(false);
          }}
        >
          <div className="bg-[#c4ecef] text-[#01464B] font-medium text-xl rounded-md w-32 hover:bg-[#26b2bc]">
            {!showInput ? (
              <h4
                onClick={() => {
                  setShowInput(true);
                }}
                className="p-3  text-center"
              >
                {customInput}
              </h4>
            ) : (
              <input
                type="number"
                className="border-2 outline-[#26b2bc] rounded-md w-32 active p-3 text-right base"
                onChange={(e) => setCustomInput(e.target.value + "%")}
                autoFocus
                onBlur={(e) => {
                  dispatch({
                    type: "setTipPercent",
                    payload: Number(
                      customInput.substring(0, customInput.length - 1)
                    ),
                  });
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectTip;
