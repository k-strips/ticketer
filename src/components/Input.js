import React from "react";

export const Input = ({ children, label, inputType = 0, error, ...props }) => {
  return inputType === 0 ? (
    <label className="capitalize">
      <input {...props} />
      {label}
      {children}
    </label>
  ) : (
    <div className="py-1">
      <label className="capitalize text-xs text-gray-400">{label}</label>
      <input {...props} />
      <small className="text-red-200">&#42; {error}</small>
    </div>
  );
};
