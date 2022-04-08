import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// local component import
import { Checkout, Home } from "./pages";
const shows = [
  {
    title: "qwer",
    details: "asd",
    image: "",
    venue: "cxv",
    date: "qwer",
  },
  {
    title: "qwer",
    details: "qwer",
    venue: "qwer",
    date: "qwer",
  },
];

const checkoutData = {
  price: "2000",
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

const ShowsListScreen = ({ title, details }) => {
  return (
    <div>
      <ul>
        {shows?.map((s, i) => (
          <li key={i}>
            {s.title} {s.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
