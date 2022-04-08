import React, { useState, useEffect } from "react";

// local components import
import { EventThumbnail } from "../components";

const showsData = [
  {
    id: "1",
    title: "rain deer",
    description: "asdfj esdf ",
    category: "comedy",
    price: "300",
    venue: "asdfl",
    date: "asdf",
  },
  {
    id: "2",
    title: "",
    description: "",
    category: "",
    price: "",
    venue: "",
    date: "",
  },
  {
    id: "3",
    title: "",
    description: "",
    category: "",
    price: "",
    venue: "",
    date: "",
  },
  {
    id: "4",
    title: "",
    description: "",
    category: "",
    price: "",
    venue: "",
    date: "",
  },
  {
    id: "5",
    title: "",
    description: "",
    category: "",
    price: "",
    venue: "",
    date: "",
  },
  {
    id: "6",
    title: "",
    description: "",
    category: "",
    price: "",
    venue: "",
    date: "",
  },
];

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
        <div className="grid grid-cols-4 gap-1 min-h-[40%] mx-5">
          {shows && shows?.map((t, i) => <EventThumbnail ticket={t} />)}
        </div>
      </div>
      <div className="mb-4">
        <hgroup className="flex justify-between mx-5">
          <h2>sports</h2>
          <h5>view all</h5>
        </hgroup>
        <div className="grid grid-cols-4 gap-1 min-h-[40%] mx-5">
          {shows && shows?.map((t, i) => <EventThumbnail ticket={t} />)}
        </div>
      </div>
    </>
  );
};
