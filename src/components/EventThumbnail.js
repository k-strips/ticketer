import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../util/helper";

export const EventThumbnail = ({ ticket }) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer"
      onClick={() => navigate(`${ticket?.id}/buy`)}
    >
      <img className="rounded-t-lg" src={ticket?.image} alt="" />

      <div className="p-5">
        <hgroup className="flex justify-between capitalize mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <h5>{ticket?.title}</h5>
          <h3>{currencyFormatter(ticket?.price)}</h3>
        </hgroup>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          venue: {ticket?.venue}
        </p>
        <p>date: {ticket?.date.toDateString()}</p>
        <p>description: {ticket?.description}</p>
      </div>
    </div>
  );
};
