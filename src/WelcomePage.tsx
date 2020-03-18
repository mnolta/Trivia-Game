import React, { useEffect, useState } from "react";
import "./welcomepage.scss";
import axios from "axios";
import Lottie from "react-lottie";
import trivia_anim from "./animations/11751-meda-shi-live-trivia-game.json";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const diffLevels = ["Any", "Easy", "Medium", "Hard"];
const categories = [];

function WelcomePage(props: { setQuests: Function }) {
  let history = useHistory();
  let amount = 10;
  let type = "multiple";
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  const { setQuests } = props;
  const getQuestions = () => {
    axios
      .get("https://opentdb.com/api.php?", {
        params: {
          category: category,
          amount: amount,
          type: type,
          difficulty: difficulty
        }
      })
      .then((res: any) => {
        let data = res.data.results;
        setQuestions(data);
        history.push("/questions");
      });
  };
  useEffect(() => {
    if (questions.length) {
      setQuests(questions);
    }
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
          <div className="df option ">
            <label className="dropdown" htmlFor="difficulty">
              Difficulty:
            </label>

            <select
              onChange={(e: any) => {
                setDifficulty(e.target.value);
              }}
              name="trivia_difficulty"
              className="dropdown s-type"
            >
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="ct option">
            <label className="dropdown" htmlFor="category">
              Category:
            </label>

            <select
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
              name="trivia_category"
              className="dropdown s-type"
            >
              <option value="any">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                Entertainment: Japanese Anime &amp; Manga
              </option>
              <option value="32">
                Entertainment: Cartoon &amp; Animations
              </option>
            </select>
          </div>
        </div>
        <button className="get-start" onClick={getQuestions}>
          Get started
        </button>
      </header>
    </div>
  );
}

export default WelcomePage;
