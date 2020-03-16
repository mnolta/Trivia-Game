import React, { useEffect, useState } from "react";
import "./questionpage.scss";
import Questions from "./Questions";
import WrongAns from "./WrongAns";
import TimeisUp from "./TimeisUp";
import joker_anim from "./animations/8214-diamond.json";
import Lottie from "react-lottie";

function QuestionPage(props: { questions: any }) {
  const defaultTime = 15;
  const earnedPoint = 100;
  const [time, setTime] = useState(defaultTime);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [point, setPoint] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answerStatus, setAnswerStatus] = useState();
  const [isJokerUsed, setIsJokerUsed] = useState(false);
  const { questions } = props;
  useEffect(() => {
    if (!time) {
      setIsTimeUp(true);
      return;
    } else if (answerStatus !== undefined) {
      return;
    }
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [answerStatus, isJokerUsed, time]);

  useEffect(() => {
    /* comment */
    if (answerStatus) {
      setQuestionNumber(questionNumber + 1);
      setAnswerStatus(undefined);
      setPoint(point + earnedPoint);
      setTime(defaultTime);
    } else if (!answerStatus && answerStatus !== undefined) {
      console.log("False ans");
    }
  }, [answerStatus]);

  useEffect(() => {
    /* comment */
    if (isJokerUsed) {
      console.log(isJokerUsed);
      setIsTimeUp(false);
      setTime(defaultTime);
      setAnswerStatus(undefined);
    }
  }, [isJokerUsed]);

  return (
    <div className="question-page">
      <div className="q-header">
        <div className="left side">
          <span>Question</span>
          <span> {questionNumber} / 10</span>
        </div>
        <div className="center side">
          <div className="flex-column">
            <span>Score : {point}</span>
          </div>
          <div className="flex-column">
            <span>Joker</span>
            {!isJokerUsed ? (
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: joker_anim,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={50}
                width={50}
                isStopped={false}
                isPaused={false}
              />
            ) : (
              <span>0</span>
            )}
          </div>
        </div>
        <div className="right side">
          <span>Remaining Time: </span>
          <span>{time}</span>
        </div>
      </div>
      {isTimeUp ? (
        <TimeisUp points={point} />
      ) : answerStatus === true || answerStatus === undefined ? (
        <Questions
          questionsT={questions}
          QueNumber={setQuestionNumber}
          qNumb={questionNumber}
          setAnswerStatus={setAnswerStatus}
        />
      ) : (
        <WrongAns
          points={point}
          isJokerUsed={setIsJokerUsed}
          joker={isJokerUsed}
        />
      )}
    </div>
  );
}

export default QuestionPage;
