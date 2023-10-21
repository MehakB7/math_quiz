import React, { useRef, useState } from "react";

const DynamicText = ({ text, answer, onClozeChange }) => {
  const textParts = text.split(/(\{.*?\})/);
  console.log("textPars", textParts, answer);

  let PIndex = 0;

  return (
    <div>
      {textParts.map((part, index) => {
        if (part.match(/^\{.*\}$/)) {
          const value = answer[PIndex] || "";
          return (
            <input
              key={index}
              type="text"
              value={value}
              name={PIndex++}
              onChange={(e) => onClozeChange(e)}
            />
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </div>
  );
};

export default DynamicText;
