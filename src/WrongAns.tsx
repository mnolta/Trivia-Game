import React from "react";
import "./wrongans.scss";
import Lottie from "react-lottie";
import wrong_anim from "./animations/7481-banana-boy.json";

function WrongAns(props: any) {
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
      <p>Total : 300 points</p>
      <div className="jokers">
        <button>Joker 1</button>
        <button>Joker 2</button>
        <button>Joker 3</button>
      </div>
    </div>
  );
}

export default WrongAns;
