import React from "react";
import { Button, TextSection } from ".";

export const Total = ({ total }) => {
  return (
    <div className="flex flex-col ring-1 ring-slate-200 rounded-sm p-4">
      <TextSection>
        <h5 className="capitalize font-bold">total</h5>
        <h5 className="font-bold">$523.19</h5>
      </TextSection>
      <TextSection header="tickets">
        <h5 className="capitalize text-sm">
          resale tickets: <span>$22.9 * 2</span>
        </h5>
        <h5>$234.19</h5>
      </TextSection>
      <TextSection header="notes from seller">
        <p className="text-slate-400 text-sm">
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet
        </p>
      </TextSection>
      <TextSection header="fees">
        <h5 className="capitalize text-sm">
          resale tickets: <span>$22.9 * 2</span>
        </h5>
        <h5>$234.19</h5>
      </TextSection>
      <TextSection header="delivery">
        <h5 className="capitalize text-sm">mobile entry:</h5>
        <h5>free</h5>
      </TextSection>
      <a href="#" className="text-blue-600 capitalize mb-4 mt-2">
        cancel order
      </a>

      <Button className="px-2 py-3 mb-2 mt-2 bg-green-700 text-white">
        place order here
      </Button>
      <small>
        <span>&#42;</span>
        Exceptions may only apply, see our{" "}
        <span className="capitalize">terms of use</span>
      </small>
    </div>
  );
};
