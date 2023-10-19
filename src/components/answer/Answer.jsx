import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioGroup from "../radiogroup/RadioGroup";
import { updateAnswer } from "../../slice/question";
import CheckboxGroup from "../checkboxGroup/CheckboxGroup";

const Answer = ({ id, type, answerData }) => {
  const questions = useSelector((state) => state.questions);
  const question = questions?.find((item) => item.questionID === id);

  const dispatch = useDispatch();

  if (!question) {
    return null;
  }

  const onChange = (e) => {
    dispatch(updateAnswer({ id: id, answer: e.target.value }));
  };

  const onMultiChange = (e) => {
    dispatch(
      updateAnswer({ id: id, answer: [...question.answer, e.target.value] })
    );
  };

  const getComponent = () => {
    switch (type) {
      case "single":
        return (
          <RadioGroup
            options={answerData}
            selectedValue={question.answer}
            onChange={onChange}
          />
        );

      case "multiple":
        return (
          <>
            <CheckboxGroup
              options={answerData}
              selectedOptions={question.answer}
              onChange={onMultiChange}
            />
          </>
        );

      default:
        return <p>Free</p>;
    }
  };

  return <div>{getComponent()}</div>;
};

Answer.propTypes = {};

export default Answer;
