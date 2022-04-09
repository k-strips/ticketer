import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

// local component import
import { Input, Button } from "../components";
import { showsData } from "../data/show";
import { ChartContext } from "../context/user-context";
import { currencyFormatter } from "../util/helper";

export const BuyTicket = () => {
  const { chart, setChart } = useContext(ChartContext);

  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const [show, setShow] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getShow = () => {
    return showsData.find((show) => show.id === params.ticketId);
  };

  useEffect(() => {
    setShow(getShow());
  }, [getShow]);

  const [userData, setUserData] = useState({
    userFullName: "",
    ticketId: show.id,
    ticketQuantity: 0,
    cardNumber: 0,
    ccv: 0,
    cardExpiry: new Date(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setChart({
      ...userData,
      show,
    });
    navigate("/checkout");
    console.log(chart);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };
  return (
    <div className="grid grid-cols-3 mx-4">
      <div className="p-4 shadow-sm ring-1 ring-slate-100">
        <h2 className="font-bold text-lg">Show Details</h2>
        <img src={show?.image} alt="show thumnail" className="w-full" />
        <div>
          <p>venue: {show?.venue}</p>
          <p>date: {show?.date?.toDateString()}</p>
        </div>

        <p>unit price: {currencyFormatter(show?.price)}</p>
      </div>
      <div className="col-span-2 p-4 m-auto">
        <h1 className="capitalize font-bold text-2xl mb-2 ">
          buy {show.title} ticket
        </h1>
        <form onSubmit={handleSubmit}>
          <h2>personal details</h2>
          <div className="shadow-md rounded-md mb-2 p-4">
            <label htmlFor="userFullName" className="capitalize">
              full name
            </label>
            <Input
              type="text"
              className="w-full rounded-sm"
              name="userFullName"
              onChange={handleChange}
              placeholder="firstName lastName otherName"
              value={userData.userFullName}
            />
          </div>
          <h2>ticket information</h2>
          <div className="shadow-md rounded-md mb-2 p-4">
            <label htmlFor="ticketQuantity" className="capitalize">
              ticket quantity
            </label>
            <Input
              type="number"
              className="w-full "
              name="ticketQuantity"
              placeholder="2"
              onChange={handleChange}
              value={userData.ticketQuantity}
            />
          </div>
          <h2>billing information</h2>
          <div className="shadow-md rounded-md mb-2 p-4">
            <Input
              type="Number"
              label="credit card number"
              inputType={1}
              className="w-full rounded-sm"
              name="cardNumber"
              onChange={handleChange}
              value={userData.cardNumber}
            />
            <div className="w-full flex space-x-2 mt-2">
              <Input
                type="number"
                label="ccv"
                inputType={1}
                className="w-full rounded-sm"
                name="ccv"
                onChange={handleChange}
                value={userData.ccv}
              />
              <Input
                label="expiry date"
                type="month"
                inputType={1}
                className="w-full rounded-sm"
                name="cardExpiry"
                onChange={handleChange}
                value={userData.cardExpiry}
              />
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 py-2 px-3">
            checkout
          </Button>
        </form>
      </div>
    </div>
  );
};
