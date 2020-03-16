import React, { useEffect } from "react";
import "./correctans.scss";
import Lottie from "react-lottie";
import correctAnim from "./animations/4521-correct.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: correctAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function CorrectAns(props: any) {
  useEffect(() => {
    console.log("y");
  }, []);

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
      <p>Correct !</p>
      <p>You have earned 100 points</p>
      <p>Total : 300 points</p>

      <button className="next-q">Next Question</button>
    </div>
  );
}

export default CorrectAns;
