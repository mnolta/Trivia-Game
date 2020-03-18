import React, { useEffect, useState } from "react";
import "./questionpage.scss";
import Questions from "./Questions";
import WrongAns from "./WrongAns";
import TimeisUp from "./TimeisUp";
import joker_anim from "./animations/8214-diamond.json";
import Lottie from "react-lottie";
import CorrectAns from "./CorrectAns";
import NextQuestion from "./NextQuestion";

function QuestionPage(props: { questions: any }) {
  const defaultTime = 15;
  const PointVal = 100;
  const [time, setTime] = useState(defaultTime);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [point, setPoint] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answerStatus, setAnswerStatus] = useState();
  const [isJokerUsed, setIsJokerUsed] = useState(false);
  const [jokerCount, setJokerCount] = useState(2);
  const [isFinished, setIsFinished] = useState(false);
  const [nextQue, setNextQue] = useState(false);
  const [earnedpoint, setEarnedPoint] = useState(0);
  const { questions } = props;
  useEffect(() => {
    if (!time) {
      setIsTimeUp(true);
      return;
    } else if (answerStatus !== undefined) {
      return;
    } else if (isFinished) {
      return;
    } else if (nextQue) {
      return;
    }
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [answerStatus, isJokerUsed, time, isFinished, nextQue]);

  useEffect(() => {
    /* comment */
    if (answerStatus) {
      setNextQue(true);
      setQuestionNumber(questionNumber + 1);
      setAnswerStatus(undefined);
      setEarnedPoint(PointVal * time);
      setPoint(point + PointVal * time);
      setTime(defaultTime);
    } else if (!answerStatus && answerStatus !== undefined) {
      console.log("False ans");
    }
  }, [answerStatus]);

  useEffect(() => {
    /* comment */
    if (isJokerUsed) {
      setJokerCount(jokerCount - 1);
      setIsTimeUp(false);
      //setTime(defaultTime);
      setAnswerStatus(undefined);
    }
  }, [isJokerUsed]);
  useEffect(() => {
    /* comment */
    jokerCount === 1 && setJokerCount(0);
  }, [jokerCount]);

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
        isFinished ? (
          <CorrectAns points={point} />
        ) : nextQue ? (
          <NextQuestion points={earnedpoint} setNextQue={setNextQue} />
        ) : (
          <Questions
            questionsT={questions}
            QueNumber={setQuestionNumber}
            qNumb={questionNumber}
            setAnswerStatus={setAnswerStatus}
            isJokerUsed={isJokerUsed}
            jokerCount={jokerCount}
            setIsFinished={setIsFinished}
          />
        )
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
