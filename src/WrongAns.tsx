import React from "react";
import "./wrongans.scss";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import wrong_anim from "./animations/7481-banana-boy.json";

function WrongAns(props: {
  points: number;
  isJokerUsed: Function;
  joker: boolean;
}) {
  let history = useHistory();
  const { points, isJokerUsed, joker } = props;
  return (
    <div className="wrong-ans">
      <div className="anim">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: wrong_anim,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <p>Opps Wrong!</p>
      <p>Total : {points} points</p>
      <div className="jokers">
        {!joker ? (
          <button onClick={() => isJokerUsed(true)}> Use %50 Joker</button>
        ) : null}
        <button
          onClick={() => {
            /* comment */

            history.push("/");
          }}
        >
          Play again!
        </button>
      </div>
    </div>
  );
}

export default WrongAns;
