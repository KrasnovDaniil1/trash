import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Fighters from './components/Fighters';
import Judges from './components/Judges';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path='/fighters' component={Fighters} />
          <Route path='/judges' component={Judges} />
        </Switch>
    </div>
  );
}

export default App;
