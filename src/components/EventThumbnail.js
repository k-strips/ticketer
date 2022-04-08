import React from "react";
import { useNavigate } from "react-router-dom";

export const EventThumbnail = ({ ticket }) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer"
      onClick={() => navigate(`${ticket?.id}/buy`)}
    >
      <img className="rounded-t-lg" src={ticket?.image} alt="" />

      <div className="p-5">
        <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {ticket?.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          venue: {ticket?.venue}
        </p>
        <p>date: {ticket?.date.toDateString()}</p>
      </div>
    </div>
  );
};
