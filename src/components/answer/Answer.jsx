import React from "react";
import { useDispatch } from "react-redux";
import RadioGroup from "../radiogroup/RadioGroup";
import { updateAnswer } from "../../slice/question";
import CheckboxGroup from "../checkboxGroup/CheckboxGroup";
import SortableList from "../sortableList/ListItem";
import MatrixDragAndDrop from "../matrixSort/MatrixSort";

import DynamicText from "../dynamicText/DynamicText";

const Answer = ({ id, type, answerData, question }) => {
  const dispatch = useDispatch();

  if (!question) {
    return null;
  }

  const onChange = (e) => {
    dispatch(updateAnswer({ id: id, answer: e.target.value }));
  };

  const onMultiChange = (e) => {
    if (question.answer.includes(e.target.value)) {
      dispatch(
        updateAnswer({
          id: id,
          answer: question.answer.filter((item) => item !== e.target.value),
        })
      );
      return;
    }

    dispatch(
      updateAnswer({ id: id, answer: [...question.answer, e.target.value] })
    );
  };

  const onDragEnd = (ans) => {
    dispatch(updateAnswer({ id: id, answer: ans }));
  };

  const onClozeChange = (e) => {
    const answer = [...question.answer];
    answer[e.target.name] = e.target.value;

    dispatch(updateAnswer({ id: id, answer: answer }));
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
      case "sort":
        return (
          <>
            <SortableList items={question.answer} onEnd={onDragEnd} />
          </>
        );

      case "matrix_sort":
        return (
          <MatrixDragAndDrop
            droppableItems={question.answer}
            onEnd={onDragEnd}
            fixedItems={answerData.map((item) => item.left)}
          />
        );

      case "cloze":
        console.log("inside this on multi change", question);

        return (
          <DynamicText
            text={"{2}+3={5}+{5}"}
            answer={question.answer}
            onClozeChange={onClozeChange}
          />
        );

      default:
        return <p>Free</p>;
    }
  };

  return (
    <div className="flex flex-col gap-3 items-start">{getComponent()}</div>
  );
};

Answer.propTypes = {};

export default Answer;
