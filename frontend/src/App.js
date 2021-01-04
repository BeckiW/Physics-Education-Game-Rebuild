import React, { Component } from "react";
import Header from "./components/header";
import HomePage from "./components/homePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />

          <div className="content">
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
