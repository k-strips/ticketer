import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// local components import
import { EventThumbnail } from "../components";
import { showsData } from "../data/show";

export const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows(showsData);
  }, []);

  return (
    <>
      <div className="mb-4">
        <div className="bg-blue-200">home</div>
        <hgroup className="flex justify-between mx-5">
          <h2>Comedy</h2>
          <h5>view all</h5>
        </hgroup>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[20px] mx-5">
          {shows && shows?.map((t, i) => <EventThumbnail ticket={t} key={i} />)}
        </div>
      </div>
      {/* <div className="mb-4">
        <hgroup className="flex justify-between mx-5">
          <h2>sports</h2>
          <h5>view all</h5>
        </hgroup>
        <div className="grid grid-cols-4 gap-1 min-h-[40%] mx-5">
          {shows && shows?.map((t, i) => <EventThumbnail ticket={t} />)}
        </div>
      </div> */}
    </>
  );
};
