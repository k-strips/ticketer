import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../util/helper";

export const EventThumbnail = ({ ticket }) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer m-2 mx-auto"
      onClick={() => navigate(`${ticket?.id}/buy`)}
    >
      <img className="rounded-t-lg w-full" src={ticket?.image} alt="" />

      <div className="p-5">
        <hgroup className="flex justify-between capitalize mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <h5 className="text-gray-500">{ticket?.title}</h5>
          <h3 className="text-gray-500">{currencyFormatter(ticket?.price)}</h3>
        </hgroup>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="text-xs text-gray-400">Venue:</span>{" "}
          <span className="capitalize"> {ticket?.venue}</span>
        </p>
        <p>
          <span className="text-xs text-gray-400">Date:</span>{" "}
          <span className="capitalize"> {ticket?.date.toDateString()}</span>
        </p>
        <p>
          <span className="text-xs text-gray-400">Description:</span>{" "}
          <span className="capitalize"> {ticket?.description}</span>
        </p>
      </div>
    </div>
  );
};
