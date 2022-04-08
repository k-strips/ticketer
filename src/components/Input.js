import React from "react";

export const Input = ({ children, label, ...props }) => {
  return (
    <label>
      <input {...props} />
      {label}
      {children}
    </label>
  );
};
