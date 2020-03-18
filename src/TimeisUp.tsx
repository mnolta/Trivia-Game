import React from "react";
import "./timeisup.scss";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
import timeisup_anim from "./animations/9690-hour-glass-egg-timer.json";

function TimeisUp(props: { points: number }) {
  let history = useHistory();
  const { points } = props;
  return (
    <div className="timeisup">
      <div className="anim">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: timeisup_anim,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={200}
          width={200}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <p>
        {" "}
        Where have you been? <br /> Time is Up!
      </p>
      <p>Total : {points} points</p>
      <p>
        Your Joker is useless now,
        <br /> but you can continue with my new questions ?
      </p>

      <div className="p-again">
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

export default TimeisUp;
