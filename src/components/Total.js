import React from "react";
import { Splitter, Button } from ".";

export const Total = ({ total }) => {
  return (
    <div className="flex flex-col ring-1 ring-slate-600 rounded-sm p-4">
      <Splitter>
        <h3>Total</h3>
        <h3>$545.11</h3>
      </Splitter>
      <h5>tickets</h5>
      <Splitter>
        <h5>Resale Tickets:</h5>
      </Splitter>
      <h5 className="capitalize">Notes from Seller</h5>
      <p className="">lorem ipsum dolor sit amet, consectetur adip</p>
      <h5>Fees</h5>
      <Splitter></Splitter>
      <Button className="px-2 py-3 bg-green-700 text-white">
        place order here
      </Button>
      <small>
        Exceptions may only apply, see our{" "}
        <span className="capitalize">terms of use</span>
      </small>
    </div>
  );
};
