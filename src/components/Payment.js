import React from "react";

// local import
import { Input } from ".";

export const Payment = ({ user }) => {
  return (
    <div className="ring-1 ring-slate-200 rounded-sm p-4">
      <h2 className="capitalize">payment</h2>
      <h3 className="capitalize m-2">use credit / debit card</h3>
      <CreditCard />
      <hgroup className="mt-4">
        <h4 className="capitalize text-lg">or pay with</h4>
        <h6 class="text-sm">
          by using a digital wallet and continuing past this page, you have read
          and are accepting the <span className="capitalize">terms of use</span>
        </h6>
      </hgroup>
    </div>
  );
};

const CreditCard = () => {
  return (
    <div className="bg-blue-50 p-3">
      <div className="flex space-x-4">
        <Input type="radio" label="visa" checked />
        <div className="flex flex-col">
          <div>Visa - 999</div>
          <div className="text-slate-400">User Name | exp. 01/01</div>
          <div>
            <a href="#">Edit</a> | <a href="#">Delete</a>
          </div>
          <div>
            <h3 className="capitalize font-thin text-normal">security code</h3>
            <div className="flex space-x-4">
              <div className="ring-1 rounded-xs p-2 w-1/2 text-center">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
