import React from "react";
import DynamicContent from "../dynamicContent/DynamicContent";
import { bookmarkIcon, selectedBookmark } from "../../helper/iconPath";
import { useDispatch, useSelector } from "react-redux";
import { updateFlag } from "../../slice/question";

const Question = ({ questionNo, questionDescription, id }) => {
  const questions = useSelector((state) => state.questions);
  const question = questions?.find((item) => item.questionID === id);

  const dispacth = useDispatch();

  if (questions.length === 0) {
    return null;
  }

  const onClick = (e) => {
    dispacth(updateFlag({ id: id, flagged: !question.flagged }));
  };

  return (
    <div className="flex-1 flex-col items-start">
      <div className="flex justify-between mb-4">
        <div className="text-2xl font-bold text-left">
          Question {questionNo}
        </div>
        <div className="flex items-center w-36">
          <div className="mr-2" style={{ minWidth: "24px" }}>
            <img
              src={!question.flagged ? bookmarkIcon : selectedBookmark}
              onClick={onClick}
              alt="bookmark"
            />
          </div>
          <div className="text-sm text-gray-500">
            {question.flagged ? "Flagged" : "Flagged for Later"}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <DynamicContent text={questionDescription} />
      </div>
    </div>
  );
};

export default Question;
