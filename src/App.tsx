import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import WelcomePage from "./WelcomePage";
import QuestionPage from "./QuestionPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/questions"
            render={() => <QuestionPage questions={data} />}
          />
          <Route path="/users" />

          <Route
            path="/"
            render={(props: any) => <WelcomePage setQuests={setData} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
