import React from "react";

export const Input = ({ children, label, inputType = 0, ...props }) => {
  return inputType === 0 ? (
    <label>
      <input {...props} />
      {label}
      {children}
    </label>
  ) : (
    <div className="py-1">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};
