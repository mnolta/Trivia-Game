import React, { useEffect, useState } from "react";
import "./questions.scss";

function Questions(props: {
  questionsT: any;
  QueNumber: any;
  qNumb: any;
  setAnswerStatus: any;
}) {
  const [answers, setAnswers] = useState([]);
  const [correctAns, setCorrectAns] = useState();
  const [givenAns, setGivenAns] = useState();
  const [question, setQuestion] = useState();
  const { questionsT, QueNumber, qNumb, setAnswerStatus } = props;

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

    console.log(questionsT[qnumber]);
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
  };
  useEffect(() => {

    if (questionsT.length && qNumb !== undefined) {
      console.log(qNumb);
      handleQuestion(qNumb);
    }
  }, [questionsT,qNumb]);
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
          {htmlEntities(answers[0])}
        </button>
        <button className="choice" value={answers[1]} onClick={handleAnswer}>
          {htmlEntities(answers[1])}
        </button>
        <button className="choice" value={answers[2]} onClick={handleAnswer}>
          {htmlEntities(answers[2])}
        </button>
        <button className="choice" value={answers[3]} onClick={handleAnswer}>
          {htmlEntities(answers[3])}
        </button>
      </div>
    </div>
  );
}

export default Questions;
