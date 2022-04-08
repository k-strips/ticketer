import React, { useContext } from "react";

// local components import
import { Total, Payment, Delivery } from "../components";
import { ChartContext } from "../context/user-context";

export const Checkout = ({ price }) => {
  const { chart, setChart } = useContext(ChartContext);
  return (
    <div className="grid grid-cols-3 gap-4 m-8">
      <div className="grid col-span-2 gap-3">
        <Delivery />
        <Payment />
      </div>
      <Total />
    </div>
  );
};
