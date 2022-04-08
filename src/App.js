import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { charts, ChartContext } from "./context/user-context";

// local component import
import { Checkout, Home, BuyTicket } from "./pages";

const App = () => {
  const [chart, setChart] = useState([
    {
      id: "",
      userFullName: "",
      ticketId: "",
      Quantity: "",
    },
  ]);
  return (
    <ChartContext.Provider value={{ chart, setChart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path=":ticketId/buy" element={<BuyTicket />} />
        </Routes>
      </BrowserRouter>
    </ChartContext.Provider>
  );
};

// const ShowsListScreen = ({ title, details }) => {
//   return (
//     <div>
//       <ul>
//         {shows?.map((s, i) => (
//           <li key={i}>
//             {s.title} {s.details}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default App;
