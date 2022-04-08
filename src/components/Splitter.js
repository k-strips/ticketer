import React from "react";

export const Splitter = ({ children, extra }) => {
  return <div className={`flex justify-between ${extra}`}>{children}</div>;
};
