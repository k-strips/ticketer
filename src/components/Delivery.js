import React, { useContext } from "react";

import { ChartContext } from "../context/user-context";

export const Delivery = () => {
  const { chart } = useContext(ChartContext);
  return (
    <div className="ring-1 ring-slate-200 rounded-sm p-4">
      <h3 className="capitalize text-xl">delivery</h3>
      <h5 className="capitalize">mobile entry - {chart && chart?.type}</h5>
      <p className="text-slate-500">
        Tickets would be available by {new Date()?.toDateString()}
      </p>
    </div>
  );
};
