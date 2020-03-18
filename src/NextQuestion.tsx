import React from "react";
import "./correctans.scss";
import Lottie from "react-lottie";
import correctAnim from "./animations/4521-correct.json";

function NextQuestion(props: { points: number; setNextQue: Function }) {
  const { points, setNextQue } = props;

  return (
    <div className="correct-ans">
      <div className="anim">
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: correctAnim,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={250}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <p>It's Correct !</p>
      <p>You have earned {points} points</p>

      <button
        className="next-q"
        onClick={() => {
          setNextQue(false);
        }}
      >
        Next Question
      </button>
    </div>
  );
}

export default NextQuestion;
