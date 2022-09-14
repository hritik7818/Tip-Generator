import React, { useState, useEffect } from "react";
import axios from "axios";

const Advice = () => {
  const [count, setCount] = useState(0);
  const [adviceId, setAdviceId] = useState("");
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
        setAdviceId(response.data.slip.id);
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);
  return (
    <div className="bg-slate-800 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-slate-700 rounded-xl p-4 sm:w-2/5 w-full mx-8 flex flex-col items-center">
        <h6 className="text-green-500 font-semibold">ADVICE # {adviceId}</h6>
        <p align="center" className="text-2xl font-bold text-white px-7 mt-5">
          "{advice}"
        </p>
        <svg
          className="mt-5"
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <div
          onClick={() => setCount(count + 1)}
          className="relative top-16 h-12 w-12 rounded-3xl bg-green-500"
        ></div>
        <svg
          onClick={() => setCount(count + 1)}
          className="relative top-[28px]"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </div>
  );
};

export default Advice;
