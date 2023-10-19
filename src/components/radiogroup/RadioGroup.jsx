import React from "react";

const RadioGroup = ({ onChange, selectedValue, options }) => {
  return (
    <div className="space-y-4">
      {options.map((item, index) => {
        return (
          <div className="flex items-center space-x-2" key={index}>
            <input
              type="radio"
              name="radio-group"
              value={item.value}
              checked={item.value === selectedValue}
              onChange={onChange}
              className="form-radio text-indigo-600"
            />
            <label>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
