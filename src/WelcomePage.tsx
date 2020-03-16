import React, { useEffect, useState } from "react";
import "./welcomepage.scss";
import axios from "axios";
import Lottie from "react-lottie";
import trivia_anim from "./animations/11751-meda-shi-live-trivia-game.json";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const diffLevels = ["Any", "Easy", "Medium", "Hard"];
const categories = [];

function WelcomePage(props: any) {
    let history = useHistory();
  const [questions, setQuestions] = useState([]);
  const getQuestions = () => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res: any) => {
      let data = res.data.results;
      setQuestions(data);
      history.push('/questions')
    });
  };
  useEffect(() => {
      console.log('x')
    props.setQuests(questions);
  }, [questions]);
  return (
    <div className="welcome">
      <header className="App-header">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: trivia_anim,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
        <p> Awesome TRIVIA GAME</p>
        <div className="options-menu">
          <div className="df option">
            <span>Difficulty</span>
          </div>
          <div className="ct option">
            <span>Categories</span>
          </div>
        </div>
        <button className="get-start" onClick={getQuestions}>
          <Link to="/questions">Get started</Link>
        </button>
      </header>
    </div>
  );
}

export default WelcomePage;
