import React, { useContext } from "react";

// local import
import { Input, CreditCard } from ".";
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
