import React, { useContext } from "react";

// local import
import { Input } from ".";
import { chart } from "../context/user-context";
import { ChartContext } from "../context/user-context";

export const Payment = () => {
  const { chart, setChart } = useContext(ChartContext);
  return (
    <div className="ring-1 ring-slate-200 rounded-sm p-4">
      <h2 className="capitalize">payment</h2>
      <h3 className="capitalize m-2">use credit / debit card</h3>
      <CreditCard />
      <hgroup className="mt-4">
        <h4 className="capitalize text-lg">or pay with</h4>
        <h6 className="text-sm">
          by using a digital wallet and continuing past this page, you have read
          and are accepting the <span className="capitalize">terms of use</span>
        </h6>
      </hgroup>
    </div>
  );
};

const CreditCard = () => {
  const { chart } = useContext(ChartContext);
  return (
    <div className="bg-blue-50 p-3">
      <div className="flex space-x-4">
        <div className="flex space-x-4">
          <Input type="radio" checked />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 141.732 141.732"
          >
            <g fill="#2566af">
              <path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z" />
            </g>
            <path
              d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"
              fill="#e6a540"
            />
            <path fill="none" d="M0 0h141.732v141.732H0z" />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Visa - {chart && chart?.cardNumber?.slice(-3)}</div>
          <div className="text-slate-400">
            {chart && chart?.userFullName} / {chart && chart?.cardExpiry}
          </div>
          <div>
            <a href="#">Edit</a> | <a href="#">Delete</a>
          </div>
          <div>
            <h3 className="capitalize font-thin text-normal">security code</h3>
            <div className="flex space-x-4">
              <div className="flex  justify-center items-center ring-1 rounded-xs p-2 w-1/2 text-center">
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
