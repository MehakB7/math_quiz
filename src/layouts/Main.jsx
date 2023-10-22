import { useRef, useState } from "react";
import Answer from "../components/answer/Answer";
import Question from "../components/question/Question";
import { Modal } from "../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateAttempts, updateStatus } from "../slice/question";
import { ModalContent, QuestionStatus } from "../helper/constant";
import SoundPlayer from "../components/soundPlayer/SoundPlayer";
import {
  compareValues,
  extractValuesInBraces,
  haveSameOrder,
} from "../helper/utils";

const Main = ({ quiz, selectedQuestion, setSelectedQuestion }) => {
  const index = quiz.findIndex((item) => item.id === selectedQuestion);
  const [showModal, setShow] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const questions = useSelector((state) => state.questions);
  const question = questions?.find(
    (item) => item.questionID === selectedQuestion
  );

  const dispatch = useDispatch();

  const audioRef = useRef();

  if (index === -1) {
    return null;
  }
  const quizQuestion = quiz[index];

  const closeModal = () => {
    setShow(false);
  };

  const onCorrect = () => {
    setModalContent(ModalContent.Passed);
    dispatch(
      updateStatus({ id: selectedQuestion, status: QuestionStatus.Passed })
    );
    audioRef.current.playCorrectSound();
  };

  const onWrong = () => {
    setModalContent(ModalContent.Failed);
    question.attempts === 1 &&
      dispatch(
        updateStatus({ id: selectedQuestion, status: QuestionStatus.Failed })
      );
    dispatch(
      updateAttempts({
        id: selectedQuestion,
        attempts: question.attempts - 1,
      })
    );

    audioRef.current.playWrongSound();
  };

  const onCheck = () => {
    switch (quizQuestion.answerType) {
      case "single":
        if (!question.answer) {
          setModalContent(ModalContent.Empty);
        } else {
          const answer = quizQuestion.answerData.find(
            (item) => item.value === question.answer
          );
          answer.correct ? onCorrect() : onWrong();
        }
        break;

      case "multiple":
        if (question.answer.length === 0) {
          setModalContent(ModalContent.Empty);
        } else {
          const answer = quizQuestion.answerData.filter(
            (item) => question.answer.includes(item.value) && item.correct
          );
          const totalCorrect = quizQuestion.answerData.filter(
            (item) => item.correct
          );
          totalCorrect === answer.correct ? onCorrect() : onWrong();
        }
        break;

      case "sort":
        haveSameOrder(
          question.answer,
          quizQuestion.answerData,
          "content",
          "answer"
        )
          ? onCorrect()
          : onWrong();
        break;

      case "matrix_sort":
        haveSameOrder(
          question.answer,
          quizQuestion.answerData,
          "content",
          "right"
        )
          ? onCorrect()
          : onWrong();
        break;

      case "cloze":
        const getValues = extractValuesInBraces(quizQuestion.answerData[0]);
        compareValues(getValues, question.answer) ? onCorrect() : onWrong();
        break;

      case "free":
        compareValues(quizQuestion.answerData[0], question.answer)
          ? onCorrect()
          : onWrong();
        break;

      default:
    }
    setShow(true);
  };

  const onNext = () => {
    setSelectedQuestion(quiz[index + 1].id);
  };

  return (
    <div className="flex-1 bg-gray-100 p-8 ">
      <div className="shadow-md bg-white p-8 flex flex-col gap-3 rounded-md">
        <Question
          questionDescription={quizQuestion.question}
          questionNo={index + 1}
          id={quizQuestion.id}
        />
        <Answer
          id={quizQuestion.id}
          answerData={quizQuestion.answerData}
          type={quizQuestion.answerType}
          question={question}
        />
        {question.status === QuestionStatus.NotAttempted &&
        !question.flagged ? (
          <>
            <button
              className="bg-blue-600 border-blue-600 text-white px-4 py-2 rounded-md self-start"
              onClick={onCheck}
            >
              Check
            </button>
            <div> {question.attempts} attemps left </div>
          </>
        ) : (
          <button
            className="bg-blue-600 border-blue-600 text-white px-4 py-2 rounded-md self-start"
            onClick={index < quiz.length - 1 ? onNext : () => {}}
          >
            {index < quiz.length - 1 ? "Next" : "Submit"}
          </button>
        )}
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        content={modalContent}
      />
      <SoundPlayer ref={audioRef} />
    </div>
  );
};

Main.propTypes = {};

export default Main;
