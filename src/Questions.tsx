import React, { useEffect, useState } from "react";
import "./questions.scss";

function Questions(props: any) {
  const [answer, setAnswer] = useState();
  const [correct, setCorrect] = useState();

  const handleAnswer = () => {};

  useEffect(() => {

  }, []);
  return (
    <div className="questions">
      <div className="q-questions">
        <p>What is the asmdalsnd alsndalsn asldknasldn alsdmşlaöıansm ?</p>
      </div>
      <div className="q-mchoices">
        <button className="choice" onClick={handleAnswer}>
          Sphere
        </button>
        <button className="choice" onClick={handleAnswer}>
          Cylinder
        </button>
        <button className="choice" onClick={handleAnswer}>
          Cube
        </button>
        <button className="choice" onClick={handleAnswer}>
          Pyramid
        </button>
      </div>
    </div>
  );
}

export default Questions;
