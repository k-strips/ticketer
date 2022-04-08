import React from "react";

export const TextSection = ({ header, children }) => {
  return (
    <div className="mb-2">
      <h5 className="font-bold mb-1 capitalize">{header}</h5>
      <div className="flex justify-between">{children}</div>
    </div>
  );
};
