import React from "react";

export const Input = ({ label, ...props }) => {
  return (
    <label>
      <input {...props} />
      {label}
    </label>
  );
};
