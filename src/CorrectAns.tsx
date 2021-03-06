import React, { useEffect } from "react";
import "./correctans.scss";
import Lottie from "react-lottie";
import correctAnim from "./animations/4521-correct.json";
import { useHistory } from "react-router-dom";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: correctAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function CorrectAns(props: { points: number }) {
  let history = useHistory();
  const { points } = props;


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
      <p>Well Done !</p>
      <p>You have {points} points in total</p>

      <button
        className="next-q"
        onClick={() => {
          history.push("/");
        }}
      >
        Play Again
      </button>
    </div>
  );
}

export default CorrectAns;
