import React from "react";

function CheckboxGroup({ options, onChange, selectedOptions }) {
  return (
    <div className="space-y-4">
      {options.map((item, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <input
            type="checkbox"
            name={item.label}
            value={item.value}
            checked={selectedOptions.includes(item.value)}
            onChange={onChange}
            className="form-checkbox text-indigo-600"
          />
          <label>{item.label}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxGroup;
