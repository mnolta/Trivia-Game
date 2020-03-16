import React, { useEffect, useState } from "react";
import "./questionpage.scss";
import Questions from "./Questions";
import CorrectAns from "./CorrectAns";
import WrongAns from "./WrongAns";

function QuestionPage(props: any) {
  const [time, setTime] = useState(15);
  const [timerOn, setTimerOn] = useState(true);
  const [point, setPoint] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);



  let timer: any = setInterval(() => {
    setTime(time - 1);
  }, 1000);
  useEffect(() => {
    console.log(time);
    if (time === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [time]);
  useEffect(() => {}, [timerOn]);

  return (
    <div className="question-page">
      <div className="q-header">
        <div className="left side">
          <span>Question</span>
          <span> {questionNumber} / 10</span>
        </div>
        <div className="center side">
          <span>{point}</span>
          <span>Points</span>
        </div>
        <div className="right side">
          <span>Remaining Time: </span>
          <span>{time}</span>
        </div>
      </div>
      <Questions />
    </div>
  );
}

export default QuestionPage;
