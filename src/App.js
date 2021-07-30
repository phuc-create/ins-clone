import { Fragment } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/layouts/Home";
import Personal from "./components/layouts/Personal";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={Personal} />
        </Switch>
        {/* <SideUser /> */}
        {/* <Footer /> */}
      </Router>
    </Fragment>
  );
};

export default App;
