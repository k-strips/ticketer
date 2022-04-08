import React from "react";

export const Delivery = ({ showType }) => {
  return (
    <div className="ring-1 ring-slate-600 rounded-sm p-4">
      <h3 className="capitalize text-xl">delivery</h3>
      <h5 className="capitalize">mobile entry - {showType}</h5>
      <p className="text-slate-500">
        lorem ipsum dolor sit amet, consectetur adip non pro{" "}
      </p>
    </div>
  );
};
