import React, { useEffect, useState } from "react";
import "./questions.scss";
import { useHistory } from "react-router";
import CorrectAns from "./CorrectAns";
import NextQuestion from "./NextQuestion";

function Questions(props: {
  questionsT: any;
  QueNumber: any;
  qNumb: any;
  setAnswerStatus: any;
  isJokerUsed: boolean;
  setIsFinished: Function;
  jokerCount: number;
}) {
  let history = useHistory();
  const [answers, setAnswers] = useState([]);
  const [correctAns, setCorrectAns] = useState();
  const [givenAns, setGivenAns] = useState();
  const [question, setQuestion] = useState();

  const {
    questionsT,
    QueNumber,
    qNumb,
    setAnswerStatus,
    isJokerUsed,
    setIsFinished,
    jokerCount
  } = props;

  const htmlEntities = (s: any) => {
    let str,
      temp: any = document.createElement("p");
    temp.innerHTML = s;
    str = temp.textContent || temp.innerText;
    temp = null;
    return str;
  };
  const ShuffleAnswers = (array: any) => {
    /* comment */
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const handleAnswer = (e: any) => {
    setGivenAns(e.target.value);
  };
  const handleQuestion = (qnumber: number) => {
    /* comment */

    //console.log(questionsT[qnumber]);
    if (qnumber >= questionsT.length) {
      setIsFinished(true);
    } else {
      let dt = questionsT[qnumber];
      setQuestion(dt.question);
      let ans = [];
      ans.push(dt.correct_answer);
      setCorrectAns(dt.correct_answer);
      dt.incorrect_answers.forEach((item: any) => {
        /* comment */
        ans.push(item);
      });

      setAnswers(ShuffleAnswers(ans));
    }
  };
  useEffect(() => {
    if (questionsT.length && qNumb !== undefined) {
      handleQuestion(qNumb);
    }
  }, [questionsT, qNumb]);
  useEffect(() => {
    /* comment */
    if (questionsT.length === 0) {
      history.push("/");
    } else if (jokerCount > 0) {

      let _dt = questionsT[qNumb];
      setQuestion(_dt.question);
      let _ans = [];
      _ans.push(_dt.correct_answer);
      setCorrectAns(_dt.correct_answer);
      if (!isJokerUsed) {
        _dt.incorrect_answers.forEach((item: any) => {
          /* comment */
          _ans.push(item);
        });
      } else if (isJokerUsed && jokerCount > 0) {
        _ans.push(_dt.incorrect_answers[0]);
      }

      setAnswers(ShuffleAnswers(_ans));
    }
  }, [isJokerUsed]);

  useEffect(() => {
    QueNumber(qNumb);
  }, [qNumb]);
  useEffect(() => {
    if (givenAns !== undefined || correctAns !== undefined) {
      if (givenAns === correctAns) {
        setAnswerStatus(true);
      } else {
        setAnswerStatus(false);
      }
    }
  }, [givenAns]);

  return (
    <div className="questions">
      <div className="q-questions">
        <p>{htmlEntities(question)}</p>
      </div>
      <div className="q-mchoices">
        <button className="choice" value={answers[0]} onClick={handleAnswer}>
          {answers[0] !== undefined ? htmlEntities(answers[0]) : ""}
        </button>
        <button className="choice" value={answers[1]} onClick={handleAnswer}>
          {answers[1] !== undefined ? htmlEntities(answers[1]) : ""}
        </button>
        <button
          className="choice"
          disabled={answers[2] === undefined}
          value={answers[2]}
          onClick={handleAnswer}
        >
          {answers[2] !== undefined ? htmlEntities(answers[2]) : ""}
        </button>
        <button
          className="choice"
          disabled={answers[2] === undefined}
          value={answers[3]}
          onClick={handleAnswer}
        >
          {answers[3] !== undefined ? htmlEntities(answers[3]) : ""}
        </button>
      </div>
    </div>
  );
}

export default Questions;
