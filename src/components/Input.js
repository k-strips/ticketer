import React from "react";

export const Input = ({ children, label, inputType = 0, ...props }) => {
  return inputType === 0 ? (
    <label className="capitalize">
      <input {...props} />
      {label}
      {children}
    </label>
  ) : (
    <div className="py-1">
      <label className="capitalize">{label}</label>
      <input {...props} />
    </div>
  );
};
