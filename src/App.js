import { Fragment } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/layouts/Home";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        {/* <SideUser /> */}
        {/* <Footer /> */}
      </Router>
    </Fragment>
  );
};

export default App;
