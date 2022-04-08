import React from "react";

export const EventThumbnail = ({ title, image, venue, date }) => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={image} alt="" />

        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            venue: {venue}
          </p>
          <p>date: {date}</p>
        </div>
      </a>
    </div>
  );
};
