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
  const [formErrors, setFormErrors] = useState({});

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

  const formValidation = (values) => {
    const errors = {};

    if (!values.userFullName.trim()) {
      errors.userFullName = "User Name field is required";
    }
    if (!values.ticketQuantity.trim()) {
      errors.ticketQuantity = "ticket quantity field is required";
    }

    if (!values.cardNumber.trim()) {
      errors.cardNumber = "credit card number is required";
    }

    if (!values.ccv.trim()) {
      errors.ccv = "ccv is required";
    }

    if (!values.cardExpiry.trim()) {
      errors.cardExpiry = "expiry date is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(formValidation(userData));
    setChart({
      ...userData,
      show,
    });
    navigate("/checkout");
    console.log(chart);
    console.log(formErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };
  return (
    <div className="grid grid-cols-3 mx-4 gap-1 mt-2">
      <div className="p-4 col-span-3 lg:col-span-1">
        <img
          src={show?.image}
          alt="show thumnail"
          className="w-10/12 mx-auto"
        />
        <div className="bg-white w-10/12 mx-auto rounded-b-xl">
          <div className="w-max p-4">
            <p>
              <span className="text-xs text-gray-400">Venue:</span>{" "}
              <span className="capitalize">{show?.venue}</span>
            </p>
            <p>
              <span className="text-xs text-gray-400">Date:</span>{" "}
              {show?.date?.toDateString()}
            </p>
            <p>
              <span className="text-xs text-gray-400">Unit price:</span>{" "}
              {currencyFormatter(show?.price)}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 bg-white boarder rounded-xl p-5 shadow-lg mx-auto">
        <h1 className="capitalize font-bold text-2xl mb-2 mx-auto ">
          buy {show.title} ticket
        </h1>
        <form onSubmit={handleSubmit} className="mx-auto">
          <h2 className="uppercase text-gray-600 text-xs">personal details</h2>
          <div className="mb-2 py-4 mx-auto">
            <label
              htmlFor="userFullName"
              className="capitalize text-xs text-gray-400"
            >
              full name
            </label>
            <Input
              type="text"
              className="w-full border rounded border-gray-400"
              name="userFullName"
              inputType={1}
              onChange={handleChange}
              placeholder="Firstname Surname Othernames"
              value={userData.userFullName}
              error={formErrors.userFullName}
            />
          </div>
          <h2 className="uppercase text-gray-600 text-xs">
            ticket information
          </h2>
          <Input
            type="number"
            label="ticket quantity"
            inputType={1}
            className="w-full border rounded border-gray-400"
            name="ticketQuantity"
            placeholder="2"
            onChange={handleChange}
            value={userData.ticketQuantity}
          />
          <h2 className="uppercase text-gray-600 text-xs">
            billing information
          </h2>
          <div className=" mb-2 py-4">
            <Input
              type="Number"
              label="credit card number"
              inputType={1}
              className="w-full border rounded border-gray-400 appearance-none"
              name="cardNumber"
              onChange={handleChange}
              value={userData.cardNumber}
            />
            <div className="w-full flex space-x-2 mt-2">
              <Input
                type="number"
                label="ccv"
                inputType={1}
                className="w-full border rounded border-gray-400 appearance-none"
                name="ccv"
                onChange={handleChange}
                value={userData.ccv}
              />
              <Input
                label="expiry date"
                type="month"
                inputType={1}
                className="w-full border rounded border-gray-400 appearance-none"
                name="cardExpiry"
                onChange={handleChange}
                value={userData.cardExpiry}
              />
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 py-2 px-3 uppercase text-gray-50 mx-auto">
            checkout
          </Button>
        </form>
      </div>
    </div>
  );
};
