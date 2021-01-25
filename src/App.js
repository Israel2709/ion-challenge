import './App.css';
import ScrollToTop from './Components/ScrollToTop/index'
import Home from './Pages/Home'
import Available from './Pages/Available'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/available">
            <Available />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
