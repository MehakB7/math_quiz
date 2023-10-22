import React from "react";

const FreeInput = ({ value, onInputChange }) => {
  return (
    <input
      className="p-2 border-2 border-gray-400"
      type="text"
      value={value}
      onChange={(e) => onInputChange(e)}
    />
  );
};

export default FreeInput;
