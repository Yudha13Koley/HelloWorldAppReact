import './App.css';
import React from 'react';
import Home from './components/home/home';
import Flexhome from './components/newhome/newhome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/newhome'>
              <Flexhome />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
