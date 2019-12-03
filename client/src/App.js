import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./pages/Posts";
//import Logo from "./components/Logo";
function App() {
  return (
    <Router>
      <div className="parent">
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
