import React, { useEffect } from "react";

function DynamicContent({ text }) {
  useEffect(() => {
    if (typeof window?.MathJax !== "undefined") {
      window.MathJax.typesetClear();
      window.MathJax.typeset();
    }
  }, [text]);
  return (
    <div
      className="flex flex-col items-start text-left"
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
}

DynamicContent.propTypes = {};

export default DynamicContent;
