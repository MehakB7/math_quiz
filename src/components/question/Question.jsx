import React from "react";

const Question = ({ questionNo, onFlagged, questionDescription }) => {
  return (
    <div className="">
      <div className="">
        <div className="">Question {questionNo}</div>
        <div className="">
          <img className="" src={"..."} onClick={onFlagged} />
          <div className="">Flag for later</div>
        </div>
      </div>
      <div className="">
        <div className="">{questionDescription}</div>
        <div className="">
          <div className="">
            <div className="">
              <div className="">Check</div>
            </div>
            <div className="">6 attempts left</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
