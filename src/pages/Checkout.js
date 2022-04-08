import React from "react";

// local components import
import { Total, Payment, Delivery } from "../components";

export const Checkout = ({ price }) => {
  return (
    <div className="grid grid-cols-3 gap-4 m-5">
      <div className="grid col-span-2 gap-3">
        <Delivery />
        <Payment />
      </div>
      <Total />
    </div>
  );
};
