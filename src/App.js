import React, { Component } from "react";
import "./index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductPage from "./components/ProductPage";
class App extends Component {
  render() {
    return (
      <div className="flexible-content">
        <Switch>
          <Route exact path="/" component={ProductPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
