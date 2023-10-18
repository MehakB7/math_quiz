import React from "react";
import DynamicContent from "../dynamicContent/DynamicContent";
import { bookmarkIcon } from "../../helper/iconPath";

const Question = ({ questionNo, onFlagged, questionDescription }) => {
  return (
    <div className="flex flex-col items-start shadow-md ">
      <div className="flex justify-between w-full">
        <div className="text-2xl font-bold grow text-left  ">
          Question {questionNo}
        </div>
        <div className="flex">
          <img
            className=""
            src={bookmarkIcon}
            onClick={onFlagged}
            alt="bookmark"
          />
          <div className="">Flag for later</div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <DynamicContent text={questionDescription} />
      </div>
    </div>
  );
};

export default Question;
